"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export interface DockNavItem {
  id: string;
  title: string;
  href: string;
  isAvatar?: boolean;
  avatarSrc?: string;
  icon?: React.ReactNode;
}

const dockItems: DockNavItem[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 10.5C3.5 9.8 3.9 9.1 4.5 8.7L11.2 3.5C11.7 3.1 12.3 3.1 12.8 3.5L19.5 8.7C20.1 9.1 20.5 9.8 20.5 10.5V18.5C20.5 19.9 19.4 21 18 21H6C4.6 21 3.5 19.9 3.5 18.5V10.5Z" />
        <line x1="12" y1="16" x2="12" y2="18" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    id: "skills",
    title: "Skills",
    href: "/skills",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.267-8-12.356-8-5.096 0-5.096 8 0 8 5.09 0 7.261-8 12.356-8z" />
      </svg>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    href: "/experience",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="14" rx="3" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: "about",
    title: "About",
    href: "/about",
    isAvatar: true,
    avatarSrc: "/images/darani-avatar.png",
  },
  {
    id: "projects",
    title: "Projects",
    href: "/projects",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "resume",
    title: "Resume",
    href: "/resume",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export const BottomDock: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mouseX = useMotionValue(Infinity);
  const pathname = usePathname();

  return (
    <div className={`fixed bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto ${className}`}>
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        role="navigation"
        aria-label="Bottom Dock Navigation"
        className="flex items-end gap-2 md:gap-2.5 px-3.5 pb-2.5 pt-2.5 rounded-full bg-[#141517]/95 backdrop-blur-xl border border-white/15 shadow-[0_14px_45px_rgba(0,0,0,0.65),0_2px_8px_rgba(0,0,0,0.4)] select-none h-[60px]"
      >
        {dockItems.map((item) => (
          <DockIconItem
            key={item.id}
            mouseX={mouseX}
            item={item}
            pathname={pathname}
          />
        ))}
      </motion.nav>
    </div>
  );
};

function DockIconItem({
  mouseX,
  item,
  pathname,
}: {
  mouseX: MotionValue;
  item: DockNavItem;
  pathname: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-140, 0, 140], [42, 76, 42]);
  const heightTransform = useTransform(distance, [-140, 0, 140], [42, 76, 42]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 380,
    damping: 18,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 380,
    damping: 18,
  });

  const iconScaleTransform = useTransform(distance, [-140, 0, 140], [1, 1.45, 1]);
  const iconScale = useSpring(iconScaleTransform, {
    mass: 0.1,
    stiffness: 380,
    damping: 18,
  });

  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));

  return (
    <div
      ref={ref}
      className="relative flex items-end justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 4, x: "-50%" }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#2b2c31] border border-white/10 text-[12px] font-medium tracking-wide text-white whitespace-nowrap shadow-lg pointer-events-none z-50 select-none"
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href={item.href}
        className="outline-none block"
        aria-label={item.title}
      >
        {item.isAvatar ? (
          <motion.div
            style={{ width, height }}
            whileTap={{ scale: 0.92 }}
            className={`relative rounded-full overflow-hidden flex items-center justify-center transition-shadow duration-200 ${
              isActive
                ? "ring-2 ring-white shadow-[0_0_16px_rgba(34,211,238,0.5)]"
                : "ring-1 ring-white/20 hover:ring-2 hover:ring-white/70"
            }`}
          >
            <Image
              src={item.avatarSrc || "/images/darani-avatar.png"}
              alt="Darani Avatar"
              fill
              sizes="80px"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        ) : (
          <motion.div
            style={{ width, height }}
            whileTap={{ scale: 0.92 }}
            className={`rounded-full flex items-center justify-center transition-colors duration-200 ${
              isActive
                ? "bg-white/[0.22] text-white ring-1 ring-white/40 shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                : "bg-[#25262a] text-neutral-200 hover:text-white hover:bg-[#2e2f35]"
            }`}
          >
            <motion.div
              style={{ scale: iconScale }}
              className="flex items-center justify-center"
            >
              {item.icon}
            </motion.div>
          </motion.div>
        )}
      </Link>
    </div>
  );
}

export default BottomDock;
