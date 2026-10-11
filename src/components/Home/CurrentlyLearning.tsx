"use client";

import React from "react";
import { currentlyLearningData } from "@/data/learning";
import { motion } from "framer-motion";

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-neutral-50/50 dark:bg-neutral-900/40 border-t border-neutral-200 dark:border-white/5 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
              CONTINUOUS GROWTH
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              Currently Learning &amp; Deepening
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-gray-400 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Active exploration trajectories in advanced programming, machine learning systems, and creative web craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyLearningData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-white/10 hover:border-indigo-500/40 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-2">
                  {item.topic}
                </h3>
                <p className="text-xs text-neutral-700 dark:text-gray-300 font-medium mb-3">
                  {item.focusArea}
                </p>
                <p className="text-xs text-neutral-600 dark:text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Minimal timeline indicator */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-[11px] text-neutral-500 dark:text-gray-500 font-mono">
                <span>Active Track</span>
                <span className="text-neutral-700 dark:text-gray-400">Ongoing Exploration →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
