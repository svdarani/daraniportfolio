"use client";

import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * High-performance smooth scroll wrapper.
 * By avoiding JavaScript scroll hijacking (Lenis), native hardware-accelerated
 * browser scrolling runs on the compositor thread with zero frame drops or input lag.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}

