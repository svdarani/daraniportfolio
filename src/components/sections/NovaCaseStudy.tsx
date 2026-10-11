"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { NovaButton } from "../ui/NovaButton";
import { FiAlertCircle, FiActivity, FiCheckCircle, FiAward } from "react-icons/fi";

const caseStudies = [
  {
    id: "artza-designs",
    slug: "artza-designs",
    badge: "CREATIVE VENTURE",
    title: "ArtZa Designs — Creative Branding & Venture Identity",
    summary:
      "A creative design venture founded to bridge strategic brand thinking with high-impact visual design, posters, and digital communication.",
    image: "/images/project/artza-designs.svg",
    problem:
      "Early-stage startups and small creators often struggle with disjointed visual communication, weak typography, and inconsistent assets, which directly damages market perception and trust.",
    process:
      "Audited client brand goals, structured typographic and color guidelines, designed modular poster/social media templates, and tested visual recall across audiences.",
    solution:
      "Built a unified visual identity framework and social media design kit that allowed rapid, consistent production of branded digital collaterals.",
    result:
      "Crafted 800+ creative assets, gained 2K+ followers across creative channels, and delivered visual branding support for startup initiatives.",
  },
  {
    id: "namma-stay",
    slug: "namma-stay",
    badge: "STARTUP CONCEPT",
    title: "Namma Stay — Accommodation Discovery & UX Concept",
    summary:
      "A rental discovery platform concept designed to eliminate broker friction, unverified properties, and hidden fees for students and young professionals.",
    image: "/images/project/namma-stay.svg",
    problem:
      "Students moving to university towns face opaque rental listings, unreliable brokers, inaccurate photos, and unexpected markups with zero transparency.",
    process:
      "Conducted student interviews, mapped tenant discovery journeys, created low-fidelity wireframes in Figma, and developed interactive high-fidelity prototypes.",
    solution:
      "Designed a clean 3-step search flow with verified owner badges, transparent fee breakdowns, and neighborhood campus proximity filters.",
    result:
      "Produced comprehensive UI/UX wireframes, interactive user flows, and startup pitch deck materials for concept validation.",
  },
  {
    id: "resq-helmet",
    slug: "resq-helmet",
    badge: "AI / IOT CONCEPT",
    title: "ResQ Helmet — Smart Accident Detection & Alert Flow",
    summary:
      "An IoT and road safety concept exploring automated crash impact detection, GPS coordinate logging, and emergency escalation workflows.",
    image: "/images/project/resq-helmet.svg",
    problem:
      "Critical delays during the 'golden hour' occur when two-wheeler riders encounter accidents in remote locations without immediate emergency assistance.",
    process:
      "Defined accelerometer impact thresholds, designed GPS logging architecture, formulated emergency contact SMS/call sequences, and mocked companion app screens.",
    solution:
      "Engineered an automated emergency alert pipeline with a 60-second false-alarm cancellation window to prevent false triggers.",
    result:
      "Complete sensor workflow diagrams, data architecture models, and mobile dashboard UI concepts developed for academic and technical presentation.",
  },
  {
    id: "ai-drug-detection",
    slug: "ai-drug-detection",
    badge: "AI & COMPUTER VISION",
    title: "AI Drug Detection — Packaging Anomaly Screening Concept",
    summary:
      "An exploratory AI concept examining computer vision techniques for identifying subtle counterfeit anomalies in pharmaceutical packaging.",
    image: "/images/project/ai-drug-detection.svg",
    problem:
      "Manual visual inspection of pharmaceutical packaging for counterfeit anomalies is slow and error-prone across high-volume distribution channels.",
    process:
      "Researched packaging print standards, tested contour matching and histogram analysis in Python/OpenCV, and mocked operator screening interfaces.",
    solution:
      "Formulated a dual-stage vision pipeline checking contour alignment and texture histograms against verified authentic packaging references.",
    result:
      "Prototyped image feature extraction scripts in Python and designed an operator inspection dashboard UI mockup.",
  },
];

export const NovaCaseStudy: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = caseStudies[selectedIndex];

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-[#090A0F] relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <NovaSectionHeader
          eyebrow="04 / CASE STUDIES"
          titleStart="In-Depth"
          titleHighlight="Case Studies"
          description="In-depth breakdowns showing the Problem, Process, Solution, and Deliverable for selected projects."
        />

        {/* Case Study Switcher Pills: Modernist */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-neutral-200 dark:border-white/[0.08]">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedIndex === idx
                  ? "bg-[#326BFF] text-white border border-[#326BFF] shadow-[0_4px_16px_rgba(50,107,255,0.35)] font-semibold"
                  : "bg-neutral-100 text-neutral-600 dark:bg-[#151821] dark:text-[#A5ADBD] border border-neutral-200 dark:border-white/[0.06] hover:text-black dark:hover:text-white"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  selectedIndex === idx ? "bg-white" : "bg-neutral-400 dark:bg-[#A5ADBD]"
                }`}
              />
              <span>{cs.badge}</span>
            </button>
          ))}
        </div>

        {/* Main Case Study Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 pb-10 border-b border-neutral-200 dark:border-white/[0.08]">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-modernist font-semibold uppercase tracking-[0.14em] text-[#326BFF] dark:text-[#24D9FF] mb-2 inline-block">
                {current.badge}
              </span>
              <h3 className="font-debata text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-4 leading-tight tracking-[-0.02em]">
                {current.title}
              </h3>
              <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
              <div className="relative aspect-[16/9] w-full max-w-[420px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm mb-4">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center"
                  sizes="420px"
                />
              </div>

              <NovaButton
                href={`/projects/${current.slug}`}
                variant="primary"
                size="sm"
              >
                View Full Case Study
              </NovaButton>
            </div>
          </div>

          {/* 4-Stage Grid: Problem, Process, Solution, Result */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01. Problem */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.06] hover:border-[#326BFF]/30 dark:hover:border-[#326BFF]/30 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-[#326BFF] dark:text-[#24D9FF]">
                <FiAlertCircle className="w-4 h-4" />
                <h4 className="font-modernist text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                  01. Problem
                </h4>
              </div>
              <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                {current.problem}
              </p>
            </div>

            {/* 02. Process */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.06] hover:border-[#326BFF]/30 dark:hover:border-[#326BFF]/30 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-[#326BFF] dark:text-[#24D9FF]">
                <FiActivity className="w-4 h-4" />
                <h4 className="font-modernist text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                  02. Process
                </h4>
              </div>
              <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                {current.process}
              </p>
            </div>

            {/* 03. Solution */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.06] hover:border-[#326BFF]/30 dark:hover:border-[#326BFF]/30 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-[#326BFF] dark:text-[#24D9FF]">
                <FiCheckCircle className="w-4 h-4" />
                <h4 className="font-modernist text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                  03. Solution
                </h4>
              </div>
              <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                {current.solution}
              </p>
            </div>

            {/* 04. Result */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.06] hover:border-[#326BFF]/30 dark:hover:border-[#326BFF]/30 transition-colors shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-[#326BFF] dark:text-[#24D9FF]">
                <FiAward className="w-4 h-4" />
                <h4 className="font-modernist text-xs uppercase tracking-wider font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                  04. Result / Output
                </h4>
              </div>
              <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                {current.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
