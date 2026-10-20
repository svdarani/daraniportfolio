"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface NovaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  magnetic?: boolean;
}

export const NovaButton: React.FC<NovaButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  icon,
  showArrow = true,
  type = "button",
  disabled = false,
  magnetic = true,
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  // Magnetic spring physics for desktop cursor interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 260, mass: 0.2 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || disabled) return;
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.28;
      const deltaY = (e.clientY - centerY) * 0.28;
      mouseX.set(deltaX);
      mouseY.set(deltaY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-xs gap-2",
    md: "h-11 px-5 text-sm gap-2.5",
    lg: "h-13 py-3.5 px-7 text-base gap-3",
  };

  const arrowSizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-7 h-7 text-sm",
    lg: "w-8 h-8 text-base",
  };

  const variantClasses = {
    primary:
      "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.18)]",
    secondary:
      "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-white dark:border-white/15 dark:hover:border-white/30 shadow-sm",
    ghost:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white border border-transparent",
    cyan:
      "bg-white hover:bg-neutral-100 text-black border border-neutral-300 dark:border-transparent dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-semibold shadow-sm",
  };

  const arrowBgClasses = {
    primary: "bg-white/20 text-white dark:bg-black/15 dark:text-black",
    secondary:
      "bg-black/5 text-neutral-900 dark:bg-white/10 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors",
    ghost: "bg-black/5 text-neutral-900 dark:bg-white/10 dark:text-white",
    cyan: "bg-black/10 text-black",
  };

  const content = (
    <>
      {/* Modernist text wrapper with roll-up effect */}
      <span className="relative inline-flex flex-col h-[1.3em] overflow-hidden font-modernist">
        <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-full left-0 inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
      </span>

      {/* Arrow or custom icon */}
      {showArrow && (
        <span
          className={`relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${arrowSizeClasses[size]} ${arrowBgClasses[variant]}`}
        >
          {icon ? (
            icon
          ) : (
            <span className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <FiArrowUpRight className="absolute inset-0 m-auto transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" />
              <FiArrowUpRight className="absolute inset-0 m-auto -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          )}
        </span>
      )}
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-full font-modernist font-medium tracking-normal transition-colors duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonInner = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: magneticX, y: magneticY }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="inline-block"
      data-cursor="LINK"
    >
      {href ? (
        href.startsWith("http") || target === "_blank" ? (
          <a
            href={href}
            target={target || "_blank"}
            rel={rel || "noopener noreferrer"}
            className={baseClasses}
          >
            {content}
          </a>
        ) : (
          <Link href={href} className={baseClasses}>
            {content}
          </Link>
        )
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseClasses}
        >
          {content}
        </button>
      )}
    </motion.div>
  );

  return buttonInner;
};
