import React from "react";

interface NovaSectionHeaderProps {
  eyebrow: string;
  titleStart: string;
  titleHighlight?: string;
  titleEnd?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const NovaSectionHeader: React.FC<NovaSectionHeaderProps> = ({
  eyebrow,
  titleStart,
  titleHighlight,
  titleEnd,
  description,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl flex flex-col items-center" : "max-w-3xl"
      } ${className}`}
    >
      {/* Eyebrow Label: Swiss Modernist Structure */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151821] border border-neutral-300 dark:border-white/[0.08] text-[11px] sm:text-xs uppercase tracking-[0.14em] font-modernist font-semibold text-neutral-700 dark:text-[#A5ADBD] mb-4 shadow-sm backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#24D9FF] shadow-[0_0_8px_#24D9FF] animate-pulse" />
        <span>{eyebrow}</span>
      </div>

      {/* Main Section Heading: Debata Expressive Display Typography */}
      <h2 className="font-debata text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-neutral-950 dark:text-[#F7F8FC] leading-[1.12] mb-4">
        {titleStart}{" "}
        {titleHighlight && (
          <span className="nova-gradient-text">{titleHighlight}</span>
        )}{" "}
        {titleEnd}
      </h2>

      {/* Supporting Subtitle: Modernist Readable Prose */}
      {description && (
        <p className="font-modernist text-base sm:text-lg text-neutral-600 dark:text-[#A5ADBD] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
