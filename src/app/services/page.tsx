"use client";

import React, { useState } from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaSectionHeader } from "@/components/ui/NovaSectionHeader";
import { NovaButton } from "@/components/ui/NovaButton";
import { FiLayout, FiImage, FiCode, FiCompass, FiCheck, FiChevronDown } from "react-icons/fi";

const servicesList = [
  {
    number: "01",
    category: "Product & Interaction",
    title: "UI/UX Design",
    icon: <FiLayout className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    description:
      "Designing intuitive interfaces and user journeys that make digital products easier to understand, navigate, and scale.",
    deliverables: [
      "Low & High-Fidelity Wireframing",
      "Interactive Interface Design in Figma",
      "Responsive Layouts (Mobile, Tablet, Desktop)",
      "Clickable Prototypes & Motion Micro-interactions",
      "User Flows & Information Architecture",
      "Design Systems & Reusable Component Kits",
    ],
    tools: ["Figma", "FigJam", "Design Systems"],
  },
  {
    number: "02",
    category: "Visual Communication",
    title: "Graphic Design",
    icon: <FiImage className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    description:
      "Creating visually compelling communication for brands, events, social media, and digital campaigns.",
    deliverables: [
      "High-Impact Social Media Creatives & Carousels",
      "Event Posters, Banners & Summit Rollups",
      "Marketing Graphics & Digital Signage",
      "Pitch Deck & Presentation Layouts",
      "Promotional Assets & Print Collaterals",
      "Visual Campaign Design",
    ],
    tools: ["Canva", "Adobe Photoshop", "CorelDRAW"],
  },
  {
    number: "03",
    category: "Frontend Engineering",
    title: "Web Design & Development",
    icon: <FiCode className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    description:
      "Turning ideas into responsive websites with clear layouts, thoughtful interactions, and consistent visual systems.",
    deliverables: [
      "Modern Website UI & Layout Systems",
      "High-Converting Landing Pages",
      "Portfolio & Showcase Web Applications",
      "Responsive Layouts Tested Across Devices",
      "Modern Next.js, React & Tailwind Implementation",
      "Interaction Design & Micro-animations",
    ],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "04",
    category: "Brand Strategy",
    title: "Branding & Direction",
    icon: <FiCompass className="w-6 h-6 text-[#326BFF] dark:text-[#24D9FF]" />,
    description:
      "Helping businesses and startups communicate their identity through consistent visual language and meaningful design.",
    deliverables: [
      "Logo Concepts & Distinctive Wordmarks",
      "Visual Identity Guidelines",
      "Harmonious Color Systems & Gradients",
      "Typographic Hierarchy Principles",
      "Stationery & Marketing Collaterals",
      "Social Media Brand Design Systems",
    ],
    tools: ["ArtZa System", "Brand Identity", "Visual Guidelines"],
  },
];

const faqs = [
  {
    q: "What tools do you actively use for design and development?",
    a: "For UI/UX and interface prototyping, I primarily work in Figma. For graphic design, posters, and visual communication, I use Canva, Adobe Photoshop, and CorelDRAW. For web development, I build with Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    q: "How does the project collaboration process work?",
    a: "We follow a 4-step workflow: Understand (discussing objectives, audience, and constraints), Explore (references, moodboards, and wireframes), Design & Build (executing the visual identity or frontend code), and Refine (revisions, usability checks, and deliverable delivery).",
  },
  {
    q: "Can you design websites and also develop them in code?",
    a: "Yes! Being both a designer and frontend developer allows me to create responsive designs in Figma and implement them directly in React/Next.js without handoff friction or visual compromises.",
  },
  {
    q: "Do you collaborate with early-stage startups and incubation teams?",
    a: "Yes. Through my experience with Aakam Shine Incubation Centre and StartNet Ventures, I regularly support startups with event collaterals, pitch deck presentation designs, and UI concepts.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] font-modernist selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Hero: Debata Display Headline */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
            <span>SERVICES &amp; CAPABILITIES</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6 max-w-4xl">
            Building brands that{" "}
            <span className="nova-gradient-text">inspire &amp; lead.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-3xl font-normal">
            From visual identity to digital experiences, I help communicate ideas clearly through design, thoughtful interfaces, and modern web technologies.
          </p>
        </div>

        {/* 4 Detailed Service Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-modernist font-semibold uppercase tracking-[0.14em] text-[#326BFF] dark:text-[#24D9FF]">
                      {service.category}
                    </span>
                  </div>
                  <span className="text-sm font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF]">
                    {service.number}
                  </span>
                </div>

                <h2 className="font-debata text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-4 tracking-tight">
                  {service.title}
                </h2>

                <p className="font-modernist text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mb-8">
                  <div className="text-[11px] font-modernist font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-[#A5ADBD] mb-3">
                    Deliverables &amp; Solutions:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm font-modernist text-neutral-600 dark:text-[#A5ADBD]">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <FiCheck className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-[#11131A] text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] border border-neutral-200 dark:border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <NovaButton href="/contact" variant="primary" size="sm">
                  Inquire Now
                </NovaButton>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ Accordion Section */}
        <section className="mb-28">
          <NovaSectionHeader
            eyebrow="FAQ"
            titleStart="Clear answers to"
            titleHighlight="common questions."
            description="Insights into tools, working principles, timelines, and collaboration."
          />

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-debata text-base sm:text-lg font-bold text-neutral-950 dark:text-[#F7F8FC]">
                      {faq.q}
                    </span>
                    <FiChevronDown
                      className={`w-5 h-5 text-[#326BFF] dark:text-[#24D9FF] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed border-t border-neutral-200 dark:border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Ready to start your design project?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD]">
              Let&apos;s discuss your creative goals and build something thoughtful together.
            </p>
          </div>
          <NovaButton href="/contact" variant="primary" size="lg">
            Let&apos;s Connect
          </NovaButton>
        </section>
      </main>

      <NovaFooter />
    </div>
  );
}
