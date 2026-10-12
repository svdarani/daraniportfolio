"use client";

import React, { useState } from "react";
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

        {/* Tab Toggle Buttons: Modernist */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-neutral-200 dark:border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "experience"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold"
                : "bg-white text-neutral-600 dark:bg-[#121212] dark:text-[#A3A3A3] hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/10"
            }`}
          >
            <FiBriefcase className="w-4 h-4" />
            <span>Work &amp; Roles ({workExperiences.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "education"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold"
                : "bg-white text-neutral-600 dark:bg-[#121212] dark:text-[#A3A3A3] hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/10"
            }`}
          >
            <FiBookOpen className="w-4 h-4" />
            <span>Education (1)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("achievements")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === "achievements"
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold"
                : "bg-white text-neutral-600 dark:bg-[#121212] dark:text-[#A3A3A3] hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/10"
            }`}
          >
            <FiAward className="w-4 h-4" />
            <span>Achievements &amp; Certifications ({achievementsData.length})</span>
          </button>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === "experience" && (
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-300 dark:border-white/10 space-y-10 sm:space-y-12 ml-2 sm:ml-4">
            {workExperiences.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#121212] border-2 border-black dark:border-white group-hover:scale-125 group-hover:bg-black dark:group-hover:bg-white transition-all" />

                <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10 gap-2">
                    <div>
                      <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300 block mb-1">
                        {exp.organization}
                      </span>
                      <h3 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white">
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
                        <li key={i} className="flex items-start gap-2">
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
                        className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-[#0a0a0a] text-[10px] font-modernist text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === "education" && (
          <div className="max-w-3xl">
            {educationExperiences.map((edu) => (
              <div
                key={edu.id}
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/10 gap-2">
                  <div>
                    <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300 block mb-1">
                      {edu.organization}
                    </span>
                    <h3 className="font-debata text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
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
                      <li key={i} className="flex items-start gap-2">
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
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Achievements & Certifications */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
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

                  <h3 className="font-debata text-lg font-bold text-neutral-950 dark:text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-modernist text-neutral-400 dark:text-neutral-500 mb-3">
                    {item.issuer}
                  </div>

                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
