"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialsData } from "@/data/socials";

export const TalkContactSection: React.FC = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Eyebrow Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-modernist uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-6"
        >
          THAT&apos;S ALL FOR NOW.
        </motion.p>

        {/* Big Display Title & Circular Floating Button */}
        <div className="relative pb-16 sm:pb-24 border-b border-neutral-200 dark:border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h2 className="font-debata text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.05]">
              Got a project in mind? <br />
              <span className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300">
                Let&apos;s Talk
              </span>
            </h2>
          </motion.div>

          {/* Floating Vibrant Round "Get in touch" Button */}
          <div className="mt-8 sm:mt-0 sm:absolute sm:right-6 md:right-12 sm:bottom-12 md:bottom-16">
            <Link href="/contact" data-cursor="LINK" className="block group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-[#326BFF] hover:bg-[#2557E0] dark:bg-[#326BFF] dark:hover:bg-[#4375FF] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 select-none cursor-pointer"
              >
                <span className="font-modernist text-base sm:text-lg font-medium tracking-wide">
                  Get in touch
                </span>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Direct Contact Links */}
        <div className="pt-10 sm:pt-14 flex flex-wrap items-center gap-10 sm:gap-16 text-sm sm:text-base font-modernist">
          {/* Email */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              Email
            </span>
            <a
              href={`mailto:${socialsData.email}`}
              className="font-medium text-neutral-900 dark:text-white hover:underline underline-offset-4 transition-colors"
            >
              {socialsData.email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              Phone
            </span>
            <a
              href={`tel:${socialsData.phone.replace(/\s+/g, "")}`}
              className="font-medium text-neutral-900 dark:text-white hover:underline underline-offset-4 transition-colors font-mono"
            >
              {socialsData.phone}
            </a>
          </div>

          {/* Location */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-1">
              Location
            </span>
            <span className="font-medium text-neutral-900 dark:text-white">
              {socialsData.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
