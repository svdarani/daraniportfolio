export interface BlogPost {
  id: number | string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Bridging the Gap: How AI & UI/UX Design Accelerate Each Other",
    date: "Sep 2024",
    readTime: "4 min read",
    image: "/images/project/artza-designs.svg",
    slug: "bridging-ai-and-design",
  },
  {
    id: 2,
    title: "Lessons from Designing for Startups & Incubatees at Aakam Shine",
    date: "Aug 2024",
    readTime: "5 min read",
    image: "/images/project/artza-frames.svg",
    slug: "lessons-from-incubation-design",
  },
  {
    id: 3,
    title: "Understanding Text Classification Pipelines: From TF-IDF to Inference",
    date: "Jul 2024",
    readTime: "6 min read",
    image: "/images/project/fake-news-detection.svg",
    slug: "nlp-fake-news-classification",
  },
];
