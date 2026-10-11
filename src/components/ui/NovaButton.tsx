"use client";

import React from "react";
import Link from "next/link";
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
}) => {
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
      "bg-[#326BFF] hover:bg-[#258CFF] text-white shadow-[0_4px_20px_rgba(50,107,255,0.35)] active:scale-[0.98]",
    secondary:
      "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 dark:bg-[#151821] dark:hover:bg-[#1E222E] dark:text-[#F7F8FC] dark:border-white/10 dark:hover:border-white/20 shadow-sm active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-600 hover:text-black dark:text-[#A5ADBD] dark:hover:text-[#F7F8FC] border border-transparent",
    cyan:
      "bg-[#24D9FF] hover:bg-[#22D3EE] text-[#090A0F] font-semibold shadow-[0_4px_20px_rgba(36,217,255,0.35)] active:scale-[0.98]",
  };

  const arrowBgClasses = {
    primary: "bg-white/20 text-white",
    secondary:
      "bg-black/5 text-neutral-900 dark:bg-white/10 dark:text-white group-hover:bg-[#326BFF] group-hover:text-white transition-colors",
    ghost: "bg-black/5 text-neutral-900 dark:bg-white/10 dark:text-white",
    cyan: "bg-black/15 text-[#090A0F]",
  };

  const content = (
    <>
      {/* Modernist text wrapper */}
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

  const baseClasses = `group inline-flex items-center justify-center rounded-full font-modernist font-medium tracking-normal transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http") || target === "_blank") {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
