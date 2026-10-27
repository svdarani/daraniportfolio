"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { FiArrowRight, FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export const HomeWorkSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Select top featured projects to showcase
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAF8F5] dark:bg-[#0B0C10] text-neutral-900 dark:text-white transition-colors duration-300 border-t border-neutral-200/60 dark:border-white/5">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Header Block matching Reference Image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-debata text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white mb-3"
            >
              Work.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-modernist text-base sm:text-lg text-neutral-500 dark:text-neutral-400 font-normal"
            >
              A selection of my latest work.
            </motion.p>
          </div>

          {/* Carousel Navigation Buttons matching Reference Image */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous work"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 dark:border-white/20 bg-white/70 dark:bg-white/5 flex items-center justify-center text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/15 transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next work"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-300 dark:border-white/20 bg-white/70 dark:bg-white/5 flex items-center justify-center text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/15 transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Project Cards Carousel matching Reference Image */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="min-w-[290px] sm:min-w-[360px] md:min-w-[420px] lg:min-w-[460px] flex-shrink-0 snap-start group"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                {/* Mockup Card Container matching Reference Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-200/70 dark:bg-neutral-900 border border-neutral-300/80 dark:border-white/10 shadow-xs group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 320px, 480px"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-modernist tracking-wider uppercase bg-white/90 dark:bg-black/85 backdrop-blur-md text-neutral-900 dark:text-white font-semibold border border-neutral-200 dark:border-white/10 shadow-xs">
                      {project.filterCategory}
                    </span>
                  </div>
                </div>

                {/* Typography below card matching Reference Image */}
                <div className="pt-4 sm:pt-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <FiArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                  </div>
                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mt-1 font-normal">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Work Link */}
        <div className="mt-8 sm:mt-12 flex justify-start sm:justify-end">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-modernist font-semibold text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
          >
            <span>Explore All Projects &amp; Case Studies</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkSection;
