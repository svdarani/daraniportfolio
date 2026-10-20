"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export type CursorType = "DEFAULT" | "LINK" | "PROJECT" | "IMAGE" | "TEXT";

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<CursorType>("DEFAULT");
  const [cursorText, setCursorText] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  // Exact mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs: Inner dot follows briskly, outer ring follows with soft easing
  const dotSpringConfig = { damping: 30, stiffness: 600, mass: 0.1 };
  const ringSpringConfig = { damping: 24, stiffness: 220, mass: 0.5 };

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices that support fine hover
    if (typeof window === "undefined") return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") as CursorType;
        const text = cursorTarget.getAttribute("data-cursor-text") || "";
        setCursorType(type || "DEFAULT");
        setCursorText(text);
        return;
      }

      if (target.closest("a, button, [role='button']")) {
        setCursorType("LINK");
        setCursorText("");
        return;
      }

      if (target.closest("input, textarea")) {
        setCursorType("TEXT");
        setCursorText("");
        return;
      }

      setCursorType("DEFAULT");
      setCursorText("");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isEnabled || !isVisible) return null;

  // Determine outer ring dimensions and styles according to cursor state
  const isProject = cursorType === "PROJECT";
  const isImage = cursorType === "IMAGE";
  const isLink = cursorType === "LINK";
  const isText = cursorType === "TEXT";

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
    >
      {/* 1. Fast, pinpoint center dot */}
      {!isProject && !isImage && !isText && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-black dark:bg-white pointer-events-none mix-blend-difference"
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isLink ? 0 : 1,
            opacity: 1,
          }}
          transition={{ duration: 0.15 }}
        />
      )}

      {/* 2. Soft, reactive outer ring / pill capsule */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transform-gpu"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isProject ? 108 : isImage ? 80 : isLink ? 48 : isText ? 4 : 36,
          height: isProject ? 38 : isImage ? 38 : isLink ? 48 : isText ? 24 : 36,
          borderRadius: isProject || isImage ? 999 : isText ? 2 : 999,
          backgroundColor: isProject
            ? "rgba(0, 0, 0, 0.88)"
            : isImage
            ? "rgba(0, 0, 0, 0.82)"
            : isLink
            ? "rgba(255, 255, 255, 0.2)"
            : isText
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent",
          borderColor: isProject || isImage || isText
            ? "transparent"
            : isLink
            ? "rgba(128, 128, 128, 0.4)"
            : "rgba(128, 128, 128, 0.35)",
          borderWidth: isProject || isImage || isText ? 0 : 1.5,
          backdropFilter: isProject || isImage ? "blur(8px)" : isLink ? "blur(2px)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 26,
        }}
      >
        {isProject && (
          <span className="text-[11px] font-semibold tracking-wider text-white uppercase px-3 py-1 flex items-center gap-1">
            <span>{cursorText || "Explore"}</span>
            <span className="text-xs">↗</span>
          </span>
        )}
        {isImage && (
          <span className="text-[10px] font-semibold text-white uppercase tracking-wider px-2.5">
            {cursorText || "View"}
          </span>
        )}
      </motion.div>
    </aside>
  );
};
