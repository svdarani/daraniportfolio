"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { metricsData } from "@/data/metrics";

export const MetricsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="w-full py-16 px-6 md:px-12 bg-white dark:bg-neutral-950/70 border-y border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
            DOCUMENTED IMPACT &amp; OUTPUT
          </p>
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-neutral-900 dark:text-white">
            Proven Output Across Design, Media &amp; Reach
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {metricsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15 shadow-sm transition-all"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white flex items-baseline">
                <span>{item.value}</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-normal text-2xl">{item.suffix}</span>
              </div>
              <p className="text-sm font-medium text-neutral-800 dark:text-gray-200 mt-2">{item.label}</p>
              <p className="text-xs text-neutral-500 dark:text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
