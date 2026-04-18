"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Metric = {
  label: string;
  getValue: () => string;
};

/**
 * Monospace ticker that cycles live-looking inference metrics.
 * FPS wiggles around 60, latency around ~90ms, confidence around 0.9x.
 * Pure visual flair — communicates "running model" feel.
 */
export function LiveTicker({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = window.setInterval(() => setTick((v) => v + 1), 720);
    return () => window.clearInterval(id);
  }, []);

  const metrics: Metric[] = [
    {
      label: "FPS",
      getValue: () => `${58 + ((tick * 7919) % 7)}`,
    },
    {
      label: "LAT",
      getValue: () => `${84 + ((tick * 3643) % 16)} ms`,
    },
    {
      label: "CONF",
      getValue: () => `0.${91 + ((tick * 5021) % 8)}`,
    },
    {
      label: "GPU",
      getValue: () => `${41 + ((tick * 2677) % 9)} %`,
    },
  ];

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-xl",
        className
      )}
    >
      <span className="flex items-center gap-1.5 text-[#4fc3f7]">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#4fc3f7] opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4fc3f7]" />
        </span>
        LIVE
      </span>
      {metrics.map((m) => (
        <span key={m.label} className="flex items-baseline gap-1 tabular-nums">
          <span className="text-white/40">{m.label}</span>
          <span className="text-white/90">{m.getValue()}</span>
        </span>
      ))}
    </div>
  );
}
