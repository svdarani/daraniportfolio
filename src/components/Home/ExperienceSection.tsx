"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { experiencesData } from "@/data/experience";
import { FiArrowUpRight } from "react-icons/fi";

export const ExperienceSection: React.FC = () => {
  // Show key professional, venture, and event roles
  const displayExperiences = experiencesData.filter(
    (e) => e.type !== "Education" || e.featured
  );

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Section Header: Minimalist Display Title matching Reference Image */}
        <div className="mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-debata text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white"
          >
            Experience.
          </motion.h2>
        </div>

        {/* Minimalist Experience Rows with horizontal dividers matching Reference Image */}
        <div className="border-t border-neutral-300/80 dark:border-white/10">
          {displayExperiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group py-8 sm:py-10 border-b border-neutral-300/80 dark:border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-2 sm:px-4 rounded-xl"
            >
              {/* Left Column: Role at Organization + Description */}
              <div className="max-w-2xl">
                <h3 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mb-2.5 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {item.role} at {item.organization}
                </h3>
                <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Bold Period Year Range */}
              <div className="font-debata text-lg sm:text-2xl font-bold text-neutral-900 dark:text-neutral-200 md:text-right whitespace-nowrap self-start md:pt-1">
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Experience Link */}
        <div className="mt-10 sm:mt-12 flex justify-start sm:justify-end">
          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-modernist font-semibold text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
          >
            <span>View Full Journey &amp; Credentials</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
