"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCloud } from "react-icons/fi";
import { SiX, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export const OversizedFooter: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>("11:30 PM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full px-3 sm:px-6 lg:px-8 pb-6 sm:pb-10 pt-10 sm:pt-16 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      {/* Outer Floating Rounded Card Container matching reference */}
      <div className="max-w-[1400px] mx-auto rounded-[32px] sm:rounded-[48px] lg:rounded-[56px] bg-[#F4F4F6] dark:bg-[#121214] border border-neutral-200/90 dark:border-white/10 p-7 sm:p-12 lg:p-16 pb-5 sm:pb-7 relative overflow-hidden transition-colors shadow-xs">
        
        {/* Top 4-Column Header Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start pb-10 sm:pb-14">
          
          {/* Column 1: Statement / Bio */}
          <div className="lg:col-span-4 pr-0 lg:pr-4">
            <p className="font-outfit font-medium text-lg sm:text-[21px] leading-[1.3] text-neutral-950 dark:text-white max-w-[300px] tracking-tight">
              Darani is independent creative designer, developer and founder
            </p>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="lg:col-span-2">
            <span className="text-xs sm:text-[13px] font-medium text-neutral-500 dark:text-neutral-400 block mb-3">
              Explore
            </span>
            <ul className="space-y-1.5 text-xs sm:text-[13px] font-normal text-neutral-700 dark:text-neutral-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition-colors block py-0.5"
                >
                  Bio
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-black dark:hover:text-white transition-colors block py-0.5"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-black dark:hover:text-white transition-colors block py-0.5"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition-colors block py-0.5"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Me (2-column social badges) */}
          <div className="lg:col-span-3">
            <span className="text-xs sm:text-[13px] font-medium text-neutral-500 dark:text-neutral-400 block mb-3">
              Follow me
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-[13px]">
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span className="w-4 h-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold flex items-center justify-center shrink-0">
                  <SiX className="w-2.5 h-2.5" />
                </span>
                <span className="truncate">@darani_sv</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dextro_kiddo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] text-white flex items-center justify-center shrink-0">
                  <SiInstagram className="w-2.5 h-2.5" />
                </span>
                <span className="truncate">@dextro_kiddo</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/darani-s-v-79659b28b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span className="w-4 h-4 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                  <SiLinkedin className="w-2.5 h-2.5" />
                </span>
                <span className="truncate">@darani-s-v</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/darani-sv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span className="w-4 h-4 rounded-full bg-[#24292F] text-white flex items-center justify-center shrink-0">
                  <SiGithub className="w-2.5 h-2.5" />
                </span>
                <span className="truncate">@svdarani</span>
              </a>

              {/* ArtZa Designs */}
              <a
                href="https://www.instagram.com/artza_designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group col-span-2"
              >
                <span className="w-4 h-4 rounded-full bg-[#E63946] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                  A
                </span>
                <span className="truncate">@artzadesigns</span>
              </a>
            </div>
          </div>

          {/* Column 4: Interactive Action Blocks */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            {/* Action 1: Call Darani */}
            <Link
              href="/contact"
              className="group block py-1"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-outfit font-semibold text-base sm:text-lg text-[#E63946] dark:text-[#FF5A5F] group-hover:opacity-90 transition-opacity">
                  Call Darani
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E63946] dark:bg-[#FF5A5F] text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300 shrink-0 shadow-xs">
                  <FiArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
              <span className="text-[12px] sm:text-[13px] text-neutral-500 dark:text-neutral-400 block mt-0.5">
                Let&apos;s work together
              </span>
            </Link>

            {/* Faint Divider */}
            <div className="w-full h-px bg-neutral-300/60 dark:bg-white/10 my-3.5" />

            {/* Action 2: Courses & Tools / Projects */}
            <Link
              href="/projects"
              className="group block py-1"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-outfit font-semibold text-base sm:text-lg text-neutral-950 dark:text-white group-hover:opacity-90 transition-opacity">
                  Courses &amp; Tools
                </span>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300 shrink-0 shadow-xs">
                  <FiArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
              <span className="text-[12px] sm:text-[13px] text-neutral-500 dark:text-neutral-400 block mt-0.5">
                Creative tools
              </span>
            </Link>
          </div>
        </div>

        {/* Massive Geometric Lowercase Wordmark ("darani") */}
        <div className="w-full overflow-hidden pt-6 sm:pt-10 pb-2 select-none">
          <svg
            viewBox="0 0 1000 215"
            className="w-full h-auto select-none block overflow-visible text-neutral-950 dark:text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="darani"
          >
            <text
              x="500"
              y="185"
              textAnchor="middle"
              fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="900"
              fontSize="240"
              letterSpacing="-0.05em"
              className="select-none lowercase"
            >
              darani
            </text>
          </svg>
        </div>

        {/* Bottom Sub-Footer Info Row */}
        <div className="pt-4 sm:pt-6 border-t border-neutral-300/40 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 select-none">
          {/* Left: Copyright & Privacy */}
          <div className="flex items-center gap-6">
            <span>Darani &copy; {new Date().getFullYear()}</span>
            <Link
              href="/contact"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Right: Location, Live Time, Weather */}
          <div className="flex items-center gap-5 sm:gap-6 font-mono text-neutral-600 dark:text-neutral-400">
            <span>Tamil Nadu</span>
            <span>{timeStr}</span>
            <span className="flex items-center gap-1.5">
              <span>28&deg;C</span>
              <FiCloud className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
