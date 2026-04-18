"use client";

import { cn } from "@/lib/cn";

type OrbitalHUDProps = {
  className?: string;
};

/**
 * Concentric ring HUD with orbiting dots. Pairs with a visual as a
 * decorative sonar/radar backdrop. Pure CSS animations.
 */
export function OrbitalHUD({ className }: OrbitalHUDProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div className="relative h-full w-full">
        {/* Rings */}
        {[0.95, 1.15, 1.35, 1.6].map((scale, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 aspect-square rounded-full border border-[#4fc3f7]/10"
            style={{
              width: `${scale * 100}%`,
              transform: "translate(-50%, -50%)",
              borderStyle: i % 2 === 0 ? "solid" : "dashed",
              opacity: 0.25 + i * 0.05,
              animation: `orbital-breath 6s cubic-bezier(0.32,0.72,0,1) ${i * 0.4}s infinite`,
            }}
          />
        ))}

        {/* Orbiting dots on multiple rings */}
        <Orbit size={95} dur={18} delay={0} />
        <Orbit size={115} dur={26} delay={1.2} reverse />
        <Orbit size={135} dur={32} delay={0.6} />

        {/* Crosshair marks */}
        <span className="absolute left-1/2 top-1/2 h-[1px] w-12 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4fc3f7]/30 to-transparent" />
        <span className="absolute left-1/2 top-1/2 h-12 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#4fc3f7]/30 to-transparent" />

        {/* Corner brackets */}
        {[
          "top-3 left-3 border-l border-t",
          "top-3 right-3 border-r border-t",
          "bottom-3 left-3 border-l border-b",
          "bottom-3 right-3 border-r border-b",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute h-4 w-4 border-[#4fc3f7]/30 ${pos}`}
          />
        ))}

        <style jsx>{`
          @keyframes orbital-breath {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.25;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.02);
              opacity: 0.55;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function Orbit({
  size,
  dur,
  delay = 0,
  reverse = false,
}: {
  size: number;
  dur: number;
  delay?: number;
  reverse?: boolean;
}) {
  return (
    <span
      className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: `${size}%`,
        animation: `orbit-spin ${dur}s linear ${delay}s infinite ${reverse ? "reverse" : "normal"}`,
      }}
    >
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4fc3f7] shadow-[0_0_10px_rgba(79,195,247,0.7)]" />
      <style jsx>{`
        @keyframes orbit-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </span>
  );
}
