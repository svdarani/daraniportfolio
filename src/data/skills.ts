export interface SkillItem {
  name: string;
  category: "Languages" | "Frontend" | "AI & Data" | "Design" | "Tools" | "Other";
  description: string;
  iconName?: string;
  level?: string;
  relatedProjects?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "01",
    title: "Programming",
    skills: [
      {
        name: "Python",
        category: "Languages",
        description: "Used for AI, machine learning, data science, NLP, and automation workflows.",
        relatedProjects: ["AI Drug Detection", "Fake News Detection"],
      },
      {
        name: "Java",
        category: "Languages",
        description: "Developing object-oriented programming, data structures, and core software foundations.",
        relatedProjects: [],
      },
      {
        name: "C",
        category: "Languages",
        description: "Foundational programming, systems fundamentals, memory management, and algorithms.",
        relatedProjects: [],
      },
      {
        name: "JavaScript",
        category: "Languages",
        description: "Building modern interactive web interfaces, ES6+ logic, and dynamic client experiences.",
        relatedProjects: ["Apple Clone", "Quarto", "ArtZa Designs"],
      },
    ],
  },
  {
    id: "02",
    title: "Web Development",
    skills: [
      {
        name: "React",
        category: "Frontend",
        description: "Building scalable, component-driven reactive user interfaces with modern hooks and state.",
        relatedProjects: ["Apple Clone", "Cineflex"],
      },
      {
        name: "Next.js",
        category: "Frontend",
        description: "Production framework for performant SSR, SSG, server components, and API routing.",
        relatedProjects: ["Apple Clone", "Quarto", "Personal Portfolio"],
      },
      {
        name: "Tailwind CSS",
        category: "Frontend",
        description: "Utility-first design system enabling responsive, sleek, and highly customizable UI tokens.",
        relatedProjects: ["Apple Clone", "Cineflex", "Personal Portfolio"],
      },
      {
        name: "HTML & CSS",
        category: "Frontend",
        description: "Semantic web architecture, accessible markup, CSS grid, flexbox, and CSS modules.",
        relatedProjects: ["Personal Portfolio"],
      },
    ],
  },
  {
    id: "03",
    title: "AI / Data",
    skills: [
      {
        name: "Artificial Intelligence",
        category: "AI & Data",
        description: "Core AI concepts, problem formulations, state spaces, heuristics, and intelligent systems.",
        relatedProjects: ["AI Drug Detection"],
      },
      {
        name: "Data Science",
        category: "AI & Data",
        description: "Exploratory data analysis, statistical modeling, data cleaning, and insight derivation.",
        relatedProjects: ["Fake News Detection"],
      },
      {
        name: "Machine Learning",
        category: "AI & Data",
        description: "Supervised and unsupervised learning, regression, classification algorithms, and evaluation.",
        relatedProjects: ["AI Drug Detection", "Fake News Detection"],
      },
      {
        name: "Natural Language Processing",
        category: "AI & Data",
        description: "Text preprocessing, tokenization, feature extraction (TF-IDF/embeddings), and text classification.",
        relatedProjects: ["Fake News Detection"],
      },
      {
        name: "Data Analytics",
        category: "AI & Data",
        description: "Analyzing patterns, business metrics, visualization, and strategic data interpretation.",
        relatedProjects: [],
      },
      {
        name: "Data Mining & Warehousing",
        category: "AI & Data",
        description: "Extracting actionable knowledge from large datasets and understanding structured data pipelines.",
        relatedProjects: [],
      },
    ],
  },
  {
    id: "04",
    title: "Design",
    skills: [
      {
        name: "Figma",
        category: "Design",
        description: "Wireframing, UI/UX prototyping, design systems, vector crafting, and user journey mapping.",
        relatedProjects: ["ArtZa Designs", "ArtZa Frames", "Namma Stay", "Carlic Case Study"],
      },
      {
        name: "Canva",
        category: "Design",
        description: "Rapid visual communication, social media campaigns, event graphics, and marketing assets.",
        relatedProjects: ["ArtZa Designs", "Aakam Shine Incubation", "Aakam360"],
      },
      {
        name: "Adobe Photoshop",
        category: "Design",
        description: "Raster image composition, photo manipulation, creative retouching, and poster art.",
        relatedProjects: ["ArtZa Designs", "ArtZa Frames"],
      },
      {
        name: "CorelDRAW",
        category: "Design",
        description: "Vector illustration, print production layouts, branding identity, and signage design.",
        relatedProjects: ["ArtZa Designs", "Aakam Shine Incubation"],
      },
      {
        name: "UI/UX Design",
        category: "Design",
        description: "User-centric design thinking, interface hierarchy, accessibility, and interactive design.",
        relatedProjects: ["Namma Stay", "ArtZa Frames", "Carlic Case Study"],
      },
      {
        name: "Branding & Graphic Design",
        category: "Design",
        description: "Logo design, color theory, typography curation, brand guidelines, and visual storytelling.",
        relatedProjects: ["ArtZa Designs", "Aakam Shine", "Aakam360"],
      },
    ],
  },
  {
    id: "05",
    title: "Tools & Ecosystem",
    skills: [
      {
        name: "Git & GitHub",
        category: "Tools",
        description: "Version control, branching workflows, collaborative open source repositories, and pull requests.",
        relatedProjects: ["All Code Projects"],
      },
      {
        name: "VS Code",
        category: "Tools",
        description: "Primary development IDE configured with linting, typing, debugging, and terminal tools.",
        relatedProjects: [],
      },
      {
        name: "npm & Vercel",
        category: "Tools",
        description: "Package dependency management, automated CI/CD builds, and global edge deployments.",
        relatedProjects: ["Personal Portfolio"],
      },
      {
        name: "REST APIs & Backend Integration",
        category: "Tools",
        description: "Integrating JSON endpoints, async data fetching, validation, and server-side routes.",
        relatedProjects: ["Personal Portfolio Contact API", "GitHub Graph API"],
      },
    ],
  },
];
