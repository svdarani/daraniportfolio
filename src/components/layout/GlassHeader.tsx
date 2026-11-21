"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export interface NavItem {
  label: string;
  href: string;
  targetId?: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/about", targetId: "about" },
  { label: "Skills", href: "/skills", targetId: "skills" },
  { label: "Experience", href: "/experience", targetId: "experience" },
  { label: "Projects", href: "/projects", targetId: "works" },
  { label: "Contact", href: "/contact", targetId: "contact" },
];

export const GlassHeader: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("About");

  useEffect(() => {
    const handleScroll = () => {
      // If we are on the homepage, show after scrolling past the hero section
      if (pathname === "/") {
        const heroEl = document.getElementById("hero-section");
        if (heroEl) {
          const rect = heroEl.getBoundingClientRect();
          // Trigger when hero section top has scrolled past (~300px) or its bottom is passing view
          const passedHero = window.scrollY > 300 || rect.bottom <= 350;
          setIsVisible(passedHero);
        } else {
          setIsVisible(window.scrollY > 250);
        }

        // Section spy for homepage to update active section indicator
        const sections = [
          { id: "contact", label: "Contact" },
          { id: "skills", label: "Skills" },
          { id: "works", label: "Projects" },
          { id: "experience", label: "Experience" },
          { id: "about", label: "About" },
        ];

        let found = false;
        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 320) {
              setActiveSection(sec.label);
              found = true;
              break;
            }
          }
        }
        if (!found) {
          setActiveSection("About");
        }
      } else {
        // On subpages, show when scrolled past initial banner
        setIsVisible(window.scrollY > 60);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (pathname === "/" && item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isItemActive = (item: NavItem) => {
    if (pathname === "/") {
      return activeSection === item.label;
    }
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -22, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full z-40 pointer-events-none select-none"
        >
          {/* Max-width container matching Hero Billboard bounds, aligning nav to the right */}
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex items-center justify-end">
            {/* Right-aligned Glassmorphism Navigation Capsule */}
            <nav
              role="navigation"
              aria-label="Sticky Glass Navigation"
              className="pointer-events-auto flex items-center gap-4 sm:gap-6 lg:gap-7 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-[#121316]/80 backdrop-blur-xl sm:backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleItemClick(e, item)}
                    className={`relative text-xs sm:text-sm font-modernist tracking-normal py-0.5 transition-colors duration-200 ${
                      active
                        ? "font-bold text-neutral-950 dark:text-white"
                        : "font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <motion.span
                        layoutId="activeGlassDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF4B0A]"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default GlassHeader;
