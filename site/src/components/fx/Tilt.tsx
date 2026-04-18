"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type TiltProps = {
  children: React.ReactNode;
  /** Max tilt in degrees on each axis. */
  max?: number;
  /** Perspective depth (lower = more dramatic). */
  perspective?: number;
  /** Smoothing (0..1). Lower = snappier. */
  ease?: number;
  className?: string;
};

/**
 * 3D perspective tilt driven by cursor position over the element.
 * Emits --tilt-x and --tilt-y CSS custom properties (normalized -1..1)
 * so children can react with parallax.
 */
export function Tilt({
  children,
  max = 8,
  perspective = 1200,
  ease = 0.12,
  className,
}: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarse) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const loop = () => {
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;
      el.style.setProperty("--tilt-x", cx.toFixed(4));
      el.style.setProperty("--tilt-y", cy.toFixed(4));
      el.style.transform = `perspective(${perspective}px) rotateX(${(-cy * max).toFixed(3)}deg) rotateY(${(cx * max).toFixed(3)}deg)`;
      if (Math.abs(cx - tx) > 0.002 || Math.abs(cy - ty) > 0.002) {
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ease, max, perspective]);

  return (
    <div
      ref={ref}
      className={cn("relative will-change-transform transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]", className)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
