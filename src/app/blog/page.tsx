"use client";

import React, { useState } from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaButton } from "@/components/ui/NovaButton";
import { blogPostsData } from "@/data/blog";
import { FiClock, FiArrowUpRight, FiSearch } from "react-icons/fi";

const categories = [
  "All",
  "UI/UX Design",
  "Branding",
  "Startups",
  "Graphic Design",
  "AI & Technology",
  "Web Development",
] as const;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCat =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] font-modernist selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Header: Debata Display Headline */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
            <span>RESOURCES &amp; ARTICLES</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.08] mb-6 max-w-4xl">
            Thoughts on Design,{" "}
            <span className="nova-gradient-text">Technology &amp; Creativity.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-3xl font-normal">
            Reflections, principles, and notes on interface design, startup ventures, visual communication, and artificial intelligence.
          </p>
        </div>

        {/* Filter and Search Bar: Modernist */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-neutral-200 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-modernist font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#326BFF] text-white shadow-[0_4px_16px_rgba(50,107,255,0.35)] font-semibold"
                      : "bg-neutral-100 text-neutral-600 dark:bg-[#151821] dark:text-[#A5ADBD] hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[260px]">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] text-sm font-modernist text-neutral-900 dark:text-[#F7F8FC] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#326BFF] dark:focus:border-[#326BFF] transition-colors"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] hover:border-[#326BFF]/40 dark:hover:border-[#326BFF]/40 transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200 dark:border-white/[0.06]">
                  <span className="text-[11px] font-modernist uppercase tracking-wider text-[#326BFF] dark:text-[#24D9FF] font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-modernist text-neutral-400 dark:text-[#A5ADBD]">
                    <FiClock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-debata text-xl sm:text-2xl font-bold text-neutral-950 dark:text-[#F7F8FC] mb-3 leading-snug tracking-tight">
                  {post.title}
                </h2>

                <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-6 font-normal">
                  {post.summary}
                </p>

                {/* Article Snippet Content */}
                {post.content && post.content.length > 0 && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#11131A] border border-neutral-200 dark:border-white/[0.05] text-xs font-modernist text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-6 italic">
                    &ldquo;{post.content[0]}&rdquo;
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-[#11131A] text-[10px] font-modernist text-neutral-600 dark:text-[#A5ADBD] border border-neutral-200 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-modernist text-neutral-400 dark:text-[#A5ADBD]">
                    {post.date}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      alert(`Article: "${post.title}"\n\n${post.content?.join("\n\n") || post.summary}`);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-modernist font-semibold text-[#326BFF] hover:text-[#258CFF] dark:text-[#24D9FF] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have thoughts or feedback?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD]">
              I&apos;m always happy to connect and talk about design, AI, or creative technology.
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
