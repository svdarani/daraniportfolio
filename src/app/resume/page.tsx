import React from "react";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { profileData } from "@/data/profile";
import { experiencesData } from "@/data/experience";
import { achievementsData } from "@/data/achievements";
import { socialsData } from "@/data/socials";
import { FiDownload, FiMail, FiMapPin, FiLinkedin, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Resume & CV | Darani Viswanathan",
  description:
    "Curriculum Vitae and professional resume of Darani Viswanathan covering B.Tech education, internships, projects, achievements, and core technical skills.",
};

export default function ResumePage() {
  const resumePdfPath = path.join(process.cwd(), "public", "resume.pdf");
  const hasPdfFile = fs.existsSync(resumePdfPath);

  const workItems = experiencesData.filter((e) => e.type !== "Education");
  const educationItems = experiencesData.filter((e) => e.type === "Education");

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-modernist selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors">
      <div className="print:hidden">
        <NovaNavbar />
      </div>

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-5 sm:px-8">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-neutral-200 dark:border-white/10 gap-4 print:hidden">
          <div>
            <div className="text-[11px] font-modernist text-neutral-900 dark:text-neutral-300 uppercase tracking-wider mb-1 font-semibold">
              Curriculum Vitae
            </div>
            <h1 className="font-debata text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-white">
              Darani Viswanathan
            </h1>
          </div>

          <div>
            {hasPdfFile ? (
              <a
                href="/resume.pdf"
                download="Darani_Viswanathan_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-xs font-semibold shadow-sm transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 text-xs font-modernist text-neutral-600 dark:text-neutral-400">
                <span>PDF Download Pending File Upload</span>
              </div>
            )}
          </div>
        </div>

        {/* CV Card Sheet */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 shadow-sm space-y-12">
          {/* Header */}
          <div className="pb-8 border-b border-neutral-200 dark:border-white/10">
            <h2 className="font-debata text-3xl font-semibold text-neutral-950 dark:text-white mb-2">
              Darani Viswanathan
            </h2>
            <div className="font-modernist text-base text-neutral-700 dark:text-neutral-300 font-medium mb-4">
              Creative Designer &amp; Developer · AI &amp; Data Science Student
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-modernist text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-1.5">
                <FiMail className="w-3.5 h-3.5 text-black dark:text-white" />
                {socialsData.email}
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="w-3.5 h-3.5 text-black dark:text-white" />
                {socialsData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <FiLinkedin className="w-3.5 h-3.5 text-black dark:text-white" />
                linkedin.com/in/darani-s-v-79659b28b
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold mb-3">
              Professional Summary
            </h3>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {profileData.shortBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold mb-4">
              Education
            </h3>
            {educationItems.map((edu) => (
              <div key={edu.id} className="p-5 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="font-debata font-semibold text-neutral-950 dark:text-white text-base">
                    {edu.role}
                  </div>
                  <div className="text-xs font-modernist text-neutral-500 dark:text-neutral-400">
                    {edu.period}
                  </div>
                </div>
                <div className="text-sm font-modernist text-neutral-800 dark:text-neutral-200 font-medium mb-3">
                  {edu.organization}
                </div>
                <p className="text-xs sm:text-sm font-modernist text-neutral-600 dark:text-neutral-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold mb-4">
              Experience &amp; Internships
            </h3>
            <div className="space-y-4">
              {workItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="font-debata font-semibold text-neutral-950 dark:text-white text-base">
                      {item.role}
                    </div>
                    <div className="text-xs font-modernist text-neutral-500 dark:text-neutral-400">
                      {item.period}
                    </div>
                  </div>
                  <div className="text-sm font-modernist text-neutral-800 dark:text-neutral-200 font-medium mb-3">
                    {item.organization}
                  </div>
                  <p className="text-xs sm:text-sm font-modernist text-neutral-600 dark:text-neutral-400 mb-3">
                    {item.description}
                  </p>
                  <ul className="space-y-1 text-xs font-modernist text-neutral-600 dark:text-neutral-400">
                    {item.responsibilities.slice(0, 2).map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FiCheckCircle className="w-3.5 h-3.5 text-black dark:text-white mt-0.5 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold mb-4">
              Verified Achievements &amp; Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievementsData.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 shadow-sm"
                >
                  <div className="font-debata font-semibold text-neutral-950 dark:text-white text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs font-modernist text-neutral-500 dark:text-neutral-400">
                    {item.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <NovaFooter />
      </div>
    </div>
  );
}
