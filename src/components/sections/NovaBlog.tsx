"use client";

import React from "react";
import Link from "next/link";
import { NovaSectionHeader } from "../ui/NovaSectionHeader";
import { NovaButton } from "../ui/NovaButton";
import { blogPostsData } from "@/data/blog";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

export const NovaBlog: React.FC = () => {
  const featuredPosts = blogPostsData.slice(0, 3);

  return (
    <section id="blog" className="section-contain py-24 sm:py-32 bg-white dark:bg-black relative transition-colors">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <NovaSectionHeader
            eyebrow="BLOG &amp; ARTICLES"
            titleStart="Notes on"
            titleHighlight="Design, Tech &amp; Creativity"
            description="Reflections on UI/UX design, visual communication, startup incubation experiences, and modern software development."
            className="mb-0 md:mb-0"
          />

          <NovaButton href="/blog" variant="secondary" size="md">
            View All Notes
          </NovaButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/10">
                  <span className="text-[11px] font-modernist uppercase tracking-wider text-neutral-900 dark:text-neutral-300 font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-modernist text-neutral-400 dark:text-neutral-500">
                    <FiClock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-debata text-xl font-bold text-neutral-950 dark:text-white mb-3 transition-colors leading-snug tracking-tight">
                  {post.title}
                </h3>

                <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-modernist text-neutral-400 dark:text-neutral-500">
                  {post.date}
                </span>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-modernist font-semibold text-neutral-900 hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors group/btn"
                >
                  <span>Read Note</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
