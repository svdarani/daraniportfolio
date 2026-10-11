export interface Profile {
  name: string;
  alternateName: string;
  tamilName: string;
  headline: string;
  supportingRoles: string[];
  positioning: string;
  shortBio: string;
  longBio: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    campus: string;
    location: string;
    currentYear: string;
    period: string;
  };
}

export const profileData: Profile = {
  name: "Darani Viswanathan",
  alternateName: "Darani S V",
  tamilName: "தரணி ச.வி",
  headline: "AI & Data Science Student",
  supportingRoles: [
    "Creative Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Digital Creator",
  ],
  positioning: "AI & Data Science × Design × Technology",
  shortBio:
    "I’m an AI & Data Science student with a strong interest in programming, design, UI/UX, and startup ecosystems. I enjoy working at the intersection of technology and creativity, turning ideas into clear, user-focused solutions.",
  longBio:
    "I’m Darani Viswanathan, an Artificial Intelligence & Data Science student who enjoys combining technology, creativity, and visual communication. My interests span programming, UI/UX design, graphic design, artificial intelligence, data science, and startup ecosystems. Alongside academics, I work on real-world design and digital projects, explore modern web technologies, and contribute to startup and incubation activities. I enjoy transforming ideas into practical digital experiences that are simple, visually engaging, and useful.",
  education: {
    degree: "B.Tech",
    field: "Artificial Intelligence & Data Science",
    institution: "Sri Shanmugha College of Engineering and Technology",
    campus: "Sri Shanmugha Educational Institutions",
    location: "Tamil Nadu, India",
    currentYear: "3rd Year",
    period: "2023 — Present",
  },
};
