"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <section id="projects" className="py-24 sm:py-32 bg-neutral-50 dark:bg-[#090A0F] relative transition-colors">
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

        {/* Filter Pills: Modernist */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-neutral-200 dark:border-white/[0.08]">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#326BFF] text-white shadow-[0_4px_16px_rgba(50,107,255,0.35)] font-semibold"
                    : "bg-white dark:bg-[#151821] text-neutral-600 dark:text-[#A5ADBD] hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/30 dark:hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-[#11131A]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/60 via-transparent to-transparent opacity-70" />

                  {/* Filter category pill: Modernist */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-modernist tracking-wider uppercase bg-white/90 dark:bg-[#090A0F]/85 backdrop-blur-md text-[#326BFF] dark:text-[#24D9FF] font-semibold border border-neutral-200 dark:border-white/10 shadow-sm">
                      {project.filterCategory}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD] mb-1">
                    {project.year} · {project.role}
                  </div>

                  {/* Project Title: Debata Display */}
                  <h3 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-3 tracking-tight transition-colors">
                    {project.title}
                  </h3>

                  {/* Description: Modernist */}
                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags: Modernist */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-[#11131A] text-[10px] font-modernist text-neutral-600 dark:text-[#A5ADBD] border border-neutral-200 dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:p-7 pt-0 border-t border-neutral-200 dark:border-white/[0.06] mt-4 flex items-center justify-between">
                <span className="text-xs font-modernist text-neutral-400 dark:text-[#A5ADBD]">
                  {project.status || "Completed"}
                </span>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-modernist font-semibold text-[#326BFF] hover:text-[#258CFF] dark:text-[#24D9FF] dark:hover:text-white transition-colors group/link"
                >
                  <span>Explore Case Study</span>
                  <FiArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
