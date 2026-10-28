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
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[920px] flex items-center justify-center p-3 sm:p-5 lg:p-6 overflow-hidden">
      {/* Outer Billboard Frame matching Reference Image with warm amber/orange border */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1360px] h-full lg:h-[calc(100vh-3.5rem)] lg:max-h-[820px] lg:min-h-[620px] rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] border-[3px] sm:border-4 border-[#DE5D14] shadow-[0_24px_80px_rgba(222,93,20,0.22)] overflow-hidden bg-[#D8520D] flex flex-col"
      >
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-300/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-orange-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* 2-Zone Layout Grid: Left (Warm Amber Showcase) & Right (Crisp White Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full flex-1 relative">
          
          {/* ================================================================ */}
          {/* LEFT ZONE: Warm Amber Glowing Section (~58% Desktop Width)       */}
          {/* ================================================================ */}
          <div className="lg:col-span-7 relative z-10 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between h-full bg-gradient-to-br from-[#BA3C02] via-[#DE5D14] to-[#F5871F] overflow-hidden">
            {/* Concentric Ambient Ring Watermarks matching reference contours */}
            <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full border border-white/[0.14] pointer-events-none" />
            <div className="absolute -top-28 -left-28 w-[460px] h-[460px] rounded-full border border-white/[0.08] pointer-events-none" />
            <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full border border-white/[0.05] pointer-events-none" />

            {/* Top Bar: Abstract Emblem + Identity Pill Badge */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 mb-4 lg:mb-6">
              {/* Dual Oval Lens Emblem matching Reference Image */}
              <div className="w-9 h-7 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="24" viewBox="0 0 34 26" fill="none" className="drop-shadow-sm">
                  <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
                  <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
                  <ellipse cx="17" cy="13" rx="4" ry="13" fill="#D8520D" />
                </svg>
              </div>

              {/* Identity Pill Badge: matching reference */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-modernist tracking-wide select-none w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span>Darani Viswanathan — Creative Technologist</span>
              </div>
            </div>

            {/* Center Content: Scaled Display Headline & Action Buttons */}
            <div className="relative z-10 my-auto py-2 sm:py-4 max-w-xl">
              {/* Main 3-line Headline matching Reference Image layout */}
              <h1 className="font-debata text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-white leading-[1.04] tracking-[-0.035em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] select-none">
                Creative<br />
                Designer &amp;<br />
                Developer
              </h1>

              {/* Action Buttons: Explore My Work & View Resume */}
              <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-neutral-950 font-modernist font-semibold text-xs sm:text-sm shadow-[0_10px_30px_rgba(255,160,30,0.55)] hover:shadow-[0_14px_40px_rgba(255,180,50,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 select-none"
                >
                  <span>Explore My Work</span>
                  <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white font-modernist font-medium text-xs sm:text-sm hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 select-none shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
                >
                  <span>View Resume</span>
                </Link>
              </div>
            </div>

            {/* Bottom Row on Left: Two Stat Metric Cards matching Reference Image */}
            <div className="relative z-10 pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4 select-none">
              {/* Card 1: Experience */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl py-3 px-4 sm:py-3.5 sm:px-5 shadow-lg border border-white/80 min-w-[110px] sm:min-w-[125px]"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DE5D14] leading-tight font-debata">
                  2+ Yrs
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-900 mt-0.5 font-modernist">
                  Experience
                </div>
              </motion.div>

              {/* Card 2: Creative Output */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl py-3 px-4 sm:py-3.5 sm:px-5 shadow-lg border border-white/80 min-w-[130px] sm:min-w-[150px]"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DE5D14] leading-tight font-debata">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-900 mt-0.5 font-modernist">
                  Creative Output
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* DESKTOP CENTER-FOREGROUND PORTRAIT CUTOUT                        */}
          {/* Overlapping the transition boundary between Left & Right          */}
          {/* ================================================================ */}
          <div className="hidden lg:block absolute left-[44%] xl:left-[45%] bottom-0 -translate-x-1/2 w-[340px] xl:w-[410px] h-[88%] lg:h-[93%] xl:h-[97%] max-h-[640px] z-20 pointer-events-none select-none">
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="relative w-full h-full transform-gpu"
            >
              {/* Intense Golden Rim-Light Sun Burst behind head and shoulders */}
              <div className="absolute -left-12 top-4 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,_rgba(255,235,100,0.95)_0%,_rgba(255,160,20,0.85)_32%,_rgba(222,93,20,0.4)_58%,_transparent_75%)] blur-2xl pointer-events-none" />
              <div className="absolute left-2 top-12 w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,_#FFF9C4_0%,_#FFD54F_45%,_transparent_70%)] blur-lg pointer-events-none opacity-90" />

              {/* Darani Cutout Portrait */}
              <Image
                src="/images/darani.png"
                alt="Portrait of Darani Viswanathan"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.05] brightness-[1.02] drop-shadow-[0_20px_35px_rgba(0,0,0,0.32)]"
                sizes="(max-width: 1280px) 380px, 440px"
              />

              {/* Floating Social Icons Bar matching Reference Image (GitHub, LinkedIn, Instagram, Email) */}
              <div className="absolute bottom-20 xl:bottom-22 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#202226]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl pointer-events-auto">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-7 h-7 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
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
                    className="w-7 h-7 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
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
                    className="w-7 h-7 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="Instagram profile"
                  >
                    <FiInstagram className="w-3.5 h-3.5" />
                  </motion.a>
                )}
                <motion.a
                  href={`mailto:${socialsData.email}`}
                  whileHover={{ scale: 1.15, y: -1 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-7 h-7 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
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
          <div className="lg:hidden relative w-full h-[340px] sm:h-[400px] bg-gradient-to-b from-[#DE5D14] to-white flex items-end justify-center overflow-hidden">
            <div className="relative w-[260px] sm:w-[320px] h-[320px] sm:h-[380px]">
              <Image
                src="/images/darani.png"
                alt="Portrait of Darani Viswanathan"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.04]"
                sizes="320px"
              />
              {/* Mobile Social Bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-xl">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-3 h-3" />
                  </a>
                )}
                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-3 h-3" />
                  </a>
                )}
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-3 h-3" />
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
          {/* RIGHT ZONE: Crisp White Editorial Panel (~42% Desktop Width)     */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 bg-white text-neutral-900 lg:rounded-tl-[36px] xl:rounded-tl-[44px] p-6 sm:p-8 lg:p-9 xl:p-11 relative z-10 flex flex-col justify-between h-full overflow-hidden">
            {/* Top Navigation Links matching Reference Image */}
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-7 pb-2 select-none">
              <Link
                href="/about"
                className="text-xs sm:text-sm font-modernist font-semibold text-neutral-900 hover:text-[#DE5D14] transition-colors"
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
            <div className="py-3 sm:py-5 lg:py-6 lg:pl-3 xl:pl-5 my-auto">
              {/* Pill Tag matching "OVERVIEW" in Reference Image */}
              <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase select-none w-fit mb-3">
                OVERVIEW
              </div>

              {/* Bold Editorial Hook Paragraph */}
              <h2 className="font-debata text-lg sm:text-xl lg:text-[22px] xl:text-[24px] font-bold text-neutral-950 leading-[1.28] tracking-tight mb-2.5">
                Hey there, I&apos;m{" "}
                <span className="text-[#DE5D14]">
                  Darani
                </span>
                . I combine{" "}
                <span className="text-[#DE5D14]">creative design</span>,{" "}
                <span className="text-[#DE5D14]">frontend engineering</span>, and{" "}
                <span className="text-[#DE5D14]">artificial intelligence</span> to transform ideas
                into functional digital products. Ready to build something extraordinary?
              </h2>

              {/* Sub-tagline matching "Aesthetics. Code. Measurable Impact." */}
              <p className="text-[11px] font-mono text-neutral-400 tracking-wider">
                Aesthetics. Code. Measurable Impact.
              </p>
            </div>

            {/* Testimonial & Credibility Card matching Bottom-Right in Reference Image */}
            <div className="mt-auto lg:pl-3 xl:pl-5">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#F8F8F9] border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors"
              >
                {/* Header Row: Avatar + Verified Badges */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#DE5D14] p-0.5 flex-shrink-0 shadow-xs">
                    <Image
                      src="/images/darani-avatar.png"
                      alt="Darani Avatar"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-debata font-bold text-xs sm:text-sm text-neutral-950 truncate">
                        Darani Viswanathan
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black text-white text-[9px] font-bold tracking-wider">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-modernist text-neutral-500 truncate">
                      Founder, ArtZa Designs · Aakam Shine Contributor
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote matching Reference Image */}
                <p className="font-debata text-xs sm:text-sm font-medium text-neutral-900 leading-snug italic mb-2.5">
                  &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
                </p>

                {/* Checkpoint Highlights */}
                <div className="pt-2 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] sm:text-[11px] font-modernist text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                    <span>2+ Years Hands-on Creative Design Experience</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                    <span>Founder of ArtZa Designs Venture</span>
                  </div>
                </div>

                {/* Let's Connect CTA Button */}
                <div className="mt-2.5 pt-2 border-t border-neutral-200/70">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-neutral-950 hover:bg-black text-white text-xs font-modernist font-semibold transition-all group"
                  >
                    <span>Let&apos;s Connect</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
