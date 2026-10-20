import React from "react";
import { Metadata } from "next";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaSectionHeader } from "@/components/ui/NovaSectionHeader";
import { NovaButton } from "@/components/ui/NovaButton";
import { experiencesData } from "@/data/experience";
import { achievementsData } from "@/data/achievements";
import { FiCalendar, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Experience & Journey | Darani Viswanathan",
  description:
    "Professional journey of Darani Viswanathan including roles at StartNet Ventures, Aakam Shine Incubation Centre, SaaS.Connect 2025, The NEXT Connect 2026, and ArtZa Designs.",
};

export default function ExperiencePage() {
  const workItems = experiencesData.filter((e) => e.type !== "Education");
  const educationItems = experiencesData.filter((e) => e.type === "Education");

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-modernist selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Header: Debata Display Headline */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-900 dark:text-neutral-300 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            <span>JOURNEY &amp; CREDENTIALS</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.08] mb-6 max-w-4xl">
            Experience &amp;{" "}
            <span className="nova-gradient-text">Achievements.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl font-normal">
            A comprehensive record of my design internships, ecosystem engagements, venture founding, and academic training.
          </p>
        </div>

        {/* Section 1: Work Experience Timeline */}
        <section className="mb-28">
          <NovaSectionHeader
            eyebrow="WORK TIMELINE"
            titleStart="Professional &amp;"
            titleHighlight="Event Roles"
            description="Internships, event creative engagements, and venture development."
          />

          <div className="relative pl-6 sm:pl-8 border-l border-neutral-300 dark:border-white/10 space-y-10 sm:space-y-12 ml-2 sm:ml-4">
            {workItems.map((item) => (
              <div key={item.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#121212] border-2 border-black dark:border-white group-hover:scale-125 group-hover:bg-black dark:group-hover:bg-white transition-all" />

                <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 shadow-sm group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10 gap-2">
                    <div>
                      <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300 block mb-1">
                        {item.organization}
                      </span>
                      <h2 className="font-debata text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-white tracking-tight">
                        {item.role}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-modernist text-neutral-500 dark:text-neutral-400">
                      <FiCalendar className="w-3.5 h-3.5 text-black dark:text-white" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-[11px] font-modernist font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                      Key Responsibilities &amp; Deliverables:
                    </div>
                    <ul className="space-y-2 text-sm font-modernist text-neutral-600 dark:text-neutral-400">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                          <FiCheckCircle className="text-black dark:text-white w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-white/10">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md bg-white dark:bg-[#0a0a0a] text-xs font-modernist text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Education */}
        <section className="mb-28">
          <NovaSectionHeader
            eyebrow="ACADEMICS"
            titleStart="Formal"
            titleHighlight="Education"
            description="Engineering degree in Artificial Intelligence & Data Science."
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 max-w-4xl shadow-sm hover:border-black/40 dark:hover:border-white/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            {educationItems.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/10 gap-2">
                  <div>
                    <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-300 block mb-1">
                      {edu.organization}
                    </span>
                    <h2 className="font-debata text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-white tracking-tight">
                      {edu.role}
                    </h2>
                  </div>
                  <div className="text-xs font-modernist text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 self-start sm:self-auto font-medium">
                    {edu.period}
                  </div>
                </div>

                <p className="font-modernist text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                  {edu.description}
                </p>

                <div className="space-y-2 text-sm font-modernist text-neutral-600 dark:text-neutral-400 mb-6">
                  {edu.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                      <FiCheckCircle className="text-black dark:text-white w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Verified Achievements & Certifications */}
        <section className="mb-28">
          <NovaSectionHeader
            eyebrow="CREDENTIALS"
            titleStart="Honors &amp;"
            titleHighlight="Certifications"
            description="Verified hackathon awards, mentorship programs, and certifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-white/10">
                    <span className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-modernist font-semibold bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-debata text-lg font-semibold text-neutral-950 dark:text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-modernist text-neutral-400 dark:text-neutral-500 mb-3">
                    {item.issuer}
                  </div>

                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have an opportunity or project?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              I am open to selected creative design, UI/UX, and frontend developer opportunities.
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
