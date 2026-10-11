"use client";
import React from "react";
import { FloatingDock, DockItem } from "./index";
import ThemeToggle from "../theme/ThemeToggle";
import { Briefcase } from "lucide-react";

const Dock = () => {
  const items: DockItem[] = [
    {
      title: "Home",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:scale-110"
        >
          <path d="M7.5 17H16.5M11.3 3.2L3.5 8.5C3.2 8.7 3 9 3 9.4V19.3C3 20.2 3.8 21 4.8 21H19.2C20.2 21 21 20.2 21 19.3V9.4C21 9 20.8 8.7 20.5 8.5L12.7 3.2C12.3 2.9 11.7 2.9 11.3 3.2Z" />
        </svg>
      ),
      href: "/",
      glowColor: "bg-blue-500/25 dark:bg-blue-400/35",
    },
    {
      title: "About",
      icon: (
        <span className="font-mono font-extrabold text-[15px] tracking-tight bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-300 bg-clip-text text-transparent select-none drop-shadow-sm transition-transform duration-200 group-hover:scale-110">
          DV
        </span>
      ),
      href: "/about",
      glowColor: "bg-indigo-500/25 dark:bg-indigo-400/35",
    },
    {
      title: "Projects",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:scale-110"
        >
          <path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15M6.7 9.26L12 12.33L17.26 9.28M12 17.77V12.32M10.76 6.29L7.56 8.07C6.84 8.47 6.24 9.48 6.24 10.31V13.7C6.24 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.31C17.77 9.48 17.18 8.47 16.45 8.07L13.25 6.29C12.56 5.9 11.44 5.9 10.76 6.29Z" />
        </svg>
      ),
      href: "/projects",
      glowColor: "bg-cyan-500/25 dark:bg-cyan-400/35",
    },
    {
      title: "Skills",
      icon: (
        <svg
          width="22"
          height="19"
          viewBox="0 0 23 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:scale-110"
        >
          <rect x="0.75" y="0.75" width="21.5" height="18.5" rx="3.5" />
          <path d="M6.875 13.75L10.125 10.5L6.875 7.25" />
          <path d="M12 13.5H17" />
        </svg>
      ),
      href: "/skills",
      glowColor: "bg-emerald-500/25 dark:bg-emerald-400/35",
    },
    {
      title: "Experience",
      icon: (
        <Briefcase
          className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
          strokeWidth={1.8}
        />
      ),
      href: "/experience",
      glowColor: "bg-amber-500/25 dark:bg-amber-400/35",
    },
    {
      title: "Resume",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:scale-110"
        >
          <path d="M15 2.4V6C15 6.66 15.54 7.2 16.2 7.2H19.8M8.4 7.2H10.8M8.4 10.8H15.6M8.4 14.4H15.6M18 4.2C17.47 3.72 16.91 3.16 16.56 2.79C16.33 2.54 16.01 2.4 15.67 2.4H6.6C5.27 2.4 4.2 3.47 4.2 4.8V19.2C4.2 20.53 5.27 21.6 6.6 21.6H17.4C18.73 21.6 19.8 20.53 19.8 19.2V6.48C19.8 6.17 19.68 5.88 19.47 5.66L18 4.2Z" />
        </svg>
      ),
      href: "/resume",
      glowColor: "bg-purple-500/25 dark:bg-purple-400/35",
    },
    {
      title: "Contact",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:scale-110"
        >
          <circle cx="12" cy="12" r="9.5" />
          <path d="M9.2 14.8L14.8 9.2M14.8 9.2H10.2M14.8 9.2V13.8" />
        </svg>
      ),
      href: "/contact",
      glowColor: "bg-rose-500/25 dark:bg-rose-400/35",
    },
  ];

  return (
    <div>
      <div className="fixed bottom-5 right-5 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 flex items-center gap-3">
        <FloatingDock items={items} />
        <div className="hidden md:flex items-center">
          <ThemeToggle
            size="md"
            className="shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Dock;
