import React from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaFooter } from "@/components/layout/NovaFooter";
import { NovaButton } from "@/components/ui/NovaButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 flex flex-col justify-between selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors">
      <NovaNavbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#141414] border border-neutral-200 dark:border-white/10 text-xs uppercase tracking-wider font-mono text-neutral-900 dark:text-white mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
          <span>ERROR 404</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white mb-4">
          4<span className="nova-gradient-text">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-base text-neutral-600 dark:text-[#A5ADBD] leading-relaxed mb-8 max-w-md">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>

        <NovaButton href="/" variant="primary" size="lg">
          Return to Home
        </NovaButton>
      </main>

      <NovaFooter />
    </div>
  );
}
