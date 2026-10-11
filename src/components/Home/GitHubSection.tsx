"use client";

import React from "react";
import { GitHubContributionCard } from "@/components/GitHubContributions";
import { socialsData } from "@/data/socials";
import { FiGithub } from "react-icons/fi";

export const GitHubSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-mono mb-2">
              DEVELOPER ACTIVITY &amp; OPEN SOURCE
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              GitHub Contributions
            </h2>
          </div>
          <a
            href={`https://github.com/${socialsData.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-300 border border-neutral-200 dark:border-white/10 transition-colors mt-4 md:mt-0 w-fit"
          >
            <FiGithub className="w-4 h-4" />
            <span>@{socialsData.githubUsername}</span>
          </a>
        </div>

        <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/10 p-4 md:p-6 overflow-hidden shadow-sm">
          <GitHubContributionCard
            username={socialsData.githubUsername}
            fallbackUsername="octocat"
          />
        </div>
      </div>
    </section>
  );
};
