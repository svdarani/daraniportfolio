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
    <section className="relative w-full min-h-screen lg:h-screen lg:max-h-[960px] flex items-center justify-center p-3 sm:p-5 lg:p-6 pb-20 lg:pb-6 overflow-hidden bg-white">
      {/* ========================================================================= */}
      {/* DESKTOP HERO SECTION (lg breakpoint and up)                               */}
      {/* Exact reproduction of Reference Image 1 with "Cinematic O bg.png"        */}
      {/* ========================================================================= */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block relative w-full max-w-[1360px] aspect-[1024/576] rounded-[36px] sm:rounded-[44px] lg:rounded-[48px] border-[2.5px] border-[#DE5D14] shadow-[0_24px_80px_rgba(222,93,20,0.22)] overflow-hidden bg-[#DE5D14] select-none"
      >
        {/* Foundation Background Image: The exact third attached image ("Cinematic O bg.png") */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/cinematic-bg.png"
            alt="Darani Viswanathan — Cinematic Creative Developer Background"
            fill
            priority
            className="absolute -top-[1.7%] -left-[1.6%] w-[103.2%] h-[103.6%] object-cover object-center pointer-events-none select-none"
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
              <ellipse cx="17" cy="13" rx="4" ry="13" fill="#DE5D14" />
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
          <h1 className="font-debata text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] font-bold text-white leading-[1.02] tracking-[-0.035em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.22)] select-none">
            Creative<br />
            Designer &amp;<br />
            Developer
          </h1>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 3. LEFT CTA BUTTONS: Explore My Work & View Resume                      */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[58%] left-[5.2%] z-20 flex items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-white text-neutral-950 font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all select-none"
          >
            <span>Explore My Work</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white font-medium text-xs xl:text-sm hover:bg-white/20 hover:scale-105 active:scale-95 transition-all select-none shadow-sm"
          >
            <span>View Resume</span>
          </Link>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 4. BOTTOM-LEFT STAT METRIC CARDS                                        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute bottom-[6.5%] left-[4.2%] z-20 flex items-center gap-3 select-none">
          {/* Card 1: 2+ Yrs Experience */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl py-2 px-3.5 xl:py-3 xl:px-5 shadow-lg border border-white/90 min-w-[105px] xl:min-w-[125px]"
          >
            <div className="text-2xl xl:text-3xl font-extrabold text-[#DE5D14] leading-tight font-debata">
              2+ Yrs
            </div>
            <div className="text-[11px] xl:text-xs font-medium text-neutral-900 mt-0.5">
              Experience
            </div>
          </motion.div>

          {/* Card 2: 100% Creative Output */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white rounded-2xl py-2 px-3.5 xl:py-3 xl:px-5 shadow-lg border border-white/90 min-w-[125px] xl:min-w-[145px]"
          >
            <div className="text-2xl xl:text-3xl font-extrabold text-[#DE5D14] leading-tight font-debata">
              100%
            </div>
            <div className="text-[11px] xl:text-xs font-medium text-neutral-900 mt-0.5">
              Creative Output
            </div>
          </motion.div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 5. FLOATING SOCIAL MEDIA BAR (Centered above the bottom dock)          */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute bottom-[11.8%] left-[43.8%] -translate-x-1/2 z-30 flex items-center gap-2 bg-[#202226]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl pointer-events-auto">
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

        {/* ----------------------------------------------------------------------- */}
        {/* 6. RIGHT TOP NAVIGATION MENU                                            */}
        {/* ----------------------------------------------------------------------- */}
        <nav className="absolute top-[4.5%] left-[60%] z-20 flex items-center gap-5 xl:gap-7 select-none">
          <Link
            href="/about"
            className="text-xs xl:text-sm font-semibold text-neutral-950 hover:text-[#DE5D14] transition-colors"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-xs xl:text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/experience"
            className="text-xs xl:text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-xs xl:text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-xs xl:text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* ----------------------------------------------------------------------- */}
        {/* 7. RIGHT EDITORIAL INTRODUCTION & OVERVIEW                             */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[19.5%] left-[60%] max-w-[36%] xl:max-w-[37%] z-20">
          {/* Pill Badge: OVERVIEW */}
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase select-none w-fit mb-2.5">
            OVERVIEW
          </div>

          {/* Hook Paragraph with Vivid Orange Highlights */}
          <h2 className="font-debata text-[17px] xl:text-[20px] 2xl:text-[22px] font-bold text-neutral-950 leading-[1.28] tracking-tight mb-2">
            Hey there, I&apos;m{" "}
            <span className="text-[#DE5D14]">Darani</span>. I combine{" "}
            <span className="text-[#DE5D14]">creative design</span>,{" "}
            <span className="text-[#DE5D14]">frontend engineering</span>, and{" "}
            <span className="text-[#DE5D14]">artificial intelligence</span> to transform ideas
            into functional digital products. Ready to build something extraordinary?
          </h2>

          {/* Tagline */}
          <p className="text-[10px] xl:text-[11px] font-mono text-neutral-400 tracking-wider">
            Aesthetics. Code. Measurable Impact.
          </p>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* 8. RIGHT PROFILE CARD                                                   */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute top-[59%] left-[60%] w-[36%] xl:w-[35%] max-w-[420px] z-20">
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="p-3.5 xl:p-4 rounded-2xl bg-[#F8F8F9] border border-neutral-200/90 shadow-sm hover:border-neutral-300 transition-colors select-none"
          >
            {/* Header: Avatar + Name + Verified Badge */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="relative w-9 h-9 xl:w-10 xl:h-10 rounded-full overflow-hidden ring-2 ring-[#DE5D14] p-0.5 flex-shrink-0">
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
                  <span className="px-1.5 py-0.5 rounded bg-black text-white text-[8px] xl:text-[9px] font-bold tracking-wider">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[10px] xl:text-[11px] text-neutral-500 truncate">
                  Founder, ArtZa Designs · Aakam Shine Contributor
                </p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="font-debata text-[11px] xl:text-xs font-medium text-neutral-800 leading-snug italic mb-2">
              &ldquo;Combining aesthetic perfection with functional frontend code and artificial intelligence.&rdquo;
            </p>

            {/* Checkpoint Highlights */}
            <div className="pt-1.5 border-t border-neutral-200/70 flex flex-col gap-1 text-[10px] xl:text-[11px] text-neutral-600">
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                <span>2+ Years Hands-on Creative Design Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-3.5 h-3.5 text-[#DE5D14] flex-shrink-0" />
                <span>Founder of ArtZa Designs Venture</span>
              </div>
            </div>

            {/* CTA Button: Let's Connect */}
            <div className="mt-2 pt-1.5 border-t border-neutral-200/70">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full px-4 py-2 rounded-full bg-neutral-950 hover:bg-black text-white text-xs font-semibold transition-all group"
              >
                <span>Let&apos;s Connect</span>
                <FiArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET HERO SECTION (< lg breakpoint)                            */}
      {/* Responsive, neatly stacked, preserving cinematic background & portrait    */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full max-w-xl mx-auto rounded-[32px] sm:rounded-[40px] border-[2.5px] border-[#DE5D14] overflow-hidden shadow-2xl bg-white flex flex-col">
        {/* Top Cinematic Orange Card with Portrait Background */}
        <div className="relative w-full min-h-[500px] sm:min-h-[540px] p-5 sm:p-7 flex flex-col justify-between overflow-hidden bg-[#DE5D14]">
          <Image
            src="/images/cinematic-bg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-[32%_center] pointer-events-none select-none"
          />
          {/* Subtle gradient scrim to protect text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />

          {/* Top Pill & Emblem */}
          <div className="relative z-10 flex items-center gap-2.5">
            <div className="w-8 h-6 flex items-center justify-center flex-shrink-0">
              <svg width="30" height="22" viewBox="0 0 34 26" fill="none">
                <ellipse cx="9" cy="13" rx="9" ry="13" fill="white" />
                <ellipse cx="25" cy="13" rx="9" ry="13" fill="white" />
                <ellipse cx="17" cy="13" rx="4" ry="13" fill="#DE5D14" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Darani Viswanathan — Creative Technologist</span>
            </div>
          </div>

          {/* Center Headline & Buttons */}
          <div className="relative z-10 my-auto py-4">
            <h1 className="font-debata text-3xl sm:text-4xl font-bold text-white leading-[1.04] tracking-[-0.03em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Creative<br />
              Designer &amp;<br />
              Developer
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs shadow-md active:scale-95 transition-all"
              >
                <span>Explore My Work</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white font-medium text-xs active:scale-95 transition-all"
              >
                <span>View Resume</span>
              </Link>
            </div>
          </div>

          {/* Bottom Row on Mobile: Stat Cards & Floating Social Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-2">
            <div className="flex items-center gap-2.5">
              <div className="bg-white rounded-xl py-2 px-3 shadow-md border border-white/90">
                <div className="text-xl font-extrabold text-[#DE5D14] leading-tight font-debata">
                  2+ Yrs
                </div>
                <div className="text-[10px] font-medium text-neutral-900">
                  Experience
                </div>
              </div>
              <div className="bg-white rounded-xl py-2 px-3 shadow-md border border-white/90">
                <div className="text-xl font-extrabold text-[#DE5D14] leading-tight font-debata">
                  100%
                </div>
                <div className="text-[10px] font-medium text-neutral-900">
                  Creative Output
                </div>
              </div>
            </div>

            {/* Mobile Social Bar */}
            <div className="flex items-center gap-2 bg-[#202226]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg w-fit">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white"
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
                  className="w-6 h-6 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white"
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
                  className="w-6 h-6 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-3 h-3" />
                </a>
              )}
              <a
                href={`mailto:${socialsData.email}`}
                className="w-6 h-6 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white"
                aria-label="Email"
              >
                <FiMail className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Editorial White Section on Mobile */}
        <div className="p-5 sm:p-7 bg-white text-neutral-950 flex flex-col gap-5">
          {/* Mobile Top Nav Menu */}
          <nav className="flex items-center justify-between gap-3 text-xs font-medium pb-2 border-b border-neutral-100 overflow-x-auto">
            <Link href="/about" className="font-semibold text-neutral-950 hover:text-[#DE5D14]">
              About
            </Link>
            <Link href="/skills" className="text-neutral-500 hover:text-neutral-950">
              Skills
            </Link>
            <Link href="/experience" className="text-neutral-500 hover:text-neutral-950">
              Experience
            </Link>
            <Link href="/projects" className="text-neutral-500 hover:text-neutral-950">
              Projects
            </Link>
            <Link href="/contact" className="text-neutral-500 hover:text-neutral-950">
              Contact
            </Link>
          </nav>

          {/* Overview Section */}
          <div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-neutral-300 text-[10px] font-mono tracking-widest text-neutral-600 uppercase w-fit mb-2">
              OVERVIEW
            </div>
            <h2 className="font-debata text-lg sm:text-xl font-bold text-neutral-950 leading-[1.3] mb-2">
              Hey there, I&apos;m{" "}
              <span className="text-[#DE5D14]">Darani</span>. I combine{" "}
              <span className="text-[#DE5D14]">creative design</span>,{" "}
              <span className="text-[#DE5D14]">frontend engineering</span>, and{" "}
              <span className="text-[#DE5D14]">artificial intelligence</span> to transform ideas
              into functional digital products. Ready to build something extraordinary?
            </h2>
            <p className="text-[10px] font-mono text-neutral-400 tracking-wider">
              Aesthetics. Code. Measurable Impact.
            </p>
          </div>

          {/* Profile Card on Mobile */}
          <div className="p-4 rounded-2xl bg-[#F8F8F9] border border-neutral-200/90 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#DE5D14] p-0.5 flex-shrink-0">
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
                <FiCheckCircle className="w-3 h-3 text-[#DE5D14] flex-shrink-0" />
                <span>2+ Years Hands-on Creative Design Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-3 h-3 text-[#DE5D14] flex-shrink-0" />
                <span>Founder of ArtZa Designs Venture</span>
              </div>
            </div>

            <div className="mt-2.5 pt-2 border-t border-neutral-200/70">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full px-4 py-2 rounded-full bg-neutral-950 hover:bg-black text-white text-xs font-semibold"
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
