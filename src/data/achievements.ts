export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: "Award" | "Mentorship" | "Certification" | "Training" | "Ecosystem";
  description: string;
  badge?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "startuptn-spark",
    title: "StartupTN Startup Spark Hackathon Winner",
    issuer: "StartupTN (Government of Tamil Nadu)",
    category: "Award",
    description:
      "Recognized as a hackathon winner by StartupTN for innovating high-impact entrepreneurial and technological solutions within the state startup ecosystem.",
    badge: "Winner",
  },
  {
    id: "irai-anbu-mentorship",
    title: "12-Month Exclusive Mentorship Program",
    issuer: "Mentee under Dr. V. Irai Anbu, IAS",
    category: "Mentorship",
    description:
      "Selected as an exclusive mentee in a rigorous 12-month mentorship initiative guided by former Chief Secretary of Tamil Nadu Dr. V. Irai Anbu, IAS, focusing on leadership, ethics, and social innovation.",
    badge: "Mentee",
  },
  {
    id: "nptel-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL / IIT Madras",
    category: "Certification",
    description:
      "Completed comprehensive certification in Python programming, algorithmic problem solving, and computational foundations through NPTEL.",
    badge: "Certified",
  },
  {
    id: "inlustro-ai",
    title: "AI Training & Applied Exploration",
    issuer: "Inlustro",
    category: "Training",
    description:
      "Completed hands-on practical training in artificial intelligence paradigms, applied machine learning principles, and modern AI toolkits.",
    badge: "Training",
  },
  {
    id: "fullstack-bootcamp",
    title: "AI & Full Stack Development Bootcamp",
    issuer: "Technical Bootcamp",
    category: "Training",
    description:
      "Participated in intensive full stack development and AI integration workflows, covering component architecture, REST APIs, and responsive design.",
    badge: "Participant",
  },
  {
    id: "tech-symposium",
    title: "Full Stack Development Symposium Participation",
    issuer: "Inter-College Technical Symposium",
    category: "Ecosystem",
    description:
      "Active participant and contributor in state-level engineering symposiums presenting modern web architectures and student software projects.",
    badge: "Symposium",
  },
  {
    id: "incubation-contributor",
    title: "Startup Ecosystem & Incubation Activities",
    issuer: "Aakam Shine Incubation Centre",
    category: "Ecosystem",
    description:
      "Dedicated creative and community support for incubation cohorts, startup pitch decks, demo days, and entrepreneurial workshops.",
    badge: "Contributor",
  },
];
