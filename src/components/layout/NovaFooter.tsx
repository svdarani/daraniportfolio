"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NovaButton } from "../ui/NovaButton";
import { socialsData } from "@/data/socials";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "Experience", href: "/experience" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const NovaFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-contain bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-white/10 relative pt-20 pb-12 overflow-hidden transition-colors">
      {/* Top Banner CTA */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-16 pb-16 border-b border-neutral-200 dark:border-white/10">
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-10 sm:p-14 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 shadow-sm relative overflow-hidden transition-colors"
        >
          <div className="max-w-2xl relative z-10">
            <span className="text-[11px] font-modernist uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-300 font-semibold mb-2 block">
              COLLABORATE WITH DARANI
            </span>
            <h3 className="font-debata text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-950 dark:text-white leading-tight mb-3 tracking-tight">
              Let&apos;s Create <span className="nova-gradient-text">Something Meaningful.</span>
            </h3>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Ready to elevate your startup&apos;s brand, explore a digital product concept, or design high-converting visual collaterals?
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <NovaButton href="/contact" variant="primary" size="lg">
              Start a Conversation
            </NovaButton>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Links & Wordmark */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200 dark:border-white/10 items-start">
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3 mb-4 select-none">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white p-[1.5px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                <div className="w-full h-full bg-white dark:bg-black rounded-[10px] flex items-center justify-center font-debata font-semibold text-sm tracking-wider text-black dark:text-white">
                  DV
                </div>
              </div>
              <div>
                <span className="font-debata font-semibold text-lg text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors block">
                  Darani Viswanathan
                </span>
                <span className="text-[11px] font-modernist text-neutral-500 dark:text-neutral-400">
                  Creative Designer &amp; Developer
                </span>
              </div>
            </Link>

            <p className="font-modernist text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm mb-6">
              I combine creative design, frontend development, and artificial intelligence to turn ideas into meaningful digital experiences.
            </p>

            <div className="text-xs font-modernist text-neutral-500 dark:text-neutral-400">
              Designed with curiosity. Built with creativity.
            </div>
          </div>

          {/* Navigation Links (col-span-4) */}
          <div className="md:col-span-4">
            <div className="text-[11px] font-modernist uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-300 font-semibold mb-4">
              Explore Portfolio
            </div>
            <ul className="grid grid-cols-2 gap-2.5 text-sm font-modernist text-neutral-600 dark:text-neutral-400">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    data-cursor="LINK"
                    className="inline-block hover:text-black dark:hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect (col-span-3) */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-modernist uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-300 font-semibold mb-4">
              Connect Directly
            </div>
            <div className="flex items-center gap-3 mb-6">
              <motion.a
                href={socialsData.links.find((l) => l.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                data-cursor="LINK"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                aria-label="GitHub profile"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={socialsData.links.find((l) => l.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                data-cursor="LINK"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={socialsData.links.find((l) => l.platform === "Instagram")?.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                data-cursor="LINK"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                aria-label="Instagram profile"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${socialsData.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                data-cursor="LINK"
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black/40 dark:text-neutral-400 dark:hover:text-white dark:hover:border-white/40 transition-colors shadow-xs"
                aria-label="Email Darani"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              data-cursor="LINK"
              className="group inline-flex items-center gap-2 text-xs font-modernist text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span className="group-hover:underline">Back to Top</span>
              <FiArrowUp className="w-4 h-4 text-black dark:text-white transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-modernist text-neutral-500 dark:text-neutral-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Darani Viswanathan. All rights reserved.
          </div>
          <div>
            Debata &times; Modernist Typographic Architecture.
          </div>
        </div>
      </div>
    </footer>
  );
};

