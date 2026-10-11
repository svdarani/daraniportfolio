export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const metricsData: MetricItem[] = [
  {
    id: "designs",
    value: 845,
    suffix: "+",
    label: "Designs / Posters",
    description: "Creative visuals, brand assets, and marketing creatives crafted.",
  },
  {
    id: "videos",
    value: 36,
    suffix: "+",
    label: "Videos Edited",
    description: "Promotional clips, event reels, and digital narrative media edited.",
  },
  {
    id: "linkedin-impressions",
    value: 24,
    suffix: "K+",
    label: "LinkedIn Impressions",
    description: "Organic reach and engagement on professional thought leadership posts.",
  },
  {
    id: "instagram-views",
    value: 72,
    suffix: "K+",
    label: "Instagram Views",
    description: "Audience views across design releases, creative concepts, and reels.",
  },
  {
    id: "linkedin-followers",
    value: 2100,
    suffix: "+",
    label: "LinkedIn Followers",
    description: "Active network of developers, designers, and startup founders.",
  },
  {
    id: "website-pages",
    value: 10,
    suffix: "+",
    label: "Website UI Pages",
    description: "Modern, responsive, user-centered digital page experiences designed.",
  },
];
