"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CounterProps = {
  value: string;
  className?: string;
};

/**
 * Renders a string value (e.g. "2/3", "$22.6B", "70%") with a scroll-triggered
 * ease-out count-up on the numeric portion. Non-numeric values render as-is.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // null → show the raw value (SSR-safe); string → animation frame output
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\$)?([\d.,]+)(.*)$/);
    if (!match) return;

    const [, prefix = "", numberPart, suffix] = match;
    const target = parseFloat(numberPart.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;
    const decimals = (numberPart.split(".")[1] || "").length;

    if (typeof IntersectionObserver === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          if (reduceMotion) return;

          const countDur = 1400;
          const start = performance.now();
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);

          const frame = (now: number) => {
            const p = Math.min(1, (now - start) / countDur);
            const current = target * ease(p);
            const formatted = decimals
              ? current.toFixed(decimals)
              : Math.round(current).toLocaleString("en-US");
            setDisplay(p < 1 ? `${prefix}${formatted}${suffix}` : value);
            if (p < 1) rafId = requestAnimationFrame(frame);
          };

          rafId = requestAnimationFrame(frame);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [value]);

  return (
    <span ref={ref} className={cn("metric tabular-nums", className)}>
      {display ?? value}
    </span>
  );
}
