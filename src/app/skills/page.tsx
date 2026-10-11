"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/hero";
import Grid from "./components/bentoGrid";
import FloatingDock from "@/components/dock/dock";
import Hire from "./components/Hire";
import SlidingImages from "../../components/Projects";
import Footer from "../../components/Footer";
import Image from "next/image";

const Skills = () => {
  const githubImageRef = useRef(null);
  const githubImageInView = useInView(githubImageRef, { once: true });

  return (
    <>
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>
          Technical Skills &amp; Design Competencies - Darani Viswanathan
        </h1>
        <p>
          Explore Darani Viswanathan&apos;s technical skills in Artificial Intelligence,
          Data Science, Machine Learning, Python, Java, C, React, Next.js, and design tools
          including Figma, Canva, Adobe Photoshop, and CorelDRAW.
        </p>
      </div>

      <div className="bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300">
        <FloatingDock />
        <Hero />
        <div className="flex items-center justify-center ">
          <Grid />
        </div>
        <div
          className="w-full flex justify-center items-center mb-[100px]"
          ref={githubImageRef}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={
              githubImageInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
            }
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <Image
              src="/images/github-bg.png"
              alt="GitHub"
              width={1325}
              height={1000}
            />
          </motion.div>
        </div>
        <Hire />
        <SlidingImages />
        <Footer />
      </div>
    </>
  );
};

export default Skills;
