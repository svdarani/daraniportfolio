import { type NextRequest, NextResponse } from "next/server";

// Define interfaces for type safety
interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar;
      };
    } | null;
  };
  errors?: { message: string }[];
}

// Helper function to determine contribution level based on count
function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

function generateFallbackCalendar(username: string) {
  const weeks: {
    days: {
      date: string;
      count: number;
      level: 0 | 1 | 2 | 3 | 4;
    }[];
  }[] = [];
  const today = new Date();
  let totalContributions = 0;

  // 52 weeks
  for (let w = 51; w >= 0; w--) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + (6 - d)));
      const dayOfWeek = date.getDay();

      const dateHash =
        (date.getFullYear() * 372 +
          (date.getMonth() + 1) * 31 +
          date.getDate() +
          username.length * 13) %
        29;

      let count = 0;
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Weekday
        if (dateHash > 24) count = 6 + (dateHash % 5);
        else if (dateHash > 16) count = 3 + (dateHash % 4);
        else if (dateHash > 7) count = 1 + (dateHash % 2);
        else count = 0;
      } else {
        // Weekend
        if (dateHash > 20) count = 2 + (dateHash % 3);
        else if (dateHash > 14) count = 1;
        else count = 0;
      }

      totalContributions += count;
      days.push({
        date: date.toISOString().split("T")[0],
        count,
        level: getContributionLevel(count),
      });
    }
    weeks.push({ days });
  }

  return {
    username,
    totalContributions,
    contributions: weeks,
    fallback: true,
  };
}

// Updated type for context params - params is now a Promise
type RouteParams = {
  params: Promise<{
    username: string;
  }>;
};

export async function GET(request: NextRequest, context: RouteParams) {
  // Await params before accessing its properties
  const { username } = await context.params;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  const githubToken = process.env.GITHUB_TOKEN;

  // If no GitHub token is provided, gracefully serve realistic activity calendar
  if (!githubToken) {
    return NextResponse.json(generateFallbackCalendar(username));
  }

  try {
    const endpoint = "https://api.github.com/graphql";

    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const fromDate = oneYearAgo.toISOString();
    const toDate = today.toISOString();

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${fromDate}", to: "${toDate}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "User-Agent": "GitHub-Contribution-Graph",
      Authorization: `Bearer ${githubToken}`,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    // If rate-limited or unauthorized, gracefully return fallback data instead of crashing client
    if (response.status === 403 || response.status === 401 || response.status === 429) {
      console.warn("GitHub API rate limit or auth issue. Serving fallback activity.");
      return NextResponse.json(generateFallbackCalendar(username));
    }

    if (!response.ok) {
      console.warn(`GitHub API status ${response.status}. Serving fallback activity.`);
      return NextResponse.json(generateFallbackCalendar(username));
    }

    const data: GitHubResponse = await response.json();

    if (data.errors || !data.data?.user) {
      console.warn("GitHub GraphQL errors or user not found. Serving fallback activity.");
      return NextResponse.json(generateFallbackCalendar(username));
    }

    const calendarData =
      data.data.user.contributionsCollection.contributionCalendar;

    const weeks = calendarData.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: getContributionLevel(day.contributionCount),
      })),
    }));

    return NextResponse.json({
      username,
      totalContributions: calendarData.totalContributions,
      contributions: weeks,
      fallback: false,
    });
  } catch (error) {
    console.warn("Error fetching GitHub contributions. Serving fallback activity:", error);
    return NextResponse.json(generateFallbackCalendar(username));
  }
}
