"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Spotlight } from "@/components/fx/Spotlight";
import { ScanReveal } from "@/components/fx/ScanReveal";

export function Impact() {
  const { t } = useLocale();

  return (
    <section id="impact" className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.impact.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              {t.impact.titleLead}
              <ScanReveal text={t.impact.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-2xl text-[13.5px] md:mt-7 md:text-lg">{t.impact.body}</p>
            </Reveal>
          </div>
        </div>

        {/* Stat cards — 2 cols mobile, 3 cols desktop */}
        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-6">
          {t.impact.markets.map((market, i) => (
            <Reveal key={market.region} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/60 p-4 transition-all duration-500 hover:border-hairline-strong hover:bg-bg-elev-1 md:rounded-[1.25rem] md:p-7 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <Spotlight />
                <div className="relative z-10 metric whitespace-nowrap text-[1.6rem] font-medium tracking-tighter text-fg md:text-[2.75rem] lg:text-[3.25rem]">
                  <Counter value={market.stat} />
                </div>
                <div className="relative z-10 mt-1 font-mono text-[8.5px] uppercase tracking-[0.18em] text-accent md:mt-2 md:text-[9.5px]">
                  {market.region}
                </div>
                <p className="relative z-10 text-body mt-2 text-[11.5px] leading-snug md:mt-4 md:text-[13.5px]">
                  {market.label}
                </p>
                <div className="relative z-10 mt-3 flex items-center gap-1.5 border-t border-hairline pt-3 font-mono text-[8px] uppercase tracking-[0.18em] text-fg-mute md:mt-5 md:pt-4 md:text-[9px]">
                  <span className="h-[1px] w-3 bg-fg-ghost" />
                  {market.source}
                </div>
                <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[200%] w-[200%] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,195,247,0.08)_0%,transparent_50%)]" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
