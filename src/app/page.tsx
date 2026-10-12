"use client";

import React from "react";
import { NovaNavbar } from "@/components/layout/NovaNavbar";
import { NovaHero } from "@/components/sections/NovaHero";
import { NovaMarquee } from "@/components/sections/NovaMarquee";
import { NovaAbout } from "@/components/sections/NovaAbout";
import { NovaServices } from "@/components/sections/NovaServices";
import { NovaWhyChoose } from "@/components/sections/NovaWhyChoose";
import { NovaProjects } from "@/components/sections/NovaProjects";
import { NovaCaseStudy } from "@/components/sections/NovaCaseStudy";
import { NovaSkills } from "@/components/sections/NovaSkills";
import { NovaCollaborations } from "@/components/sections/NovaCollaborations";
import { NovaExperience } from "@/components/sections/NovaExperience";
import { NovaBlog } from "@/components/sections/NovaBlog";
import { NovaContact } from "@/components/sections/NovaContact";
import { NovaFooter } from "@/components/layout/NovaFooter";

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

      {/* 01. Global Navigation */}
      <NovaNavbar />

      {/* 02. Hero Section */}
      <NovaHero />

      {/* 03. Collaborations & Ecosystem Marquee */}
      <NovaMarquee />

      {/* 04. About Me Section */}
      <NovaAbout />

      {/* 05. Services Section */}
      <NovaServices />

      {/* 06. Why Work With Me */}
      <NovaWhyChoose />

      {/* 07. Selected Works (Filterable Portfolio) */}
      <NovaProjects />

      {/* 08. In-Depth Case Studies (4-Stage Showcase) */}
      <NovaCaseStudy />

      {/* 09. Creative & Technical Toolkit */}
      <NovaSkills />

      {/* 10. Collaborations & Ecosystem Contributions */}
      <NovaCollaborations />

      {/* 11. Experience & Achievements Timeline */}
      <NovaExperience />

      {/* 12. Resources & Guides (Notes on Design) */}
      <NovaBlog />

      {/* 13. Contact & Conversion Section */}
      <NovaContact />

      {/* 14. Global Footer */}
      <NovaFooter />
    </main>
  );
}
