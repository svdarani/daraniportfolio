export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: "UI/UX Design" | "Branding" | "Startups" | "Graphic Design" | "AI & Technology" | "Web Development";
  tags: string[];
  content?: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    id: "learning-ui-ux",
    slug: "what-i-am-learning-about-ui-ux",
    title: "What I Am Learning About UI/UX Design",
    summary:
      "Understanding that great interfaces aren't just visually pleasant screens, but intentional systems designed around user mental models and clarity.",
    date: "Jan 2025",
    readTime: "4 min read",
    category: "UI/UX Design",
    tags: ["UI/UX", "User Journey", "Design Systems", "Prototyping"],
    content: [
      "When I started designing digital interfaces, my focus was primarily on visual aesthetics—colors, modern typography, and nice button states. However, working on real user flows revealed that visual polish only works when the underlying hierarchy is solid.",
      "A key lesson has been prioritizing visual hierarchy over decoration: ensuring the primary action is unmistakably clear within the first 3 seconds of viewing any screen.",
      "Good UI design is about removing friction, anticipating what a user needs next, and organizing content with consistent spacing and accessible typography.",
    ],
  },
  {
    id: "personal-brand-student",
    slug: "building-a-personal-brand-as-a-student",
    title: "Building a Personal Brand as a Student",
    summary:
      "Reflections on sharing hands-on work, creative experiments, and learnings openly while navigating academic and entrepreneurial pursuits.",
    date: "Dec 2024",
    readTime: "5 min read",
    category: "Branding",
    tags: ["Personal Brand", "Student Journey", "Visual Identity", "Growth"],
    content: [
      "As a student, you don't need decades of experience to create a personal brand. What matters is authentic curiosity, consistent output, and documenting what you actually build.",
      "Through ArtZa Designs and my campus activities, maintaining consistent visual quality across every graphic, presentation, and post helped establish creative credibility among peers and startup founders.",
      "A personal brand is simply the promise of quality and thoughtfulness you bring to every project.",
    ],
  },
  {
    id: "lessons-startup-work",
    slug: "lessons-from-startup-design-work",
    title: "Lessons From Startup Design Work",
    summary:
      "How collaborating with incubation centres and early-stage ventures shaped my approach to rapid asset delivery and brand consistency.",
    date: "Nov 2024",
    readTime: "5 min read",
    category: "Startups",
    tags: ["Startups", "Incubation", "Aakam Shine", "Event Design"],
    content: [
      "Working within startup ecosystems like Aakam Shine Incubation Centre and event initiatives like SaaS.Connect taught me that speed and clarity are paramount.",
      "Founders often have rapid turnaround requirements for summits, pitch decks, and digital announcements. Developing modular templates and rigid brand guidelines enables delivering high quality at startup speed.",
      "Design in early-stage ventures directly impacts how seriously an idea is received by early users and investors.",
    ],
  },
  {
    id: "graphic-design-principles",
    slug: "graphic-design-principles-i-use",
    title: "Graphic Design Principles I Use in Projects",
    summary:
      "Core visual design fundamentals—contrast, balance, typography hierarchy, and deliberate negative space—applied to real-world posters and digital media.",
    date: "Oct 2024",
    readTime: "4 min read",
    category: "Graphic Design",
    tags: ["Graphic Design", "Typography", "Visual Balance", "Posters"],
    content: [
      "Every poster or visual creative begins with one clear focal point. If everything is shouting for attention, nothing gets heard.",
      "I rely on three foundational pillars: typographic contrast (pairing strong headlines with readable body weights), disciplined negative space to let elements breathe, and purposeful color accents.",
      "Tools like Figma, Photoshop, and CorelDRAW are only as effective as the visual hierarchy decisions made before placing the first shape.",
    ],
  },
  {
    id: "exploring-ai-creativity",
    slug: "exploring-ai-and-creative-technology",
    title: "Exploring AI and Creative Technology",
    summary:
      "Connecting analytical concepts in artificial intelligence and data science with interactive frontend experiences and modern digital products.",
    date: "Sep 2024",
    readTime: "6 min read",
    category: "AI & Technology",
    tags: ["Artificial Intelligence", "Computer Vision", "Creative Tech", "Data Science"],
    content: [
      "Studying Artificial Intelligence & Data Science gives me an analytical lens on how algorithms process signals, whether computer vision models inspecting packaging or NLP models classifying text veracity.",
      "The next generation of creative technology isn't just about training models—it is about designing intuitive interfaces that make algorithmic intelligence understandable and actionable for human operators.",
      "Combining design sensibilities with an engineering foundation creates opportunities to solve real problems thoughtfully.",
    ],
  },
  {
    id: "graphic-to-web-dev",
    slug: "journey-from-graphic-design-to-web-development",
    title: "My Journey From Graphic Design to Web Development",
    summary:
      "How learning HTML, CSS, JavaScript, and React transformed my static designs into responsive, interactive living experiences.",
    date: "Aug 2024",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["Frontend", "React", "Next.js", "Web Development", "Transitions"],
    content: [
      "Transitioning from static graphic design into web development changed how I think about layout. In print or social posts, canvas bounds are fixed; on the web, interfaces must respond fluidly across screens from mobile to ultra-wide desktop.",
      "Learning Next.js and Tailwind CSS enabled me to bridge the gap between Figma mockups and production-ready code with complete fidelity.",
      "Being able to both design the interface and code the responsive interactions eliminates handoff compromises and makes building digital products immensely rewarding.",
    ],
  },
];
