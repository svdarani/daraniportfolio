"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiX, FiCheck } from "react-icons/fi";
import { socialsData } from "@/data/socials";

interface MenuWorkItem {
  id: string;
  title: string;
  number: string;
  href: string;
  category?: string;
}

const menuItems: MenuWorkItem[] = [
  {
    id: "home",
    title: "Home",
    number: "01",
    href: "/",
    category: "Main Portal",
  },
  {
    id: "about",
    title: "About Me",
    number: "02",
    href: "/about",
    category: "Story & Vision",
  },
  {
    id: "works",
    title: "Works",
    number: "03",
    href: "/projects",
    category: "Selected Projects",
  },
  {
    id: "insights",
    title: "Insights",
    number: "04",
    href: "/experience",
    category: "Learnings & Journey",
  },
];

export const ImpressiveWorks: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("works");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="works"
      className="w-full py-12 sm:py-20 lg:py-24 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Dark Showcase Container matching Showcasy Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] sm:rounded-[38px] lg:rounded-[48px] bg-[#0A0B0E] border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Inner Card Content */}
          <div className="relative z-10 p-6 sm:p-12 lg:p-16 pb-12 sm:pb-16">
            
            {/* Top Bar: Brand Logo + Let's Talk CTA + Close Icon Button */}
            <div className="flex items-center justify-between pb-8 sm:pb-14">
              {/* Brand Logo in bold lowercase with dot */}
              <Link
                href="/"
                className="group flex items-center select-none"
                aria-label="Home"
              >
                <span className="font-debata text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                  showcasy.
                </span>
              </Link>

              {/* Right CTA Controls */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 text-white text-xs sm:text-sm font-modernist font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span>Let’s Talk</span>
                  <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsDismissed(!isDismissed)}
                  aria-label="Toggle card action"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
                >
                  <FiX className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* Main Typographic Navigation List: Home, About Me, Works, Insights */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 pt-2 pb-10 sm:pb-16">
              {menuItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    onMouseEnter={() => setActiveItem(item.id)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-2 sm:py-3 transition-colors block select-none"
                    >
                      {/* Left: Huge Title + Number in parentheses */}
                      <div className="flex items-baseline gap-2 sm:gap-4">
                        <span className="font-debata text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-[-0.03em] leading-none text-white group-hover:text-neutral-300 transition-colors duration-200">
                          {item.title}
                        </span>
                        <span className="font-modernist text-base sm:text-xl lg:text-2xl font-normal text-neutral-400 group-hover:text-white transition-colors duration-200">
                          ({item.number})
                        </span>
                      </div>

                      {/* Right: Round Arrow Button matching Showcasy reference */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-105 flex-shrink-0 ml-4 shadow-sm">
                        <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Horizontal Line Divider */}
            <div className="w-full h-px bg-white/[0.12] mb-8 sm:mb-10" />

            {/* Bottom 2-Column Footer Area: Follow me + Stay connected */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
              
              {/* Column 1: Follow me. */}
              <div className="md:col-span-7">
                <span className="block text-xs sm:text-sm font-modernist font-normal text-neutral-400 mb-3 sm:mb-4">
                  Follow me.
                </span>
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
                  <a
                    href="https://www.instagram.com/dextro_kiddo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-modernist font-semibold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors"
                  >
                    <span>INSTAGRAM</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-modernist font-semibold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors"
                  >
                    <span>BEHANCE</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-modernist font-semibold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors"
                  >
                    <span>TWITTER</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-modernist font-semibold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors"
                  >
                    <span>DRIBBBLE</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/darani-sv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-modernist font-semibold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors"
                  >
                    <span>GITHUB</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Column 2: Stay connected w/ me. + Email Input */}
              <div className="md:col-span-5">
                <span className="block text-xs sm:text-sm font-modernist font-normal text-neutral-400 mb-3 sm:mb-4">
                  Stay connected w/ me.
                </span>
                
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="relative flex items-center border-b border-white/25 focus-within:border-white transition-colors pb-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-transparent text-sm sm:text-base font-modernist text-white placeholder-neutral-500 focus:outline-none pr-8"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="text-white hover:text-neutral-300 transition-colors p-1"
                    >
                      {submitted ? (
                        <FiCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <FiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                  <AnimatePresence>
                    {submitted && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-6 left-0 text-xs font-modernist text-emerald-400"
                      >
                        Thank you! You are now connected.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </form>
              </div>

            </div>
          </div>


        </motion.div>

      </div>
    </section>
  );
};

export default ImpressiveWorks;
