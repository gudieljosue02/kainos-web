"use client";

import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { UltrasoundVisual } from "@/components/UltrasoundVisual";
import { Magnetic } from "@/components/fx/Magnetic";
import { Tilt } from "@/components/fx/Tilt";
import { LetterReveal } from "@/components/fx/LetterReveal";
import { OrbitalHUD } from "@/components/fx/OrbitalHUD";
import { FloatingChips } from "@/components/fx/FloatingChips";
import { ParallaxLayer } from "@/components/fx/ParallaxLayer";
import { LiveTicker } from "@/components/fx/LiveTicker";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100dvh] overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32"
    >
      {/* Ambient mesh lives on the body background via .ambient-mesh. Add a
          local grid texture for this hero only — with parallax against cursor. */}
      <ParallaxLayer
        invert
        strength={28}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="ambient-grid-light absolute inset-0" />
      </ParallaxLayer>

      {/* Ambient glow blob that parallaxes with the cursor */}
      <ParallaxLayer
        strength={40}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute left-[20%] top-[25%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 [background:radial-gradient(circle,rgba(79,195,247,0.18)_0%,transparent_60%)]" />
        <div className="absolute right-[10%] top-[60%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 [background:radial-gradient(circle,rgba(20,58,116,0.3)_0%,transparent_60%)]" />
      </ParallaxLayer>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-14rem)] w-full max-w-7xl flex-col justify-center px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-12">
          {/* Text column — 7 cols */}
          <div className="lg:col-span-7">
            <div
              className="eyebrow mb-8 opacity-0 [animation:fade-up_900ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "0ms", color: "#0f2a54", borderColor: "rgba(15,42,84,0.22)", background: "rgba(15,42,84,0.05)" }}
            >
              <span className="eyebrow-dot" />
              {t.hero.eyebrow}
            </div>

            <h1 className="h-display text-[2.65rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              <span
                className="block text-[#0a1428] opacity-0 [animation:fade-up_900ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: "120ms" }}
              >
                {t.hero.titleA}
              </span>
              <span className="relative block">
                <span className="group relative inline-block">
                  {/* Ambient halo */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 rounded-full opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-100 [background:radial-gradient(ellipse,rgba(79,195,247,0.28)_0%,transparent_65%)] [animation:halo-breath_5s_cubic-bezier(0.32,0.72,0,1)_infinite]"
                  />

                  {/* Main gradient text */}
                  <LetterReveal
                    text={t.hero.titleB}
                    delay={200}
                    stagger={80}
                    duration={400}
                    light
                  />

                  {/* Power-on scan bar */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-[6%] w-[10%] opacity-0 [animation:power-sweep_550ms_cubic-bezier(0.32,0.72,0,1)_0ms_forwards] [background:linear-gradient(90deg,transparent_0%,rgba(79,195,247,0.0)_20%,rgba(79,195,247,0.55)_48%,#ffffff_50%,rgba(79,195,247,0.55)_52%,rgba(79,195,247,0.0)_80%,transparent_100%)] [filter:blur(0.5px)] mix-blend-screen"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-[-20%] -left-[8%] w-[20%] opacity-0 [animation:power-bloom_550ms_cubic-bezier(0.32,0.72,0,1)_0ms_forwards] [background:radial-gradient(ellipse_at_center,rgba(79,195,247,0.55)_0%,rgba(79,195,247,0.15)_40%,transparent_70%)] blur-xl mix-blend-screen"
                  />
                </span>
                {/* Scan-line underline */}
                <span
                  className="pointer-events-none absolute -bottom-2 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4fc3f7] via-[#4fc3f7]/40 to-transparent [animation:scan-underline_1200ms_cubic-bezier(0.16,1,0.3,1)_500ms_forwards]"
                />
              </span>
            </h1>

            <p
              className="text-body mt-7 max-w-xl text-[17px] opacity-0 [animation:fade-up_900ms_cubic-bezier(0.16,1,0.3,1)_forwards] md:mt-9 md:text-[19px]"
              style={{ animationDelay: "420ms", color: "#334155" }}
            >
              {t.hero.body}
            </p>

            <div
              className="mt-10 flex flex-col items-start gap-3 opacity-0 [animation:fade-up_900ms_cubic-bezier(0.16,1,0.3,1)_forwards] sm:flex-row sm:items-center"
              style={{ animationDelay: "580ms" }}
            >
              <Magnetic>
                <a href="#contact" className="btn-primary group" style={{ background: "#0f2a54", color: "#ffffff" }}>
                  <span>{t.hero.primary}</span>
                  <span className="icon-disc">
                    <ArrowUpRight size={14} weight="bold" />
                  </span>
                </a>
              </Magnetic>
              <a href="#bridge" className="btn-ghost-light">
                {t.hero.secondary}
                <ArrowDown size={14} weight="regular" />
              </a>
            </div>

            <div
              className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] opacity-0 [animation:fade-up_900ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "740ms", color: "#64748b" }}
            >
              <span className="h-[1px] w-6 bg-[#94a3b8]" />
              {t.hero.pill}
            </div>
          </div>

          {/* Visual column — 5 cols */}
          <div
            className="lg:col-span-5 opacity-0 [animation:fade-up_1100ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative">
              {/* Orbital HUD behind the visual */}
              <OrbitalHUD />

              <Tilt max={6} perspective={1400}>
                <div className="shell relative">
                  <div className="shell-inner relative overflow-hidden">
                    <UltrasoundVisual className="rounded-[calc(2rem-0.375rem-1px)]" />

                    {/* Top meta strip */}
                    <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-mute">
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4fc3f7] shadow-[0_0_0_3px_rgba(79,195,247,0.12)]" />
                        Alethia
                      </span>
                      <span className="opacity-60">v 0.9 · live</span>
                    </div>
                  </div>

                  {/* Caption under the card */}
                  <div className="mt-3 flex items-center justify-between px-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fg-mute">
                    <span>raw → annotated</span>
                    <span>realtime inference</span>
                  </div>
                </div>
              </Tilt>

              {/* Floating AI detection chips around the visual */}
              <FloatingChips />

              {/* Live inference ticker — floats bottom-left of the visual */}
              <div
                className="absolute -bottom-4 left-1/2 z-30 -translate-x-1/2 opacity-0 [animation:fade-up_900ms_cubic-bezier(0.16,1,0.3,1)_2000ms_forwards]"
              >
                <LiveTicker />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.3em]" style={{ color: "#94a3b8" }}>
            scroll
          </span>
          <span className="relative block h-10 w-[1px] overflow-hidden bg-[#cbd5e1]/60">
            <span className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[#4fc3f7] to-transparent [animation:scroll-hint_2.4s_cubic-bezier(0.32,0.72,0,1)_infinite]" />
          </span>
        </div>
      </div>

    </section>
  );
}
