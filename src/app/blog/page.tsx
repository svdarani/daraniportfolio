"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaButton } from "@/components/ui/NovaButton";
import { blogPostsData, BlogPost } from "@/data/blog";
import { FiClock, FiArrowUpRight, FiSearch, FiX } from "react-icons/fi";

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
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setReadingPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-modernist selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Page Header: Debata Display Headline */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 text-[11px] uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-900 dark:text-neutral-300 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            <span>RESOURCES &amp; ARTICLES</span>
          </div>

          <h1 className="font-debata text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.08] mb-6 max-w-4xl">
            Thoughts on Design,{" "}
            <span className="nova-gradient-text">Technology &amp; Creativity.</span>
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl font-normal">
            Reflections, principles, and notes on interface design, startup ventures, visual communication, and artificial intelligence.
          </p>
        </div>

        {/* Filter and Search Bar with animated sliding indicator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-neutral-200 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  data-cursor="LINK"
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-modernist transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white dark:text-black font-semibold"
                      : "text-neutral-600 dark:text-[#A3A3A3] hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="blog-category-pill"
                      className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-sm z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
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
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 text-sm font-modernist text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-colors duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
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

                  <h2 className="font-debata text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-white mb-3 leading-snug tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                    {post.title}
                  </h2>

                  <p className="font-modernist text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                    {post.summary}
                  </p>

                  {/* Article Snippet Content */}
                  {post.content && post.content.length > 0 && (
                    <div className="p-4 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 text-xs font-modernist text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 italic">
                      &ldquo;{post.content[0]}&rdquo;
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-[#0a0a0a] text-[10px] font-modernist text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-modernist text-neutral-400 dark:text-neutral-500">
                      {post.date}
                    </span>

                    <button
                      type="button"
                      onClick={() => setReadingPost(post)}
                      data-cursor="LINK"
                      className="group/read inline-flex items-center gap-1.5 text-xs font-modernist font-semibold text-neutral-900 hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span className="group-hover/read:underline">Read Article</span>
                      <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/read:translate-x-1 group-hover/read:-translate-y-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Reading Article Modal */}
        <AnimatePresence>
          {readingPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-white/10 p-8 sm:p-10 shadow-2xl"
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-modernist text-neutral-500 dark:text-neutral-400">
                    <span className="font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                      {readingPost.category}
                    </span>
                    <span>·</span>
                    <span>{readingPost.readTime}</span>
                    <span>·</span>
                    <span>{readingPost.date}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setReadingPost(null)}
                    className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Close article"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>

                <h2 className="font-debata text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-white mb-6 leading-tight">
                  {readingPost.title}
                </h2>

                <div className="space-y-4 font-modernist text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                  {readingPost.content && readingPost.content.length > 0 ? (
                    readingPost.content.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{readingPost.summary}</p>
                  )}
                </div>

                <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setReadingPost(null)}
                    className="px-5 py-2 rounded-full bg-neutral-100 dark:bg-white/10 text-xs font-modernist font-semibold text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#121212] border border-neutral-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Have thoughts or feedback?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
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

