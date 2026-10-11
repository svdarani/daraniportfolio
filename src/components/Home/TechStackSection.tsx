"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, SkillItem } from "@/data/skills";

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("01");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const currentCategoryObj =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-neutral-50/60 dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
              INTERACTIVE TECH STACK
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              Tools &amp; Technologies I Build With
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-md mt-4 md:mt-0 leading-relaxed font-light">
            Hover over any technology to explore where and how it powers my engineering, data science, and design workflows.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 pb-4 border-b border-neutral-200 dark:border-white/10">
          {skillCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setHoveredSkill(null);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                    : "bg-neutral-200/60 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
                }`}
              >
                <span className={isActive ? "text-indigo-400 dark:text-indigo-600" : "text-neutral-400 dark:text-gray-500"}>
                  {cat.id}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid + Details Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="wait">
              {currentCategoryObj.skills.map((skill, idx) => {
                const isSelected = hoveredSkill?.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-white dark:bg-neutral-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10 scale-[1.02]"
                        : "bg-white/80 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-neutral-900/80 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className={`text-lg font-medium transition-colors ${
                          isSelected ? "text-indigo-600 dark:text-indigo-400 font-semibold" : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-gray-400">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Technology Detail Panel */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-white/10 shadow-sm backdrop-blur-md min-h-[260px] flex flex-col justify-between">
            {hoveredSkill ? (
              <motion.div
                key={hoveredSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    Technology Spotlight
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    {hoveredSkill.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
                  {hoveredSkill.name}
                </h3>

                <p className="text-sm text-neutral-700 dark:text-gray-300 leading-relaxed font-light">
                  {hoveredSkill.description}
                </p>

                {hoveredSkill.relatedProjects && hoveredSkill.relatedProjects.length > 0 && (
                  <div className="pt-4 border-t border-neutral-200 dark:border-white/10">
                    <p className="text-xs uppercase font-mono text-neutral-500 dark:text-gray-500 mb-2">
                      Applied In Projects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {hoveredSkill.relatedProjects.map((proj) => (
                        <span
                          key={proj}
                          className="text-xs px-3 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-gray-200"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 text-neutral-400 dark:text-gray-500">
                <span className="text-3xl mb-3">⚡</span>
                <p className="text-sm font-medium text-neutral-700 dark:text-gray-400">Select or hover any skill</p>
                <p className="text-xs text-neutral-500 dark:text-gray-600 mt-1">
                  View how each technology integrates into real projects.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
