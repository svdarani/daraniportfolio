import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting map (IP -> timestamps array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Basic text sanitization helper
function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "") // strip html tags
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "anonymous";
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

    if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a moment before sending another message.",
        },
        { status: 429 }
      );
    }

    recentTimestamps.push(now);
    rateLimitMap.set(ip, recentTimestamps);

    // 2. Parse & Validate Payload
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    // 3. Sanitization
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: phone ? sanitize(String(phone)) : undefined,
      subject: subject ? sanitize(String(subject)) : "New Portfolio Inquiry",
      message: sanitize(message),
      receivedAt: new Date().toISOString(),
    };

    // 4. Optional backend dispatch
    // If CONTACT_EMAIL & EMAIL_API_KEY / Resend are configured:
    const contactEmail = process.env.CONTACT_EMAIL;
    const apiKey = process.env.EMAIL_API_KEY;

    if (contactEmail && apiKey) {
      // Integration point for email service (e.g. Resend, Sendgrid, Postmark)
      console.log(`[Contact API] Dispatching email to ${contactEmail}`);
    } else {
      console.log("[Contact API] Received verified submission:", {
        from: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! Thank you for getting in touch.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
