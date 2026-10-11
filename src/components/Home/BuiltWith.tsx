"use client";

import React from "react";

const stackItems = [
  { name: "Next.js 15", desc: "App Router & SSR/SSG" },
  { name: "React 19", desc: "Component Architecture" },
  { name: "TypeScript 5", desc: "Type Safety & Contracts" },
  { name: "Tailwind CSS", desc: "Custom Token Styling" },
  { name: "Framer Motion", desc: "Physics & Layout Transitions" },
  { name: "GSAP", desc: "ScrollTrigger & Marquee Engine" },
  { name: "GitHub GraphQL", desc: "Contributions Integration" },
  { name: "Vercel", desc: "Edge Deployment & Analytics" },
];

export const BuiltWith: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/5 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-1">
              ENGINEERING TRANSPARENCY
            </p>
            <h3 className="text-xl md:text-2xl font-light text-neutral-900 dark:text-white">
              Built With Modern Technologies
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-500 dark:text-gray-500 hidden sm:inline">
            100% Production Ready
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {stackItems.map((tech) => (
            <div
              key={tech.name}
              className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15 shadow-sm transition-all text-center flex flex-col justify-center"
            >
              <span className="text-xs font-semibold text-neutral-900 dark:text-white font-mono">{tech.name}</span>
              <span className="text-[10px] text-neutral-500 dark:text-gray-500 mt-1">{tech.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
