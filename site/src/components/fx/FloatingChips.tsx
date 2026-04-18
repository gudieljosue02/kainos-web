"use client";

import { useEffect, useState } from "react";

type Chip = {
  label: string;
  sub: string;
  x: string;
  y: string;
  delay: number;
  accent?: boolean;
};

const CHIPS: Chip[] = [
  { label: "LIVER", sub: "0.97", x: "-8%", y: "18%", delay: 1200, accent: true },
  { label: "KIDNEY R", sub: "0.91", x: "82%", y: "12%", delay: 1500 },
  { label: "AORTA", sub: "0.88", x: "-6%", y: "62%", delay: 1800 },
  { label: "BLEED", sub: "none", x: "84%", y: "70%", delay: 2100 },
  { label: "FAST", sub: "clear", x: "46%", y: "-6%", delay: 2400, accent: true },
];

/**
 * Floating "AI detection" chips arranged around the hero visual. Each
 * fades in with a stagger, then gently drifts. Reinforces the product
 * narrative — Alethia detecting structures in real time.
 */
export function FloatingChips() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
      {CHIPS.map((c, i) => (
        <span
          key={c.label}
          className="absolute"
          style={{
            left: c.x,
            top: c.y,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translate3d(0,0,0) scale(1)" : "translate3d(0,8px,0) scale(0.9)",
            transition: `opacity 800ms cubic-bezier(0.16,1,0.3,1) ${c.delay}ms, transform 800ms cubic-bezier(0.16,1,0.3,1) ${c.delay}ms`,
            animation: mounted ? `chip-float 5s cubic-bezier(0.32,0.72,0,1) ${i * 600}ms infinite` : undefined,
          }}
        >
          <span
            className={`flex items-center gap-1.5 rounded-[4px] border px-1.5 py-[3px] font-mono text-[9px] font-semibold uppercase tracking-[0.14em] backdrop-blur-[6px] ${
              c.accent
                ? "border-[#4fc3f7]/60 bg-[#4fc3f7]/90 text-[#041226]"
                : "border-white/30 bg-black/50 text-white/85"
            }`}
          >
            <span>{c.label}</span>
            <span className="opacity-70">· {c.sub}</span>
          </span>
          {/* Connector dot */}
          <span
            className={`absolute -left-1 top-1/2 h-1 w-1 -translate-x-full -translate-y-1/2 rounded-full ${
              c.accent ? "bg-[#4fc3f7]" : "bg-white/50"
            }`}
          />
        </span>
      ))}
      <style jsx>{`
        @keyframes chip-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -4px, 0);
          }
        }
      `}</style>
    </div>
  );
}
