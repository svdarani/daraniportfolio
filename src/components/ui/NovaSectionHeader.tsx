"use client";

import React from "react";
import { motion } from "framer-motion";

interface NovaSectionHeaderProps {
  eyebrow: string;
  titleStart: string;
  titleHighlight?: string;
  titleEnd?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const NovaSectionHeader: React.FC<NovaSectionHeaderProps> = ({
  eyebrow,
  titleStart,
  titleHighlight,
  titleEnd,
  description,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl flex flex-col items-center" : "max-w-3xl"
      } ${className}`}
    >
      {/* Eyebrow Label: Swiss Modernist Structure */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-300 dark:border-white/10 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-800 dark:text-neutral-300 mb-4 shadow-sm select-none cursor-default"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse" />
        <span>{eyebrow}</span>
      </motion.div>

      {/* Main Section Heading: Debata Expressive Display Typography */}
      <h2 className="font-debata text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.12] mb-4">
        <span>{titleStart}</span>{" "}
        {titleHighlight && (
          <span className="nova-gradient-text inline-block transition-transform duration-300 hover:scale-[1.02]">
            {titleHighlight}
          </span>
        )}{" "}
        {titleEnd && <span>{titleEnd}</span>}
      </h2>

      {/* Subtle animated accent indicator */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 44, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className={`h-[2px] bg-neutral-300 dark:bg-white/20 mb-4 rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {/* Supporting Subtitle: Modernist Readable Prose */}
      {description && (
        <p className="font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </motion.div>
  );
};
