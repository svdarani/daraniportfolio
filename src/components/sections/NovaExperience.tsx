"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { experiencesData } from "@/data/experience";
import { achievementsData } from "@/data/achievements";
import { FiBriefcase, FiBookOpen, FiAward, FiCalendar, FiCheckCircle } from "react-icons/fi";

export const NovaExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "achievements">("experience");

  const workExperiences = experiencesData.filter((e) => e.type !== "Education");
  const educationExperiences = experiencesData.filter((e) => e.type === "Education");

  return (
    <section id="experience" className="section-contain py-24 sm:py-32 bg-neutral-50 dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="05 / EXPERIENCE"
          titleStart="My"
          titleHighlight="Journey"
          description="A chronological timeline of my professional work, startup engagements, education, and credentials."
        />

        {/* Tab Toggle Buttons with animated sliding indicator */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-neutral-200 dark:border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            data-cursor="LINK"
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-modernist transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "experience"
                ? "text-white dark:text-black font-semibold"
                : "text-neutral-600 dark:text-[#A3A3A3] hover:text-black dark:hover:text-white"
            }`}
          >
            {activeTab === "experience" && (
              <motion.div
                layoutId="experience-active-tab-pill"
                className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-sm z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <FiBriefcase className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Work &amp; Roles ({workExperiences.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("education")}
            data-cursor="LINK"
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-modernist transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "education"
                ? "text-white dark:text-black font-semibold"
                : "text-neutral-600 dark:text-[#A3A3A3] hover:text-black dark:hover:text-white"
            }`}
          >
            {activeTab === "education" && (
              <motion.div
                layoutId="experience-active-tab-pill"
                className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-sm z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <FiBookOpen className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Education (1)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("achievements")}
            data-cursor="LINK"
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-modernist transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "achievements"
                ? "text-white dark:text-black font-semibold"
                : "text-neutral-600 dark:text-[#A3A3A3] hover:text-black dark:hover:text-white"
            }`}
          >
            {activeTab === "achievements" && (
              <motion.div
                layoutId="experience-active-tab-pill"
                className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-sm z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <FiAward className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Achievements &amp; Certifications ({achievementsData.length})</span>
          </button>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* Tab 1: Work Experience Timeline */}
          {activeTab === "experience" && (
            <motion.div
              key="experience-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 sm:pl-8 border-l border-neutral-300 dark:border-white/10 space-y-10 sm:space-y-12 ml-2 sm:ml-4"
            >
              {workExperiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#121212] border-2 border-black dark:border-white group-hover:scale-125 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 shadow-sm" />

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10 gap-2">
                      <div>
                        <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300 block mb-1">
                          {exp.organization}
                        </span>
                        <h3 className="font-debata text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-modernist text-neutral-500 dark:text-neutral-400">
                        <FiCalendar className="w-3.5 h-3.5 text-black dark:text-white" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="font-modernist text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-[11px] font-modernist font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                        Key Contributions:
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm font-modernist text-neutral-600 dark:text-neutral-400">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                            <FiCheckCircle className="text-black dark:text-white w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200 dark:border-white/10">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-[#0a0a0a] text-[10px] font-modernist text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab 2: Education */}
          {activeTab === "education" && (
            <motion.div
              key="education-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              {educationExperiences.map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/10 gap-2">
                    <div>
                      <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300 block mb-1">
                        {edu.organization}
                      </span>
                      <h3 className="font-debata text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-white">
                        {edu.role}
                      </h3>
                    </div>
                    <div className="text-xs font-modernist text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 self-start sm:self-auto font-medium">
                      {edu.period}
                    </div>
                  </div>

                  <p className="font-modernist text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                    {edu.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-[11px] font-modernist font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                      Academic Scope &amp; Focus:
                    </div>
                    <ul className="space-y-2 text-sm font-modernist text-neutral-600 dark:text-neutral-400">
                      {edu.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                          <FiCheckCircle className="text-black dark:text-white w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-200 dark:border-white/10">
                    {edu.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-[#0a0a0a] text-xs font-modernist text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab 3: Achievements & Certifications */}
          {activeTab === "achievements" && (
            <motion.div
              key="achievements-tab"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievementsData.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-7 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-white/10">
                      <span className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-modernist font-semibold bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-debata text-lg font-semibold text-neutral-950 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs font-modernist text-neutral-400 dark:text-neutral-500 mb-3">
                      {item.issuer}
                    </div>

                    <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

