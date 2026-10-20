"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface FeaturedProject {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
  bgClass: string;
  imageFit?: "contain" | "cover";
  darkBorder?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "garlic",
    title: "Garlic – A Taxi & Food Delivery Mobile App",
    tags: ["UI Research", "UI Design", "User Journey", "Prototyping", "Figma"],
    image: "/images/project/carlic.png",
    link: "/works/case-studies/carlic-case-study",
    bgClass: "bg-[#EEECF8] dark:bg-[#171524]",
    imageFit: "cover",
  },
  {
    id: "apple-clone",
    title: "Apple Clone",
    tags: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    image: "/images/project/apple.png",
    link: "/projects/apple-clone",
    bgClass: "bg-[#050505] dark:bg-[#070707]",
    imageFit: "cover",
    darkBorder: "border border-neutral-800 dark:border-white/10",
  },
  {
    id: "quarto",
    title: "Quarto",
    tags: ["Next.js", "React", "TailwindCSS", "E-commerce UI"],
    image: "/images/project/quarto.png",
    link: "/projects/quarto",
    bgClass: "bg-[#E6E6E6] dark:bg-[#1C1C1E]",
    imageFit: "cover",
  },
  {
    id: "cineflex",
    title: "Cineflex",
    tags: ["Next.js", "React", "TailwindCSS", "Dark Theme", "Movie Booking"],
    image: "/images/project/cineflex.png",
    link: "/projects/cineflex",
    bgClass: "bg-[#E50914] dark:bg-[#B80812]",
    imageFit: "cover",
  },
];

export const ImpressiveWorks: React.FC = () => {
  return (
    <section id="works" className="w-full py-20 sm:py-28 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-debata text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-white">
              Impressive Work
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/projects"
              data-cursor="LINK"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-modernist uppercase tracking-wider font-semibold text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <span>WORKS</span>
              <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* 2x2 Grid matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={project.link}
                data-cursor="PROJECT"
                data-cursor-text="View"
                className="group block"
              >
                {/* Visual Image Showcase Card */}
                <div
                  className={`relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden ${project.bgClass} ${project.darkBorder || "border border-neutral-200/60 dark:border-white/10"} shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner overlay for visual polish */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
                </div>

                {/* Tags below thumbnail */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 mb-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-modernist bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="font-debata text-lg sm:text-2xl font-semibold text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-neutral-200 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <FiArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0 ml-2" />
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
