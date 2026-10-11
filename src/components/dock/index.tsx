"use client";

import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  glowColor?: string;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-3 inset-x-0 flex flex-col gap-2.5 items-center"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  scale: 0.9,
                  transition: { delay: idx * 0.04 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.04 }}
              >
                <Link
                  href={item.href}
                  className="relative group h-12 w-12 rounded-full flex items-center justify-center backdrop-blur-xl bg-gradient-to-b from-white/80 via-white/50 to-white/25 dark:from-white/[0.18] dark:via-white/[0.08] dark:to-white/[0.02] border border-white/80 dark:border-white/20 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_-1.5px_2px_rgba(0,0,0,0.05),0_8px_20px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-1.5px_2px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.6)] active:scale-90 transition-transform text-neutral-800 dark:text-neutral-100"
                >
                  {/* Top Specular Crescent */}
                  <div className="absolute inset-x-1.5 top-0.5 h-[46%] rounded-t-full bg-gradient-to-b from-white/70 dark:from-white/35 to-transparent pointer-events-none opacity-80" />
                  <div className="relative z-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="relative group h-12 w-12 rounded-full flex items-center justify-center backdrop-blur-xl bg-gradient-to-b from-white/85 via-white/55 to-white/30 dark:from-white/[0.22] dark:via-white/[0.1] dark:to-white/[0.04] border border-white/80 dark:border-white/25 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),0_10px_25px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),0_12px_28px_rgba(0,0,0,0.6)] active:scale-90 transition-transform"
        aria-label="Toggle Navigation Dock"
      >
        <div className="absolute inset-x-1.5 top-0.5 h-[46%] rounded-t-full bg-gradient-to-b from-white/70 dark:from-white/35 to-transparent pointer-events-none opacity-80" />
        <IconLayoutNavbarCollapse className="relative z-10 h-5 w-5 text-neutral-800 dark:text-neutral-100 transition-transform group-active:scale-95" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-[76px] gap-3 items-end rounded-full bg-white/60 dark:bg-neutral-950/50 border border-white/60 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-2xl px-3.5 pb-3 max-w-screen-md transition-colors",
        className
      )}
      style={{ width: "fit-content" }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  glowColor,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 24, y: 24 });
  const [isPointerInside, setIsPointerInside] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [44, 76, 44]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [44, 76, 44]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 400,
    damping: 14,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 400,
    damping: 14,
  });

  const iconScaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.4, 1]);
  const iconScale = useSpring(iconScaleTransform, {
    mass: 0.1,
    stiffness: 400,
    damping: 14,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative">
      <Link href={href} className="outline-none block">
        <motion.div
          ref={ref}
          style={{ width, height }}
          onMouseEnter={() => {
            setHovered(true);
            setIsPointerInside(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
            setIsPointerInside(false);
          }}
          onMouseMove={handleMouseMove}
          whileTap={{ scale: 0.88, y: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="relative group flex items-center justify-center rounded-full cursor-pointer select-none"
        >
          {/* Ambient Glow Aura */}
          <div
            className={cn(
              "absolute -inset-1.5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10",
              glowColor || "bg-indigo-500/25 dark:bg-indigo-400/35"
            )}
          />

          {/* Frosted Glass Body */}
          <div
            className="absolute inset-0 rounded-full backdrop-blur-xl transition-all duration-300
              bg-gradient-to-b from-white/80 via-white/45 to-white/25
              dark:from-white/[0.18] dark:via-white/[0.08] dark:to-white/[0.02]
              border border-white/80 dark:border-white/20
              group-hover:border-white dark:group-hover:border-white/50
              shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(0,0,0,0.06),0_6px_18px_-2px_rgba(0,0,0,0.08),0_2px_5px_rgba(0,0,0,0.04)]
              dark:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-1.5px_2px_rgba(0,0,0,0.5),0_10px_25px_-4px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.3)]
              group-hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_0_22px_rgba(99,102,241,0.25),0_12px_28px_rgba(0,0,0,0.14)]
              dark:group-hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.6),0_0_25px_rgba(129,140,248,0.4),0_14px_30px_rgba(0,0,0,0.7)]
            "
          />

          {/* Top Specular Crescent Lens Reflection */}
          <div className="absolute inset-x-1.5 top-0.5 h-[46%] rounded-t-full bg-gradient-to-b from-white/70 dark:from-white/35 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-200" />

          {/* Interactive Mouse Spotlight Glare */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-200"
            style={{
              opacity: isPointerInside ? 1 : 0,
              background: `radial-gradient(circle 35px at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 50%, transparent 80%)`,
            }}
          />

          {/* Icon Render */}
          <motion.div
            style={{ scale: iconScale }}
            className="relative z-10 flex items-center justify-center text-neutral-800 dark:text-neutral-100 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] group-hover:text-indigo-600 dark:group-hover:text-white"
          >
            {icon}
          </motion.div>
        </motion.div>
      </Link>

      {/* Floating Glassmorphic Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.92 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 -top-11 w-fit text-[11px] font-semibold tracking-wider text-neutral-800 dark:text-neutral-100 px-3 py-1 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-white/60 dark:border-white/15 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] pointer-events-none whitespace-nowrap z-50 uppercase"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
