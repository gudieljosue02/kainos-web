"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { UltrasoundVisual } from "@/components/UltrasoundVisual";
import { ScanReveal } from "@/components/fx/ScanReveal";

export function AlethiaKit() {
  const { t } = useLocale();

  return (
    <section id="kit" className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-3 md:gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-5 lg:pt-12">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.kit.eyebrow}
              </div>
            </Reveal>
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              Alethia{" "}
              <ScanReveal text="Kit." />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-2 text-[14px] leading-tight tracking-tight text-fg-dim md:mt-5 md:text-xl">
                {t.kit.subtitle}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-body mt-2 hidden max-w-lg text-[13px] md:mt-6 md:block md:text-[15.5px]">
                {t.kit.body}
              </p>
            </Reveal>

            {/* Mobile: vertical list */}
            <ul className="mt-4 space-y-0 md:hidden">
              {t.kit.parts.map((part, i) => (
                <Reveal key={part.label} delay={220 + i * 80}>
                  <li className="flex items-start gap-3 border-t border-hairline pt-3">
                    <span className="mt-0.5 min-w-[60px] font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {part.label}
                    </span>
                    <div>
                      <div className="text-[13px] font-medium tracking-tight text-fg">{part.title}</div>
                      <p className="text-body mt-0.5 text-[11.5px]">{part.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            {/* Desktop: horizontal 3-col cards */}
            <div className="mt-10 hidden grid-cols-3 gap-4 md:grid">
              {t.kit.parts.map((part, i) => (
                <Reveal key={part.label} delay={220 + i * 80}>
                  <div className="flex h-full flex-col rounded-[0.875rem] border border-hairline bg-bg-elev-2/60 p-4 transition-colors duration-500 hover:border-hairline-strong hover:bg-bg-elev-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                      {part.label}
                    </span>
                    <div className="mt-2 text-[14.5px] font-medium tracking-tight text-fg">
                      {part.title}
                    </div>
                    <p className="text-body mt-1.5 text-[12.5px] leading-snug">{part.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — mobile: clean stacked visual */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="shell">
                <div className="shell-inner relative overflow-hidden p-4 md:p-10">
                  <div className="ambient-grid absolute inset-0 opacity-40" />
                  {/* Mobile visual */}
                  <div className="md:hidden">
                    <KitRenderMobile />
                  </div>
                  {/* Desktop visual */}
                  <div className="hidden md:block">
                    <KitRender />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Clean mobile version — no absolute positioning, no overlapping callouts */
function KitRenderMobile() {
  return (
    <div className="flex flex-col gap-3">
      {/* Tablet frame */}
      <div className="relative w-full overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-br from-[#14202e] to-[#0a1220] p-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]">
        {/* Camera notch */}
        <div className="mb-1.5 flex justify-center">
          <span className="h-1 w-4 rounded-full bg-white/10" />
        </div>
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[10px] border border-white/5 bg-[#020509]">
          <UltrasoundVisual className="w-full rounded-[10px]" withScan withAnnotations />
          <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-[4px]">
            <span className="h-1 w-1 rounded-full bg-[#4fc3f7] animate-pulse" />
            Alethia Kit · live
          </div>
        </div>
      </div>

      {/* Component chips */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Tablet", sub: "Rugged · Windows", dot: "#4fc3f7" },
          { label: "Capture", sub: "VGA · DVI · S-Video", dot: "#4fc3f7" },
          { label: "Model", sub: "On-device · OTA", dot: "#4fc3f7" },
        ].map((c) => (
          <div key={c.label} className="flex flex-col gap-1 rounded-[8px] border border-hairline bg-white/[0.02] p-2">
            <div className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full" style={{ background: c.dot, boxShadow: `0 0 4px ${c.dot}` }} />
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#4fc3f7]/80">{c.label}</span>
            </div>
            <span className="text-[10px] leading-snug text-fg-mute">{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Abstract product render: a rugged tablet lying on a surface with a cable
 * running to a capture module, with the Alethia display on-screen.
 */
function KitRender() {
  return (
    <div className="relative aspect-[16/10] w-full">
      {/* Tablet body */}
      <div className="absolute left-1/2 top-1/2 h-[74%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/10 bg-gradient-to-br from-[#14202e] to-[#0a1220] p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-white/5 bg-[#020509]">
          <UltrasoundVisual className="h-full rounded-[14px]" />
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-[4px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4fc3f7]" />
            Alethia Kit · live
          </div>
        </div>

        {/* Camera notch */}
        <span className="pointer-events-none absolute left-1/2 top-[6px] h-1 w-1 -translate-x-1/2 rounded-full bg-white/20" />
      </div>

      {/* Capture device — small box with LED */}
      <div className="absolute bottom-[6%] right-[6%] flex items-center gap-2 rounded-[10px] border border-white/10 bg-gradient-to-br from-[#0f141c] to-[#060a12] p-2.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]">
        <div className="h-6 w-10 rounded-[3px] border border-white/5 bg-black/50" />
        <div className="flex flex-col gap-1">
          <span className="h-1 w-1 rounded-full bg-[#4fc3f7] shadow-[0_0_6px_rgba(79,195,247,0.9)]" />
          <span className="h-1 w-1 rounded-full bg-emerald-500/70" />
        </div>
      </div>

      {/* Cable curve: connecting capture to tablet */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 160 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 140 82 Q 125 78 110 72"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </svg>

      {/* Labeled callouts */}
      <Callout text="TABLET" className="left-[8%] top-[18%]" align="left" />
      <Callout text="ALETHIA · RUNNING" className="right-[10%] top-[30%]" align="right" />
      <Callout text="CAPTURE MODULE" className="bottom-[22%] right-[32%]" align="right" />
    </div>
  );
}

function Callout({
  text,
  className = "",
  align = "left",
}: {
  text: string;
  className?: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`absolute flex items-center gap-2 ${className}`}>
      {align === "left" && (
        <>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-fg-mute">
            {text}
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-r from-fg-ghost to-transparent" />
          <span className="h-1.5 w-1.5 rounded-full border border-[#4fc3f7] bg-[#4fc3f7]/30" />
        </>
      )}
      {align === "right" && (
        <>
          <span className="h-1.5 w-1.5 rounded-full border border-[#4fc3f7] bg-[#4fc3f7]/30" />
          <span className="h-[1px] w-8 bg-gradient-to-l from-fg-ghost to-transparent" />
          <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-fg-mute">
            {text}
          </span>
        </>
      )}
    </div>
  );
}
