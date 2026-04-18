"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type UltrasoundVisualProps = {
  className?: string;
  /**
   * If true, the annotations (bounding boxes, labels) animate on after a short
   * delay — simulating Alethia processing the raw frame. Defaults to true.
   */
  withAnnotations?: boolean;
  /** Scanning beam animation. */
  withScan?: boolean;
};

/**
 * An abstract, ultrasound-themed visual: a cone-shaped sector image with
 * speckle noise, subtle tissue silhouettes, and animated AI annotations
 * (bounding boxes + label pills + crosshair measurements).
 *
 * This is the centerpiece "raw → annotated" visual used across the site.
 */
export function UltrasoundVisual({
  className,
  withAnnotations = true,
  withScan = true,
}: UltrasoundVisualProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem]",
        "bg-[#020509]",
        className
      )}
    >
      {/* Cone/sector mask container */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Radial depth gradient */}
          <radialGradient id="us-depth" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#2a3a55" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#1a2740" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#0a1220" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#020509" stopOpacity="0.2" />
          </radialGradient>

          {/* Sector cone mask */}
          <clipPath id="us-cone">
            <path d="M 200 10 L 370 290 L 30 290 Z" />
          </clipPath>

          {/* Fine noise */}
          <filter id="us-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.8"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix values="0 0 0 0 0.85  0 0 0 0 0.92  0 0 0 0 1  0 0 0 0.55 0" />
          </filter>

          <filter id="us-tissue-blur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>

          <pattern id="us-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 L 0 20"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        {/* Background grid */}
        <rect width="400" height="300" fill="url(#us-grid)" />

        {/* Cone content */}
        <g clipPath="url(#us-cone)">
          <rect width="400" height="300" fill="url(#us-depth)" />
          <rect width="400" height="300" filter="url(#us-noise)" opacity="0.35" />

          {/* Abstract tissue silhouettes — suggest liver/kidney shapes without being medically literal */}
          <g filter="url(#us-tissue-blur)" opacity="0.55">
            <ellipse cx="150" cy="155" rx="62" ry="38" fill="#8fa4c4" opacity="0.3" />
            <ellipse cx="260" cy="180" rx="48" ry="32" fill="#9ab0d0" opacity="0.28" />
            <ellipse cx="200" cy="110" rx="30" ry="18" fill="#b8c8e0" opacity="0.22" />
          </g>

          {/* Scanning beam */}
          {withScan && (
            <g opacity={visible ? 0.9 : 0}>
              <rect
                x="0"
                y="0"
                width="400"
                height="2"
                fill="rgba(79,195,247,0.9)"
                style={{
                  transformOrigin: "200px 0",
                  animation: visible
                    ? "us-scan 3.6s cubic-bezier(0.32,0.72,0,1) infinite"
                    : undefined,
                }}
              />
            </g>
          )}

          {/* Depth tick marks on right edge */}
          <g opacity="0.35">
            {[60, 120, 180, 240].map((y) => (
              <g key={y}>
                <line
                  x1="360"
                  x2="368"
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
                <text
                  x="372"
                  y={y + 3}
                  fontSize="7"
                  fill="rgba(255,255,255,0.6)"
                  fontFamily="monospace"
                >
                  {y / 30}cm
                </text>
              </g>
            ))}
          </g>
        </g>

        {/* Cone outline */}
        <path
          d="M 200 10 L 370 290 L 30 290 Z"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Alethia annotation overlays — HTML, for crisp text */}
      {withAnnotations && (
        <>
          {/* Bounding box 1: Liver */}
          <div
            className={cn(
              "absolute transition-all duration-[900ms]",
              visible ? "opacity-100" : "opacity-0"
            )}
            style={{
              top: "38%",
              left: "20%",
              width: "32%",
              height: "30%",
              transitionDelay: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div className="absolute inset-0 rounded-[4px] border border-[#4fc3f7]/80 shadow-[0_0_0_1px_rgba(79,195,247,0.2)]">
              <span className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-[0.5px] -translate-y-[0.5px] rounded-[1px] bg-[#4fc3f7]" />
              <span className="absolute top-0 right-0 h-1.5 w-1.5 translate-x-[0.5px] -translate-y-[0.5px] rounded-[1px] bg-[#4fc3f7]" />
              <span className="absolute bottom-0 left-0 h-1.5 w-1.5 -translate-x-[0.5px] translate-y-[0.5px] rounded-[1px] bg-[#4fc3f7]" />
              <span className="absolute bottom-0 right-0 h-1.5 w-1.5 translate-x-[0.5px] translate-y-[0.5px] rounded-[1px] bg-[#4fc3f7]" />
            </div>
            <div className="absolute -top-[22px] left-0 flex items-center gap-1.5 rounded-[4px] bg-[#4fc3f7] px-1.5 py-[3px] font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[#041226]">
              <span>Liver</span>
              <span className="opacity-70">· 0.97</span>
            </div>
          </div>

          {/* Bounding box 2: Kidney */}
          <div
            className={cn(
              "absolute transition-all duration-[900ms]",
              visible ? "opacity-100" : "opacity-0"
            )}
            style={{
              top: "48%",
              left: "56%",
              width: "24%",
              height: "22%",
              transitionDelay: "1100ms",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div className="absolute inset-0 rounded-[4px] border border-white/70">
              <span className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-[0.5px] -translate-y-[0.5px] rounded-[1px] bg-white" />
              <span className="absolute top-0 right-0 h-1.5 w-1.5 translate-x-[0.5px] -translate-y-[0.5px] rounded-[1px] bg-white" />
              <span className="absolute bottom-0 left-0 h-1.5 w-1.5 -translate-x-[0.5px] translate-y-[0.5px] rounded-[1px] bg-white" />
              <span className="absolute bottom-0 right-0 h-1.5 w-1.5 translate-x-[0.5px] translate-y-[0.5px] rounded-[1px] bg-white" />
            </div>
            <div className="absolute -top-[22px] left-0 flex items-center gap-1.5 rounded-[4px] bg-white px-1.5 py-[3px] font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[#041226]">
              <span>Kidney R</span>
              <span className="opacity-60">· 0.91</span>
            </div>
          </div>

          {/* Measurement crosshair */}
          <div
            className={cn(
              "absolute transition-all duration-[900ms]",
              visible ? "opacity-100" : "opacity-0"
            )}
            style={{
              top: "28%",
              left: "44%",
              transitionDelay: "1400ms",
            }}
          >
            <div className="relative">
              <span className="absolute -left-3 top-[7px] h-[1px] w-6 bg-white/80" />
              <span className="absolute left-[7px] -top-3 h-6 w-[1px] bg-white/80" />
              <span className="absolute left-[7px] top-[7px] h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4fc3f7]" />
            </div>
            <div className="absolute left-4 top-3 whitespace-nowrap rounded-[3px] bg-black/70 px-1.5 py-0.5 font-mono text-[9px] tracking-tight text-white/90 backdrop-blur-sm">
              6.42 cm
            </div>
          </div>

          {/* Live telemetry strip */}
          <div
            className={cn(
              "absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-md border border-white/10 bg-black/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-[4px] transition-all duration-[800ms]",
              visible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4fc3f7]" />
              Alethia · live
            </span>
            <span className="text-white/50">60 fps · 92 ms</span>
          </div>
        </>
      )}

      {/* Inner hairline */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-white/10" />

      <style jsx>{`
        @keyframes us-scan {
          0% {
            transform: translateY(-4px);
          }
          50% {
            transform: translateY(294px);
          }
          100% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}
