"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type ParallaxLayerProps = {
  children?: React.ReactNode;
  className?: string;
  /** Max translation in px on each axis. */
  strength?: number;
  /** Invert direction — default false (moves with cursor). */
  invert?: boolean;
};

/**
 * Wraps an absolutely-positioned layer and translates it based on cursor
 * position over the page viewport. Used for parallax depth on hero.
 */
export function ParallaxLayer({
  children,
  className,
  strength = 18,
  invert = false,
}: ParallaxLayerProps) {
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
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      if (Math.abs(cx - tx) > 0.05 || Math.abs(cy - ty) > 0.05) {
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      const dir = invert ? -1 : 1;
      tx = nx * strength * dir;
      ty = ny * strength * dir;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [strength, invert]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </div>
  );
}
