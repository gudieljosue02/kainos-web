"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { UltrasoundVisual } from "@/components/UltrasoundVisual";
import { Monitor, ArrowRight, Cpu, Waveform } from "@phosphor-icons/react/dist/ssr";
import { ScanReveal } from "@/components/fx/ScanReveal";

export function Bridge() {
  const { t } = useLocale();

  return (
    <section
      id="bridge"
      className="relative isolate overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                {t.bridge.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[2.25rem] sm:text-5xl md:text-6xl">
              {t.bridge.title}
              <br />
              <ScanReveal text={t.bridge.titleHighlight} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-7 max-w-2xl text-lg">{t.bridge.body}</p>
            </Reveal>
          </div>
        </div>

        {/* Flow diagram — horizontal on desktop, stacked on mobile */}
        <Reveal delay={200}>
          <div className="mt-20 shell">
            <div className="shell-inner p-6 md:p-10">
              <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                {/* Node 1: Legacy ultrasound */}
                <BridgeNode
                  icon={<Waveform size={20} weight="light" />}
                  label="01 · Source"
                  title="Legacy ultrasound"
                  sub="Any machine · VGA/DVI/composite out"
                >
                  <LegacyDisplay />
                </BridgeNode>

                <Arrow />

                {/* Node 2: Capture + Alethia */}
                <BridgeNode
                  icon={<Cpu size={20} weight="light" />}
                  label="02 · Bridge"
                  title="Alethia Kit"
                  sub="Capture + tablet + model"
                  featured
                >
                  <AlethiaPipe />
                </BridgeNode>

                <Arrow />

                {/* Node 3: Annotated output */}
                <BridgeNode
                  icon={<Monitor size={20} weight="light" />}
                  label="03 · Output"
                  title="Live assisted diagnosis"
                  sub="Overlays · alerts · measurements"
                >
                  <UltrasoundVisual className="h-full" withScan={false} />
                </BridgeNode>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3-step detail cards below */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.bridge.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <article className="relative h-full overflow-hidden rounded-[1.25rem] border border-hairline bg-bg-elev-1/50 p-7 transition-all duration-500 hover:bg-bg-elev-1 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <div className="metric text-[11px] uppercase tracking-[0.22em] text-accent">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-fg">
                  {step.title}
                </h3>
                <p className="text-body mt-3 text-[14.5px]">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BridgeNode({
  icon,
  label,
  title,
  sub,
  children,
  featured = false,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  sub: string;
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[1rem] border bg-bg-elev-2/80 p-5 transition-colors ${
        featured
          ? "border-[#4fc3f7]/30 shadow-[0_0_0_1px_rgba(79,195,247,0.08),0_32px_64px_-32px_rgba(79,195,247,0.15)]"
          : "border-hairline"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
            <span className="h-[1px] w-4 bg-fg-ghost" />
            {label}
          </div>
          <h4 className="mt-2 text-[15px] font-medium leading-tight tracking-tight text-fg">
            {title}
          </h4>
          <p className="mt-1 max-w-[24ch] text-[12px] leading-snug text-fg-mute">
            {sub}
          </p>
        </div>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
            featured
              ? "border-[#4fc3f7]/40 bg-[#4fc3f7]/10 text-[#4fc3f7]"
              : "border-hairline bg-white/[0.02] text-fg-dim"
          }`}
        >
          {icon}
        </span>
      </div>

      <div className="mt-5 flex-1 min-h-[160px]">{children}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center py-3 lg:py-0">
      <div className="flex items-center gap-1 opacity-70 rotate-90 lg:rotate-0">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#4fc3f7]/60 to-[#4fc3f7]/80 lg:w-6" />
        <ArrowRight size={14} weight="regular" className="text-[#4fc3f7]" />
      </div>
    </div>
  );
}

/** Decorative "old ultrasound CRT" render. */
function LegacyDisplay() {
  return (
    <div className="legacy-crt relative h-full w-full overflow-hidden rounded-[8px] border border-hairline bg-[#0a0e14]">
      <div className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(0deg,white_0,white_1px,transparent_1px,transparent_3px)]" />
      {/* CRT horizontal tear glitch — fires occasionally */}
      <span className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent [animation:crt-tear_5.2s_cubic-bezier(0.32,0.72,0,1)_infinite]" />
      {/* Subtle chromatic shimmer */}
      <span className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40 [background:repeating-linear-gradient(0deg,rgba(79,195,247,0.04)_0,rgba(79,195,247,0.04)_1px,transparent_1px,transparent_2px)]" />
      <div className="absolute inset-3 rounded-[4px] border border-white/5">
        <svg viewBox="0 0 100 80" className="h-full w-full">
          <defs>
            <clipPath id="legacy-cone">
              <path d="M 50 5 L 92 75 L 8 75 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#legacy-cone)">
            <rect
              width="100"
              height="80"
              fill="radial-gradient(circle at 50% 0%, #5a6a80 0%, #1a2030 100%)"
            />
            <rect
              width="100"
              height="80"
              fill="url(#legacy-grad)"
              style={{
                fill: "radial-gradient(ellipse at 50% 10%, rgba(150,170,200,0.5), rgba(20,28,44,0.9))",
              }}
            />
            <rect
              x="0"
              y="0"
              width="100"
              height="80"
              fill="#fff"
              opacity="0.04"
            />
            <ellipse cx="45" cy="40" rx="15" ry="9" fill="rgba(200,215,230,0.12)" />
            <ellipse cx="62" cy="48" rx="10" ry="6" fill="rgba(200,215,230,0.1)" />
          </g>
          <path
            d="M 50 5 L 92 75 L 8 75 Z"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
        <span>RGB OUT</span>
        <span className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-amber-500/60 [animation:crt-power_2.4s_ease-in-out_infinite]" />
          POWER
        </span>
      </div>
      <style jsx>{`
        @keyframes crt-tear {
          0%, 88%, 100% {
            transform: translateY(-6px);
            opacity: 0;
          }
          89% {
            transform: translateY(6%);
            opacity: 0.6;
          }
          92% {
            transform: translateY(32%);
            opacity: 0.75;
          }
          95% {
            transform: translateY(74%);
            opacity: 0.5;
          }
          97% {
            transform: translateY(108%);
            opacity: 0;
          }
        }
        @keyframes crt-power {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function AlethiaPipe() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-[8px] border border-hairline bg-gradient-to-br from-[#061326] to-[#0a1e3d] p-3">
      {/* Animated data stream */}
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/5">
        <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#4fc3f7] to-transparent [animation:stream_2.4s_cubic-bezier(0.32,0.72,0,1)_infinite]" />
      </div>
      <div className="flex w-full items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/60">
        <span>INGEST</span>
        <span className="text-[#4fc3f7]">INFER</span>
        <span>EMIT</span>
      </div>
      <div className="grid w-full grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="h-6 rounded-[2px] bg-gradient-to-b from-[#4fc3f7]/25 to-[#4fc3f7]/5"
            style={{
              opacity: 0.3 + ((i * 7) % 7) / 10,
              animation: `pulse-tile 2.8s cubic-bezier(0.32,0.72,0,1) infinite`,
              animationDelay: `${i * 120}ms`,
            }}
          />
        ))}
      </div>
      <div className="mt-auto flex w-full items-center justify-between border-t border-white/10 pt-2 font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/50">
        <span>model</span>
        <span>alethia · v0.9</span>
      </div>

      <style jsx>{`
        @keyframes stream {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(400%);
          }
        }
        @keyframes pulse-tile {
          0%, 100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.75;
          }
        }
      `}</style>
    </div>
  );
}
