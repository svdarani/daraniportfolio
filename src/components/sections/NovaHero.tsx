"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NovaButton } from "../ui/NovaButton";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiCheckCircle } from "react-icons/fi";
import { socialsData } from "@/data/socials";
import { InteractiveWord } from "../ui/InteractiveText";

export const NovaHero: React.FC = () => {
  const portraitCardRef = useRef<HTMLDivElement | null>(null);

  // Subtle 3D portrait card tilt physics for desktop
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springTilt = { damping: 20, stiffness: 220, mass: 0.3 };
  const smoothX = useSpring(rawX, springTilt);
  const smoothY = useSpring(rawY, springTilt);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const handlePortraitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
    if (portraitCardRef.current) {
      const rect = portraitCardRef.current.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      rawX.set(xNorm);
      rawY.set(yNorm);
    }
  };

  const handlePortraitMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-28 md:pt-32 md:pb-32 overflow-hidden bg-white dark:bg-black transition-colors">
      {/* Background ambient lighting accents: zero-cost GPU monochrome radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[440px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        {/* 3-Column Asymmetric Layout Grid matching NovaPersona × Swiss Modernist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Column 1: Left Intro (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center order-2 lg:order-1">
            {/* Primary Headline: Debata Expressive Display Typography with word-by-word reveal */}
            <h1 className="font-debata text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6">
              <span className="block">
                <InteractiveWord delay={0.08}>Hey</InteractiveWord>{" "}
                <InteractiveWord delay={0.14}>there,</InteractiveWord>{" "}
                <InteractiveWord delay={0.2}>I&apos;m</InteractiveWord>
              </span>
              <span className="block sm:inline">
                <InteractiveWord delay={0.28} highlight>
                  Darani
                </InteractiveWord>{" "}
                <InteractiveWord delay={0.34} highlight>
                  Viswanathan.
                </InteractiveWord>
              </span>
            </h1>

            {/* Supporting Description: Modernist Readable Prose */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8 max-w-md font-normal"
            >
              I combine creative design, frontend development, and artificial intelligence to transform ideas into meaningful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <NovaButton href="/projects" variant="primary" size="md">
                Explore My Work
              </NovaButton>
              <NovaButton href="/resume" variant="secondary" size="md">
                View Resume
              </NovaButton>
            </motion.div>
          </div>

          {/* Column 2: Center Portrait Frame with interactive 3D pointer response (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <motion.div
              ref={portraitCardRef}
              onMouseMove={handlePortraitMouseMove}
              onMouseLeave={handlePortraitMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] group transform-gpu"
              data-cursor="IMAGE"
              data-cursor-text="Darani"
            >
              {/* Soft container with subtle border */}
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-[#0d0d0d] border border-neutral-300/80 dark:border-white/15 shadow-md dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src="/images/darani.png"
                  alt="Portrait of Darani Viswanathan"
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03] transform-gpu"
                  sizes="(max-width: 768px) 100vw, 380px"
                />

                {/* Floating Social Bar positioned horizontally at the bottom inside the portrait */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-white/90 dark:bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-lg select-none"
                  data-cursor="DEFAULT"
                >
                  <motion.a
                    href={socialsData.links.find((l) => l.platform === "GitHub")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-neutral-800 dark:text-white flex items-center justify-center transition-colors"
                    aria-label="GitHub profile"
                    data-cursor="LINK"
                  >
                    <FiGithub className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={socialsData.links.find((l) => l.platform === "LinkedIn")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-neutral-800 dark:text-white flex items-center justify-center transition-colors"
                    aria-label="LinkedIn profile"
                    data-cursor="LINK"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={socialsData.links.find((l) => l.platform === "Instagram")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-neutral-800 dark:text-white flex items-center justify-center transition-colors"
                    aria-label="Instagram profile"
                    data-cursor="LINK"
                  >
                    <FiInstagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${socialsData.email}`}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-neutral-800 dark:text-white flex items-center justify-center transition-colors"
                    aria-label="Send email"
                    data-cursor="LINK"
                  >
                    <FiMail className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Availability Badge below portrait: Modernist with hover feedback */}
              <div className="mt-4 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#121212] border border-neutral-300/80 dark:border-white/10 shadow-sm cursor-default select-none"
                  data-cursor="LINK"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black dark:bg-white" />
                  </span>
                  <span className="text-xs font-modernist font-medium text-neutral-900 dark:text-white">
                    Open to Selected Opportunities
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Right Title & Credibility Highlights (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center order-3 lg:pl-4">
            {/* Supporting Headline: Debata with interactive words */}
            <div className="font-debata text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-white leading-[1.12] mb-6">
              <span className="block">
                <InteractiveWord delay={0.16}>Creative</InteractiveWord>
              </span>
              <span className="nova-gradient-text block mt-1">
                <InteractiveWord delay={0.24} highlight>
                  Designer
                </InteractiveWord>{" "}
                <InteractiveWord delay={0.3} highlight>
                  &amp;
                </InteractiveWord>{" "}
                <InteractiveWord delay={0.36} highlight>
                  Developer
                </InteractiveWord>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
              className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 font-normal"
            >
              Combining visual aesthetics with frontend implementation, AI foundations, and startup incubation experience to create functional digital products.
            </motion.p>

            {/* Credibility / Experience Stack Box with interactive hover lift */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full p-5 rounded-2xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 shadow-sm mb-6 transition-colors hover:border-neutral-300 dark:hover:border-white/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2 transition-all duration-300 hover:-space-x-1">
                  <motion.div
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#121212] select-none cursor-default"
                  >
                    AZ
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="w-8 h-8 rounded-full bg-neutral-700 text-white dark:bg-neutral-300 dark:text-black flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#121212] select-none cursor-default"
                  >
                    AS
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="w-8 h-8 rounded-full bg-neutral-500 text-white dark:bg-neutral-600 dark:text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#121212] select-none cursor-default"
                  >
                    SN
                  </motion.div>
                </div>
                <div className="text-xs font-modernist text-neutral-900 dark:text-white font-semibold tracking-wide">
                  Verified Creative Output
                </div>
              </div>

              <div className="space-y-2 text-xs font-modernist text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white">
                  <FiCheckCircle className="text-black dark:text-white w-3.5 h-3.5 flex-shrink-0" />
                  <span>2+ Years Hands-on Creative Design Experience</span>
                </div>
                <div className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white">
                  <FiCheckCircle className="text-black dark:text-white w-3.5 h-3.5 flex-shrink-0" />
                  <span>Founder of ArtZa Designs Venture</span>
                </div>
                <div className="flex items-center gap-2 transition-colors hover:text-black dark:hover:text-white">
                  <FiCheckCircle className="text-black dark:text-white w-3.5 h-3.5 flex-shrink-0" />
                  <span>Aakam Shine Incubation Centre Contributor</span>
                </div>
              </div>
            </motion.div>

            <NovaButton href="/contact" variant="primary" size="md">
              Let&apos;s Connect
            </NovaButton>
          </div>

        </div>
      </div>
    </section>
  );
};
