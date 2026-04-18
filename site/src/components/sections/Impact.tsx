"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
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

        {/* Markets list */}
        <div className="mt-5 shell md:mt-20">
          <div className="shell-inner overflow-hidden">
            <ul className="divide-y divide-hairline">
              {t.impact.markets.map((market, i) => (
                <Reveal key={market.region} delay={i * 120}>
                  <li className="group flex flex-row items-center justify-between gap-3 p-3 transition-colors duration-500 hover:bg-white/[0.015] md:p-7 lg:p-10 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-mute md:text-[10px]">
                        {String(i + 1).padStart(2, "0")} · {market.region}
                      </div>
                      <p className="text-body mt-1 max-w-sm text-[12px] md:mt-3 md:text-[14.5px]">
                        {market.label}
                      </p>
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-fg-ghost md:mt-3 md:text-[10px]">
                        {market.source}
                      </div>
                    </div>
                    <div className="metric shrink-0 text-[2rem] font-medium tracking-tighter text-fg md:text-[2.75rem] lg:text-[3.5rem]">
                      <Counter value={market.stat} />
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
