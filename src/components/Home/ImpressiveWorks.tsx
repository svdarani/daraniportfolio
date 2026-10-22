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

          {/* Peeking Mobile Device Mockups at the bottom, matching reference image */}
          <div className="relative w-full h-[200px] sm:h-[260px] lg:h-[300px] overflow-hidden bg-gradient-to-t from-neutral-950/80 to-transparent border-t border-white/[0.04]">
            <div className="absolute inset-x-0 -bottom-24 sm:-bottom-20 flex justify-center items-end gap-3 sm:gap-6 lg:gap-8 px-4 pointer-events-none select-none">
              
              {/* Phone 1 (Left, tilted slightly left) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-[180px] sm:w-[240px] lg:w-[280px] h-[360px] sm:h-[460px] rounded-[32px] sm:rounded-[40px] bg-[#121318] border-[5px] sm:border-[7px] border-neutral-800 shadow-2xl p-3 sm:p-4 flex flex-col justify-between"
              >
                {/* Speaker Notch */}
                <div className="w-16 h-3 bg-neutral-900 rounded-full mx-auto mb-2" />
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-[10px] sm:text-xs font-mono text-neutral-500">Today at 10:10 AM</div>
                  <div className="h-10 sm:h-12 rounded-xl bg-neutral-800/80 p-2 sm:p-2.5 flex items-center justify-between">
                    <div className="w-1/2 h-2.5 bg-neutral-700 rounded-full" />
                    <div className="w-6 h-2 bg-emerald-500/80 rounded-full" />
                  </div>
                  <div className="h-16 sm:h-20 rounded-xl bg-neutral-800/60 p-2 sm:p-2.5 flex flex-col justify-around">
                    <div className="w-3/4 h-2 bg-neutral-700 rounded-full" />
                    <div className="w-1/3 h-2 bg-neutral-600 rounded-full" />
                  </div>
                </div>
                <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
              </motion.div>

              {/* Phone 2 (Center, white chassis, light mode analytics dashboard) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[200px] sm:w-[270px] lg:w-[310px] h-[400px] sm:h-[500px] rounded-[36px] sm:rounded-[44px] bg-[#F8F9FA] border-[6px] sm:border-[8px] border-neutral-200 text-neutral-900 shadow-2xl p-3 sm:p-5 flex flex-col justify-between -translate-y-4"
              >
                {/* Speaker Notch */}
                <div className="w-20 h-3.5 bg-neutral-300 rounded-full mx-auto mb-3" />
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-neutral-800">
                    <span>Challenges</span>
                    <span className="text-neutral-400">Featured</span>
                  </div>
                  
                  {/* Circular Donut Metric Preview */}
                  <div className="p-3 bg-white rounded-2xl shadow-xs border border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase font-mono">Overview</div>
                      <div className="text-sm sm:text-base font-bold text-neutral-900">$28,450</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-4 border-indigo-500 border-t-emerald-400 flex items-center justify-center text-[9px] font-bold">
                      78%
                    </div>
                  </div>

                  {/* Chart Line Simulation */}
                  <div className="h-14 bg-white rounded-2xl p-2.5 flex items-end gap-1.5 justify-around border border-neutral-100">
                    <div className="w-2 bg-neutral-200 h-4 rounded-t" />
                    <div className="w-2 bg-neutral-200 h-7 rounded-t" />
                    <div className="w-2 bg-neutral-900 h-10 rounded-t" />
                    <div className="w-2 bg-neutral-200 h-6 rounded-t" />
                    <div className="w-2 bg-neutral-900 h-9 rounded-t" />
                  </div>
                </div>
                <div className="h-10 bg-neutral-900 rounded-xl" />
              </motion.div>

              {/* Phone 3 (Right, tilted right, Starbucks/banking app $148,63) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[180px] sm:w-[240px] lg:w-[280px] h-[360px] sm:h-[460px] rounded-[32px] sm:rounded-[40px] bg-[#0E1015] border-[5px] sm:border-[7px] border-neutral-800 shadow-2xl p-3 sm:p-4 flex flex-col justify-between"
              >
                {/* Speaker Notch */}
                <div className="w-16 h-3 bg-neutral-900 rounded-full mx-auto mb-2" />
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-[10px] sm:text-xs font-semibold text-neutral-400 flex items-center justify-between">
                    <span>Starbucks</span>
                    <span className="text-[9px] font-mono text-neutral-500">12:34</span>
                  </div>

                  {/* Starbucks Balance Card matching reference: $148,63 */}
                  <div className="p-3 bg-[#181A22] rounded-2xl border border-white/5 space-y-1">
                    <div className="text-[10px] text-neutral-400">Total Balance</div>
                    <div className="text-base sm:text-xl font-bold text-white font-debata">
                      $148,63
                    </div>
                    <div className="text-[9px] text-emerald-400 font-mono">
                      You’ve spent -$332.4 this month
                    </div>
                  </div>

                  {/* Statistic row */}
                  <div className="h-10 sm:h-12 bg-[#181A22] rounded-xl p-2 flex items-center justify-between text-neutral-300 text-[10px] sm:text-xs">
                    <span>Statistic</span>
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                      ↑
                    </div>
                  </div>
                </div>
                <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
              </motion.div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ImpressiveWorks;
