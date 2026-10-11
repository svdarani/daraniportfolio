"use client";

import React from "react";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectGrid() {
  // Show featured projects on homepage
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} priority={index < 2} />
      ))}
    </div>
  );
}
