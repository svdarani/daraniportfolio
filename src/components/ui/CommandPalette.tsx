"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCode,
  FiBriefcase,
  FiAward,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiSearch,
  FiCornerDownLeft,
  FiX,
} from "react-icons/fi";
import { socialsData } from "@/data/socials";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "External" | "Document";
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: CommandItem[] = [
    {
      id: "home",
      title: "Home",
      category: "Navigation",
      icon: <FiHome className="w-4 h-4" />,
      action: () => router.push("/"),
    },
    {
      id: "about",
      title: "About Darani",
      category: "Navigation",
      icon: <FiUser className="w-4 h-4" />,
      action: () => router.push("/about"),
    },
    {
      id: "projects",
      title: "Projects & Portfolio",
      category: "Navigation",
      icon: <FiFolder className="w-4 h-4" />,
      action: () => router.push("/projects"),
    },
    {
      id: "skills",
      title: "Technical Skills",
      category: "Navigation",
      icon: <FiCode className="w-4 h-4" />,
      action: () => router.push("/skills"),
    },
    {
      id: "experience",
      title: "Experience & Education",
      category: "Navigation",
      icon: <FiBriefcase className="w-4 h-4" />,
      action: () => router.push("/experience"),
    },
    {
      id: "achievements",
      title: "Achievements & Awards",
      category: "Navigation",
      icon: <FiAward className="w-4 h-4" />,
      action: () => router.push("/achievements"),
    },
    {
      id: "resume",
      title: "Resume",
      category: "Document",
      icon: <FiFileText className="w-4 h-4" />,
      action: () => router.push("/resume"),
    },
    {
      id: "contact",
      title: "Contact",
      category: "Navigation",
      icon: <FiMail className="w-4 h-4" />,
      action: () => router.push("/contact"),
    },
    {
      id: "github",
      title: "GitHub Profile",
      category: "External",
      icon: <FiGithub className="w-4 h-4" />,
      action: () => {
        const gh = socialsData.links.find((l) => l.platform === "GitHub")?.url;
        if (gh) window.open(gh, "_blank");
      },
    },
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      category: "External",
      icon: <FiLinkedin className="w-4 h-4" />,
      action: () => {
        const li = socialsData.links.find((l) => l.platform === "LinkedIn")?.url;
        if (li) window.open(li, "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
    }
  }, [isOpen]);

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? (filteredCommands.length || 1) - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredCommands[selectedIndex];
      if (selected) {
        selected.action();
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Keyboard Hint Pill (Desktop) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-20 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white/70 text-xs backdrop-blur-md shadow-sm transition-all duration-300"
        aria-label="Open Command Palette"
      >
        <FiSearch className="w-3.5 h-3.5" />
        <span className="font-mono text-[10px] bg-neutral-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-neutral-800 dark:text-white">
          ⌘K
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white dark:bg-[#12141a] border border-neutral-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-200 dark:border-white/10">
                <FiSearch className="w-5 h-5 text-neutral-400 dark:text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyNavigation}
                  className="w-full bg-transparent text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-gray-500 text-sm focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-72 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-xs text-neutral-500 dark:text-gray-500">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filteredCommands.map((cmd, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={() => {
                          cmd.action();
                          setIsOpen(false);
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 ${
                          isSelected
                            ? "bg-neutral-100 dark:bg-white/10 text-neutral-950 dark:text-white"
                            : "text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`${
                              isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-neutral-400 dark:text-gray-400"
                            }`}
                          >
                            {cmd.icon}
                          </span>
                          <span>{cmd.title}</span>
                          <span className="text-[10px] text-neutral-400 dark:text-gray-600 uppercase tracking-wider">
                            {cmd.category}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-gray-400">
                            <span className="text-[9px]">Select</span>
                            <FiCornerDownLeft className="w-3 h-3" />
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 dark:bg-black/40 border-t border-neutral-200 dark:border-white/5 text-[11px] text-neutral-500 dark:text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <span>Navigation: ↑ ↓</span>
                  <span>•</span>
                  <span>Select: ↵</span>
                </div>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
