"use client";

import React from "react";
import { motion } from "framer-motion";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { FiUsers, FiCompass, FiCpu, FiTrendingUp } from "react-icons/fi";

const reasons = [
  {
    icon: <FiUsers className="w-6 h-6 text-black dark:text-white" />,
    title: "User-Focused Thinking",
    description:
      "I consider the people who will use a design, not just how the final screen looks. Every interface layout or creative asset begins with clarity of purpose.",
  },
  {
    icon: <FiCompass className="w-6 h-6 text-black dark:text-white" />,
    title: "Creative Problem Solving",
    description:
      "I enjoy exploring different visual directions and finding clear ways to communicate an idea, whether for an early-stage startup or an event campaign.",
  },
  {
    icon: <FiCpu className="w-6 h-6 text-black dark:text-white" />,
    title: "Design and Technology",
    description:
      "My interests span visual design, interface design, frontend development, and artificial intelligence, enabling me to bridge aesthetics with implementation.",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-black dark:text-white" />,
    title: "Continuous Learning",
    description:
      "I use projects and practical experience to strengthen my skills and discover better ways to work, iterating rapidly from feedback.",
  },
];

export const NovaWhyChoose: React.FC = () => {
  return (
    <section className="section-contain py-24 sm:py-32 bg-white dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="CREATIVE EXPERTISE"
          titleStart="Creative thinking,"
          titleHighlight="technical curiosity,"
          titleEnd="and attention to detail."
          description="How I approach collaborations, design challenges, and practical software implementation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {r.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-debata text-xl font-semibold text-neutral-950 dark:text-[#F7F8FC] mb-3 tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                  {r.title}
                </h3>

                <p className="font-modernist text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
                  {r.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

