"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Spotlight } from "@/components/fx/Spotlight";
import { Magnetic } from "@/components/fx/Magnetic";
import { ScanReveal } from "@/components/fx/ScanReveal";

export function Opportunity() {
  const { t } = useLocale();

  return (
    <section
      id="opportunity"
      className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.opportunity.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-[3.75rem]">
              {t.opportunity.titleLead}
              <ScanReveal text={t.opportunity.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-2xl text-[13.5px] md:mt-7 md:text-lg">
                {t.opportunity.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Market metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 md:mt-20 md:gap-6">
          {t.opportunity.metrics.map((metric, i) => (
            <Reveal key={metric.value} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-[1rem] border border-hairline bg-gradient-to-br from-[#061326]/80 to-[#0a1220]/40 p-3 transition-all duration-500 hover:from-[#0a1e3d]/60 hover:to-[#0a1220]/80 md:rounded-[1.5rem] md:p-8 lg:p-10 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <Spotlight size={360} />
                <div className="relative z-10 metric text-[1.75rem] font-medium leading-none tracking-tighter text-fg md:text-[3.5rem] lg:text-[4.25rem]">
                  <Counter value={metric.value} />
                </div>
                <p className="relative z-10 text-body mt-2 text-[10.5px] leading-snug md:mt-5 md:text-[15px]">
                  {metric.label}
                </p>
                <div className="relative z-10 mt-2 flex items-center gap-1 border-t border-hairline pt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-fg-mute md:mt-6 md:gap-2 md:pt-4 md:text-[10px]">
                  <span className="h-[1px] w-2 bg-fg-ghost md:w-4" />
                  <span className="hidden sm:inline">{metric.sub}</span>
                </div>
                <span className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-30 [background:radial-gradient(circle_at_100%_0%,rgba(79,195,247,0.2)_0%,transparent_70%)]" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Why now + CTA */}
        <div className="mt-5 shell md:mt-20">
          <div className="shell-inner flex flex-col lg:flex-row">
            {/* Left: why now */}
            <div className="border-b border-hairline p-4 md:p-8 lg:border-b-0 lg:border-r lg:p-12" style={{ flex: "0 0 58%" }}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent md:text-[11px]">
                {t.opportunity.pitchTitle}
              </h3>
              <ul className="mt-3 space-y-0 md:mt-7 md:space-y-5">
                {t.opportunity.pitchPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 border-t border-hairline pt-3 first:border-t-0 first:pt-0 md:gap-4 md:pt-5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#4fc3f7]/40 bg-[#4fc3f7]/10 text-[#4fc3f7] md:mt-1 md:h-5 md:w-5">
                      <Check size={10} weight="bold" />
                    </span>
                    <p className="text-body text-[12px] leading-snug md:text-[15px]">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA block */}
            <div className="relative flex flex-col justify-between gap-4 p-4 md:gap-6 md:p-8 lg:p-12" style={{ flex: "1 1 42%" }}>
              <div className="absolute inset-0 opacity-[0.5] [background:radial-gradient(ellipse_at_top_right,rgba(79,195,247,0.12)_0%,transparent_60%)]" />
              <div className="relative">
                <h3 className="h-section text-2xl md:text-3xl lg:text-4xl">
                  Let&apos;s talk.
                </h3>
                <p className="text-body mt-2 max-w-sm text-[12.5px] md:mt-4 md:text-[15px]">
                  Early-stage conversations with mission-aligned investors and
                  health-system partners for LATAM and Africa.
                </p>
              </div>
              <div className="relative flex flex-col gap-2 md:gap-3">
                <Magnetic>
                  <a href="#contact" className="btn-primary group">
                    <span>{t.opportunity.cta}</span>
                    <span className="icon-disc">
                      <ArrowUpRight size={14} weight="bold" />
                    </span>
                  </a>
                </Magnetic>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-fg-mute md:text-[10px]">
                  Deck available under mutual NDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
