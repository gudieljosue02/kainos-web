"use client";

import { cn } from "@/lib/cn";

type SectorScanProps = {
  labels: {
    liver: string;
    kidneys: string;
  };
  className?: string;
};

/**
 * The hero instrument: an ultrasound sector rendered as a precise,
 * ink-on-paper technical diagram. Hairline wedge, dashed depth arcs,
 * annotated structures, and a slow sweeping scan line — reads as a
 * calibrated medical instrument, not a sci-fi console.
 */
export function SectorScan({ labels, className }: SectorScanProps) {
  return (
    <figure className={cn("border border-hairline-strong bg-card", className)}>
      {/* Instrument header strip */}
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <span className="t-label flex items-center gap-2 !text-ink">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{ animation: "blink-soft 2.6s var(--ease-in-out) infinite" }}
          />
          Alethia
        </span>
        <span className="t-label">B-mode · sector</span>
      </div>

      <svg
        viewBox="0 0 480 320"
        className="block w-full"
        role="img"
        aria-label="Annotated ultrasound sector diagram"
      >
        <defs>
          <linearGradient id="ss-sweep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="ss-wedge">
            <path d="M 240 24 L 82 278 A 304 304 0 0 0 398 278 Z" />
          </clipPath>
          <filter id="ss-speckle">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0.04  0 0 0 0 0.08  0 0 0 0 0.16  0 0 0 0.5 0" />
          </filter>
        </defs>

        {/* Speckle texture inside the wedge */}
        <g clipPath="url(#ss-wedge)">
          <rect width="480" height="320" filter="url(#ss-speckle)" opacity="0.08" />
        </g>

        {/* Depth arcs (dashed) */}
        <g fill="none" stroke="var(--hairline)" strokeWidth="1" strokeDasharray="2 5">
          <path d="M 189 106 A 97 97 0 0 0 291 106" />
          <path d="M 154 162 A 163 163 0 0 0 326 162" />
          <path d="M 118 219 A 229 229 0 0 0 362 219" />
        </g>

        {/* Sweeping scan line */}
        <g
          className="sector-sweep-line"
          style={{
            transformOrigin: "240px 24px",
            animation: "sector-sweep 9s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
          }}
        >
          <path d="M 240 24 L 224 300 L 256 300 Z" fill="var(--accent)" opacity="0.05" />
          <line x1="240" y1="24" x2="240" y2="308" stroke="url(#ss-sweep)" strokeWidth="1.5" />
        </g>

        {/* Wedge outline (drawn above the sweep) */}
        <path
          d="M 240 24 L 82 278 A 304 304 0 0 0 398 278 Z"
          fill="none"
          stroke="var(--hairline-strong)"
          strokeWidth="1"
        />

        {/* Depth ticks */}
        <g stroke="var(--hairline-strong)" strokeWidth="1">
          <line x1="408" y1="106" x2="416" y2="106" />
          <line x1="408" y1="162" x2="416" y2="162" />
          <line x1="408" y1="219" x2="416" y2="219" />
          <line x1="408" y1="278" x2="416" y2="278" />
        </g>
        <g
          fill="var(--ink-mute)"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="0.08em"
        >
          <text x="421" y="109">3</text>
          <text x="421" y="281">12 cm</text>
        </g>

        {/* Detected structure — liver */}
        <path
          d="M 138 182 C 143 156, 196 146, 220 166 C 240 182, 233 212, 205 220 C 172 229, 133 210, 138 182 Z"
          fill="var(--accent)"
          fillOpacity="0.04"
          stroke="var(--ink-dim)"
          strokeWidth="1"
          strokeDasharray="4 4"
          style={{ animation: "dash-crawl 2.6s linear infinite" }}
        />
        {/* Corner brackets */}
        <g fill="none" stroke="var(--accent)" strokeWidth="1.25">
          <path d="M 128 152 h 9 M 128 152 v 9" />
          <path d="M 244 152 h -9 M 244 152 v 9" />
          <path d="M 128 228 h 9 M 128 228 v -9" />
          <path d="M 244 228 h -9 M 244 228 v -9" />
        </g>

        {/* Detected structure — kidney */}
        <path
          d="M 276 212 C 278 194, 300 186, 320 196 C 340 206, 341 232, 320 240 C 299 248, 274 232, 276 212 Z"
          fill="none"
          stroke="var(--ink-dim)"
          strokeWidth="1"
          strokeDasharray="4 4"
          style={{ animation: "dash-crawl 2.6s linear infinite" }}
        />

        {/* Leader lines + labels */}
        <g stroke="var(--hairline-strong)" strokeWidth="1" fill="none">
          <polyline points="150,168 118,136 96,136" />
          <polyline points="330,204 360,172 384,172" />
        </g>
        <g fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="0.1em">
          <text x="20" y="139" fill="var(--ink)">
            {labels.liver}
          </text>
          <text x="20" y="152" fill="var(--ink-mute)">
            0.97
          </text>
          <text x="388" y="167" fill="var(--ink)">
            {labels.kidneys}
          </text>
          <text x="388" y="180" fill="var(--ink-mute)">
            0.91
          </text>
        </g>

        {/* Measurement crosshair */}
        <g stroke="var(--ink)" strokeWidth="1">
          <line x1="252" y1="128" x2="272" y2="128" />
          <line x1="262" y1="118" x2="262" y2="138" />
        </g>
        <circle cx="262" cy="128" r="2" fill="var(--accent)" />
        <text
          x="278"
          y="124"
          fontFamily="var(--font-mono)"
          fontSize="9.5"
          letterSpacing="0.06em"
          fill="var(--ink-dim)"
        >
          6.42 cm
        </text>
      </svg>

      {/* ECG trace + telemetry footer */}
      <div className="border-t border-hairline">
        <svg viewBox="0 0 480 26" preserveAspectRatio="none" className="block h-[26px] w-full" aria-hidden>
          <path
            className="ecg-path"
            d="M0 13 H56 L62 13 L66 4 L70 21 L74 13 H136 L142 13 L146 4 L150 21 L154 13 H216 L222 13 L226 4 L230 21 L234 13 H296 L302 13 L306 4 L310 21 L314 13 H376 L382 13 L386 4 L390 21 L394 13 H480"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.25"
            strokeDasharray="240"
            style={{ animation: "ecg-draw 4s linear infinite" }}
          />
        </svg>
        <div className="flex items-center justify-between border-t border-hairline px-4 py-2.5">
          <span className="t-label">FAST · OB · ABD</span>
          <span className="t-label">60 fps · &lt;100 ms</span>
        </div>
      </div>
    </figure>
  );
}
