"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const HomeStatement: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-36 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Big Statement Headline (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-debata text-2xl sm:text-4xl md:text-[42px] lg:text-[46px] font-semibold leading-[1.2] tracking-[-0.025em] text-neutral-950 dark:text-white">
              Driven by curiosity and a love for design, I create thoughtful digital products and experiences that leave a lasting impression.
            </h2>
          </motion.div>

          {/* Right Column: Narrative + Magnetic CTA Button (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-8 pt-1"
          >
            <p className="font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-md lg:text-right font-normal">
              The fusion of my passion for design, development and seamless user experiences plays out at the intersection of creativity and technology in the digital world.
            </p>

            {/* "More about Darani" CTA with round arrow button */}
            <Link
              href="/about"
              data-cursor="LINK"
              className="group inline-flex items-center gap-4 text-base sm:text-lg font-modernist font-medium text-neutral-900 dark:text-white hover:text-black dark:hover:text-neutral-200 transition-colors"
            >
              <span className="relative">
                More about Darani
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black dark:bg-white group-hover:w-full transition-all duration-300" />
              </span>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="w-12 h-12 rounded-full border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300 shadow-sm"
              >
                <FiArrowUpRight className="w-5 h-5 transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
