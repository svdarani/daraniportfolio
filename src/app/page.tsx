"use client";

import React from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaHero } from "@/components/sections/NovaHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-modernist relative overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
      {/* Accessible SEO Content */}
      <div className="sr-only">
        <h1>
          Darani Viswanathan - Creative Designer &amp; Developer | AI &amp; Data Science Student
        </h1>
        <p>
          Portfolio of Darani Viswanathan, an AI &amp; Data Science student, Creative Designer,
          UI/UX Designer, Graphic Designer, and Developer working across branding, digital experiences,
          and technology. Founder of ArtZa Designs.
        </p>
      </div>

      {/* Global Navigation (Top Bar + Bottom Dock) */}
      <NovaNavbar />

      {/* Hero Section */}
      <NovaHero />
    </main>
  );
}
