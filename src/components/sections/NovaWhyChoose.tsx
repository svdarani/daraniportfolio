"use client";

import React from "react";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { FiUsers, FiCompass, FiCpu, FiTrendingUp } from "react-icons/fi";

const reasons = [
  {
    icon: <FiUsers className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "User-Focused Thinking",
    description:
      "I consider the people who will use a design, not just how the final screen looks. Every interface layout or creative asset begins with clarity of purpose.",
  },
  {
    icon: <FiCompass className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "Creative Problem Solving",
    description:
      "I enjoy exploring different visual directions and finding clear ways to communicate an idea, whether for an early-stage startup or an event campaign.",
  },
  {
    icon: <FiCpu className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "Design and Technology",
    description:
      "My interests span visual design, interface design, frontend development, and artificial intelligence, enabling me to bridge aesthetics with implementation.",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "Continuous Learning",
    description:
      "I use projects and practical experience to strengthen my skills and discover better ways to work, iterating rapidly from feedback.",
  },
];

export const NovaWhyChoose: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-[#090A0F] relative transition-colors">
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
            <div
              key={r.title}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {r.icon}
                  </div>
                  <span className="text-xs font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-debata text-xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-3 tracking-tight transition-colors">
                  {r.title}
                </h3>

                <p className="font-modernist text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
