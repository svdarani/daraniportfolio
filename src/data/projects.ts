export interface ProjectLink {
  live?: string;
  github?: string;
  figma?: string;
}

export interface ProjectCardDetail {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "DEVELOPMENT" | "AI / DATA" | "UI/UX" | "DESIGN" | "STARTUP" | "EVENTS";
  filterCategory: "UI/UX" | "Branding" | "Graphic Design" | "Web Design" | "AI & Technology" | "Events";
  year: string;
  featured: boolean;
  description: string;
  longDescription?: string;
  role: string;
  tags: string[];
  technologies: string[];
  image: string;
  video?: string;
  links: ProjectLink;
  problem?: string;
  process?: string[];
  features?: string[];
  designPrinciples?: {
    title: string;
    description: string;
  }[];
  whatILearned?: {
    title: string;
    description: string;
  }[];
  orderFlow?: string[];
  solution?: string;
  result?: string;
  status?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "artza-designs",
    slug: "artza-designs",
    title: "ArtZa Designs",
    subtitle: "Creative Design & Brand Identity Initiative",
    category: "DESIGN",
    filterCategory: "Branding",
    year: "2024 — Present",
    featured: true,
    description:
      "ArtZa Designs is my creative venture focused on helping businesses and individuals communicate their ideas through branding, digital graphics, and design solutions.",
    longDescription:
      "ArtZa Designs is an entrepreneurial creative initiative founded by Darani Viswanathan. Focused on transforming concepts into engaging visual assets, the initiative bridges strategic brand thinking with crisp visual aesthetics. From social media campaigns and event creatives to comprehensive visual identity systems, ArtZa Designs helps startups and creators build recognizable digital presence.",
    role: "Founder & Creative Designer",
    tags: ["Brand Identity", "Graphic Design", "Social Media", "Visual Communication", "Creative Venture"],
    technologies: ["Figma", "Canva", "Adobe Photoshop", "CorelDRAW"],
    image: "/images/project/artza-designs.svg",
    links: {
      live: "https://instagram.com/artza_designs",
    },
    problem:
      "Early-stage ventures and small creators frequently struggle with disjointed visual communication, leading to low social engagement and weak brand recall across digital channels.",
    process: [
      "Discovery & Brand Brief: Understanding the venture's target audience, values, and core message.",
      "Visual Direction: Developing color schemes, typography hierarchy, and visual guidelines.",
      "Creative Production: Crafting marketing posters, social media templates, and banners.",
      "Refinement & Delivery: Standardizing assets across digital touchpoints for consistent usage.",
    ],
    features: [
      "Custom Brand Identity & Visual Guidelines",
      "High-Impact Social Media Marketing Creatives",
      "Event Banners, Summit Creatives & Signage",
      "Creative Collateral Design for Startups",
    ],
    solution:
      "Delivered unified visual assets, repeatable social media templates, and clean typography systems that elevated the venture's digital presence.",
    result:
      "Created over 800+ design collaterals and built an active community of 2K+ followers across creative channels.",
    status: "Active Creative Initiative",
  },
  {
    id: "namma-stay",
    slug: "namma-stay",
    title: "Namma Stay",
    subtitle: "Accommodation Discovery & Rental Platform Concept",
    category: "STARTUP",
    filterCategory: "UI/UX",
    year: "2024",
    featured: true,
    description:
      "Namma Stay is an accommodation-platform concept focused on making it easier for users to discover suitable stays through a clear and accessible digital experience.",
    longDescription:
      "Namma Stay addresses common friction points faced by students and young professionals seeking rental accommodations. By prioritizing transparent property listings, direct owner communication, clear rental breakdowns, and intuitive search filters, this concept reimagines the rental discovery journey. Note: Namma Stay is presented as a startup validation and UI/UX product concept.",
    role: "UI/UX Designer & Product Concept Lead",
    tags: ["Startup Concept", "UI/UX", "User Journey", "Platform Concept", "Product Experience"],
    technologies: ["Figma", "Design Thinking", "User Research", "Wireframing"],
    image: "/images/project/namma-stay.svg",
    links: {},
    problem:
      "Students and relocating individuals often encounter unreliable listings, unverified properties, hidden broker fees, and difficult search flows when looking for rental stays.",
    process: [
      "User Research: Interviewed students and working professionals regarding accommodation pain points.",
      "Information Architecture: Structured property categorization, neighborhood filters, and amenity listings.",
      "Wireframing: Built low-fidelity wireframes for discovery, listing detail, and booking inquiry flows.",
      "High-Fidelity Prototyping: Designed polished responsive mobile and web interfaces in Figma.",
    ],
    features: [
      "Curated, verified student & professional stay listings",
      "Transparent fee and amenity breakdown without hidden brokerage",
      "Interactive map and neighborhood proximity filters",
      "Direct owner-tenant inquiry flow concept",
    ],
    solution:
      "Designed an intuitive 3-step search and verification UI that reduces cognitive overhead and allows users to evaluate properties quickly.",
    result:
      "Completed comprehensive UI/UX wireframes, interactive mobile prototypes, and pitch deck materials for platform validation.",
    status: "Product Concept & UI/UX Prototype",
  },
  {
    id: "resq-helmet",
    slug: "resq-helmet",
    title: "ResQ Helmet",
    subtitle: "AI / IoT / Road Safety Concept",
    category: "AI / DATA",
    filterCategory: "AI & Technology",
    year: "2024",
    featured: true,
    description:
      "ResQ Helmet is a smart-safety project concept exploring how accident detection, GPS location, and emergency alerts could support faster responses to road incidents.",
    longDescription:
      "Road safety for two-wheeler riders is a critical public health challenge. ResQ Helmet investigates a smart helmet concept integrating accelerometer/gyroscope sensors for impact detection, GPS tracking, and an automated emergency alert communication flow. Clearly labeled as an IoT and product concept exploring potential system architectures and emergency notification workflows.",
    role: "AI & IoT Concept Designer",
    tags: ["AI & IoT", "Smart Safety", "Emergency Response", "System Workflow", "Concept Design"],
    technologies: ["IoT Architecture Concept", "Python Logic", "GPS Workflow", "Figma UI"],
    image: "/images/project/resq-helmet.svg",
    links: {},
    problem:
      "Critical emergency response delays occur when solo two-wheeler riders encounter accidents in isolated areas without immediate bystanders.",
    process: [
      "Problem Validation: Studied golden-hour emergency response times and crash detection methodologies.",
      "System Architecture: Defined sensor-to-cloud data flow involving impact thresholds and GPS coordinate logging.",
      "Emergency Flow Design: Designed automated SMS/call notification protocol to emergency contacts and emergency services.",
      "Interface Concept: Mocked mobile companion app for device calibration and emergency contact management.",
    ],
    features: [
      "Impact threshold trigger architecture",
      "Automated GPS coordinate transmission concept",
      "Companion mobile app UI for emergency contacts",
      "Fall-detection false alarm cancellation window",
    ],
    solution:
      "Formulated a multi-stage emergency escalation pipeline with a 60-second cancellation window to prevent false alarms while ensuring prompt notification.",
    result:
      "System architecture diagrams, data flow models, and mobile app UI designs completed for academic and technical presentation.",
    status: "Technical Concept & System Prototype",
  },
  {
    id: "ai-drug-detection",
    slug: "ai-drug-detection",
    title: "AI Drug Detection",
    subtitle: "Computer Vision & Medicine Packaging Concept",
    category: "AI / DATA",
    filterCategory: "AI & Technology",
    year: "2024",
    featured: true,
    description:
      "An AI-focused project concept exploring image recognition and computer vision as potential tools for identifying suspicious or counterfeit medicine packaging.",
    longDescription:
      "Counterfeit and adulterated pharmaceuticals pose grave risks worldwide. This research exploration investigates how computer vision algorithms and image feature extraction (color profiles, font consistency, packaging geometry) can assist in screening packaging discrepancies. Note: Clearly stated as an exploratory AI/CV research concept, not a clinically certified medical device.",
    role: "AI & Computer Vision Student Explorer",
    tags: ["Computer Vision", "Machine Learning", "Python", "Image Processing", "Research Concept"],
    technologies: ["Python", "OpenCV Concepts", "NumPy", "Matplotlib", "Image Feature Extraction"],
    image: "/images/project/ai-drug-detection.svg",
    links: {},
    problem:
      "Visual detection of counterfeit packaging anomalies requires specialized inspection and is prone to human oversight in rapid supply chains.",
    process: [
      "Domain Study: Researched packaging print standards, batch codes, and counterfeit detection literature.",
      "Feature Exploration: Experimented with edge detection, contour matching, and template comparison algorithms.",
      "Classification Flow: Drafted a model pipeline comparing suspect packaging crops against verified references.",
      "Dashboard UI: Designed an operator interface displaying anomaly confidence scores and inspected areas.",
    ],
    features: [
      "Packaging contour and text alignment inspection pipeline",
      "Color histogram verification against verified database references",
      "Operator flagging dashboard concept with highlight overlays",
    ],
    solution:
      "Designed a dual-stage screening flow combining geometric contour alignment with high-resolution texture histogram checks.",
    result:
      "Prototyped image feature extraction scripts in Python and designed operator interface workflows.",
    status: "Academic / Technical Concept",
  },
  {
    id: "aakam-shine",
    slug: "aakam-shine",
    title: "Aakam Shine Creative Work",
    subtitle: "Startup Ecosystem / Graphic Design / UI",
    category: "DESIGN",
    filterCategory: "Graphic Design",
    year: "2024 — Present",
    featured: true,
    description:
      "Selected design work associated with Aakam Shine Incubation Centre, including visual communication, event-related creatives, startup content, and digital design tasks.",
    longDescription:
      "As a UI/UX and Graphic Design contributor at Aakam Shine Incubation Centre, I supported incubation initiatives, student entrepreneurship programs, and startup founder cohorts with high-quality visual assets. Work included event branding, promotional posters, startup UI concepts, and digital collateral.",
    role: "UI/UX & Graphic Designer Intern",
    tags: ["Startup Incubation", "Graphic Design", "UI Design", "Digital Creatives", "Event Collaterals"],
    technologies: ["Figma", "Canva", "Adobe Photoshop", "Brand Design"],
    image: "/images/project/aakam-shine.svg",
    links: {},
    problem:
      "Incubation programs and early student ventures need strong visual presence to attract participants, mentors, and ecosystem partners.",
    process: [
      "Requirements Gathering: Assessed event timelines, speaker requirements, and incubation milestone goals.",
      "Design Production: Created promotional posters, badges, stage backdrops, and social media reels.",
      "UI Guidance: Collaborated with student startups on landing page wireframes and digital presentations.",
    ],
    features: [
      "Incubation summit and hackathon promotional graphics",
      "Student startup landing page concepts and UI kits",
      "Ecosystem newsletters, announcements, and social content",
    ],
    solution:
      "Established recognizable design templates that allowed rapid asset rollout for incubation events while maintaining high visual polish.",
    result:
      "Delivered dozens of event creatives, program collateral, and startup UI design concepts across multiple cohorts.",
    status: "Verified Ecosystem Contribution",
  },
  {
    id: "event-branding",
    slug: "event-branding",
    title: "Event Branding & Creative Work",
    subtitle: "SaaS.Connect 2025 & The NEXT Startup Connect 2026",
    category: "EVENTS",
    filterCategory: "Events",
    year: "2025 — 2026",
    featured: true,
    description:
      "Selected event and startup communication work demonstrating visual consistency, promotional design, and creative execution across large-scale innovation events.",
    longDescription:
      "A curated showcase of event branding and promotional creative work delivered for premier startup gatherings including SaaS.Connect 2025, The NEXT Startup Connect 2026, and regional startup community initiatives. Demonstrates structured typography, color coherence, and multi-format delivery.",
    role: "Graphic Designer & Branding Associate",
    tags: ["Event Design", "Summit Branding", "Visual Communication", "Marketing Assets", "Signage"],
    technologies: ["Figma", "Adobe Photoshop", "Canva", "CorelDRAW"],
    image: "/images/project/event-branding.svg",
    links: {},
    problem:
      "Large-scale multi-track events require cohesive visual branding across banners, stage displays, social media schedules, and speaker announcements.",
    process: [
      "Visual Identity System: Defined color palette, typography hierarchy, and key event motifs.",
      "Multi-Format Delivery: Adapted graphics for Instagram, LinkedIn, printable badges, and 16:9 stage LED displays.",
      "Rapid Turnaround: Produced real-time announcement cards and live-session highlights during event days.",
    ],
    features: [
      "High-resolution stage LED display graphics",
      "Speaker announcement cards and agenda timetables",
      "Printable badges, signage, and standees",
      "Post-event highlight collaterals",
    ],
    solution:
      "Created a robust modular event design system that enabled fast generation of branded cards for dozens of speakers and sessions.",
    result:
      "Successfully delivered event creative suites for hundreds of attendees, speakers, and ecosystem partners.",
    status: "Completed Event Portfolio",
  },
  {
    id: "artza-frames",
    slug: "artza-frames",
    title: "ArtZa Frames",
    subtitle: "Personalized Custom Photo Framing Experience",
    category: "STARTUP",
    filterCategory: "UI/UX",
    year: "2024",
    featured: false,
    description:
      "A creative product concept for personalized photo framing featuring an interactive 4-step ordering flow: Upload → Frame Size → Real-time Wall Preview → Order.",
    role: "Product Concept & UI/UX Designer",
    tags: ["Product Concept", "UI/UX Design", "E-Commerce", "Order Flow"],
    technologies: ["Figma", "Next.js Concept", "UI Prototyping"],
    image: "/images/project/artza-frames.svg",
    links: {},
    status: "Concept & UI/UX Prototype",
  },
  {
    id: "fake-news-detection",
    slug: "fake-news-detection",
    title: "Fake News Detection",
    subtitle: "NLP & Machine Learning Text Classification",
    category: "AI / DATA",
    filterCategory: "AI & Technology",
    year: "2024",
    featured: false,
    description:
      "An NLP and machine learning pipeline for automated detection of misinformation in news articles using TF-IDF feature extraction and classifiers.",
    role: "Data Science & NLP Developer",
    tags: ["NLP", "Machine Learning", "Python", "Text Classification"],
    technologies: ["Python", "NLTK", "Scikit-Learn", "TF-IDF", "Pandas"],
    image: "/images/project/fake-news-detection.svg",
    links: {},
    status: "Completed Machine Learning Project",
  },
  {
    id: "apple-clone",
    slug: "apple-clone",
    title: "Apple Showcase Clone",
    subtitle: "Pixel-Perfect Responsive Hardware Showcase",
    category: "DEVELOPMENT",
    filterCategory: "Web Design",
    year: "2024",
    featured: false,
    description:
      "A responsive recreation of Apple's iconic web showcase focusing on minimalist typography, fluid scroll transitions, and component performance.",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    image: "/images/project/apple.png",
    links: {},
    status: "Completed Project",
  },
  {
    id: "cineflex",
    slug: "cineflex",
    title: "Cineflex Dark UI",
    subtitle: "Cinema Discovery & Booking UI Concept",
    category: "DEVELOPMENT",
    filterCategory: "Web Design",
    year: "2024",
    featured: false,
    description:
      "A dark-mode movie discovery and theater seat reservation web app designed with smooth backdrop transitions and responsive grid layouts.",
    role: "Frontend Developer",
    tags: ["Next.js", "React", "TailwindCSS", "Movie Booking"],
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    image: "/images/project/cineflex.png",
    links: {},
    status: "Completed Project",
  },
  {
    id: "quarto",
    slug: "quarto",
    title: "Quarto E-commerce",
    subtitle: "Modern Minimalist Fashion E-Commerce Experience",
    category: "DEVELOPMENT",
    filterCategory: "Web Design",
    year: "2024",
    featured: true,
    description:
      "A modern e-commerce front-end platform designed for a fashion boutique, featuring a premium minimalist UI, smooth interactions, and responsive design.",
    role: "Frontend Developer & UI Designer",
    tags: ["Next.js", "React", "TailwindCSS", "E-commerce UI"],
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/project/quarto.png",
    links: {
      live: "https://quarto-theta.vercel.app/",
      github: "https://github.com/Its-SuperNova/quarto",
    },
    status: "Completed Project",
  },
  {
    id: "carlic",
    slug: "carlic",
    title: "Garlic - Taxi & Food Delivery",
    subtitle: "End-to-End Mobility & Food Delivery Mobile App Concept",
    category: "UI/UX",
    filterCategory: "UI/UX",
    year: "2024",
    featured: true,
    description:
      "An integrated dual-service mobile application concept combining ride-hailing and food delivery into a unified, frictionless mobile user journey.",
    role: "UI/UX Researcher & Designer",
    tags: ["UI Research", "UI Design", "User Journey", "Prototyping", "Figma"],
    technologies: ["Figma", "User Journey", "Wireframing", "Mobile UI"],
    image: "/images/project/carlic.png",
    links: {
      live: "/works/case-studies/carlic-case-study",
    },
    status: "Completed UI/UX Prototype",
  },
];
