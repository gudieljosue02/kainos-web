"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type TextScrambleProps = {
  text: string;
  className?: string;
  /** Delay before the scramble starts in ms. */
  delay?: number;
  /** Total scramble duration in ms. */
  duration?: number;
  /** Characters used while scrambling. */
  chars?: string;
};

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§±¶∞≈◆▮▯▲▼◇✢✦";

/**
 * Scrambles each character to random glyphs, then resolves to the final
 * string one character at a time — left to right with a soft overlap.
 * Reads naturally, feels like live decoding.
 */
export function TextScramble({
  text,
  className,
  delay = 0,
  duration = 1400,
  chars = DEFAULT_CHARS,
}: TextScrambleProps) {
  // Use non-breaking spaces so layout doesn't collapse during the initial
  // blank phase before the scramble starts.
  const [display, setDisplay] = useState<string>(
    text.split("").map(() => "\u00A0").join("")
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    const startAt = performance.now() + delay;
    let raf = 0;

    const loop = (now: number) => {
      const elapsed = Math.max(0, now - startAt);
      const progress = Math.min(1, elapsed / duration);

      const out = text
        .split("")
        .map((target, i) => {
          if (target === " ") return " ";
          // Each char resolves at progressThreshold based on position
          const threshold = i / text.length;
          if (progress >= threshold + 0.08) return target;
          if (progress < threshold) return "\u00A0";
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(out);
      if (progress < 1) {
        raf = requestAnimationFrame(loop);
      } else {
        setDisplay(text);
      }
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, duration, chars]);

  return (
    <span className={cn("tabular-nums", className)} aria-label={text}>
      {display}
    </span>
  );
}
