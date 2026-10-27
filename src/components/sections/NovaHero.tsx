"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import { socialsData } from "@/data/socials";

export const NovaHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Subtle interactive 3D pointer physics for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(xNorm);
      mouseY.set(yNorm);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const githubUrl = socialsData.links.find((l) => l.platform === "GitHub")?.url;
  const linkedinUrl = socialsData.links.find((l) => l.platform === "LinkedIn")?.url;
  const instagramUrl = socialsData.links.find((l) => l.platform === "Instagram")?.url;

  return (
    <section className="relative w-full pt-28 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Outer Billboard Frame matching Reference Image with warm amber/orange border */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] border-[3px] sm:border-4 border-[#DE5D14] shadow-[0_24px_80px_rgba(222,93,20,0.22)] overflow-hidden bg-[#D8520D]"
      >
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-300/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-orange-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* 2-Zone Layout Grid: Left (Warm Amber Showcase) & Right (Crisp White Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[660px] lg:min-h-[720px] relative">
          
          {/* ================================================================ */}
          {/* LEFT ZONE: Warm Amber Glowing Section (~56% Desktop Width)       */}
          {/* ================================================================ */}
          <div className="lg:col-span-7 relative z-10 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#BA3C02] via-[#DE5D14] to-[#F5871F] overflow-hidden">
            {/* Concentric Ambient Ring Watermarks in Background */}
            <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-white/[0.12] pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full border border-white/[0.06] pointer-events-none" />

            {/* Top Bar: Abstract Emblem + Identity Pill Badge */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-8 sm:mb-12">
              {/* Dual Oval Lens Emblem matching Reference Image */}
              <div className="w-10 h-8 flex items-center justify-center flex-shrink-0">
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="drop-shadow-sm">
                  <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
                  <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
                  <ellipse cx="17" cy="13" rx="4" ry="13" fill="#D8520D" />
                </svg>
              </div>

              {/* Identity Pill Badge: matching "Omar Solski - The Coach" */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-modernist tracking-wide select-none w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span>Darani Viswanathan — Creative Technologist</span>
              </div>
            </div>

            {/* Center Content: Massive Display Headline & Glowing Pill CTA */}
            <div className="relative z-10 my-auto py-4 sm:py-6 max-w-xl">
              {/* Main 3-line Headline matching Reference Image layout */}
              <h1 className="font-debata text-4xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[80px] font-bold text-white leading-[1.04] tracking-[-0.035em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] select-none">
                Creative<br />
                Designer &amp;<br />
                Developer
              </h1>

              {/* Glowing Pill Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-neutral-950 font-modernist font-semibold text-sm sm:text-base shadow-[0_12px_36px_rgba(255,160,30,0.6)] hover:shadow-[0_16px_46px_rgba(255,180,50,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 select-none"
                >
                  <span>Explore My Work</span>
                  <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border border-white/35 bg-white/5 backdrop-blur-xs text-white font-modernist font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 select-none"
                >
                  <span>View Resume</span>
                </Link>
              </div>
            </div>

            {/* Bottom Row on Left: Two Stat Metric Cards matching Reference Image */}
            <div className="relative z-10 pt-8 sm:pt-12 flex items-center gap-3.5 sm:gap-4 select-none">
              {/* Card 1: Experience Level */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 min-w-[110px] sm:min-w-[130px]"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-modernist font-medium text-neutral-500">
                    Experience
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[9px] font-bold">
                    2+ Yrs
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-debata font-bold text-neutral-950">
                  100%
                </div>
              </motion.div>

              {/* Card 2: Creative Output */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 min-w-[110px] sm:min-w-[130px]"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-modernist font-medium text-neutral-500">
                    Creative Output
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[9px] font-bold">
                    Active
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-debata font-bold text-neutral-950">
                  200%
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* DESKTOP CENTER-FOREGROUND PORTRAIT CUTOUT                        */}
          {/* Overlapping the transition boundary between Left & Right          */}
          {/* ================================================================ */}
          <div className="hidden lg:block absolute left-[42%] xl:left-[43%] bottom-0 -translate-x-1/2 w-[340px] xl:w-[410px] h-[580px] xl:h-[680px] z-20 pointer-events-none select-none">
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="relative w-full h-full transform-gpu"
            >
              {/* Warm Amber Studio Rim-Light Glow behind portrait */}
              <div className="absolute -left-12 bottom-16 w-[320px] h-[400px] bg-gradient-to-r from-amber-400/40 via-orange-500/25 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Darani Cutout Portrait */}
              <Image
                src="/images/darani.png"
                alt="Portrait of Darani Viswanathan"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.04] brightness-[1.01] drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                sizes="(max-width: 1280px) 380px, 440px"
              />

              {/* Floating Social Icons Bar matching Reference Image (ig, in, f) */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/25 shadow-xl pointer-events-auto">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                  </motion.a>
                )}
                {linkedinUrl && (
                  <motion.a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                  </motion.a>
                )}
                {instagramUrl && (
                  <motion.a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="Instagram profile"
                  >
                    <FiInstagram className="w-3.5 h-3.5" />
                  </motion.a>
                )}
                <motion.a
                  href={`mailto:${socialsData.email}`}
                  whileHover={{ scale: 1.15, y: -1 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  aria-label="Send email"
                >
                  <FiMail className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* ================================================================ */}
          {/* MOBILE PORTRAIT VIEWPORT (< lg breakpoint)                       */}
          {/* ================================================================ */}
          <div className="lg:hidden relative w-full h-[380px] sm:h-[460px] bg-gradient-to-b from-[#DE5D14] to-white flex items-end justify-center overflow-hidden">
            <div className="relative w-[280px] sm:w-[340px] h-[360px] sm:h-[430px]">
              <Image
                src="/images/darani.png"
                alt="Portrait of Darani Viswanathan"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.04]"
                sizes="340px"
              />
              {/* Mobile Social Bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/30 shadow-xl">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={`mailto:${socialsData.email}`}
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white"
                  aria-label="Email"
                >
                  <FiMail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT ZONE: Crisp White Editorial Panel (~44% Desktop Width)     */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 bg-white text-neutral-900 lg:rounded-tl-[40px] xl:rounded-tl-[48px] p-6 sm:p-10 lg:p-12 xl:p-14 relative z-10 flex flex-col justify-between">
            {/* Top Navigation Links matching Reference Image (About, Results, Programs, Progress) */}
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-7 pb-6 sm:pb-10 border-b border-neutral-100 select-none">
              <Link
                href="/about"
                className="text-xs sm:text-sm font-modernist font-semibold text-neutral-600 hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="/skills"
                className="text-xs sm:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/experience"
                className="text-xs sm:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="text-xs sm:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Editorial Greeting & Vision Copy */}
            <div className="py-6 sm:py-8 lg:py-10 lg:pl-4 xl:pl-6">
              {/* Pill Tag matching "( SESSION )" in Reference Image */}
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase select-none w-fit mb-4">
                OVERVIEW
              </div>

              {/* Bold Editorial Hook Paragraph */}
              <h2 className="font-debata text-xl sm:text-2xl md:text-3xl lg:text-[27px] xl:text-[31px] font-semibold text-neutral-950 leading-[1.28] tracking-tight mb-4">
                Hey there, I&apos;m{" "}
                <span className="text-[#DE5D14] underline decoration-[#DE5D14]/30 underline-offset-4">
                  Darani
                </span>
                . I combine{" "}
                <span className="text-[#DE5D14]">creative design</span>,{" "}
                <span className="text-[#DE5D14]">frontend engineering</span>, and{" "}
                <span className="text-[#DE5D14]">artificial intelligence</span> to transform ideas
                into functional digital products. Ready to build something extraordinary?
              </h2>

              {/* Sub-tagline matching "Clarity. Discipline. Measurable growth." */}
              <p className="text-xs font-mono text-neutral-400 tracking-wider">
                Aesthetics. Code. Measurable Impact.
              </p>
            </div>

            {/* Testimonial & Credibility Card matching Bottom-Right in Reference Image */}
            <div className="mt-auto lg:pl-4 xl:pl-6">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F7F7F8] border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors"
              >
                {/* Header Row: Avatar + Verified Badges */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-gradient-to-tr from-[#DE5D14] to-amber-400 p-[1.5px] flex-shrink-0 shadow-xs">
                    <div className="w-full h-full rounded-[10px] overflow-hidden bg-black relative">
                      <Image
                        src="/images/darani-avatar.png"
                        alt="Darani Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-debata font-bold text-sm text-neutral-950 truncate">
                        Darani Viswanathan
                      </span>
                      <span className="px-1.5 py-0.2 rounded bg-black text-white text-[9px] font-bold">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-[11px] font-modernist text-neutral-500 truncate">
                      Founder, ArtZa Designs · Aakam Shine Contributor
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote matching Reference Image */}
                <p className="font-debata text-sm sm:text-base font-medium text-neutral-900 leading-snug italic mb-3">
                  &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
                </p>

                {/* Checkpoint Highlights */}
                <div className="pt-3 border-t border-neutral-200/70 flex flex-col gap-1.5 text-[11px] font-modernist text-neutral-600">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                    <span>2+ Years Hands-on Creative Design Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                    <span>Founder of ArtZa Designs Venture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                    <span>Aakam Shine Incubation Centre Contributor</span>
                  </div>
                </div>

                {/* Let's Connect CTA Button */}
                <div className="mt-4 pt-3 border-t border-neutral-200/70">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-modernist font-semibold transition-colors"
                  >
                    <span>Let&apos;s Connect</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

