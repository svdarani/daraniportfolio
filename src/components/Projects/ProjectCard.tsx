"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`} className="group block no-underline text-inherit" data-cursor="PROJECT" data-cursor-text="View">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
      >
        {/* Project Thumbnail Image with reveal & zoom */}
        <div className="overflow-hidden rounded-2xl mb-4 relative aspect-[16/9] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 shadow-md">
          <Image
            src={imageError ? "/images/project/artza-designs.svg" : project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 md:group-hover:scale-105"
            onError={() => setImageError(true)}
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-white/15">
              {project.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-neutral-900/70 dark:bg-white/10 backdrop-blur-md text-white dark:text-gray-300">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="px-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-gray-400 group-hover:bg-neutral-200 dark:group-hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Arrow */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-medium text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300 transition-all duration-300 md:group-hover:bg-indigo-600 md:group-hover:text-white md:group-hover:translate-x-1 md:group-hover:-translate-y-1">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Short description */}
          <p className="text-xs text-neutral-600 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
