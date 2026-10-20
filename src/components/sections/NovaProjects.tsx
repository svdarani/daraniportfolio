"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { NovaButton } from "../ui/NovaButton";
import { projectsData } from "@/data/projects";
import { FiArrowUpRight } from "react-icons/fi";

const filterCategories = [
  "All",
  "UI/UX",
  "Branding",
  "Graphic Design",
  "Web Design",
  "AI & Technology",
  "Events",
] as const;

export const NovaProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return p.featured;
    return p.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="section-contain py-24 sm:py-32 bg-neutral-50 dark:bg-[#090A0F] relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <NovaSectionHeader
            eyebrow="03 / SELECTED WORK"
            titleStart="Selected"
            titleHighlight="Work"
            description="Explore a selection of design work, startup concepts, digital experiences, and creative projects that reflect my interests across design and technology."
            className="mb-0 md:mb-0"
          />

          <NovaButton href="/works" variant="secondary" size="md">
            View All Projects
          </NovaButton>
        </div>

        {/* Filter Pills with animated sliding indicator */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-neutral-200 dark:border-white/10">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                data-cursor="LINK"
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-modernist transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white dark:text-black font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-active-filter-pill"
                    className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-md z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid with layout re-order animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                data-cursor="PROJECT"
                data-cursor-text="Explore"
                className="group rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 overflow-hidden flex flex-col justify-between transition-shadow duration-300 shadow-sm hover:shadow-xl relative"
              >
                <div>
                  {/* Visual Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-[#0c0c0c]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 transform-gpu"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Filter category pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-modernist tracking-wider uppercase bg-white/95 dark:bg-black/95 text-black dark:text-white font-semibold border border-neutral-200 dark:border-white/15 shadow-sm backdrop-blur-sm">
                        {project.filterCategory}
                      </span>
                    </div>

                    {/* Year badge top right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/60 text-white backdrop-blur-sm border border-white/10">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="text-xs font-modernist text-neutral-500 dark:text-neutral-400 mb-1 flex items-center justify-between">
                      <span>{project.role}</span>
                      <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                        {project.status || "Completed"}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-debata text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-white mb-3 tracking-tight group-hover:text-black dark:group-hover:text-neutral-100 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-[#0c0c0c] text-[10px] font-modernist text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 sm:p-7 pt-0 border-t border-neutral-200 dark:border-white/10 mt-4 flex items-center justify-between">
                  <span className="text-xs font-modernist text-neutral-400 dark:text-neutral-500">
                    Case Study
                  </span>

                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor="LINK"
                    className="inline-flex items-center gap-1.5 text-xs font-modernist font-semibold text-neutral-900 hover:text-black dark:text-white dark:hover:text-neutral-300 transition-colors group/link py-1"
                  >
                    <span className="underline-offset-4 group-hover/link:underline">Explore Case Study</span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

