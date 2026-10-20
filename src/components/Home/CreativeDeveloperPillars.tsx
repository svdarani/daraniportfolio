"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Designing",
    text: "I craft visually striking, immersive interfaces that don’t just look good—they feel alive. Think smooth animations, intuitive layouts, and razor-sharp attention to detail that captivate users and keep them hooked.",
  },
  {
    number: "02",
    title: "Developing",
    text: "I don’t just write code—I engineer powerful, high-speed applications that are as smooth as butter. From next-level frontend magic to rock-solid backend systems, I make sure everything runs blazing fast, bug-free, and future-ready.",
  },
  {
    number: "03",
    title: "The Ultimate Blend",
    text: "Why choose between design and development when you can have both at peak performance? I merge UI/UX brilliance with technical mastery, ensuring every project is visually iconic, functionally flawless, and insanely engaging.",
  },
];

export const CreativeDeveloperPillars: React.FC = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-debata text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.1] mb-6">
              The Creative Developer <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                You Wish You Hired Sooner!
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal max-w-3xl"
          >
            I don’t just build websites—I create high-energy digital experiences that look stunning, feel seamless, and perform like a dream. Whether it&apos;s designing sleek, user-first interfaces or developing high-performance applications, I bring bold creativity, technical mastery, and a touch of magic to every project.
          </motion.p>
        </div>

        {/* 3 Pillars Grid with Top Lines and Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative pt-6 flex flex-col justify-start group"
            >
              {/* Pillar Number */}
              <div className="text-xs sm:text-sm font-mono text-neutral-400 dark:text-neutral-500 mb-4 tracking-wider">
                {pillar.number}
              </div>

              {/* Minimal Border Line */}
              <div className="w-full border-t border-neutral-200 dark:border-white/15 mb-6 group-hover:border-black dark:group-hover:border-white/40 transition-colors duration-300" />

              {/* Title */}
              <h3 className="font-debata text-2xl sm:text-[28px] font-semibold text-neutral-950 dark:text-white mb-4 tracking-tight group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                {pillar.title}
              </h3>

              {/* Paragraph text */}
              <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
