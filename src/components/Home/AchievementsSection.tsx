"use client";

import React from "react";
import { achievementsData } from "@/data/achievements";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

export const AchievementsSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-neutral-50/50 dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
              RECOGNITION &amp; MILESTONES
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              Documented Achievements
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Honors, certifications, and mentorship initiatives earned through academic diligence and startup participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <FiAward className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-gray-400">
                    {item.badge || item.category}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-indigo-700 dark:text-indigo-300 font-mono mb-3">{item.issuer}</p>
                <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
