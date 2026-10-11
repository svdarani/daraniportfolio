export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  description?: string;
  ariaLabel: string;
}

export const socialsData: {
  email: string;
  phone: string;
  location: string;
  githubUsername: string;
  links: SocialLink[];
} = {
  email: "help.artdesigns@gmail.com",
  phone: "+91 76391 11957",
  location: "Tamil Nadu, India",
  githubUsername: "darani-sv",
  links: [
    {
      platform: "GitHub",
      url: "https://github.com/darani-sv",
      username: "darani-sv",
      description: "Explore my development projects, experiments, and code.",
      ariaLabel: "Visit Darani Viswanathan's GitHub profile",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/darani-s-v-79659b28b/",
      username: "darani-s-v",
      description: "Connect with me professionally and follow my journey in technology, design, and startups.",
      ariaLabel: "Visit Darani Viswanathan's LinkedIn profile",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/dextro_kiddo/",
      username: "@dextro_kiddo",
      description: "Follow my creative work, designs, and visual projects.",
      ariaLabel: "Visit Darani Viswanathan's Instagram profile",
    },
  ],
};
