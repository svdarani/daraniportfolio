"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface ScrambleCharProps {
  char: string;
  activeColor?: string;
  className?: string;
}

const UPPER_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789✦*#";
const LOWER_POOL = "abcdefghijklmnopqrstuvwxyz0123456789";
const SYMBOL_POOL = "&*#%+~✦!$";

export const ScrambleChar: React.FC<ScrambleCharProps> = ({
  char,
  activeColor = "text-[#FFD52A]",
  className = "",
}) => {
  if (char === " ") {
    return <span className="inline-block w-[0.26em]">&nbsp;</span>;
  }

  const [displayChar, setDisplayChar] = useState<string>(char);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomGlyph = useCallback(() => {
    let pool = LOWER_POOL;
    if (char === "&" || SYMBOL_POOL.includes(char)) {
      pool = SYMBOL_POOL;
    } else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      pool = UPPER_POOL;
    }
    const filtered = pool.split("").filter((c) => c !== char);
    return filtered[Math.floor(Math.random() * filtered.length)] || "z";
  }, [char]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setDisplayChar(getRandomGlyph());

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayChar(getRandomGlyph());
    }, 75);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayChar(char);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClicked(true);

    if (intervalRef.current) clearInterval(intervalRef.current);

    let iterations = 0;
    const maxIterations = 7;

    intervalRef.current = setInterval(() => {
      iterations++;
      setDisplayChar(getRandomGlyph());
      if (iterations >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsClicked(false);
        if (!isHovered) {
          setDisplayChar(char);
        }
      }
    }, 38);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const isActive = isHovered || isClicked;

  return (
    <motion.span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{
        y: -3,
        scale: 1.14,
        transition: { type: "spring", stiffness: 450, damping: 18 },
      }}
      whileTap={{
        scale: 0.85,
        transition: { type: "spring", stiffness: 600, damping: 15 },
      }}
      className={`inline-block cursor-pointer select-none transition-colors duration-150 ${className} ${
        isActive
          ? `${activeColor} drop-shadow-[0_0_16px_rgba(255,213,42,0.95)]`
          : "text-white"
      }`}
    >
      {displayChar}
    </motion.span>
  );
};

interface ScrambleHeadlineProps {
  lines: string[];
  activeColor?: string;
  className?: string;
}

export const ScrambleHeadline: React.FC<ScrambleHeadlineProps> = ({
  lines,
  activeColor = "text-[#FFD52A]",
  className = "",
}) => {
  return (
    <h1 className={className}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block whitespace-nowrap leading-[1.02]">
          {Array.from(line).map((char, charIdx) => (
            <ScrambleChar
              key={`${lineIdx}-${charIdx}`}
              char={char}
              activeColor={activeColor}
            />
          ))}
        </span>
      ))}
    </h1>
  );
};

export default ScrambleHeadline;

