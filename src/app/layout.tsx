import "./globals.css";
import { Space_Grotesk, Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import SmoothScroll from "../components/hooks/smoothscroll";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "../components/theme/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
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
      <body className="font-modernist bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] antialiased selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors duration-200">
        <ThemeProvider defaultTheme="dark">
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
