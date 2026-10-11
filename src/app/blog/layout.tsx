import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Darani Viswanathan",
  description:
    "Explore notes, articles, and insights on Artificial Intelligence, UI/UX design, data science, and startup incubation by Darani Viswanathan.",
  openGraph: {
    title: "Blog & Insights | Darani Viswanathan",
    description:
      "Explore notes, articles, and insights on Artificial Intelligence, UI/UX design, data science, and startup incubation.",
    url: "https://darani-portfolio.vercel.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
