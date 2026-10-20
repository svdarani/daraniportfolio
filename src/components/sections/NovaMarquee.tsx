"use client";

import React from "react";

const ecosystems = [
  { name: "ArtZa Designs", role: "Creative Venture" },
  { name: "Aakam Shine Incubation", role: "Design Contributor" },
  { name: "StartNet Ventures", role: "Design Intern" },
  { name: "SaaS.Connect 2025", role: "Event Design" },
  { name: "The NEXT Connect", role: "Branding Associate" },
  { name: "StartupTN Spark", role: "Hackathon Winner" },
  { name: "Sri Shanmugha College", role: "AI & DS Student" },
  { name: "Namma Stay", role: "Startup Concept" },
  { name: "ResQ Helmet", role: "IoT Concept" },
];

export const NovaMarquee: React.FC = () => {
  return (
    <section className="py-8 bg-neutral-50 dark:bg-[#080808] border-y border-neutral-200 dark:border-white/10 overflow-hidden transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
          <span className="text-[11px] font-modernist font-semibold uppercase tracking-[0.14em] text-neutral-600 dark:text-neutral-300">
            Collaborations &amp; Creative Ecosystem
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] group/track">
        <div className="flex shrink-0 animate-marquee group-hover/track:[animation-play-state:paused] gap-8 sm:gap-12 items-center py-2 transform-gpu will-change-transform">
          {ecosystems.concat(ecosystems).map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              data-cursor="LINK"
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 hover:scale-105 transition-all duration-200 shrink-0 group shadow-sm cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
              <span className="text-sm sm:text-base font-modernist font-semibold text-neutral-900 dark:text-white tracking-tight transition-colors">
                {item.name}
              </span>
              <span className="text-xs font-modernist text-neutral-500 dark:text-neutral-400 border-l border-neutral-200 dark:border-white/10 pl-3">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
