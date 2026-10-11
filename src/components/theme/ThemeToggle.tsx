"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function ThemeToggle({
  className = "",
  size = "md",
  showLabel = false,
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme, isMounted } = useTheme();

  // If not mounted yet (during SSR), render default dark mode icon without mismatch
  const isDark = isMounted ? resolvedTheme === "dark" : true;

  const sizeClasses = {
    sm: "w-9 h-9 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  }[size];

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 backdrop-blur-xl overflow-hidden active:scale-95 select-none
        bg-white hover:bg-neutral-100 dark:bg-[#141414] dark:hover:bg-[#1f1f1f]
        border border-neutral-300/80 hover:border-neutral-400 dark:border-white/10 dark:hover:border-white/25
        text-neutral-900 dark:text-white
        shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.5)]
        ${sizeClasses} ${className}`}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      id="theme-toggle-btn"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <FiSun className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-45" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <FiMoon className="w-4 h-4 text-neutral-900 transition-transform duration-300 group-hover:-rotate-12" />
          </motion.div>
        )}
      </AnimatePresence>

      {showLabel && (
        <span className="relative z-10 ml-2 text-xs font-mono font-medium text-neutral-900 dark:text-white">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
