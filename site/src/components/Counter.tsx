"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CounterProps = {
  value: string;
  className?: string;
};

/**
 * Renders a string value (e.g. "2/3", "$22.6B", "70%") with a scroll-triggered
 * reveal. Numeric portions first briefly "scramble" through random digits
 * (like a slot machine / medical calibration) before settling by ease-out
 * count-up to the target value.
 */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(value);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\$)?([\d.,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix = "", numberPart, suffix] = match;
    const target = parseFloat(numberPart.replace(/,/g, ""));
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }
    const decimals = (numberPart.split(".")[1] || "").length;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);

            if (reduceMotion) {
              setDisplay(value);
              observer.unobserve(entry.target);
              return;
            }

            const scrambleDur = 420;
            const countDur = 1300;
            const start = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 3);

            const scrambleFrame = (now: number) => {
              const elapsed = now - start;
              if (elapsed < scrambleDur) {
                // Random digits maintaining shape of target number
                const magnitude = Math.pow(10, Math.floor(Math.log10(Math.max(target, 1))) + 1);
                const rand = Math.random() * magnitude;
                const formatted = decimals
                  ? rand.toFixed(decimals)
                  : Math.floor(rand).toLocaleString("en-US");
                setDisplay(`${prefix}${formatted}${suffix}`);
                requestAnimationFrame(scrambleFrame);
              } else {
                const countStart = performance.now();
                const countFrame = (t: number) => {
                  const p = Math.min(1, (t - countStart) / countDur);
                  const current = target * ease(p);
                  const formatted = decimals
                    ? current.toFixed(decimals)
                    : Math.round(current).toLocaleString("en-US");
                  setDisplay(`${prefix}${formatted}${suffix}`);
                  if (p < 1) requestAnimationFrame(countFrame);
                  else setDisplay(value);
                };
                requestAnimationFrame(countFrame);
              }
            };

            requestAnimationFrame(scrambleFrame);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, animated]);

  return (
    <span ref={ref} className={cn("metric tabular-nums", className)}>
      {display}
    </span>
  );
}
