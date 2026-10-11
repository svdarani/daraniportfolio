import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FloatingDock from "@/components/dock/dock";
import Footer from "@/components/Footer";
import { achievementsData } from "@/data/achievements";
import { FiArrowLeft, FiAward } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Achievements & Milestones | Darani Viswanathan",
  description:
    "Documented achievements, hackathon awards, leadership mentorship, and technical certifications of Darani Viswanathan.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <FloatingDock />

      {/* Top Header */}
      <div className="container mx-auto px-6 py-8 max-w-5xl flex items-center justify-between border-b border-neutral-200 dark:border-white/5">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span className="text-xs font-mono text-neutral-400 dark:text-gray-500 uppercase tracking-widest">
          Honors &amp; Milestones
        </span>
      </div>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            DOCUMENTED RECOGNITION
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-neutral-900 dark:text-white">
            Achievements &amp; Certifications
          </h1>
          <p className="text-neutral-600 dark:text-gray-400 text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Documented awards, mentorship honors under distinguished leaders, and technical trainings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <FiAward className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 dark:bg-white/5 dark:text-gray-300">
                    {item.badge || item.category}
                  </span>
                </div>

                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs font-mono text-indigo-700 dark:text-indigo-300 mb-4">{item.issuer}</p>
                <p className="text-sm text-neutral-600 dark:text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
