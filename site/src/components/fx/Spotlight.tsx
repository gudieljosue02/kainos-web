"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type SpotlightProps = {
  className?: string;
  size?: number;
  color?: string;
};

/**
 * Absolutely positioned layer that paints a soft radial gradient where the
 * cursor is inside the nearest positioned parent. Pointer-events-none.
 */
export function Spotlight({
  className,
  size = 260,
  color = "rgba(79,195,247,0.28)",
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const host = el.parentElement;
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
      el.style.setProperty("--so", "1");
    };
    const onLeave = () => {
      el.style.setProperty("--so", "0");
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500",
        className
      )}
      style={{
        opacity: "var(--so, 0)",
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), ${color}, transparent 70%)`,
        mixBlendMode: "screen",
      }}
    />
  );
}
