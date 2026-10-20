# Darani Viswanathan (Darani S V) — Creative Developer & AI/DS Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-Darani%20Viswanathan-00dc82?style=for-the-badge&logo=vercel)](https://darani-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Darani%20S%20V-0a66c2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/darani-s-v-79659b28b/)
[![Instagram](https://img.shields.io/badge/Instagram-@artza_designs-e4405f?style=for-the-badge&logo=instagram)](https://www.instagram.com/artza_designs/)
[![Email](https://img.shields.io/badge/Email-darani0906@gmail.com-ea4335?style=for-the-badge&logo=gmail)](mailto:darani0906@gmail.com)

> **"Bridging human-centered aesthetic design with data intelligence and creative engineering."**  
> AI & Data Science Scholar · Creative Frontend Developer · UI/UX Designer · Graphic Designer

---

## 🚀 About

This repository is the official personal portfolio of **Darani Viswanathan (தரணி ச.வி)**, 3rd Year B.Tech Artificial Intelligence and Data Science student at Sri Shanmugha College of Engineering and Technology (Autonomous), Salem.

Darani works at the exact intersection of **computational intelligence** and **aesthetic visual craftsmanship**. With documented output including **845+ visual designs**, **36+ videos produced**, **72K+ organic impressions**, and production web engineering work at **Aakam Shine Incubation Centre**, this portfolio showcases full-stack web applications, machine learning projects, enterprise UI designs, and creative engineering.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router with Turbopack)
- **UI Library**: React 19
- **Languages**: TypeScript, Modern JavaScript, Python, Java
- **Styling**: Tailwind CSS, CSS Custom Properties Design Tokens, Glassmorphism
- **Animations & Physics**: GSAP (GreenSock), Framer Motion, Lenis Smooth Scroll
- **State & Utilities**: Lucide Icons, React Icons, Canvas Confetti
- **Deployment**: Vercel

---

## 🌟 Key Interactive Features

- **Interactive Dock Navigation**: Floating macOS-style dock with magnetic scaling and icon labels (`/`, `/about`, `/projects`, `/skills`, `/experience`, `/resume`, `/contact`).
- **Command Palette (`Ctrl + K` / `Cmd + K`)**: Quick-jump search modal to navigate any section or route instantly with keyboard navigation.
- **Interactive Developer Terminal (`Ctrl + ~` / `~`)**: Built-in CLI with commands: `help`, `about`, `skills`, `projects`, `experience`, `contact`, `github`, `clear`, and easter egg `darani`.
- **Dynamic Project Case Studies**: Multi-category filterable project grid with dynamic routes (`/projects/[slug]`), rich problem statements, system architectures, metrics, and tech stacks.
- **Curated Design Showcase**: Filterable graphic design & branding gallery with interactive full-screen lightbox preview.
- **Documented Impact Metrics**: Live animated statistics section tracking 845+ designs, 72K+ impressions, 2.1K+ followers, and 10+ UI flows.
- **Live Contact Form & API**: Robust `/api/contact` endpoint with payload validation, rate-limiting, and sanitized inputs.
- **Printable Resume Engine**: Professional `/resume` route with print stylesheets (`Ctrl + P`) and auto-detection for `/resume.pdf`.
- **Multilingual Tamil Heritage**: Tamil greeting "வணக்கம்" integrated into the preloader and typography.

---

## 📁 Repository Structure

```
src/
├── app/                        # Next.js App Router routes
│   ├── layout.tsx             # Root layout with SEO, JSON-LD, CommandPalette, TerminalModal
│   ├── page.tsx               # Homepage assembling all 12 showcase sections
│   ├── about/                 # Full editorial biography & education timeline
│   ├── projects/              # Filterable project showcase & search
│   │   └── [slug]/            # Dynamic project case study pages
│   ├── experience/            # Experience & Aakam Incubation journey
│   ├── achievements/          # Awards, hackathons & mentorship
│   ├── skills/                # Categorized skill taxonomy
│   ├── resume/                # Printable resume & PDF download
│   ├── contact/               # Interactive contact form
│   ├── blog/                  # Technical essays and thoughts
│   └── api/contact/           # Serverless contact API endpoint
├── components/                # Modular UI components
│   ├── dock/                  # Desktop & mobile floating dock
│   ├── ui/                    # Custom cursor, CommandPalette, TerminalModal, Marquee
│   ├── Home/                  # Metrics, TechStack, DesignShowcase, Experience, GitHub, etc.
│   ├── Preloader/             # Tamil "வணக்கம்" preloader
│   ├── Header/                # Navigation header
│   └── Footer/                # Editorial footer with social links & copyright
├── data/                      # Centralized data layers (Single source of truth)
│   ├── profile.ts             # Personal bio, education, titles, positioning
│   ├── projects.ts            # Detailed project case studies
│   ├── skills.ts              # Categorized skills (Languages, Frontend, AI/DS, Design, Tools)
│   ├── experience.ts          # Professional experience & roles
│   ├── achievements.ts        # Hackathons, mentorships & certifications
│   ├── metrics.ts             # Documented output statistics
│   ├── learning.ts            # Current learning roadmap
│   ├── socials.ts             # Verified social media handles
│   └── blog.ts                # Published articles & technical writings
└── public/                    # Static assets
    ├── images/                # Vector project covers & illustrations
    └── resume.pdf             # (Optional) Drop resume PDF here
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/darani-sv/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Verify build & type checks
npm run build

# Start production server
npm start
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` to customize optional keys:

```env
# Optional: GitHub token for live GitHub contributions graph
GITHUB_TOKEN=

# Optional: Resend API key for automated email delivery
RESEND_API_KEY=
CONTACT_NOTIFICATION_EMAIL=darani0906@gmail.com

# Site URL for Open Graph metadata
NEXT_PUBLIC_SITE_URL=https://darani-portfolio.vercel.app
```

---

## 📬 Contact & Connect

- **Name**: Darani Viswanathan (Darani S V)
- **Email**: [darani0906@gmail.com](mailto:darani0906@gmail.com)
- **LinkedIn**: [linkedin.com/in/darani-s-v-79659b28b](https://www.linkedin.com/in/darani-s-v-79659b28b/)
- **Instagram**: [@artza_designs](https://www.instagram.com/artza_designs/)

---

© 2026 Darani Viswanathan. Built with Next.js 15, React 19 & Tailwind CSS.
