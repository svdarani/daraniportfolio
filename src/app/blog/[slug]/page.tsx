import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FloatingDock from "@/components/dock/dock";
import Footer from "@/components/Footer";
import { blogPostsData } from "@/data/blog";
import { FiArrowLeft, FiClock, FiCalendar, FiTag } from "react-icons/fi";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Darani Viswanathan" };
  }

  return {
    title: `${post.title} | Darani Viswanathan`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <FloatingDock />

      {/* Top Header */}
      <div className="container mx-auto px-6 py-8 max-w-4xl flex items-center justify-between border-b border-neutral-200 dark:border-white/5">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>All Articles</span>
        </Link>
        <span className="text-xs font-mono text-neutral-400 dark:text-gray-500 uppercase tracking-widest">
          {post.category}
        </span>
      </div>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 dark:text-gray-400 mb-6">
          <span className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{post.date}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{post.readTime}</span>
          </span>
          <span>•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-white/5 text-indigo-700 dark:text-indigo-300">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight text-neutral-900 dark:text-white">
          {post.title}
        </h1>

        <p className="text-lg text-neutral-700 dark:text-gray-300 font-light leading-relaxed mb-10 pb-8 border-b border-neutral-200 dark:border-white/10">
          {post.summary}
        </p>

        {/* Content Paragraphs */}
        <div className="max-w-none space-y-6 text-neutral-700 dark:text-gray-300 font-light leading-relaxed text-base md:text-lg">
          {post.content &&
            post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center gap-2">
          <FiTag className="w-4 h-4 text-neutral-400 dark:text-gray-500 mr-2" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-gray-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
