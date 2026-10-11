"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export type CursorType = "DEFAULT" | "LINK" | "PROJECT" | "IMAGE" | "TEXT";

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<CursorType>("DEFAULT");
  const [cursorText, setCursorText] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined") {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const getSize = () => {
    switch (cursorType) {
      case "LINK":
        return 48;
      case "PROJECT":
        return 88;
      case "IMAGE":
        return 72;
      case "TEXT":
        return 4;
      default:
        return 12;
    }
  };

  const size = getSize();

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        backgroundColor: cursorType === "TEXT" ? "rgba(255,255,255,0.9)" : "white",
        backdropFilter: cursorType === "PROJECT" ? "blur(4px)" : "none",
      }}
      animate={{
        scale: 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {cursorType === "PROJECT" && (
        <span className="text-[11px] font-semibold tracking-wider text-black uppercase">
          {cursorText || "View"}
        </span>
      )}
      {cursorType === "IMAGE" && (
        <span className="text-[10px] font-semibold text-black uppercase">
          Zoom
        </span>
      )}
    </motion.div>
  );
};
