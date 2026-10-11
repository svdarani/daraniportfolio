import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaSectionHeader } from "@/components/ui/NovaSectionHeader";
import { NovaButton } from "@/components/ui/NovaButton";
import { profileData } from "@/data/profile";
import { experiencesData } from "@/data/experience";
import { FiCheckCircle, FiCompass } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Me | Darani Viswanathan - Creative Designer & Developer",
  description:
    "Learn about Darani Viswanathan, an AI & Data Science student, Creative Designer, and Frontend Developer combining branding, user experience, and modern technology.",
};

const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "Understand the purpose, audience, constraints, and problem before deciding how the design should look.",
  },
  {
    step: "02",
    title: "Explore",
    description:
      "Explore possible approaches through references, sketches, research, and structured thinking.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Turn the chosen direction into a clear visual system, user interface, or functional web experience.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Review the outcome, improve usability, fix inconsistencies, and prepare the final deliverables.",
  },
];

export default function AboutPage() {
  const education = experiencesData.find((e) => e.type === "Education");

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] font-modernist selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Hero: Debata Display Headline */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
            <span>ABOUT DARANI VISWANATHAN</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6 max-w-4xl">
            Designing digital experiences that{" "}
            <span className="nova-gradient-text">matter.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-3xl font-normal">
            {profileData.shortBio}
          </p>
        </div>

        {/* Narrative & Portrait Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-28">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
              <h2 className="font-debata text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-6 tracking-tight">
                Personal Story &amp; Creative Journey
              </h2>

              <div className="space-y-5 font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
                <p>
                  I&apos;m <span className="text-neutral-950 dark:text-white font-semibold">Darani Viswanathan</span>, an Artificial Intelligence &amp; Data Science student at Sri Shanmugha College of Engineering and Technology with a strong interest in creative design, user experience, branding, and frontend development.
                </p>
                <p>
                  My journey into digital creativity has grown through hands-on projects, freelance design work, internships, and opportunities to collaborate with startups and innovation-focused teams such as StartNet Ventures Pvt. Ltd. and Aakam Shine Incubation Centre.
                </p>
                <p>
                  I enjoy understanding how a brand communicates, how a user interacts with an interface, and how technology can transform an idea into a useful product. Alongside my technical education, I work on visual identities, social media creatives, digital experiences, and startup-related design projects through my creative venture, ArtZa Designs.
                </p>
                <p>
                  I am continuing to develop my skills in frontend development and artificial intelligence, with the long-term goal of creating intelligent, user-focused digital products.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-modernist text-neutral-900 dark:text-[#F7F8FC] font-medium">
                  <FiCompass className="w-4 h-4 text-[#326BFF] dark:text-[#24D9FF]" />
                  <span>Tamil Nadu, India</span>
                </div>

                <NovaButton href="/contact" variant="primary" size="md">
                  Let&apos;s Connect
                </NovaButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden bg-neutral-100 dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.12] shadow-md">
              <Image
                src="/images/darani.png"
                alt="Darani Viswanathan portrait"
                fill
                priority
                className="object-cover object-top contrast-[1.03]"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/60 via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#090A0F]/85 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-center shadow-sm">
                  <div className="font-debata text-sm font-bold text-neutral-950 dark:text-[#F7F8FC]">Darani Viswanathan</div>
                  <div className="text-[11px] font-modernist text-neutral-500 dark:text-[#A5ADBD]">Creative Designer &amp; Developer</div>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] space-y-3 shadow-sm">
              <div className="text-[11px] font-modernist uppercase tracking-[0.14em] text-[#326BFF] dark:text-[#24D9FF] font-semibold">
                Core Positioning
              </div>
              <div className="text-sm font-modernist font-medium text-neutral-900 dark:text-[#F7F8FC] flex items-center gap-2">
                <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4" />
                <span>Founder of ArtZa Designs</span>
              </div>
              <div className="text-sm font-modernist font-medium text-neutral-900 dark:text-[#F7F8FC] flex items-center gap-2">
                <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4" />
                <span>AI &amp; Data Science Undergraduate</span>
              </div>
              <div className="text-sm font-modernist font-medium text-neutral-900 dark:text-[#F7F8FC] flex items-center gap-2">
                <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4" />
                <span>StartupTN Spark Hackathon Winner</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="mb-28">
          <NovaSectionHeader
            eyebrow="PROFESSIONAL PROCESS"
            titleStart="From concept to"
            titleHighlight="launch."
            description="A four-step deliberate methodology for tackling design and frontend development problems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-debata text-3xl font-bold text-[#326BFF] dark:text-[#24D9FF] mb-4 block">
                    {p.step}
                  </span>
                  <h3 className="font-debata text-xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="font-modernist text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formal Education Section */}
        {education && (
          <section className="mb-28">
            <NovaSectionHeader
              eyebrow="ACADEMICS"
              titleStart="Formal"
              titleHighlight="Education"
              description="Undergraduate degree and technical coursework."
            />

            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] max-w-3xl shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/[0.06] gap-2">
                <div>
                  <span className="text-[11px] font-modernist uppercase tracking-wider text-[#326BFF] dark:text-[#24D9FF] font-semibold block mb-1">
                    {education.organization}
                  </span>
                  <h3 className="font-debata text-2xl font-bold text-neutral-950 dark:text-[#F7F8FC] tracking-tight">
                    {education.role}
                  </h3>
                </div>
                <div className="text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD]">
                  {education.period}
                </div>
              </div>

              <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-6 font-normal">
                {education.description}
              </p>

              <div className="space-y-2 text-sm font-modernist text-neutral-600 dark:text-[#A5ADBD] mb-6">
                {education.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-2 tracking-tight">
              Interested in collaborating?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD]">
              Let&apos;s talk about your next brand identity, web experience, or creative project.
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
