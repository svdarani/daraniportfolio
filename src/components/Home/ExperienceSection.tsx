"use client";

import React from "react";
import { experiencesData } from "@/data/experience";
import { motion } from "framer-motion";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-neutral-50/50 dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
              JOURNEY &amp; BACKGROUND
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              Experience &amp; Education
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Hands-on internship experience in startup incubation alongside rigorous undergraduate studies in AI &amp; Data Science.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-[1px] before:bg-neutral-200 dark:before:bg-white/10">
          {experiencesData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-3 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500 ring-4 ring-neutral-100 dark:ring-black" />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-1/2 p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 shadow-sm transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 dark:bg-white/5 dark:text-gray-300">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 font-mono mb-4">
                    {item.organization} • {item.location}
                  </p>

                  <p className="text-sm text-neutral-700 dark:text-gray-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {item.responsibilities && (
                    <ul className="space-y-2 mb-6">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="text-xs text-neutral-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
