import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import SmoothScroll from "../components/hooks/smoothscroll";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CustomCursor } from "../components/ui/CustomCursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Darani Viswanathan | Creative Designer & Developer",
    template: "%s | Darani Viswanathan",
  },
  description:
    "Explore the portfolio of Darani Viswanathan, an AI & Data Science student, Creative Designer, UI/UX Designer, Graphic Designer, and Developer working across branding, digital experiences, and technology.",
  keywords: [
    "Darani Viswanathan",
    "Darani S V",
    "Creative Designer & Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Brand Identity Designer",
    "Frontend Developer",
    "AI & Data Science Student",
    "Founder of ArtZa Designs",
    "Aakam Shine",
    "Next.js Developer",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Darani Viswanathan" }],
  creator: "Darani Viswanathan",
  publisher: "Darani Viswanathan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://darani-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/darani-avatar.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/images/darani-avatar.png" },
    ],
    shortcut: ["/images/darani-avatar.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darani-portfolio.vercel.app",
    siteName: "Darani Viswanathan Portfolio",
    title: "Darani Viswanathan | Creative Designer & Developer",
    description:
      "Explore the portfolio of Darani Viswanathan, an AI & Data Science student, Creative Designer, UI/UX Designer, Graphic Designer, and Developer working across branding, digital experiences, and technology.",
    images: [
      {
        url: "/images/darani.png",
        width: 1200,
        height: 630,
        alt: "Darani Viswanathan | Creative Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darani Viswanathan | Creative Designer & Developer",
    description:
      "Explore the portfolio of Darani Viswanathan, an AI & Data Science student, Creative Designer, UI/UX Designer, Graphic Designer, and Developer working across branding, digital experiences, and technology.",
    images: ["/images/darani.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Darani Viswanathan",
    alternateName: "Darani S V",
    jobTitle: "Creative Designer & Developer",
    description:
      "AI & Data Science student, Creative Designer, UI/UX Designer, Graphic Designer, and Frontend Developer.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Shanmugha College of Engineering and Technology",
    },
    knowsAbout: [
      "Creative Design",
      "UI/UX Design",
      "Brand Identity",
      "Frontend Development",
      "Artificial Intelligence",
      "Data Science",
      "Python",
      "React",
      "Next.js",
      "Figma",
      "Tailwind CSS",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
  };

  return (
    <html
      lang="en"
      className={`dark ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/darani-avatar.png" type="image/png" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/images/darani-avatar.png" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');}}catch(e){}})();`,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans bg-white text-black dark:bg-black dark:text-white antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
        <ThemeProvider defaultTheme="dark">
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
