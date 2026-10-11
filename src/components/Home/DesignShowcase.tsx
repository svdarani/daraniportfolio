"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface DesignItem {
  id: string;
  title: string;
  category: "UI/UX" | "GRAPHIC DESIGN" | "BRANDING" | "SOCIAL MEDIA" | "STARTUPS";
  role: string;
  image: string;
  aspectRatio?: string;
  description: string;
}

const designGallery: DesignItem[] = [
  {
    id: "artza-brand",
    title: "ArtZa Designs Visual Identity",
    category: "BRANDING",
    role: "Brand Identity & Guideline",
    image: "/images/project/artza-designs.svg",
    description: "Complete visual identity, palette curation, and typographic system for creative services.",
  },
  {
    id: "artza-frames-ui",
    title: "ArtZa Frames Custom Framing Flow",
    category: "UI/UX",
    role: "Product Flow & Interactive UI",
    image: "/images/project/artza-frames.svg",
    description: "Step-by-step personalized frame selection and live mockup visualization interface.",
  },
  {
    id: "namma-stay-app",
    title: "Namma Stay Rental Platform",
    category: "STARTUPS",
    role: "Stay-Tech Mobile & Web UI",
    image: "/images/project/namma-stay.svg",
    description: "Zero-brokerage rental discovery experience designed for university students and relocating youth.",
  },
  {
    id: "aakam-incubation-event",
    title: "Aakam Shine Incubation Summit Collateral",
    category: "GRAPHIC DESIGN",
    role: "Event Creatives & Stage Signage",
    image: "/images/project/artza-designs.svg",
    description: "Marketing posters, stage banners, and digital creatives for state incubation programs.",
  },
  {
    id: "carlic-mobile-design",
    title: "Carlic Mobility & Food Delivery",
    category: "UI/UX",
    role: "User Journey & Mobile Wireframes",
    image: "/images/project/carlic.png",
    description: "End-to-end Figma UI/UX prototype optimizing dual booking workflows.",
  },
  {
    id: "social-campaigns",
    title: "Venture Studio Social Campaigns",
    category: "SOCIAL MEDIA",
    role: "Digital Content & Posters",
    image: "/images/project/artza-designs.svg",
    description: "High-engagement social media creatives tailored for Instagram and LinkedIn audiences.",
  },
];

const categories = ["ALL", "UI/UX", "GRAPHIC DESIGN", "BRANDING", "SOCIAL MEDIA", "STARTUPS"] as const;

export const DesignShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);

  const filteredItems =
    activeFilter === "ALL"
      ? designGallery
      : designGallery.filter((item) => item.category === activeFilter);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-white/5 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
              CREATIVE VISUAL SHOWCASE
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              Design &amp; Visual Communication
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            A curated collection of branding systems, UI/UX flows, event creatives, and social campaigns executed across ArtZa Designs and incubation centers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Design Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-white/10 cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
                data-cursor="IMAGE"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-gray-400">{item.role}</span>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div
              className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6"
              >
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-gray-400">{selectedItem.role}</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="mt-6 px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white text-xs font-medium transition-colors"
                >
                  Close Preview
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
