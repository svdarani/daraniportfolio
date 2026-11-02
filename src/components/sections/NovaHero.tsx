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

  // Subtle interactive pointer physics for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);

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
      {/* DESKTOP HERO BILLBOARD (lg breakpoint and up)                             */}
      {/* Exact 1:1 Pixel Match of Target Reference (Image 2)                       */}
      {/* ========================================================================= */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block relative w-full max-w-[1360px] aspect-[989/554] rounded-[44px] xl:rounded-[50px] border-[3.5px] border-[#FF4B0A] shadow-[0_24px_80px_rgba(255,75,10,0.22),0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden bg-[#8F1D00] select-none"
      >
        {/* Foundation Artwork Canvas: Master plate from Target Reference Image 2 */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/cinematic-hero-card-2x.png"
            alt="Darani Viswanathan — Cinematic Creative Developer Canvas"
            fill
            priority
            quality={100}
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            sizes="(max-width: 1400px) 100vw, 1360px"
          />
        </div>

        {/* Dynamic Subtle Pointer Illumination overlay */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="absolute inset-0 pointer-events-none select-none mix-blend-overlay opacity-30 bg-[radial-gradient(circle_at_38%_45%,#FFD52A_0%,transparent_60%)]"
        />

        {/* ----------------------------------------------------------------------- */}
        {/* 1. TOP-LEFT BADGE: Abstract Emblem + Identity Pill Badge                */}
        {/* Coordinates match Image 2: left ~4.8%, top ~6.8%                        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[6.8%] left-[4.8%] z-30 flex items-center gap-3">
          {/* Dual Oval Emblem matching Reference Image */}
          <div className="w-8 h-6 sm:w-9 sm:h-7 flex items-center justify-center flex-shrink-0">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="drop-shadow-sm">
              <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
              <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
              <ellipse cx="17" cy="13" rx="4" ry="13" fill="#FF4B0A" />
            </svg>
          </div>

          {/* Identity Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white text-[11px] xl:text-xs font-modernist tracking-wide select-none shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Darani Viswanathan — Creative Technologist</span>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 2. LEFT HEADLINE: "Creative Designer & Developer"                      */}
        {/* Coordinates match Image 2: left ~5.2%, top ~31.8%                       */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[31.8%] left-[5.2%] z-30 max-w-[34%]">
          <h1 className="font-debata text-[38px] xl:text-[46px] 2xl:text-[54px] font-extrabold text-white leading-[1.02] tracking-[-0.035em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.25)] select-none">
            Creative<br />
            Designer &amp;<br />
            Developer
          </h1>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 3. LEFT CTA BUTTONS: Explore My Work & View Resume                      */}
        {/* Coordinates match Image 2: left ~5.2%, top ~56.8%                       */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[56.8%] left-[5.2%] z-30 flex items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-white text-neutral-950 font-modernist font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all select-none"
          >
            <span>Explore My Work</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 xl:py-3 rounded-full border border-white/80 hover:border-white bg-transparent hover:bg-white/15 text-white font-modernist font-medium text-xs xl:text-sm transition-all select-none"
          >
            <span>View Resume</span>
          </Link>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 4. BOTTOM-LEFT STATS CARDS                                              */}
        {/* Exact proportional match of Image 2: left ~4.8%, top ~81.8%             */}
        {/* Card 1: 2+ Yrs / Experience  ·  Card 2: 100% / Creative Output          */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[81.8%] left-[4.8%] z-30 flex items-center gap-3 select-none">
          {/* Card 1: Experience */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl px-4 py-2.5 xl:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-white/80 min-w-[105px] xl:min-w-[118px]"
          >
            <div className="text-xl xl:text-2xl font-debata font-extrabold text-[#FF8500] leading-none mb-1">
              2+ Yrs
            </div>
            <div className="text-[11px] xl:text-xs font-modernist font-semibold text-neutral-800 leading-tight">
              Experience
            </div>
          </motion.div>

          {/* Card 2: Creative Output */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl px-4 py-2.5 xl:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-white/80 min-w-[125px] xl:min-w-[140px]"
          >
            <div className="text-xl xl:text-2xl font-debata font-extrabold text-neutral-950 leading-none mb-1">
              100%
            </div>
            <div className="text-[11px] xl:text-xs font-modernist font-semibold text-neutral-800 leading-tight">
              Creative Output
            </div>
          </motion.div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 5. FLOATING SOCIAL DOCK ANCHORED ON PORTRAIT'S TORSO                    */}
        {/* Exact position from Image 2: center ~41.5%, top ~86.2%                  */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[86.2%] left-[41.5%] -translate-x-1/2 z-30 flex items-center gap-2 bg-[#161719]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl pointer-events-auto">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.92 }}
              className="w-5 h-5 xl:w-6 xl:h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
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
              className="w-5 h-5 xl:w-6 xl:h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
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
              className="w-5 h-5 xl:w-6 xl:h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Instagram profile"
            >
              <FiInstagram className="w-3 h-3" />
            </motion.a>
          )}
          <motion.a
            href={`mailto:${socialsData.email}`}
            whileHover={{ scale: 1.15, y: -1 }}
            whileTap={{ scale: 0.92 }}
            className="w-5 h-5 xl:w-6 xl:h-6 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            aria-label="Send email"
          >
            <FiMail className="w-3 h-3" />
          </motion.a>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 6. RIGHT PANEL EDITORIAL CONTENT COLUMN                                 */}
        {/* Position matches Image 2: left ~60.5%, right ~5.5%                      */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[6.8%] bottom-[6.8%] left-[60.5%] right-[5.5%] z-30 flex flex-col justify-between overflow-hidden">
          
          {/* Top Navigation Links */}
          <nav className="flex items-center justify-between sm:justify-start gap-4 xl:gap-7 pb-2 text-xs xl:text-sm font-modernist select-none">
            <Link
              href="/about"
              className="font-semibold text-neutral-900 hover:text-[#FF4B0A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/skills"
              className="font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/experience"
              className="font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Overview Editorial Paragraph */}
          <div className="my-auto py-2">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-neutral-300 text-[9px] xl:text-[10px] font-mono tracking-widest text-neutral-600 uppercase select-none w-fit mb-2">
              OVERVIEW
            </div>
            <h2 className="font-debata text-base xl:text-[20px] 2xl:text-[22px] font-bold text-neutral-950 leading-[1.26] tracking-tight mb-2">
              Hey there, I&apos;m{" "}
              <span className="text-[#FF4B0A] underline decoration-[#FF4B0A]/30 underline-offset-4">
                Darani
              </span>
              . I combine{" "}
              <span className="text-[#FF4B0A]">creative design</span>,{" "}
              <span className="text-[#FF4B0A]">frontend engineering</span>, and{" "}
              <span className="text-[#FF4B0A]">artificial intelligence</span> to transform ideas
              into functional digital products. Ready to build something extraordinary?
            </h2>
            <p className="text-[10px] xl:text-[11px] font-mono text-neutral-400 tracking-wider">
              Aesthetics. Code. Measurable Impact.
            </p>
          </div>

          {/* Credibility Profile Card */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="p-3.5 xl:p-4 rounded-2xl bg-[#F8F8F9] border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-colors select-none"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-9 h-9 xl:w-10 xl:h-10 rounded-full overflow-hidden ring-2 ring-[#FF4B0A] p-[1px] flex-shrink-0 shadow-xs">
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
                  <span className="font-debata font-bold text-xs xl:text-sm text-neutral-950 truncate">
                    Darani Viswanathan
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-black text-white text-[8px] xl:text-[9px] font-bold tracking-wider">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[10px] xl:text-[11px] font-modernist text-neutral-500 truncate">
                  Founder, ArtZa Designs · Aakam Shine Contributor
                </p>
              </div>
            </div>

            <p className="font-debata text-xs xl:text-[13px] font-medium text-neutral-900 leading-snug italic mb-2">
              &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
            </p>

            <div className="pt-2 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] xl:text-[11px] font-modernist text-neutral-600">
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-3 h-3 text-[#FF4B0A] flex-shrink-0" />
                <span>2+ Years Hands-on Creative Design Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-3 h-3 text-[#FF4B0A] flex-shrink-0" />
                <span>Founder of ArtZa Designs Venture</span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-neutral-200/70">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-neutral-950 hover:bg-black text-white text-xs font-modernist font-semibold shadow-xs hover:shadow transition-all"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
              </Link>
            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET HERO VIEWPORT (< lg breakpoint)                           */}
      {/* Clean stacked layout preserving the exact cinematic atmosphere            */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full max-w-[640px] rounded-[36px] border-[3px] border-[#FF4B0A] shadow-[0_20px_60px_rgba(255,75,10,0.2)] overflow-hidden bg-[#8F1D00] flex flex-col my-4">
        
        {/* Top Half: Cinematic Orange & Portrait Section */}
        <div className="relative w-full h-[380px] sm:h-[440px] overflow-hidden p-5 flex flex-col justify-between">
          
          {/* Layered Orange Gradient Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 110% 110% at 20% 25%, #FF7100 0%, #F45100 28%, #D63B00 48%, #B52A00 70%, #8F1D00 100%)",
            }}
          />

          {/* Diagonal Golden Light Beam */}
          <div
            className="absolute -left-10 bottom-[-50px] w-[260px] h-[500px] rotate-[-35deg] origin-bottom-left pointer-events-none blur-3xl opacity-85"
            style={{
              background:
                "linear-gradient(to top, transparent 0%, rgba(255, 185, 0, 0.5) 45%, rgba(255, 213, 42, 0.8) 80%, rgba(255, 245, 180, 0.9) 100%)",
            }}
          />

          {/* Golden Radial Backlight behind portrait */}
          <div
            className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[340px] h-[340px] rounded-full pointer-events-none blur-2xl opacity-90"
            style={{
              background:
                "radial-gradient(circle, #FFD52A 0%, #FFB900 35%, #FF7100 65%, transparent 90%)",
            }}
          />

          {/* Top Bar Mobile */}
          <div className="relative z-20 flex items-center gap-2.5">
            <div className="w-8 h-6 flex items-center justify-center flex-shrink-0">
              <svg width="30" height="22" viewBox="0 0 34 26" fill="none">
                <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
                <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
                <ellipse cx="17" cy="13" rx="4" ry="13" fill="#FF4B0A" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white text-[10px] font-modernist tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Darani Viswanathan</span>
            </div>
          </div>

          {/* Portrait with Golden Rim Lighting */}
          <div className="relative w-[280px] sm:w-[320px] h-[300px] sm:h-[350px] mx-auto z-10 flex items-end justify-center">
            <Image
              src="/images/darani-cinematic.png"
              alt="Portrait of Darani Viswanathan with cinematic lighting"
              fill
              priority
              className="object-contain object-bottom filter contrast-[1.05] drop-shadow-[-2px_0_12px_rgba(255,185,0,0.5)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
              sizes="320px"
            />

            {/* Mobile Social Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#161719]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 shadow-xl">
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

        {/* Middle Headline, Buttons & Stats for Mobile */}
        <div className="p-5 bg-gradient-to-b from-[#8F1D00] to-[#550A00] text-white flex flex-col gap-4">
          <h1 className="font-debata text-3xl font-extrabold text-white leading-[1.04] tracking-tight">
            Creative<br />
            Designer &amp;<br />
            Developer
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs shadow-md"
            >
              <span>Explore My Work</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/80 text-white font-medium text-xs"
            >
              <span>View Resume</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="bg-white rounded-xl p-3 min-w-[100px] text-neutral-950 shadow-sm">
              <div className="text-xl font-debata font-extrabold text-[#FF8500] leading-none mb-0.5">
                2+ Yrs
              </div>
              <div className="text-[11px] font-medium text-neutral-700">
                Experience
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 min-w-[110px] text-neutral-950 shadow-sm">
              <div className="text-xl font-debata font-extrabold text-neutral-950 leading-none mb-0.5">
                100%
              </div>
              <div className="text-[11px] font-medium text-neutral-700">
                Creative Output
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Half: Editorial White Section on Mobile */}
        <div className="p-5 sm:p-6 bg-white text-neutral-900 flex flex-col gap-4">
          <nav className="flex items-center justify-between pb-2 border-b border-neutral-100 text-xs font-medium">
            <Link href="/about" className="font-semibold text-neutral-900">
              About
            </Link>
            <Link href="/skills" className="text-neutral-500">
              Skills
            </Link>
            <Link href="/experience" className="text-neutral-500">
              Experience
            </Link>
            <Link href="/projects" className="text-neutral-500">
              Projects
            </Link>
            <Link href="/contact" className="text-neutral-500">
              Contact
            </Link>
          </nav>

          <div>
            <div className="inline-flex items-center px-2 py-0.5 rounded-full border border-neutral-300 text-[9px] font-mono tracking-widest text-neutral-600 uppercase mb-2">
              OVERVIEW
            </div>
            <h2 className="font-debata text-base sm:text-lg font-bold text-neutral-950 leading-snug mb-2">
              Hey there, I&apos;m{" "}
              <span className="text-[#FF4B0A]">Darani</span>. I combine{" "}
              <span className="text-[#FF4B0A]">creative design</span>,{" "}
              <span className="text-[#FF4B0A]">frontend engineering</span>, and{" "}
              <span className="text-[#FF4B0A]">artificial intelligence</span> to transform ideas
              into functional digital products. Ready to build something extraordinary?
            </h2>
            <p className="text-[10px] font-mono text-neutral-400 tracking-wider">
              Aesthetics. Code. Measurable Impact.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F8F9] border border-neutral-200">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#FF4B0A] p-[1px] flex-shrink-0">
                <Image
                  src="/images/darani-avatar.png"
                  alt="Darani Avatar"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-debata font-bold text-xs text-neutral-950">
                    Darani Viswanathan
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-black text-white text-[8px] font-bold">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[10px] text-neutral-500">
                  Founder, ArtZa Designs · Aakam Shine Contributor
                </p>
              </div>
            </div>

            <p className="font-debata text-xs font-medium text-neutral-800 italic mb-2">
              &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
            </p>

            <div className="pt-2 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] text-neutral-600">
              <div className="flex items-center gap-1">
                <FiCheckCircle className="w-3 h-3 text-[#FF4B0A]" />
                <span>2+ Years Hands-on Creative Design Experience</span>
              </div>
              <div className="flex items-center gap-1">
                <FiCheckCircle className="w-3 h-3 text-[#FF4B0A]" />
                <span>Founder of ArtZa Designs Venture</span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-200/70">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full px-4 py-2 rounded-xl bg-neutral-950 text-white text-xs font-semibold"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default NovaHero;
