"use client";

import React from "react";
import { motion } from "framer-motion";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";

const collaborations = [
  {
    organization: "StartNet Ventures Pvt. Ltd.",
    role: "Graphic Designer Intern",
    period: "Jan 2025 — Apr 2025",
    type: "Internship Engagement",
    description:
      "Collaborated on visual communication, digital marketing creatives, and brand assets for startup venture requirements.",
    focus: ["Digital Marketing Creatives", "Promotional Assets", "Brand Guidelines"],
  },
  {
    organization: "Aakam Shine Incubation Centre",
    role: "UI/UX & Graphic Designer Intern",
    period: "2024 — Present",
    type: "Incubation Centre",
    description:
      "Contributed creative design and digital communication work in a startup incubation environment supporting early founders and summit events.",
    focus: ["Incubatee UI Concepts", "Social Media Campaigns", "Summit Creatives"],
  },
  {
    organization: "SaaS.Connect 2025",
    role: "Junior Graphic Designer",
    period: "2025",
    type: "Industry Conference",
    description:
      "Delivered event visual branding, social media announcements, digital banners, and presentation deck collaterals.",
    focus: ["Event Branding", "Speaker Highlight Cards", "Stage Visuals"],
  },
  {
    organization: "The NEXT Startup Connect 2026",
    role: "Graphic Designer & Branding Associate",
    period: "2026",
    type: "Startup Summit",
    description:
      "Supported visual design and branding consistency across multi-channel event communication and promotional collateral.",
    focus: ["Summit Identity", "Digital Signage", "Promotional Banners"],
  },
  {
    organization: "StartupTN (Government of Tamil Nadu)",
    role: "Startup Spark Hackathon Winner",
    period: "2024",
    type: "State Innovation Ecosystem",
    description:
      "Recognized for innovative entrepreneurial and technological problem-solving within the state-level startup competition.",
    focus: ["Ideation & Prototyping", "Pitch Presentation", "Tech Innovation"],
  },
  {
    organization: "Sri Shanmugha Educational Institutions",
    role: "Student Ambassador & AI/DS Scholar",
    period: "2023 — Present",
    type: "Academic Institution",
    description:
      "Representing institution technical initiatives, symposiums, and bridging artificial intelligence coursework with practical design work.",
    focus: ["Technical Symposiums", "Student Leadership", "Coursework & Labs"],
  },
];

export const NovaCollaborations: React.FC = () => {
  return (
    <section className="section-contain py-24 sm:py-32 bg-white dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="COLLABORATIONS"
          titleStart="Collaborations &amp;"
          titleHighlight="Creative Ecosystem"
          description="Verified organizational engagements, incubation partnerships, event roles, and ecosystem contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collaborations.map((collab) => (
            <motion.div
              key={collab.organization}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10">
                  <span className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold">
                    {collab.type}
                  </span>
                  <span className="text-xs font-modernist text-neutral-400 dark:text-neutral-500">
                    {collab.period}
                  </span>
                </div>

                <h3 className="font-modernist text-lg font-bold text-neutral-950 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {collab.organization}
                </h3>

                <div className="text-xs font-modernist text-neutral-800 dark:text-neutral-200 font-semibold mb-4">
                  {collab.role}
                </div>

                <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                  {collab.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-wrap gap-1.5">
                {collab.focus.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-[#0a0a0a] text-[10px] font-modernist text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

