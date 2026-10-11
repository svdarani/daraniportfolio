"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiX } from "react-icons/fi";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { experiencesData } from "@/data/experience";
import { socialsData } from "@/data/socials";

interface LogEntry {
  type: "input" | "output" | "error" | "easter";
  text: string;
}

export const TerminalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: "output",
      text: "DaraniOS v2.4 (x86_64-antigravity)\nType 'help' to view available commands.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Easter egg: listening for user typing "darani" anywhere
  useEffect(() => {
    let keyBuffer = "";
    const handleKey = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in form inputs
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);

      if (keyBuffer.endsWith("darani")) {
        setIsOpen(true);
        setLogs((prev) => [
          ...prev,
          {
            type: "easter",
            text: `✨ Easter egg unlocked! Welcome to Darani's developer terminal session.`,
          },
        ]);
        keyBuffer = "";
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: LogEntry[] = [...logs, { type: "input", text: `> ${inputVal}` }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: `Available commands:\n  about       - Overview of Darani Viswanathan\n  skills      - Key technical & design competencies\n  projects    - Selected projects\n  experience  - Professional journey & education\n  contact     - Contact & email info\n  github      - GitHub repository & profile info\n  clear       - Clear terminal output\n  sudo darani - Developer easter egg`,
        });
        break;

      case "about":
        newLogs.push({
          type: "output",
          text: `${profileData.name} (${profileData.tamilName})\nRole: ${profileData.headline}\nPositioning: ${profileData.positioning}\n\n"${profileData.shortBio}"`,
        });
        break;

      case "skills":
        const summary = skillCategories
          .map((c) => `[${c.title}]: ${c.skills.map((s) => s.name).join(", ")}`)
          .join("\n");
        newLogs.push({
          type: "output",
          text: `Technical Competencies:\n${summary}`,
        });
        break;

      case "projects":
        const pList = projectsData
          .slice(0, 5)
          .map((p) => `• ${p.title} (${p.category}) - ${p.description.slice(0, 60)}...`)
          .join("\n");
        newLogs.push({
          type: "output",
          text: `Featured Projects:\n${pList}\n\nVisit /projects for the full case study gallery.`,
        });
        break;

      case "experience":
        const exp = experiencesData
          .map((e) => `• ${e.role} @ ${e.organization} (${e.period})`)
          .join("\n");
        newLogs.push({
          type: "output",
          text: `Experience & Education:\n${exp}`,
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: `Email: ${socialsData.email}\nLocation: ${socialsData.location}`,
        });
        break;

      case "github":
        newLogs.push({
          type: "output",
          text: `GitHub Profile: https://github.com/${socialsData.githubUsername}`,
        });
        break;

      case "sudo darani":
      case "darani":
        newLogs.push({
          type: "easter",
          text: `🚀 ROOT ACCESS GRANTED!\n"Crafting at the intersection of AI, Data Science & Creative Technology."\nBuilt by Darani Viswanathan with Next.js 15, React 19, Framer Motion & Tailwind CSS.`,
        });
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        newLogs.push({
          type: "error",
          text: `Command not found: '${cmd}'. Type 'help' to see valid commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  return (
    <>
      {/* Floating launcher button (bottom-left) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white/80 text-xs backdrop-blur-md shadow-lg transition-all"
        title="Open Interactive Terminal (or type 'darani')"
        aria-label="Open Terminal"
      >
        <FiTerminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span className="font-mono text-[11px] hidden sm:inline">Terminal</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl h-[440px] bg-[#0d1117] border border-white/15 rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/10 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setLogs([])} />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <span className="ml-2 text-gray-400 text-[11px]">darani@terminal ~ zsh</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Logs Screen */}
              <div className="flex-1 p-4 overflow-y-auto space-y-2 text-gray-300">
                {logs.map((log, i) => (
                  <div key={i} className="whitespace-pre-wrap leading-relaxed">
                    {log.type === "input" && (
                      <span className="text-emerald-400 font-bold">{log.text}</span>
                    )}
                    {log.type === "output" && (
                      <span className="text-gray-300">{log.text}</span>
                    )}
                    {log.type === "easter" && (
                      <span className="text-purple-300 font-semibold">{log.text}</span>
                    )}
                    {log.type === "error" && (
                      <span className="text-rose-400">{log.text}</span>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input Line */}
              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-t border-white/10"
              >
                <span className="text-emerald-400 font-bold">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a command (try 'help' or 'sudo darani')..."
                  className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none text-xs"
                />
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
