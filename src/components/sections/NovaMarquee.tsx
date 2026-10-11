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
    <section className="py-8 bg-neutral-50 dark:bg-[#11131A] border-y border-neutral-200 dark:border-white/[0.08] overflow-hidden transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
          <span className="text-[11px] font-modernist font-semibold uppercase tracking-[0.14em] text-neutral-600 dark:text-[#A5ADBD]">
            Collaborations &amp; Creative Ecosystem
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-8 sm:gap-12 items-center py-2">
          {ecosystems.concat(ecosystems).map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-colors shrink-0 group shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#326BFF]/60 dark:bg-[#24D9FF]/60 group-hover:bg-[#326BFF] dark:group-hover:bg-[#24D9FF] transition-colors" />
              <span className="text-sm sm:text-base font-modernist font-semibold text-neutral-900 dark:text-[#F7F8FC] tracking-tight transition-colors">
                {item.name}
              </span>
              <span className="text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD] border-l border-neutral-200 dark:border-white/10 pl-3">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
