"use client";

import React from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaHero } from "@/components/sections/NovaHero";
import { HomeStatement } from "@/components/Home/HomeStatement";
import { ImpressiveWorks } from "@/components/Home/ImpressiveWorks";
import { CreativeDeveloperPillars } from "@/components/Home/CreativeDeveloperPillars";
import { TalkContactSection } from "@/components/Home/TalkContactSection";
import { OversizedFooter } from "@/components/Home/OversizedFooter";

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

      {/* 01. Statement / Intro Section */}
      <HomeStatement />

      {/* 02. Impressive Work (4-project showcase matching reference) */}
      <ImpressiveWorks />

      {/* 03. The Creative Developer You Wish You Hired Sooner! */}
      <CreativeDeveloperPillars />

      {/* 04. That's all for now. Got a project in mind? Let's Talk */}
      <TalkContactSection />

      {/* 05. Chaos Creator Oversized Typographic Footer */}
      <OversizedFooter />
    </main>
  );
}

