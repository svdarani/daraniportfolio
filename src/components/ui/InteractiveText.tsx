"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface InteractiveWordProps {
  children: React.ReactNode;
  delay?: number;
  highlight?: boolean;
  className?: string;
}

/**
 * Interactive individual word with smooth upward entrance and hover micro-interaction.
 * Word subtly lifts and highlights without causing layout shifts.
 */
export const InteractiveWord: React.FC<InteractiveWordProps> = ({
  children,
  delay = 0,
  highlight = false,
  className = "",
}) => {
  return (
    <span className="inline-block overflow-hidden py-1">
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -2,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        className={`inline-block transition-colors duration-200 cursor-default select-none ${
          highlight
            ? "nova-gradient-text hover:brightness-110"
            : "hover:text-black dark:hover:text-white"
        } ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
};

interface InteractiveHeadingProps {
  text: string;
  className?: string;
  baseDelay?: number;
  highlightWords?: string[];
  gradientClass?: string;
}

/**
 * Splits heading text into words and animates them with a masked entrance.
 */
export const InteractiveHeading: React.FC<InteractiveHeadingProps> = ({
  text,
  className = "",
  baseDelay = 0.1,
  highlightWords = [],
  gradientClass = "nova-gradient-text",
}) => {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] ${className}`}>
      {words.map((word, idx) => {
        const isHighlight = highlightWords.some(
          (h) => word.toLowerCase().includes(h.toLowerCase())
        );

        return (
          <InteractiveWord
            key={`${word}-${idx}`}
            delay={baseDelay + idx * 0.045}
            highlight={isHighlight}
            className={isHighlight ? gradientClass : ""}
          >
            {word}
          </InteractiveWord>
        );
      })}
    </span>
  );
};

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "none";
  distance?: number;
  className?: string;
}

/**
 * High-performance viewport reveal for sections, cards, and headings.
 * Runs once per section to avoid replaying on micro-scrolls.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
  className = "",
  ...props
}) => {
  const yOffset = direction === "up" ? distance : direction === "down" ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
