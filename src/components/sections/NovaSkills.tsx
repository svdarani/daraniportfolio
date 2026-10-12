"use client";

import React from "react";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { FiLayout, FiImage, FiCode, FiCpu } from "react-icons/fi";

const skillGroups = [
  {
    title: "UI/UX & Product Design",
    icon: <FiLayout className="w-5 h-5 text-black dark:text-white" />,
    badge: "Product Design",
    skills: [
      { name: "Interface Design", status: "Practical Experience" },
      { name: "Wireframing", status: "Practical Experience" },
      { name: "Prototyping", status: "Practical Experience" },
      { name: "User Flows", status: "Used in Projects" },
      { name: "Responsive Design", status: "Practical Experience" },
      { name: "Visual Hierarchy", status: "Practical Experience" },
      { name: "Design Systems", status: "Used in Projects" },
      { name: "Interaction Design", status: "Used in Projects" },
    ],
  },
  {
    title: "Graphic Design & Branding",
    icon: <FiImage className="w-5 h-5 text-black dark:text-white" />,
    badge: "Brand & Creatives",
    skills: [
      { name: "Brand Identity", status: "Practical Experience" },
      { name: "Typography", status: "Practical Experience" },
      { name: "Color Theory", status: "Practical Experience" },
      { name: "Social Media Design", status: "Practical Experience" },
      { name: "Event Branding", status: "Practical Experience" },
      { name: "Poster Design", status: "Practical Experience" },
      { name: "Presentation Design", status: "Practical Experience" },
      { name: "Visual Communication", status: "Practical Experience" },
    ],
  },
  {
    title: "Web Development",
    icon: <FiCode className="w-5 h-5 text-black dark:text-white" />,
    badge: "Frontend Tech",
    skills: [
      { name: "HTML & CSS", status: "Practical Experience" },
      { name: "JavaScript", status: "Practical Experience" },
      { name: "TypeScript", status: "Used in Projects" },
      { name: "React", status: "Used in Projects" },
      { name: "Next.js", status: "Used in Projects" },
      { name: "Tailwind CSS", status: "Practical Experience" },
      { name: "Git & GitHub", status: "Practical Experience" },
      { name: "Responsive Layouts", status: "Practical Experience" },
    ],
  },
  {
    title: "AI & Data Science",
    icon: <FiCpu className="w-5 h-5 text-black dark:text-white" />,
    badge: "Data & Systems",
    skills: [
      { name: "Python", status: "Practical Experience" },
      { name: "Java", status: "Familiar With" },
      { name: "AI Fundamentals", status: "Currently Learning" },
      { name: "Data Analysis", status: "Currently Learning" },
      { name: "Machine Learning Concepts", status: "Currently Learning" },
      { name: "Computer Vision Concepts", status: "Currently Learning" },
      { name: "NLP Fundamentals", status: "Currently Learning" },
      { name: "Prompt Engineering", status: "Practical Experience" },
    ],
  },
];

const primaryTools = [
  "Figma",
  "Canva",
  "Adobe Photoshop",
  "CorelDRAW",
  "VS Code",
  "GitHub",
  "Python",
  "Next.js",
  "Tailwind CSS",
];

export const NovaSkills: React.FC = () => {
  return (
    <section className="section-contain py-24 sm:py-32 bg-neutral-50 dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="CREATIVE EXPERTISE"
          titleStart="Creative &amp;"
          titleHighlight="Technical Toolkit"
          description="Disciplines, tools, and technical competencies developed through coursework, projects, internships, and startup collaborations."
        />

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-8 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="font-debata text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300">
                  {group.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-sm font-modernist font-medium text-neutral-900 dark:text-white mb-1">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-modernist text-neutral-500 dark:text-neutral-400">
                      {skill.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Active Tools Bar */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="text-[11px] font-modernist uppercase tracking-[0.14em] text-neutral-900 dark:text-neutral-300 font-semibold mb-1">
              Active Software &amp; Environments
            </div>
            <div className="font-debata text-lg sm:text-xl font-bold text-neutral-950 dark:text-white">
              Tools I actively use in creative &amp; coding workflows
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {primaryTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-xs sm:text-sm font-modernist text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
