"use client";

import { useEffect, useRef } from "react";

type MagneticProps = {
  children: React.ReactNode;
  /** Radius in px from element center where the magnet engages. */
  radius?: number;
  /** How strongly the element pulls toward the cursor (0 = none, 1 = full). */
  strength?: number;
  className?: string;
};

/**
 * Wraps a child element so that, within a radius, the element translates
 * toward the cursor. On leave, it springs back with easing. Disabled for
 * users that prefer reduced motion and for coarse pointers (touch).
 */
export function Magnetic({
  children,
  radius = 80,
  strength = 0.18,
  className,
}: MagneticProps) {
  const hostRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarse) return;

    const target = host.firstElementChild as HTMLElement | null;
    if (!target) return;

    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        targetX = dx * strength;
        targetY = dy * strength;
      } else {
        targetX = 0;
        targetY = 0;
      }
      tick();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      tick();
    };

    const tick = () => {
      cancelAnimationFrame(raf);
      const loop = () => {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        target.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
        if (Math.abs(currentX - targetX) > 0.05 || Math.abs(currentY - targetY) > 0.05) {
          raf = requestAnimationFrame(loop);
        }
      };
      raf = requestAnimationFrame(loop);
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [radius, strength]);

  return (
    <span ref={hostRef} className={className} style={{ display: "inline-flex" }}>
      {children}
    </span>
  );
}
