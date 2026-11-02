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
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[920px] flex items-center justify-center p-3 sm:p-5 lg:p-6 overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0B] transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. OUTER MAIN CONTAINER                                                   */}
      {/* Full-screen rounded billboard with continuous vibrant orange #FF4B0A border */}
      {/* ========================================================================= */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1360px] h-full lg:h-[calc(100vh-3.5rem)] lg:max-h-[820px] lg:min-h-[620px] rounded-[36px] sm:rounded-[46px] lg:rounded-[52px] border-[3.5px] sm:border-4 border-[#FF4B0A] shadow-[0_24px_80px_rgba(255,75,10,0.22),0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden bg-[#7C1600] flex flex-col select-none"
      >
        {/* 2-Zone Layout Grid: Left (Cinematic Orange Showcase) & Right (Crisp White Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full flex-1 relative">
          
          {/* ================================================================ */}
          {/* 2. LEFT SECTION: CINEMATIC ORANGE BACKGROUND (~58% Width)        */}
          {/* Layered composition matching Reference Image 1                    */}
          {/* ================================================================ */}
          <div className="lg:col-span-7 relative z-10 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between h-full overflow-hidden">
            
            {/* LAYER 1: Base Complex Multi-Stop Orange-to-Amber Radial Gradient */}
            <div
              className="absolute inset-0 pointer-events-none select-none"
              style={{
                background:
                  "radial-gradient(ellipse 110% 110% at 20% 25%, #FF6900 0%, #F04B00 28%, #DE5D14 46%, #C53200 64%, #A92300 82%, #751400 100%)",
              }}
            />

            {/* LAYER 2: Deep Burnt Orange & Dark Red-Orange Corner Vignette (Top-Left) */}
            <div
              className="absolute inset-0 pointer-events-none select-none opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse 75% 70% at 0% 0%, #520B00 0%, #7A1400 35%, #A92300 68%, transparent 100%)",
              }}
            />

            {/* LAYER 3: Abstract Curved Geometric Shapes (from Reference Image 1) */}
            <svg
              className="absolute -top-16 -left-16 w-[125%] h-[125%] pointer-events-none select-none opacity-45 mix-blend-multiply"
              viewBox="0 0 800 800"
              fill="none"
            >
              <defs>
                <linearGradient id="cinematicCurveDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#550A00" stopOpacity="0.85" />
                  <stop offset="45%" stopColor="#8C1B00" stopOpacity="0.65" />
                  <stop offset="85%" stopColor="#B82E00" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#DE5D14" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="cinematicCurveWarm" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFA000" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FF6000" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#A92300" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Sweeping burnt-orange curved swoosh behind headline and portrait */}
              <path
                d="M 540 -60 C 410 70, 250 190, 160 370 C 80 540, 130 700, 280 760 C 430 820, 620 730, 700 560 C 760 410, 690 230, 630 110 Z"
                fill="url(#cinematicCurveDark)"
              />
              {/* Secondary flowing warm curve */}
              <path
                d="M 230 130 C 360 80, 540 120, 630 280 C 710 430, 640 610, 480 670 C 330 720, 170 590, 150 430 C 130 290, 180 180, 230 130 Z"
                fill="url(#cinematicCurveWarm)"
              />
            </svg>

            {/* LAYER 4: Circular Outline Patterns (Subtle Concentric Rings in Upper-Left) */}
            <svg
              className="absolute -top-20 -left-20 w-[640px] h-[640px] pointer-events-none select-none opacity-30"
              viewBox="0 0 640 640"
              fill="none"
            >
              <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
              <circle cx="200" cy="200" r="230" stroke="white" strokeWidth="1.2" strokeOpacity="0.25" />
              <circle cx="200" cy="200" r="330" stroke="white" strokeWidth="1.1" strokeOpacity="0.18" />
              <circle cx="200" cy="200" r="450" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
              <circle cx="200" cy="200" r="580" stroke="#FFD52A" strokeWidth="1" strokeOpacity="0.12" />
            </svg>

            {/* LAYER 5: Broad Diagonal Glowing Golden Light Beam */}
            <div
              className="absolute -left-10 bottom-[-100px] w-[340px] h-[720px] rotate-[-36deg] origin-bottom-left pointer-events-none select-none blur-3xl opacity-85 mix-blend-screen"
              style={{
                background:
                  "linear-gradient(to top, transparent 0%, rgba(255, 180, 0, 0.45) 40%, rgba(255, 215, 42, 0.75) 75%, rgba(255, 248, 180, 0.9) 100%)",
              }}
            />

            {/* LAYER 6: Large Radiant Golden-Yellow Light Source Behind Portrait */}
            <div
              className="absolute left-[36%] xl:left-[39%] bottom-[12%] -translate-x-1/2 w-[480px] h-[480px] rounded-full pointer-events-none select-none blur-3xl opacity-90"
              style={{
                background:
                  "radial-gradient(circle, #FFF475 0%, #FFD52A 28%, #FFA800 52%, #FF6000 72%, transparent 92%)",
              }}
            />
            <div
              className="absolute left-[38%] xl:left-[41%] bottom-[20%] -translate-x-1/2 w-[280px] h-[280px] rounded-full pointer-events-none select-none blur-2xl opacity-95"
              style={{
                background:
                  "radial-gradient(circle, #FFFFFF 0%, #FFE866 38%, #FFAA00 70%, transparent 100%)",
              }}
            />

            {/* ============================================================== */}
            {/* FOREGROUND UI: Top Emblem + Pill Badge                         */}
            {/* ============================================================== */}
            <div className="relative z-20 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 mb-4 lg:mb-6">
              {/* Dual Oval Lens Emblem with Orange Core */}
              <div className="w-9 h-7 flex items-center justify-center flex-shrink-0">
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="drop-shadow-sm">
                  <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
                  <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
                  <ellipse cx="17" cy="13" rx="4" ry="13" fill="#FF4B0A" />
                </svg>
              </div>

              {/* Identity Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white text-xs font-modernist tracking-wide select-none w-fit shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span>Darani Viswanathan — Creative Technologist</span>
              </div>
            </div>

            {/* ============================================================== */}
            {/* 4. LEFT-SIDE TYPOGRAPHY: Headline & CTA Buttons               */}
            {/* ============================================================== */}
            <div className="relative z-20 my-auto py-2 sm:py-4 max-w-xl">
              {/* Main 3-line Bold Display Headline */}
              <h1 className="font-debata text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-extrabold text-white leading-[1.03] tracking-[-0.035em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.25)] select-none">
                Creative<br />
                Designer &amp;<br />
                Developer
              </h1>

              {/* 5. CALL-TO-ACTION BUTTONS */}
              <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary Button: White Pill */}
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-neutral-950 font-modernist font-semibold text-xs sm:text-sm shadow-[0_10px_30px_rgba(255,160,30,0.5)] hover:shadow-[0_14px_40px_rgba(255,190,50,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 select-none"
                >
                  <span>Explore My Work</span>
                  <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Secondary Button: Transparent Pill with Thin White Border */}
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-5 py-3 sm:py-3.5 rounded-full border border-white/40 bg-white/5 backdrop-blur-xs text-white font-modernist font-medium text-xs sm:text-sm hover:bg-white/20 transition-all duration-300 select-none"
                >
                  <span>View Resume</span>
                </Link>
              </div>
            </div>

            {/* ============================================================== */}
            {/* 6. BOTTOM LEFT STATISTICS CARDS (Preserved from Reference 2)   */}
            {/* ============================================================== */}
            <div className="relative z-20 pt-4 sm:pt-6 flex items-center gap-3 sm:gap-4 select-none">
              {/* Card 1: Experience */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-white/80 min-w-[105px] sm:min-w-[122px]"
              >
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <span className="text-[10px] font-modernist font-medium text-neutral-500">
                    Experience
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 text-[9px] font-bold">
                    2+ Yrs
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-debata font-bold text-neutral-950">
                  100%
                </div>
              </motion.div>

              {/* Card 2: Creative Output */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-white/80 min-w-[105px] sm:min-w-[122px]"
              >
                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <span className="text-[10px] font-modernist font-medium text-neutral-500">
                    Creative Output
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 text-[9px] font-bold">
                    Active
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-debata font-bold text-neutral-950">
                  200%
                </div>
              </motion.div>
            </div>

          </div>

          {/* ================================================================ */}
          {/* 3. PORTRAIT POSITIONING AND LIGHTING                             */}
          {/* Overlapping the boundary between orange and white sections        */}
          {/* ================================================================ */}
          <div className="hidden lg:block absolute left-[41.5%] xl:left-[42.5%] bottom-0 -translate-x-1/2 w-[310px] xl:w-[370px] h-[88%] lg:h-[92%] xl:h-[96%] max-h-[640px] z-30 pointer-events-none select-none">
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="relative w-full h-full transform-gpu"
            >
              {/* Studio Backlight & Golden Rim Halo behind portrait */}
              <div
                className="absolute -left-12 bottom-12 w-[300px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-80"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255, 215, 42, 0.75) 0%, rgba(255, 120, 0, 0.45) 50%, transparent 80%)",
                }}
              />

              {/* Darani Cutout with Cinematic Rim Lighting on Hair and Silhouette */}
              <Image
                src="/images/darani-cinematic.png"
                alt="Portrait of Darani Viswanathan with cinematic lighting"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.05] brightness-[1.01] drop-shadow-[-4px_0_16px_rgba(255,180,20,0.4)] drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                sizes="(max-width: 1280px) 340px, 400px"
              />

              {/* Floating Social Icons Bar anchored above bottom edge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-[#141517]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 shadow-[0_8px_25px_rgba(0,0,0,0.5)] pointer-events-auto">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="w-3 h-3" />
                  </motion.a>
                )}
                {linkedinUrl && (
                  <motion.a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-3 h-3" />
                  </motion.a>
                )}
                {instagramUrl && (
                  <motion.a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="Instagram profile"
                  >
                    <FiInstagram className="w-3 h-3" />
                  </motion.a>
                )}
                <motion.a
                  href={`mailto:${socialsData.email}`}
                  whileHover={{ scale: 1.15, y: -1 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  aria-label="Send email"
                >
                  <FiMail className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Mobile Portrait Viewport (< lg breakpoint) */}
          <div className="lg:hidden relative w-full h-[350px] sm:h-[410px] bg-gradient-to-b from-[#DE5D14] via-[#F04B00] to-white flex items-end justify-center overflow-hidden">
            {/* Ambient Mobile Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,#FFD52A_0%,#FF6900_45%,transparent_75%)] opacity-85" />
            <div className="relative w-[260px] sm:w-[320px] h-[330px] sm:h-[390px] z-10">
              <Image
                src="/images/darani-cinematic.png"
                alt="Portrait of Darani Viswanathan"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.05] drop-shadow-[-2px_0_12px_rgba(255,180,20,0.45)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                sizes="320px"
              />
              {/* Mobile Social Bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#141517]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 shadow-xl">
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
                  className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white"
                  aria-label="Email"
                >
                  <FiMail className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* 7. RIGHT SECTION: CLEAN WHITE EDITORIAL PANEL (~42% Desktop Width) */}
          {/* Smooth rounded corners matching Reference Image 1                  */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 bg-white text-neutral-900 lg:rounded-tl-[44px] xl:rounded-tl-[52px] lg:rounded-bl-[44px] xl:rounded-bl-[52px] shadow-[-16px_0_45px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-9 xl:p-11 relative z-20 flex flex-col justify-between h-full overflow-hidden">
            
            {/* 8. TOP NAVIGATION (About, Skills, Experience, Projects, Contact) */}
            <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 pb-3 sm:pb-4 border-b border-neutral-100 select-none">
              <Link
                href="/about"
                className="text-xs sm:text-sm font-modernist font-semibold text-neutral-800 hover:text-black hover:underline underline-offset-4 transition-all"
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

            {/* 9. OVERVIEW SECTION */}
            <div className="py-3 sm:py-5 lg:py-6 lg:pl-3 xl:pl-5 my-auto">
              {/* Tag Pill: ( OVERVIEW ) */}
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase select-none w-fit mb-2.5">
                OVERVIEW
              </div>

              {/* Bold Editorial Hook Paragraph with Orange Highlights */}
              <h2 className="font-debata text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-semibold text-neutral-950 leading-[1.28] tracking-tight mb-2.5">
                Hey there, I&apos;m{" "}
                <span className="text-[#FF4B0A] font-bold underline decoration-[#FF4B0A]/30 underline-offset-4">
                  Darani
                </span>
                . I combine{" "}
                <span className="text-[#FF4B0A] font-bold">creative design</span>,{" "}
                <span className="text-[#FF4B0A] font-bold">frontend engineering</span>, and{" "}
                <span className="text-[#FF4B0A] font-bold">artificial intelligence</span> to transform ideas
                into functional digital products. Ready to build something extraordinary?
              </h2>

              {/* Sub-tagline */}
              <p className="text-[11px] font-mono text-neutral-400 tracking-wider">
                Aesthetics. Code. Measurable Impact.
              </p>
            </div>

            {/* 10. PROFILE INFORMATION CARD */}
            <div className="mt-auto lg:pl-3 xl:pl-5">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#F8F8F9] border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors"
              >
                {/* Header Row: Avatar with Orange Ring + Verified Badges */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#FF4B0A] p-[1.5px] flex-shrink-0 shadow-xs">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                      <Image
                        src="/images/darani-avatar.png"
                        alt="Darani Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-debata font-bold text-xs sm:text-sm text-neutral-950 truncate">
                        Darani Viswanathan
                      </span>
                      <span className="px-1.5 py-0.2 rounded bg-black text-white text-[9px] font-bold tracking-wider">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-modernist text-neutral-500 truncate">
                      Founder, ArtZa Designs · Aakam Shine Contributor
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="font-debata text-xs sm:text-sm font-medium text-neutral-900 leading-snug italic mb-2.5">
                  &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
                </p>

                {/* Checkpoint Highlights */}
                <div className="pt-2.5 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] sm:text-[11px] font-modernist text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#FF4B0A] flex-shrink-0" />
                    <span>2+ Years Hands-on Creative Design Experience</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#FF4B0A] flex-shrink-0" />
                    <span>Founder of ArtZa Designs Venture</span>
                  </div>
                </div>

                {/* Let's Connect Full-Width CTA Button */}
                <div className="mt-3 pt-2.5 border-t border-neutral-200/70">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-neutral-950 hover:bg-black text-white text-xs font-modernist font-semibold shadow-sm hover:shadow transition-all"
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
export default NovaHero;
