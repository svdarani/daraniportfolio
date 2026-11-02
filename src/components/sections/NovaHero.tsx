"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

  const githubUrl = socialsData.links.find((l) => l.platform === "GitHub")?.url;
  const linkedinUrl = socialsData.links.find((l) => l.platform === "LinkedIn")?.url;
  const instagramUrl = socialsData.links.find((l) => l.platform === "Instagram")?.url;

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[940px] flex items-center justify-center p-3 sm:p-5 lg:p-6 pb-20 lg:pb-6 overflow-hidden bg-white select-none">
      {/* ========================================================================= */}
      {/* DESKTOP HERO VIEWPORT (lg breakpoint and up)                              */}
      {/* Pixel-perfect reproduction of Final Target Reference (IMAGE 2)             */}
      {/* ========================================================================= */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block relative w-full max-w-[1360px] aspect-[988/554] max-h-[calc(100vh-3.5rem)] rounded-[36px] sm:rounded-[46px] lg:rounded-[50px] border-[3.5px] sm:border-4 border-[#FF4B0A] shadow-[0_24px_80px_rgba(255,75,10,0.22),0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden bg-white select-none"
      >
        {/* Foundation Artwork: Master high-resolution cinematic background + lit portrait from IMAGE 2 */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/cinematic-card-clean.png"
            alt="Darani Viswanathan — Cinematic Creative Developer Portfolio"
            fill
            priority
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            sizes="(max-width: 1400px) 100vw, 1360px"
          />
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 1. TOP-LEFT BADGE: Abstract Emblem + Identity Pill Badge                */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[4.8%] left-[3.8%] z-20 flex items-center gap-3">
          {/* Dual Oval Emblem matching Reference Image */}
          <div className="w-8 h-6 sm:w-9 sm:h-7 flex items-center justify-center flex-shrink-0">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="drop-shadow-sm">
              <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
              <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
              <ellipse cx="17" cy="13" rx="4" ry="13" fill="#FF4B0A" />
            </svg>
          </div>

          {/* Identity Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white text-[11px] xl:text-xs font-medium tracking-wide select-none shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Darani Viswanathan — Creative Technologist</span>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 2. LEFT HEADLINE: "Creative Designer & Developer"                      */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[31.5%] left-[5.2%] z-20 max-w-[34%]">
          <h1 className="font-debata text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] font-extrabold text-white leading-[1.03] tracking-[-0.035em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.25)] select-none">
            Creative<br />
            Designer &amp;<br />
            Developer
          </h1>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 3. LEFT CTA BUTTONS: Explore My Work & View Resume                      */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[57.5%] left-[5.2%] z-20 flex items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-white text-neutral-950 font-modernist font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all select-none"
          >
            <span>Explore My Work</span>
            <FiArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 xl:py-3 rounded-full border border-white/40 bg-white/5 backdrop-blur-xs text-white font-modernist font-medium text-xs xl:text-sm hover:bg-white/20 transition-all select-none"
          >
            <span>View Resume</span>
          </Link>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 4. STATISTICS CARDS (IMAGE 2: "2+ Yrs Experience" & "100% Output")      */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute bottom-[9.5%] left-[3.5%] z-20 flex items-center gap-3.5 select-none">
          {/* Card 1: Experience */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl lg:rounded-[20px] px-4 py-2.5 xl:py-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)] border border-white/80 min-w-[110px] xl:min-w-[125px]"
          >
            <div className="text-xl lg:text-2xl xl:text-[26px] font-debata font-bold text-[#FF4B0A] leading-none mb-1">
              2+ Yrs
            </div>
            <div className="text-[11px] xl:text-xs font-modernist font-semibold text-neutral-800">
              Experience
            </div>
          </motion.div>

          {/* Card 2: Creative Output */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl lg:rounded-[20px] px-4 py-2.5 xl:py-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)] border border-white/80 min-w-[110px] xl:min-w-[125px]"
          >
            <div className="text-xl lg:text-2xl xl:text-[26px] font-debata font-bold text-neutral-950 leading-none mb-1">
              100%
            </div>
            <div className="text-[11px] xl:text-xs font-modernist font-semibold text-neutral-800">
              Creative Output
            </div>
          </motion.div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 5. UPPER FLOATING SOCIAL DOCK (Dock A: GitHub, LinkedIn, IG, Email)     */}
        {/* Positioned right above the bottom main navigation dock                  */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute bottom-[10.5%] left-[41%] -translate-x-1/2 z-30 flex items-center gap-2 bg-[#18191C]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.4)] pointer-events-auto">
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

        {/* ----------------------------------------------------------------------- */}
        {/* 6. RIGHT EDITORIAL WHITE PANEL (Starting at ~47% Split)                */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-0 right-0 w-[53%] h-full z-20 p-6 sm:p-7 lg:p-8 xl:p-10 flex flex-col justify-between overflow-hidden pointer-events-auto">
          {/* Top Navigation Menu (About, Skills, Experience, Projects, Contact) */}
          <div className="flex items-center justify-end gap-5 xl:gap-7 select-none pt-1">
            <Link
              href="/about"
              className="text-xs xl:text-sm font-modernist font-bold text-neutral-900 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/skills"
              className="text-xs xl:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/experience"
              className="text-xs xl:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-xs xl:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-xs xl:text-sm font-modernist font-medium text-neutral-500 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Overview Section */}
          <div className="my-auto py-2 xl:py-3 lg:pl-3 xl:pl-6 max-w-[500px]">
            {/* Pill Tag: ( OVERVIEW ) */}
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase select-none w-fit mb-2">
              OVERVIEW
            </div>

            {/* Editorial Hook with Exact Orange Highlighted Words */}
            <h2 className="font-debata text-lg xl:text-[21px] 2xl:text-[23px] font-bold text-neutral-950 leading-[1.28] tracking-tight mb-2">
              Hey there, I&apos;m{" "}
              <span className="text-[#FF4B0A]">Darani</span>. I combine{" "}
              <span className="text-[#FF4B0A]">creative design</span>,{" "}
              <span className="text-[#FF4B0A]">frontend engineering</span>, and{" "}
              <span className="text-[#FF4B0A]">artificial intelligence</span> to transform ideas
              into functional digital products. Ready to build something extraordinary?
            </h2>

            {/* Sub-tagline */}
            <p className="text-[10px] xl:text-[11px] font-mono text-neutral-400 tracking-wider">
              Aesthetics. Code. Measurable Impact.
            </p>
          </div>

          {/* Credibility Profile Card matching IMAGE 2 */}
          <div className="lg:pl-3 xl:pl-6 mb-1">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-4 rounded-2xl bg-[#F8F8F9] border border-neutral-200/90 shadow-xs hover:border-neutral-300 transition-colors"
            >
              {/* Header Row: Avatar with Orange Ring + Verified Badge */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#FF4B0A] p-[1.5px] flex-shrink-0">
                  <Image
                    src="/images/darani-avatar.png"
                    alt="Darani Avatar"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-debata font-bold text-xs xl:text-sm text-neutral-950 truncate">
                      Darani Viswanathan
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-black text-white text-[8px] font-bold tracking-wider">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-[10px] font-modernist text-neutral-500 truncate">
                    Founder, ArtZa Designs · Aakam Shine Contributor
                  </p>
                </div>
              </div>

              {/* Italic Quotation */}
              <p className="font-debata text-xs font-medium text-neutral-800 leading-snug italic mb-2">
                &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
              </p>

              {/* Checkpoint Highlights */}
              <div className="pt-2 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] font-modernist text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-3.5 h-3.5 text-[#FF4B0A] flex-shrink-0" />
                  <span>2+ Years Hands-on Creative Design Experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-3.5 h-3.5 text-[#FF4B0A] flex-shrink-0" />
                  <span>Founder of ArtZa Designs Venture</span>
                </div>
              </div>

              {/* Full-Width Black CTA Button */}
              <div className="mt-2.5 pt-2 border-t border-neutral-200/70">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full px-4 py-2 rounded-xl bg-neutral-950 hover:bg-black text-white text-xs font-modernist font-semibold shadow-sm hover:shadow transition-all"
                >
                  <span>Let&apos;s Connect</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET HERO VIEWPORT (< lg breakpoint)                           */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full max-w-[620px] rounded-[32px] sm:rounded-[40px] border-[3px] border-[#FF4B0A] overflow-hidden bg-white shadow-xl flex flex-col">
        {/* Top Orange Showcase Area */}
        <div className="relative w-full bg-gradient-to-br from-[#A92300] via-[#DE5D14] to-[#FF6900] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,#FFD52A_0%,#FF6900_45%,transparent_75%)] opacity-80" />

          {/* Top Bar on Mobile */}
          <div className="relative z-10 flex items-center gap-3 mb-6">
            <div className="w-8 h-6 flex items-center justify-center flex-shrink-0">
              <svg width="30" height="22" viewBox="0 0 34 26" fill="none">
                <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
                <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
                <ellipse cx="17" cy="13" rx="4" ry="13" fill="#FF4B0A" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Darani Viswanathan — Creative Technologist</span>
            </div>
          </div>

          {/* Headline on Mobile */}
          <h1 className="relative z-10 font-debata text-3xl sm:text-4xl font-extrabold text-white leading-[1.04] mb-5">
            Creative<br />
            Designer &amp;<br />
            Developer
          </h1>

          {/* Action Buttons on Mobile */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs shadow-md"
            >
              <span>Explore My Work</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/40 bg-white/10 text-white font-medium text-xs"
            >
              <span>View Resume</span>
            </Link>
          </div>

          {/* Statistics Cards on Mobile */}
          <div className="relative z-10 flex items-center gap-3 mb-6">
            <div className="bg-white rounded-xl p-3 shadow-md border border-white/80 flex-1">
              <div className="text-xl font-debata font-bold text-[#FF4B0A] leading-none mb-1">
                2+ Yrs
              </div>
              <div className="text-[11px] font-modernist font-semibold text-neutral-800">
                Experience
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-md border border-white/80 flex-1">
              <div className="text-xl font-debata font-bold text-neutral-950 leading-none mb-1">
                100%
              </div>
              <div className="text-[11px] font-modernist font-semibold text-neutral-800">
                Creative Output
              </div>
            </div>
          </div>

          {/* Portrait on Mobile */}
          <div className="relative w-full h-[280px] sm:h-[320px] flex items-end justify-center">
            <div className="relative w-[240px] sm:w-[280px] h-[280px] sm:h-[320px]">
              <Image
                src="/images/darani-cinematic.png"
                alt="Portrait of Darani Viswanathan"
                fill
                priority
                className="object-contain object-bottom filter contrast-[1.05] drop-shadow-[-2px_0_12px_rgba(255,180,20,0.45)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                sizes="280px"
              />
            </div>
          </div>

          {/* Upper Floating Social Dock on Mobile */}
          <div className="relative z-10 mx-auto mt-3 flex items-center gap-2 bg-[#18191C]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 shadow-xl">
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

        {/* Bottom White Editorial Panel on Mobile */}
        <div className="p-5 sm:p-7 bg-white text-neutral-950 flex flex-col gap-5">
          {/* Top Nav Links */}
          <nav className="flex items-center justify-between gap-3 text-xs font-semibold pb-3 border-b border-neutral-100 overflow-x-auto">
            <Link href="/about" className="text-black hover:text-[#FF4B0A]">
              About
            </Link>
            <Link href="/skills" className="text-neutral-500 hover:text-black">
              Skills
            </Link>
            <Link href="/experience" className="text-neutral-500 hover:text-black">
              Experience
            </Link>
            <Link href="/projects" className="text-neutral-500 hover:text-black">
              Projects
            </Link>
            <Link href="/contact" className="text-neutral-500 hover:text-black">
              Contact
            </Link>
          </nav>

          {/* Overview */}
          <div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase w-fit mb-2">
              OVERVIEW
            </div>
            <h2 className="font-debata text-lg sm:text-xl font-bold text-neutral-950 leading-[1.3] mb-2">
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

          {/* Profile Card */}
          <div className="p-4 rounded-2xl bg-[#F8F8F9] border border-neutral-200/90 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#FF4B0A] p-0.5 flex-shrink-0">
                <Image
                  src="/images/darani-avatar.png"
                  alt="Darani Avatar"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-debata font-bold text-xs text-neutral-950 truncate">
                    Darani Viswanathan
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-black text-white text-[8px] font-bold tracking-wider">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[10px] text-neutral-500 truncate">
                  Founder, ArtZa Designs · Aakam Shine Contributor
                </p>
              </div>
            </div>

            <p className="font-debata text-xs font-medium text-neutral-800 italic leading-snug mb-2">
              &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
            </p>

            <div className="pt-2 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] text-neutral-600">
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
                className="inline-flex items-center justify-between w-full px-4 py-2 rounded-xl bg-neutral-950 hover:bg-black text-white text-xs font-semibold"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovaHero;
