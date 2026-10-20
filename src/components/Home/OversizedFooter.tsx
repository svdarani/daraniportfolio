"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { socialsData } from "@/data/socials";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export const OversizedFooter: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black text-white pt-24 sm:pt-32 pb-12 overflow-hidden relative select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/15 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="font-modernist text-xl sm:text-2xl md:text-3xl font-light text-neutral-300 tracking-tight">
              Your friendly chaos creator
            </span>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: -45 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            data-cursor="LINK"
            aria-label="Back to top"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
          >
            <FiArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.button>
        </div>

        {/* Huge Oversized Typographic Wordmark */}
        <div className="overflow-hidden py-4 sm:py-8 my-2">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-debata font-semibold tracking-[-0.04em] text-white leading-[0.88] select-none text-[84px] sm:text-[140px] md:text-[190px] lg:text-[250px] xl:text-[290px] text-center sm:text-left whitespace-nowrap"
          >
            Darani
          </motion.h2>
        </div>

        {/* Minimal Editorial Links Bar */}
        <div className="pt-12 sm:pt-16 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm font-modernist text-neutral-400">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-5 sm:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/darani-s-v-79659b28b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/darani-sv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/dextro_kiddo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={`mailto:${socialsData.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-500 gap-2">
          <div>
            &copy; {new Date().getFullYear()} Darani Viswanathan (தரணி ச.வி). All rights reserved.
          </div>
          <div>
            Creative Designer &amp; Developer &times; AI &amp; Data Science
          </div>
        </div>
      </div>
    </footer>
  );
};
