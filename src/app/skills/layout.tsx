import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills & Design Competencies | Darani Viswanathan",
  description:
    "Comprehensive skills of Darani Viswanathan across Programming (Python, Java, C), Frontend (React, Next.js, Tailwind), AI/Data (ML, NLP, Analytics), and Design (Figma, Photoshop, Canva, UI/UX).",
  openGraph: {
    title: "Technical Skills & Design Competencies | Darani Viswanathan",
    description:
      "Comprehensive skills of Darani Viswanathan across Programming, Frontend, AI & Data Science, and Design.",
    url: "https://darani-portfolio.vercel.app/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
