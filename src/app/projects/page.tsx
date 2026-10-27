"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { projectsData } from "@/data/projects";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";

const categories = [
  "All",
  "UI/UX",
  "Branding",
  "Graphic Design",
  "Web Design",
  "AI & Technology",
  "Events",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.filterCategory === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-white font-modernist selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* Global Navigation (Bottom Dock) */}
      <NovaNavbar />

      <main className="pt-20 sm:pt-28 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Header matching Reference Image */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-700 dark:text-neutral-300 mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>PORTFOLIO &amp; ARCHIVE</span>
          </div>

          <h1 className="font-debata text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3">
            Work.
          </h1>

          <p className="font-modernist text-base sm:text-xl text-neutral-500 dark:text-neutral-400 font-normal">
            A selection of my latest work.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-14 pb-6 border-b border-neutral-300/80 dark:border-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-modernist transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white dark:text-black font-semibold shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-400"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="work-filter-pill"
                      className="absolute inset-0 rounded-full bg-neutral-950 dark:bg-white z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-neutral-300/80 dark:border-white/10 text-xs sm:text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Work Grid matching Reference Image */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center font-modernist">
            <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-4">
              No projects found matching your search.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-black text-xs font-modernist font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group"
                >
                  <Link href={`/projects/${project.slug}`} className="block">
                    {/* Mockup Card Container matching Reference Image */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-200/70 dark:bg-neutral-900 border border-neutral-300/80 dark:border-white/10 shadow-2xs group-hover:shadow-2xl transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-modernist tracking-wider uppercase bg-white/90 dark:bg-black/85 backdrop-blur-md text-neutral-900 dark:text-white font-semibold border border-neutral-200 dark:border-white/10 shadow-xs">
                          {project.filterCategory}
                        </span>
                      </div>
                    </div>

                    {/* Typography below image matching Reference Image */}
                    <div className="pt-4 sm:pt-5">
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                          {project.title}
                        </h2>
                        <FiArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                      </div>

                      <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mt-1 font-normal">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Minimalist Bottom CTA Block */}
        <section className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#121318] border border-neutral-300/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have a concept in mind?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Let&apos;s turn your requirements into intuitive interfaces, brand systems, and production web apps.
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
