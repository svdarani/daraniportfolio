import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaButton } from "@/components/ui/NovaButton";
import { projectsData } from "@/data/projects";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Darani Viswanathan",
    };
  }

  return {
    title: `${project.title} | Darani Viswanathan`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#090A0F] dark:text-[#F7F8FC] font-modernist selection:bg-[#326BFF] selection:text-white dark:selection:bg-[#326BFF] dark:selection:text-white transition-colors">
      <NovaNavbar />

      <main className="pt-32 pb-24 max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs font-modernist text-neutral-600 hover:text-[#326BFF] dark:text-[#A5ADBD] dark:hover:text-white transition-colors"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header: Debata Headline */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-modernist font-semibold uppercase tracking-[0.14em] bg-neutral-100 dark:bg-[#151821] text-[#326BFF] dark:text-[#24D9FF] border border-neutral-200 dark:border-white/10">
              {project.filterCategory}
            </span>
            <span className="text-xs font-modernist text-neutral-500 dark:text-[#A5ADBD]">
              {project.year} · Role: {project.role}
            </span>
          </div>

          <h1 className="font-debata text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-[#F7F8FC] mb-6 leading-tight max-w-4xl">
            {project.title}
          </h1>

          <p className="font-modernist text-lg sm:text-xl text-neutral-600 dark:text-[#A5ADBD] leading-relaxed max-w-3xl font-normal">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Hero Artwork Frame */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.1] shadow-xl mb-16">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Project Metadata Strip: Modernist */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] mb-16 shadow-sm">
          <div>
            <div className="text-[11px] font-modernist text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-wider mb-1 font-semibold">
              Category
            </div>
            <div className="text-sm font-modernist font-semibold text-neutral-950 dark:text-white">
              {project.filterCategory}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-modernist text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-wider mb-1 font-semibold">
              Role
            </div>
            <div className="text-sm font-modernist font-semibold text-neutral-950 dark:text-white">
              {project.role}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-modernist text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-wider mb-1 font-semibold">
              Timeline
            </div>
            <div className="text-sm font-modernist font-semibold text-neutral-950 dark:text-white">
              {project.year}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-modernist text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-wider mb-1 font-semibold">
              Status
            </div>
            <div className="text-sm font-modernist font-semibold text-neutral-900 dark:text-white">
              {project.status || "Completed"}
            </div>
          </div>
        </div>

        {/* Problem & Objectives Section */}
        {project.problem && (
          <section className="mb-16">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#326BFF] dark:text-[#24D9FF]">
                <FiAlertCircle className="w-5 h-5" />
                <h2 className="font-modernist text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                  01. PROBLEM STATEMENT
                </h2>
              </div>
              <p className="font-modernist text-base sm:text-lg text-neutral-950 dark:text-[#F7F8FC] leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>
          </section>
        )}

        {/* Process Steps */}
        {project.process && project.process.length > 0 && (
          <section className="mb-16">
            <h2 className="font-debata text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-8 tracking-tight">
              Process &amp; Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.process.map((step, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm"
                >
                  <span className="text-xs font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] block mb-2">
                    Phase 0{i + 1}
                  </span>
                  <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Deliverables / Features */}
        {project.features && project.features.length > 0 && (
          <section className="mb-16">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-[#326BFF] dark:text-[#24D9FF]">
                <FiCheckCircle className="w-5 h-5" />
                <h2 className="font-modernist text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-[#F7F8FC]">
                  KEY DELIVERABLES &amp; SOLUTIONS
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#326BFF] dark:text-[#24D9FF] w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Solution & Result / Output */}
        {(project.solution || project.result) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {project.solution && (
              <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
                <div className="text-[11px] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] uppercase tracking-wider mb-2">
                  Solution
                </div>
                <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
            {project.result && (
              <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] shadow-sm">
                <div className="text-[11px] font-modernist font-semibold text-[#326BFF] dark:text-[#24D9FF] uppercase tracking-wider mb-2">
                  Outcome &amp; Deliverables
                </div>
                <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed">
                  {project.result}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Technologies Used */}
        <section className="mb-20">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="text-[11px] font-modernist font-semibold text-neutral-500 dark:text-[#A5ADBD] uppercase tracking-wider">
              Tools &amp; Technologies:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-white dark:bg-[#11131A] text-xs font-modernist text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <section className="pt-8 border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between gap-4 mb-20">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-modernist text-neutral-600 hover:text-[#326BFF] dark:text-[#A5ADBD] dark:hover:text-white transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-modernist text-neutral-600 hover:text-[#326BFF] dark:text-[#A5ADBD] dark:hover:text-white transition-colors"
            >
              <span>{nextProject.title}</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </section>

        {/* Bottom CTA */}
        <section className="p-10 sm:p-14 rounded-3xl bg-neutral-100 dark:bg-[#151821] border border-neutral-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-debata text-2xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2 tracking-tight">
              Need similar design or development support?
            </h2>
            <p className="font-modernist text-sm sm:text-base text-neutral-600 dark:text-[#A5ADBD]">
              Let&apos;s discuss your creative goals and build something thoughtful together.
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
