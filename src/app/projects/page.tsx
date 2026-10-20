"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaButton } from "@/components/ui/NovaButton";
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
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-modernist selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Header: Debata Display Headline */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-900 dark:text-neutral-300 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            <span>PORTFOLIO &amp; ARCHIVE</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.08] mb-6 max-w-4xl">
            Recent Client &amp; Creative{" "}
            <span className="nova-gradient-text">Case Studies.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl font-normal">
            Explore design systems, startup concepts, visual communications, and frontend projects delivered with purpose.
          </p>
        </div>

        {/* Filter & Search Bar: Modernist */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-neutral-200 dark:border-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  data-cursor="LINK"
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-modernist transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white dark:text-black font-semibold"
                      : "text-neutral-600 dark:text-[#A3A3A3] hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="archive-filter-pill"
                      className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-sm z-0"
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
              placeholder="Search by keyword, tool..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center font-modernist">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">No projects match your filter.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-[#121212] text-xs font-modernist text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -6 }}
                  data-cursor="PROJECT"
                  data-cursor-text="Explore"
                  className="group rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 overflow-hidden flex flex-col justify-between transition-colors duration-300 shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-[#0a0a0a]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-modernist tracking-wider uppercase bg-white/90 dark:bg-black/85 backdrop-blur-md text-neutral-900 dark:text-white font-semibold border border-neutral-200 dark:border-white/10 shadow-sm">
                          {project.filterCategory}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="text-xs font-modernist text-neutral-400 dark:text-neutral-500 mb-1">
                        {project.year} · {project.role}
                      </div>

                      <h3 className="font-debata text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-white mb-3 tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-white dark:bg-[#0a0a0a] text-[10px] font-modernist text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-neutral-200 dark:border-white/10 mt-4 flex items-center justify-between">
                    <span className="text-xs font-modernist text-neutral-400 dark:text-neutral-500">
                      {project.status || "Completed"}
                    </span>

                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="LINK"
                      className="inline-flex items-center gap-1.5 text-xs font-modernist font-semibold text-neutral-900 hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors group/link py-1"
                    >
                      <span className="group-hover/link:underline">View Case Study</span>
                      <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have a concept in mind?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Let&apos;s turn your requirements into intuitive interfaces and structured brand identities.
            </p>
          </div>
          <NovaButton href="/contact" variant="primary" size="lg">
            Let&apos;s Connect
          </NovaButton>
        </section>
      </main>

      <NovaFooter />
    </div>
  );
}
