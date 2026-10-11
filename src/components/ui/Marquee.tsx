"use client";

import React from "react";

interface MarqueeProps {
  items?: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export const Marquee: React.FC<MarqueeProps> = ({
  items = [
    "ARTIFICIAL INTELLIGENCE",
    "DATA SCIENCE",
    "UI/UX DESIGN",
    "GRAPHIC DESIGN",
    "CREATIVE DEVELOPMENT",
    "STARTUP ECOSYSTEMS",
  ],
  className = "",
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden py-4 border-y border-neutral-200 dark:border-white/10 bg-neutral-100/70 dark:bg-neutral-950/60 backdrop-blur-sm select-none transition-colors duration-300 ${className}`}
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none space-x-12">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-8 text-xs md:text-sm uppercase font-mono tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-500/80" />
          </div>
        ))}
      </div>
    </div>
  );
};
