"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NovaButton } from "../ui/NovaButton";
import { ThemeToggle } from "../theme/ThemeToggle";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { socialsData } from "@/data/socials";
import { BottomDock } from "../dock/BottomDock";

const navLinks = [
  { name: "Home", href: "/", sectionId: "hero" },
  { name: "Skills", href: "/skills", sectionId: "skills" },
  { name: "Experience", href: "/experience", sectionId: "experience" },
  { name: "About", href: "/about", sectionId: "about" },
  { name: "Projects", href: "/projects", sectionId: "projects" },
  { name: "Resume", href: "/resume", sectionId: "resume" },
  { name: "Contact", href: "/contact", sectionId: "contact" },
];

export const NovaNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for header style
  useEffect(() => {
    let ticking = false;
    let lastState = window.scrollY > 20;
    if (lastState) setScrolled(true);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          if (isScrolled !== lastState) {
            lastState = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
      className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#090A0F]/90 backdrop-blur-md border-b border-neutral-200 dark:border-white/[0.08] shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo / Monogram with interactive tilt */}
        <Link
          href="/"
          className="group flex items-center gap-3 select-none"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-neutral-400 to-neutral-700 p-[1.5px] shadow-[0_0_15px_rgba(255,255,255,0.12)] cursor-pointer"
          >
            <div className="w-full h-full bg-white dark:bg-black rounded-[10px] flex items-center justify-center font-debata font-semibold text-sm tracking-wider text-black dark:text-white">
              DV
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-debata font-semibold text-base tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
              Darani Viswanathan
            </span>
            <span className="text-[11px] font-modernist text-neutral-500 dark:text-neutral-400 tracking-wide">
              Creative Designer &amp; Developer
            </span>
          </div>
        </Link>


        {/* Right Desktop Actions (Theme Switcher + Contact CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle size="sm" />
          <NovaButton href="/contact" variant="primary" size="sm">
            Contact Now
          </NovaButton>
        </div>

        {/* Mobile Header Controls (Theme Switcher + Hamburger Toggle) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle size="sm" />
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-[70px] bg-white/95 dark:bg-[#090A0F]/95 backdrop-blur-xl z-40 flex flex-col justify-between p-6 overflow-y-auto border-t border-neutral-200 dark:border-white/[0.08]"
          >
            <div className="flex flex-col gap-2 pt-4">
              <span className="text-[11px] font-modernist uppercase tracking-[0.14em] text-neutral-500 dark:text-[#A5ADBD] mb-2 px-3">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-lg font-modernist font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-black dark:text-white bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/20 font-semibold"
                        : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col gap-5 mt-6">
              <NovaButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Now
              </NovaButton>

              <div className="flex items-center justify-between pt-2 px-2">
                <span className="text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD]">
                  Theme
                </span>
                <ThemeToggle size="sm" showLabel />
              </div>

              <div className="flex items-center justify-center gap-5 pt-2 text-neutral-600 dark:text-[#A5ADBD]">
                <a
                  href={socialsData.links.find((l) => l.platform === "GitHub")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors p-2"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={socialsData.links.find((l) => l.platform === "LinkedIn")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={socialsData.links.find((l) => l.platform === "Instagram")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors p-2"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${socialsData.email}`}
                  className="hover:text-black dark:hover:text-white transition-colors p-2"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <BottomDock />
    </>
  );
};
