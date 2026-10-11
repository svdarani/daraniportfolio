export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "Internship" | "Event Role" | "Venture" | "Education";
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  featured?: boolean;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "startnet-ventures",
    role: "Graphic Designer Intern",
    organization: "StartNet Ventures Pvt. Ltd.",
    type: "Internship",
    period: "Jan 2025 — Apr 2025",
    location: "Tamil Nadu, India",
    description:
      "Worked in a graphic design internship focused on creating visual content and supporting design-related requirements for startup portfolio ventures.",
    responsibilities: [
      "Designed digital marketing creatives, venture promotional assets, and brand collaterals.",
      "Collaborated with project leads to translate brand objectives into clear, engaging visual designs.",
      "Maintained design consistency across digital communication platforms and marketing campaigns.",
    ],
    skills: ["Graphic Design", "Social Media Creatives", "Brand Assets", "Visual Design", "Canva", "Photoshop"],
    featured: true,
  },
  {
    id: "saas-connect-2025",
    role: "Junior Graphic Designer",
    organization: "SaaS.Connect 2025",
    type: "Event Role",
    period: "2025",
    location: "Tamil Nadu, India",
    description:
      "Contributed to graphic design work associated with SaaS.Connect 2025, supporting event visuals, digital communication, and stage presentation assets.",
    responsibilities: [
      "Crafted event promotional banners, digital signage, and social media announcements.",
      "Supported speaker deck visuals, agenda graphics, and attendee collateral design.",
      "Collaborated with event organizers to ensure visual coherence across all event touchpoints.",
    ],
    skills: ["Event Design", "Visual Branding", "Presentation Design", "Social Media Creatives", "Figma"],
    featured: true,
  },
  {
    id: "aakam-shine",
    role: "UI/UX & Graphic Designer Intern",
    organization: "Aakam Shine Incubation Centre",
    type: "Internship",
    period: "2024 — Present",
    location: "Tamil Nadu, India",
    description:
      "Contributed to creative design and digital communication work in a startup-incubation environment, supporting visual assets and design-related requirements.",
    responsibilities: [
      "Designed high-impact social media creatives, digital marketing campaigns, and visual assets for startup incubatees.",
      "Crafted intuitive website UI concepts and digital interfaces for incubation programs and student-led startup ventures.",
      "Developed comprehensive branding, event creatives, signage, and promotional collaterals for summits and hackathons.",
      "Collaborated closely with startup founders to communicate complex technological ideas into clear, accessible visual designs.",
    ],
    skills: ["UI/UX Design", "Branding", "Figma", "Canva", "Graphic Design", "Social Media Design", "Startup Communication"],
    featured: true,
  },
  {
    id: "aakam360",
    role: "Graphic Designer / Branding Contributor",
    organization: "Aakam360",
    type: "Internship",
    period: "2024",
    location: "Tamil Nadu, India",
    description:
      "Supported branding and creative communication activities connected with startup and innovation initiatives.",
    responsibilities: [
      "Supported visual identity concepts, social media creatives, and digital marketing materials.",
      "Designed promotional graphics and event-related digital communication collaterals.",
      "Assisted in maintaining consistent brand styling across digital channels.",
    ],
    skills: ["Branding", "Social Media Design", "Startup Communication", "Digital Content"],
    featured: true,
  },
  {
    id: "next-startup-connect-2026",
    role: "Graphic Designer & Branding Associate",
    organization: "The NEXT Startup Connect 2026",
    type: "Event Role",
    period: "2026",
    location: "Tamil Nadu, India",
    description:
      "Contributed to graphic design and branding-related work for The NEXT Startup Connect 2026 summit.",
    responsibilities: [
      "Created summit branding assets, promotional banners, and digital marketing assets.",
      "Designed stage visuals, speaker highlight cards, and participant collaterals.",
      "Ensured cohesive visual representation across event communication channels.",
    ],
    skills: ["Summit Branding", "Event Creatives", "Visual Communication", "Marketing Design"],
    featured: true,
  },
  {
    id: "artza-designs",
    role: "Founder & Creative Designer",
    organization: "ArtZa Designs",
    type: "Venture",
    period: "2024 — Present",
    location: "Tamil Nadu, India",
    description:
      "Building a creative design venture focused on branding, visual communication, digital content, and design services for businesses and creators.",
    responsibilities: [
      "Founded creative venture delivering brand identities, posters, social media creatives, and UI concepts.",
      "Consulted with startups and creators to develop structured visual systems and brand collateral.",
      "Executed end-to-end design projects from discovery and concept development to final deliverable delivery.",
    ],
    skills: ["Creative Direction", "Brand Identity", "UI/UX Design", "Graphic Design", "Client Strategy"],
    featured: true,
  },
  {
    id: "education",
    role: "B.Tech in Artificial Intelligence & Data Science",
    organization: "Sri Shanmugha College of Engineering and Technology",
    type: "Education",
    period: "2023 — 2027 (Currently 3rd Year)",
    location: "Tamil Nadu, India",
    description:
      "Pursuing an engineering degree in Artificial Intelligence & Data Science while developing practical interests in software, data, user experience, and creative technology.",
    responsibilities: [
      "Coursework in Artificial Intelligence, Machine Learning, Data Science, Python, Java, and Database Systems.",
      "Active participant in technical symposiums, hackathons, and entrepreneurship initiatives.",
      "Student Ambassador representing institution initiatives and innovation activities.",
    ],
    skills: ["Python", "Java", "Artificial Intelligence", "Data Science", "Machine Learning"],
    featured: true,
  },
];
