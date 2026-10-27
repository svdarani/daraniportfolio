"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { experiencesData } from "@/data/experience";
import { achievementsData } from "@/data/achievements";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const filterTabs = [
  "All",
  "Professional Roles",
  "Academics",
  "Honors & Awards",
];

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredExperiences = experiencesData.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Professional Roles") return item.type !== "Education";
    if (activeTab === "Academics") return item.type === "Education";
    return false;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-white font-modernist selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* Global Navigation (Bottom Dock) */}
      <NovaNavbar />

      <main className="pt-20 sm:pt-28 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Header: Minimalist Display Title matching Reference Image */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-700 dark:text-neutral-300 mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>JOURNEY &amp; CREDENTIALS</span>
          </div>

          <h1 className="font-debata text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
            Experience.
          </h1>

          <p className="font-modernist text-base sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl font-normal leading-relaxed">
            A comprehensive record of my design internships, venture founding, startup incubation engagements, and academic training.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-6 border-b border-neutral-300/80 dark:border-white/10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white dark:text-black font-semibold shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="experience-filter-pill"
                    className="absolute inset-0 rounded-full bg-neutral-950 dark:bg-white z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Experience List matching Reference Image */}
        {(activeTab === "All" || activeTab === "Professional Roles" || activeTab === "Academics") && (
          <div className="border-t border-neutral-300/80 dark:border-white/10 mb-20 sm:mb-28">
            <AnimatePresence mode="popLayout">
              {filteredExperiences.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group py-8 sm:py-12 border-b border-neutral-300/80 dark:border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-14 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-2 sm:px-4 rounded-2xl"
                >
                  {/* Left Column: Role at Organization + Detailed Description */}
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-modernist text-neutral-500 uppercase tracking-wider mb-2">
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>

                    <h2 className="font-debata text-xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-3 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors tracking-tight">
                      {item.role} at {item.organization}
                    </h2>

                    <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-5">
                      {item.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-1.5 mb-5">
                      {item.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-modernist text-neutral-600 dark:text-neutral-400">
                          <FiCheckCircle className="w-3.5 h-3.5 text-neutral-900 dark:text-white mt-1 flex-shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-[11px] font-modernist text-neutral-600 dark:text-neutral-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Bold Period Year Range */}
                  <div className="font-debata text-lg sm:text-2xl font-bold text-neutral-900 dark:text-neutral-200 md:text-right whitespace-nowrap self-start md:pt-1">
                    {item.period}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Honors & Achievements Section */}
        {(activeTab === "All" || activeTab === "Honors & Awards") && (
          <section className="mb-24 sm:mb-32">
            <div className="mb-10">
              <h2 className="font-debata text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3">
                Honors &amp; Recognitions.
              </h2>
              <p className="font-modernist text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                Verified hackathon accomplishments, student leadership, and professional certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievementsData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-7 rounded-3xl bg-white dark:bg-[#121318] border border-neutral-300/80 dark:border-white/10 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100 dark:border-white/5">
                      <span className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 font-semibold">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-modernist font-bold bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-debata text-lg sm:text-xl font-bold text-neutral-950 dark:text-white mb-1.5 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs font-modernist text-neutral-400 mb-3">
                      {item.issuer}
                    </div>

                    <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Minimalist Bottom CTA Block */}
        <section className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#121318] border border-neutral-300/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have an opportunity or project?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              I am open to selected creative design, UI/UX, and frontend developer opportunities.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-modernist font-semibold text-sm transition-all duration-300 shadow-sm"
          >
            <span>Let&apos;s Connect</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </section>
      </main>

      <NovaFooter />
    </div>
  );
}
