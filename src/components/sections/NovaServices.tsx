"use client";

import React from "react";
import { motion } from "framer-motion";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { NovaButton } from "../ui/NovaButton";
import { FiLayout, FiImage, FiCode, FiCompass, FiCheck } from "react-icons/fi";

const services = [
  {
    number: "01",
    category: "Product & Interaction",
    title: "UI/UX Design",
    icon: <FiLayout className="w-6 h-6 text-black dark:text-white" />,
    description:
      "Designing intuitive interfaces and user journeys that make digital products easier to understand, navigate, and scale.",
    deliverables: [
      "Wireframes & Low-Fidelity Flows",
      "Interactive Interface Design",
      "Responsive Layouts (Mobile to Desktop)",
      "Clickable Prototypes in Figma",
      "Structured User Flows & Journey Maps",
      "Design Systems & Component Kits",
    ],
    tools: ["Figma", "FigJam", "Design Systems"],
    ctaText: "Explore UI/UX",
    link: "/works?filter=UI/UX",
  },
  {
    number: "02",
    category: "Visual Communication",
    title: "Graphic Design",
    icon: <FiImage className="w-6 h-6 text-black dark:text-white" />,
    description:
      "Creating visually compelling communication for brands, events, social media campaigns, and digital storytelling.",
    deliverables: [
      "High-Impact Social Media Creatives",
      "Event Posters & Summit Banners",
      "Marketing Collaterals & Signage",
      "Pitch Deck & Presentation Design",
      "Promotional Assets & Rollups",
      "Digital Campaign Visuals",
    ],
    tools: ["Canva", "Adobe Photoshop", "CorelDRAW"],
    ctaText: "Explore Graphic Design",
    link: "/works?filter=Graphic Design",
  },
  {
    number: "03",
    category: "Frontend Engineering",
    title: "Web Design & Development",
    icon: <FiCode className="w-6 h-6 text-black dark:text-white" />,
    description:
      "Turning ideas into responsive websites with clear layouts, thoughtful interactions, and consistent visual systems.",
    deliverables: [
      "Modern Website UI & Layouts",
      "High-Converting Landing Pages",
      "Portfolio & Showcase Websites",
      "Fluid Responsive Implementation",
      "Interactive Components & Animations",
      "Clean TypeScript & React/Next.js Code",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    ctaText: "Explore Web Design",
    link: "/works?filter=Web Design",
  },
  {
    number: "04",
    category: "Brand Strategy",
    title: "Branding & Direction",
    icon: <FiCompass className="w-6 h-6 text-black dark:text-white" />,
    description:
      "Helping businesses and startups communicate their identity through consistent visual language and meaningful design.",
    deliverables: [
      "Logo Concepts & Wordmarks",
      "Complete Visual Identity Guidelines",
      "Color Palettes & Harmonies",
      "Typographic Hierarchy Systems",
      "Brand Collaterals & Stationery",
      "Social Media Visual Templates",
    ],
    tools: ["ArtZa System", "Brand Identity", "Visual Guidelines"],
    ctaText: "Explore Branding",
    link: "/works?filter=Branding",
  },
];

export const NovaServices: React.FC = () => {
  return (
    <section id="services" className="section-contain py-24 sm:py-32 bg-neutral-50 dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="02 / SERVICES"
          titleStart="What I"
          titleHighlight="Create"
          description="From visual identity to digital experiences, I help communicate ideas clearly through design, thoughtful interfaces, and modern web technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header row: category + number */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-modernist font-semibold tracking-[0.14em] uppercase text-neutral-500 dark:text-neutral-400">
                      {service.category}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-semibold text-black dark:text-white group-hover:scale-110 transition-transform">
                    {service.number}
                  </span>
                </div>

                {/* Service Card Title */}
                <h3 className="font-debata text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-[#F7F8FC] mb-4 tracking-[-0.02em] group-hover:text-black dark:group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8 font-normal">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="mb-8">
                  <div className="text-[11px] font-modernist font-semibold text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-[0.12em] mb-3">
                    Deliverables &amp; Focus:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-modernist text-neutral-600 dark:text-[#A5ADBD]">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform">
                        <FiCheck className="text-black dark:text-white w-3.5 h-3.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="group-hover/item:text-black dark:group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer: Tools + CTA Button */}
              <div className="pt-6 border-t border-neutral-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-[#11131A] text-[11px] font-modernist text-neutral-600 dark:text-[#A5ADBD] border border-neutral-200 dark:border-white/[0.06] hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <NovaButton href={service.link} variant="secondary" size="sm">
                  {service.ctaText}
                </NovaButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

