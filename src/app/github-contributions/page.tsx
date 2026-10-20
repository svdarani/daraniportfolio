import {
  ThemeToggle,
  GitHubContributionCard,
} from "@/components/GitHubContributions";
import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiGithub } from "react-icons/fi";
import { socialsData } from "@/data/socials";
import { OversizedFooter } from "@/components/Home/OversizedFooter";

export const metadata: Metadata = {
  title: "GitHub Contributions & Activity | Darani Viswanathan",
  description:
    "View Darani Viswanathan's GitHub contributions, repository activities, and coding streaks powered by GitHub GraphQL API.",
};

export default function GitHubContributionsPage() {
  const username = socialsData.githubUsername;

  return (
    <div className="min-h-screen p-6 md:p-12 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200 dark:border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-800 dark:text-gray-300 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              <span>@{username}</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
            OPEN SOURCE ACTIVITY
          </p>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-neutral-900 dark:text-white">
            GitHub Contribution Graph
          </h1>
          <p className="text-sm md:text-base text-neutral-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
            Live contributions and repository commits fetched via GitHub GraphQL API with automatic fallback.
          </p>
        </div>

        {/* Primary Profile Card */}
        <div className="mb-12 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-white/10 p-6 md:p-8 shadow-sm">
          <GitHubContributionCard
            username={username}
            fallbackUsername="octocat"
          />
        </div>

        {/* Activity Context */}
        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/20 border border-neutral-200/80 dark:border-white/5 text-xs text-neutral-600 dark:text-gray-400 font-mono flex items-center justify-between shadow-sm">
          <span>Powered by GitHub GraphQL API • NEXT_PUBLIC_GITHUB_USERNAME</span>
          <span className="text-emerald-600 dark:text-emerald-400">● Live Connection Ready</span>
        </div>
      </div>

      <OversizedFooter />
    </div>
  );
}
