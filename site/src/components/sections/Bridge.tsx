"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { UltrasoundVisual } from "@/components/UltrasoundVisual";
import { Waveform, Cpu, Monitor, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ScanReveal } from "@/components/fx/ScanReveal";

export function Bridge() {
  const { t } = useLocale();

  return (
    <section id="bridge" className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.bridge.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              {t.bridge.title}
              <br />
              <ScanReveal text={t.bridge.titleHighlight} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-2xl text-[13.5px] md:mt-7 md:text-lg">
                {t.bridge.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Mobile flow (icon-only, no heavy visuals) ── */}
        <Reveal delay={200}>
          <div className="mt-5 md:hidden">
            <MobileFlow />
          </div>
        </Reveal>

        {/* ── Desktop 3-panel diagram ── */}
        <Reveal delay={200}>
          <div className="mt-20 hidden shell md:block">
            <div className="shell-inner overflow-hidden rounded-[inherit]">
              <div className="grid grid-cols-[1fr_160px_1fr] lg:grid-cols-[1fr_180px_1fr]">
                <RawInputPanel />
                <ProcessorStrip />
                <OutputPanel />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Step detail cards */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-3 md:gap-6">
          {t.bridge.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <article className="relative h-full overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/50 p-4 transition-all duration-500 hover:bg-bg-elev-1 md:rounded-[1.25rem] md:p-7 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {step.number}
                </div>
                <h3 className="mt-2 text-[14px] font-medium tracking-tight text-fg md:mt-4 md:text-xl">
                  {step.title}
                </h3>
                <p className="text-body mt-1.5 text-[12px] md:mt-3 md:text-[14.5px]">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mobile icon flow ─────────────────────────────────────── */
const FLOW_STEPS = [
  {
    icon: Waveform,
    num: "01",
    label: "Source",
    title: "Legacy Ultrasound",
    sub: "Any machine · VGA/DVI out",
    accent: false,
    badge: { color: "text-amber-400", dot: "bg-amber-400", text: "No AI" },
  },
  {
    icon: Cpu,
    num: "02",
    label: "Bridge",
    title: "Alethia Kit",
    sub: "Capture + tablet + model",
    accent: true,
    badge: { color: "text-[#4fc3f7]", dot: "bg-[#4fc3f7]", text: "Processing" },
  },
  {
    icon: Monitor,
    num: "03",
    label: "Output",
    title: "Live Assisted Diagnosis",
    sub: "Overlays · alerts · measurements",
    accent: false,
    badge: { color: "text-emerald-400", dot: "bg-emerald-400", text: "AI Live" },
  },
] as const;

function MobileFlow() {
  return (
    <div className="overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/60">
      {FLOW_STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.num}>
            <div className={`flex items-center gap-3 p-4 ${step.accent ? "bg-[#4fc3f7]/[0.04]" : ""}`}>
              {/* Icon */}
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                step.accent
                  ? "border-[#4fc3f7]/40 bg-[#4fc3f7]/10 text-[#4fc3f7] shadow-[0_0_16px_rgba(79,195,247,0.15)]"
                  : "border-hairline bg-white/[0.03] text-fg-dim"
              }`}>
                <Icon size={18} weight="light" />
              </span>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-fg-mute">
                  {step.num} · {step.label}
                </div>
                <div className="mt-0.5 text-[13.5px] font-medium leading-tight tracking-tight text-fg">
                  {step.title}
                </div>
                <div className="mt-0.5 text-[11px] text-fg-mute">{step.sub}</div>
              </div>

              {/* Badge */}
              <div className={`flex shrink-0 items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] ${step.badge.color}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${step.badge.dot} ${step.accent ? "animate-pulse" : ""}`} />
                {step.badge.text}
              </div>
            </div>

            {/* Arrow divider between steps */}
            {i < FLOW_STEPS.length - 1 && (
              <div className="flex items-center gap-3 border-t border-hairline/50 px-4 py-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <ArrowDown size={14} className="text-[#4fc3f7]/50" />
                </div>
                <div className="relative h-[1px] flex-1 overflow-hidden bg-hairline/50">
                  <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#4fc3f7]/60 to-transparent [animation:flow-line_2s_linear_infinite]" />
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#4fc3f7]/60">
                  {i === 0 ? "Capture" : "Render"}
                </span>
              </div>
            )}
          </div>
        );
      })}
      <style jsx>{`
        @keyframes flow-line {
          from { transform: translateX(-100%); }
          to   { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}

/* ── Desktop Panel 1: Raw CRT input ──────────────────────── */
function RawInputPanel() {
  return (
    <div className="relative flex flex-col border-r border-hairline/60 bg-[#04080f]">
      <div className="flex items-center gap-2 border-b border-hairline/40 px-5 py-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40">
          <Waveform size={11} weight="light" />
        </span>
        <div>
          <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/35">01 · Source</div>
          <div className="text-[11px] font-medium leading-tight text-white/60">Legacy Ultrasound</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-amber-500/70">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500/70" />
          No AI
        </div>
      </div>
      <div className="relative min-h-[300px] flex-1 p-5">
        <CrtDisplay />
      </div>
      <div className="border-t border-hairline/40 px-5 py-2">
        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
          <span>VGA / DVI out</span>
          <span>Any machine</span>
        </div>
      </div>
    </div>
  );
}

/* ── Desktop Center: Alethia processor strip ─────────────── */
function ProcessorStrip() {
  return (
    <div className="relative flex flex-col items-center justify-between border-r border-hairline/60 bg-gradient-to-b from-[#061326] via-[#071a38] to-[#061326]">
      <div className="flex w-full flex-1 flex-col items-center justify-between px-3 py-5">
        <div className="flex flex-col items-center gap-1">
          <span className="h-8 w-[1px] bg-gradient-to-b from-transparent via-[#4fc3f7]/40 to-[#4fc3f7]/70" />
          <ArrowDown size={12} className="text-[#4fc3f7]/70" />
        </div>
        <div className="flex w-full flex-col items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4fc3f7]/40 bg-[#4fc3f7]/10 text-[#4fc3f7] shadow-[0_0_24px_rgba(79,195,247,0.15)]">
            <Cpu size={18} weight="light" />
          </span>
          <div className="text-center">
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">02 · Bridge</div>
            <div className="mt-0.5 text-[11px] font-semibold tracking-tight text-[#4fc3f7]/90">Alethia Kit</div>
          </div>
          <div className="w-full space-y-1.5 px-1">
            {["INGEST", "INFER", "EMIT"].map((label, i) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="w-[32px] text-right font-mono text-[7px] uppercase tracking-[0.15em] text-white/30">{label}</span>
                <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/5">
                  <span
                    className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#4fc3f7] to-transparent"
                    style={{ animation: `pipe-flow 2s linear infinite`, animationDelay: `${i * 320}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid w-full grid-cols-4 gap-1 px-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="h-2 rounded-[2px] bg-gradient-to-b from-[#4fc3f7]/30 to-[#4fc3f7]/5"
                style={{ animation: `tile-pulse 2.4s ease-in-out infinite`, animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
          <div className="w-full rounded-[6px] border border-[#4fc3f7]/20 bg-[#4fc3f7]/5 px-2 py-1.5 text-center font-mono text-[8px] uppercase tracking-[0.2em] text-[#4fc3f7]/60">
            alethia · v0.9
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ArrowDown size={12} className="text-[#4fc3f7]/70" />
          <span className="h-8 w-[1px] bg-gradient-to-b from-[#4fc3f7]/70 via-[#4fc3f7]/40 to-transparent" />
        </div>
      </div>
      <style jsx>{`
        @keyframes pipe-flow { from { transform: translateX(-120%); } to { transform: translateX(280%); } }
        @keyframes tile-pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.85; } }
      `}</style>
    </div>
  );
}

/* ── Desktop Panel 3: AI output ──────────────────────────── */
function OutputPanel() {
  return (
    <div className="relative flex flex-col bg-[#020509]">
      <div className="flex items-center gap-2 border-b border-hairline/40 px-5 py-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#4fc3f7]/30 bg-[#4fc3f7]/10 text-[#4fc3f7]">
          <Monitor size={11} weight="light" />
        </span>
        <div>
          <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/35">03 · Output</div>
          <div className="text-[11px] font-medium leading-tight text-white/80">Live Assisted Diagnosis</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-[#4fc3f7]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4fc3f7]" />
          AI Live
        </div>
      </div>
      <div className="relative min-h-[300px] flex-1 p-5">
        <UltrasoundVisual className="h-full min-h-[272px] rounded-xl" withScan withAnnotations />
      </div>
      <div className="border-t border-hairline/40 px-5 py-2">
        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
          <span>Overlays · Alerts</span>
          <span>Measurements</span>
        </div>
      </div>
    </div>
  );
}

/* ── CRT legacy display (desktop only) ───────────────────── */
function CrtDisplay() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setOn(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-[#060b12]">
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.07] [background-image:repeating-linear-gradient(0deg,white_0,white_1px,transparent_1px,transparent_3px)]" />
      <div className="pointer-events-none absolute inset-0 z-10 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 mix-blend-screen opacity-30 [background:repeating-linear-gradient(0deg,rgba(79,195,247,0.04)_0,rgba(79,195,247,0.04)_1px,transparent_1px,transparent_2px)]" />
      {on && (
        <span className="pointer-events-none absolute inset-x-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent [animation:crt-tear_6s_cubic-bezier(0.32,0.72,0,1)_infinite]" />
      )}
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="crt-depth" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#4a5a70" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#2a3a55" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#0d1820" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#030608" stopOpacity="0.1" />
          </radialGradient>
          <clipPath id="crt-cone"><path d="M 200 10 L 370 290 L 30 290 Z" /></clipPath>
          <filter id="crt-noise">
            <feTurbulence type="fractalNoise" baseFrequency="2.2" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0.7  0 0 0 0 0.82  0 0 0 0 1  0 0 0 0.65 0" />
          </filter>
          <filter id="crt-blur"><feGaussianBlur stdDeviation="4" /></filter>
          <pattern id="crt-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 L 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#crt-grid)" />
        <g clipPath="url(#crt-cone)">
          <rect width="400" height="300" fill="url(#crt-depth)" />
          <rect width="400" height="300" filter="url(#crt-noise)" opacity="0.55" />
          <g filter="url(#crt-blur)" opacity="0.4">
            <ellipse cx="145" cy="160" rx="65" ry="40" fill="#7090b0" opacity="0.4" />
            <ellipse cx="255" cy="185" rx="50" ry="34" fill="#8090a8" opacity="0.35" />
            <ellipse cx="195" cy="115" rx="32" ry="20" fill="#a0b0c8" opacity="0.28" />
          </g>
          <g opacity="0.25">
            {[60, 120, 180, 240].map((y) => (
              <g key={y}>
                <line x1="358" x2="366" y1={y} y2={y} stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <text x="370" y={y + 3} fontSize="7" fill="rgba(255,255,255,0.5)" fontFamily="monospace">{y / 30}cm</text>
              </g>
            ))}
          </g>
        </g>
        <path d="M 200 10 L 370 290 L 30 290 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      </svg>
      <div className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between rounded-md border border-white/[0.06] bg-black/60 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35 backdrop-blur-[2px]">
        <span>RGB out · 640×480</span>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 animate-pulse rounded-full bg-amber-500/60" />
          No overlay
        </span>
      </div>
      <style jsx>{`
        @keyframes crt-tear {
          0%, 85%, 100% { transform: translateY(-4px); opacity: 0; }
          86% { transform: translateY(8%); opacity: 0.7; }
          90% { transform: translateY(38%); opacity: 0.8; }
          94% { transform: translateY(76%); opacity: 0.5; }
          97% { transform: translateY(110%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
