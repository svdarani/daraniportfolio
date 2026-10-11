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
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] font-modernist selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Header: Debata Display Headline */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
            <span>JOURNEY &amp; CREDENTIALS</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6 max-w-4xl">
            Experience &amp;{" "}
            <span className="nova-gradient-text">Achievements.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-3xl font-normal">
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

          <div className="relative pl-6 sm:pl-8 border-l border-neutral-300 dark:border-white/[0.1] space-y-10 sm:space-y-12 ml-2 sm:ml-4">
            {workItems.map((item) => (
              <div key={item.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#151821] border-2 border-[#326BFF] dark:border-[#24D9FF] group-hover:scale-125 group-hover:bg-[#326BFF] dark:group-hover:bg-[#24D9FF] transition-all" />

                <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/[0.06] gap-2">
                    <div>
                      <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-[#326BFF] dark:text-[#24D9FF] block mb-1">
                        {item.organization}
                      </span>
                      <h2 className="font-debata text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-[#F7F8FC] tracking-tight">
                        {item.role}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD]">
                      <FiCalendar className="w-3.5 h-3.5 text-[#326BFF] dark:text-[#24D9FF]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-[11px] font-modernist font-semibold text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-wider mb-2">
                      Key Responsibilities &amp; Deliverables:
                    </div>
                    <ul className="space-y-2 text-sm font-modernist text-neutral-600 dark:text-[#A5ADBD]">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-white/[0.06]">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-md bg-white dark:bg-[#11131A] text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] border border-neutral-200 dark:border-white/[0.05]"
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

          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] max-w-4xl shadow-sm">
            {educationItems.map((edu) => (
              <div key={edu.id}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-white/[0.08] gap-2">
                  <div>
                    <span className="text-[11px] font-modernist font-semibold uppercase tracking-wider text-[#326BFF] dark:text-[#24D9FF] block mb-1">
                      {edu.organization}
                    </span>
                    <h2 className="font-debata text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-[#F7F8FC] tracking-tight">
                      {edu.role}
                    </h2>
                  </div>
                  <div className="text-xs font-modernist text-neutral-800 dark:text-[#F7F8FC] px-3 py-1 rounded-full bg-neutral-100 dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 self-start sm:self-auto font-medium">
                    {edu.period}
                  </div>
                </div>

                <p className="font-modernist text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-6 font-normal">
                  {edu.description}
                </p>

                <div className="space-y-2 text-sm font-modernist text-neutral-600 dark:text-[#A5ADBD] mb-6">
                  {edu.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4 mt-0.5 flex-shrink-0" />
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
                className="p-7 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-white/[0.06]">
                    <span className="text-[11px] font-modernist uppercase tracking-wider text-[#326BFF] dark:text-[#24D9FF] font-semibold">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-modernist font-semibold bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-debata text-lg font-bold text-neutral-950 dark:text-[#F7F8FC] mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-modernist text-neutral-400 dark:text-[#A5ADBD] mb-3">
                    {item.issuer}
                  </div>

                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have an opportunity or project?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD]">
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
