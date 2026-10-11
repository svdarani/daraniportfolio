"use client";

import React from "react";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { NovaButton } from "../ui/NovaButton";
import { FiLayout, FiFeather, FiCode, FiCpu, FiMail, FiMapPin, FiCompass } from "react-icons/fi";
import { socialsData } from "@/data/socials";

const highlights = [
  {
    icon: <FiFeather className="w-5 h-5 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "Creative Design",
    desc: "Visual storytelling, posters, event creatives, and brand assets crafted with precision.",
  },
  {
    icon: <FiLayout className="w-5 h-5 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "UI/UX & Branding",
    desc: "Intuitive user journeys, design systems, and cohesive visual identities for digital products.",
  },
  {
    icon: <FiCode className="w-5 h-5 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "Frontend Development",
    desc: "Responsive Next.js, React, and Tailwind CSS implementation turning designs into code.",
  },
  {
    icon: <FiCpu className="w-5 h-5 text-[#326BFF] dark:text-[#24D9FF]" />,
    title: "AI & Data Science",
    desc: "Python programming, machine learning foundations, NLP, and computer vision exploration.",
  },
];

export const NovaAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-[#090A0F] relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="01 / ABOUT"
          titleStart="About"
          titleHighlight="Me"
          description="A look into my background, creative interests, and how I bridge design with technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Narrative & Contact Mini-Card (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm relative overflow-hidden">
              {/* About Section Display Statement in Debata */}
              <h3 className="font-debata text-xl sm:text-2xl lg:text-3xl text-neutral-900 dark:text-[#F7F8FC] leading-snug font-bold mb-6 tracking-[-0.02em]">
                I&apos;m <span className="nova-gradient-text">Darani Viswanathan</span>, an Artificial Intelligence &amp; Data Science student bridging creative design, user experience, and frontend architecture.
              </h3>

              {/* Modernist Long-form Body Text (16-19px desktop) */}
              <div className="space-y-4 font-modernist text-base sm:text-[17px] text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
                <p>
                  My journey into digital creativity has grown through hands-on projects, freelance design work, internships, and opportunities to collaborate with startups and innovation-focused teams like StartNet Ventures and Aakam Shine Incubation Centre.
                </p>
                <p>
                  I enjoy understanding how a brand communicates, how a user interacts with an interface, and how technology can transform an idea into a useful product. Alongside my technical education, I work on visual identities, social media creatives, digital experiences, and startup-related design projects.
                </p>
                <p>
                  I am continuing to develop my skills in frontend development and artificial intelligence, with the long-term goal of creating intelligent, user-focused digital products.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <NovaButton href="/about" variant="primary" size="md">
                  More About Me
                </NovaButton>

                <div className="flex items-center gap-2 text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD]">
                  <FiCompass className="w-4 h-4 text-[#326BFF] dark:text-[#24D9FF]" />
                  <span>Based in Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box matching NovaPersona about section */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-[#326BFF] dark:text-[#24D9FF]">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-[#A5ADBD]">Direct Inquiry</div>
                  <div className="text-sm font-modernist font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                    {socialsData.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-[#326BFF] dark:text-[#24D9FF]">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-modernist uppercase tracking-wider text-neutral-500 dark:text-[#A5ADBD]">Institution</div>
                  <div className="text-sm font-modernist font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                    Sri Shanmugha College
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Supporting Discipline Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {h.icon}
                  </div>
                  <span className="text-xs font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF]">
                    0{i + 1}
                  </span>
                </div>

                <div>
                  <h4 className="font-debata text-lg font-bold text-neutral-950 dark:text-[#F7F8FC] mb-2 tracking-tight transition-colors">
                    {h.title}
                  </h4>
                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
