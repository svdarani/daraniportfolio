export interface LearningItem {
  id: string;
  topic: string;
  focusArea: string;
  category: "Languages" | "AI & ML" | "Frontend" | "Design";
  status: "In Progress" | "Deepening" | "Exploring";
  description: string;
}

export const currentlyLearningData: LearningItem[] = [
  {
    id: "adv-java",
    topic: "Advanced Java & OOP",
    focusArea: "Object-oriented architectures, design patterns, and algorithmic problem-solving",
    category: "Languages",
    status: "Deepening",
    description: "Strengthening core software engineering principles and scalable computational patterns.",
  },
  {
    id: "applied-python",
    topic: "Python for Data & AI",
    focusArea: "NumPy, Pandas, Scikit-learn, and model development pipelines",
    category: "AI & ML",
    status: "In Progress",
    description: "Bridging mathematical theory with practical Python machine-learning implementations.",
  },
  {
    id: "aiml-systems",
    topic: "AI / ML Foundations",
    focusArea: "Supervised models, classification pipelines, and feature engineering",
    category: "AI & ML",
    status: "In Progress",
    description: "Studying algorithmic behaviors, cost functions, evaluation metrics, and optimization techniques.",
  },
  {
    id: "data-science",
    topic: "Data Science & Exploration",
    focusArea: "Statistical analysis, exploratory data analysis, and predictive modeling",
    category: "AI & ML",
    status: "Deepening",
    description: "Extracting actionable insights and structured interpretations from complex datasets.",
  },
  {
    id: "nextjs-react",
    topic: "Next.js & React 19 Ecosystem",
    focusArea: "Server actions, dynamic routing, App Router patterns, and SSR/SSG caching",
    category: "Frontend",
    status: "Deepening",
    description: "Building production-grade web applications with modern React architecture.",
  },
  {
    id: "uiux-systems",
    topic: "Design Systems & UI/UX Strategy",
    focusArea: "Micro-interactions, component consistency, WCAG accessibility, and UX research",
    category: "Design",
    status: "In Progress",
    description: "Designing interface systems that feel effortless, intuitive, and visually harmonious.",
  },
  {
    id: "creative-web",
    topic: "Modern Web & Motion",
    focusArea: "Framer Motion, GSAP scroll triggers, SVG animations, and editorial layouts",
    category: "Frontend",
    status: "Exploring",
    description: "Creating fluid, memorable digital storytelling experiences on the web.",
  },
];
