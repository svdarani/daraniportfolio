"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NovaButton } from "../ui/NovaButton";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload, FiCheckCircle } from "react-icons/fi";
import { socialsData } from "@/data/socials";

export const NovaHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-[#090A0F] transition-colors">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#326BFF]/10 via-[#24D9FF]/8 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        {/* 3-Column Asymmetric Layout Grid matching NovaPersona × Swiss Modernist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Column 1: Left Intro (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center order-2 lg:order-1">
            {/* Eyebrow badge: Modernist */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-300 dark:border-white/[0.08] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-800 dark:text-[#A5ADBD] mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
              <span>CREATIVE DESIGNER &amp; DEVELOPER</span>
            </div>

            {/* Primary Headline: Debata Expressive Display Typography */}
            <h1 className="font-debata text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6">
              Hey there, I&apos;m{" "}
              <span className="nova-gradient-text block sm:inline">
                Darani Viswanathan.
              </span>
            </h1>

            {/* Supporting Description: Modernist Readable Prose */}
            <p className="font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8 max-w-md font-normal">
              I combine creative design, frontend development, and artificial intelligence to transform ideas into meaningful digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <NovaButton href="#projects" variant="primary" size="md">
                Explore My Work
              </NovaButton>
              <NovaButton href="#contact" variant="secondary" size="md">
                Let&apos;s Connect
              </NovaButton>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD]">
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#326BFF] dark:text-[#A5ADBD] dark:hover:text-white transition-colors"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Center Portrait Frame (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              {/* Soft container with subtle border */}
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-[#11131A] border border-neutral-300/80 dark:border-white/[0.12] shadow-md dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/darani.png"
                  alt="Portrait of Darani Viswanathan"
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 380px"
                />

                {/* Floating Social Bar on the right side of the portrait */}
                <div className="absolute top-6 right-4 z-20 flex flex-col gap-2.5 bg-white/90 dark:bg-[#090A0F]/85 backdrop-blur-md p-2 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-lg">
                  <a
                    href={socialsData.links.find((l) => l.platform === "GitHub")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-[#326BFF] hover:text-white dark:bg-white/10 dark:hover:bg-[#326BFF] dark:hover:text-white text-neutral-800 dark:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="GitHub profile"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={socialsData.links.find((l) => l.platform === "LinkedIn")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-[#326BFF] hover:text-white dark:bg-white/10 dark:hover:bg-[#326BFF] dark:hover:text-white text-neutral-800 dark:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="LinkedIn profile"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={socialsData.links.find((l) => l.platform === "Instagram")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-[#326BFF] hover:text-white dark:bg-white/10 dark:hover:bg-[#326BFF] dark:hover:text-white text-neutral-800 dark:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Instagram profile"
                  >
                    <FiInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${socialsData.email}`}
                    className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-[#326BFF] hover:text-white dark:bg-white/10 dark:hover:bg-[#326BFF] dark:hover:text-white text-neutral-800 dark:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Send email"
                  >
                    <FiMail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Availability Badge below portrait: Modernist */}
              <div className="mt-4 flex items-center justify-center">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-[#151821] border border-neutral-300/80 dark:border-white/[0.08] shadow-sm backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24D9FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#24D9FF]" />
                  </span>
                  <span className="text-xs font-modernist font-medium text-neutral-900 dark:text-[#F7F8FC]">
                    Open to Selected Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Right Title & Credibility Highlights (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center order-3 lg:pl-4">
            <div className="text-[11px] sm:text-xs font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] uppercase tracking-[0.14em] mb-2">
              B.Tech AI &amp; DS Student · Creative Developer
            </div>

            {/* Supporting Headline: Debata */}
            <div className="font-debata text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.12] mb-6">
              Creative{" "}
              <span className="nova-gradient-text block mt-1">
                Designer &amp; Developer
              </span>
            </div>

            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8 font-normal">
              Combining visual aesthetics with frontend implementation, AI foundations, and startup incubation experience to create functional digital products.
            </p>

            {/* Credibility / Experience Stack Box */}
            <div className="w-full p-5 rounded-2xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#326BFF] text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#151821]">
                    AZ
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#24D9FF] text-[#090A0F] flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#151821]">
                    AS
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#654CFF] text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-[#151821]">
                    SN
                  </div>
                </div>
                <div className="text-xs font-modernist text-neutral-900 dark:text-[#F7F8FC] font-semibold tracking-wide">
                  Verified Creative Output
                </div>
              </div>

              <div className="space-y-2 text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD]">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-3.5 h-3.5 flex-shrink-0" />
                  <span>2+ Years Hands-on Creative Design Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-3.5 h-3.5 flex-shrink-0" />
                  <span>Founder of ArtZa Designs Venture</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-3.5 h-3.5 flex-shrink-0" />
                  <span>Aakam Shine Incubation Centre Contributor</span>
                </div>
              </div>
            </div>

            <NovaButton href="#contact" variant="primary" size="md">
              Let&apos;s Connect
            </NovaButton>
          </div>

        </div>
      </div>
    </section>
  );
};
