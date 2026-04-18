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
      className="relative isolate overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                {t.opportunity.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[2.25rem] sm:text-5xl md:text-[3.75rem]">
              {t.opportunity.titleLead}
              <ScanReveal text={t.opportunity.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-7 max-w-2xl text-lg">
                {t.opportunity.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Market metrics */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {t.opportunity.metrics.map((metric, i) => (
            <Reveal key={metric.value} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-hairline bg-gradient-to-br from-[#061326]/80 to-[#0a1220]/40 p-8 transition-all duration-500 hover:from-[#0a1e3d]/60 hover:to-[#0a1220]/80 md:p-10 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <Spotlight size={360} />
                <div className="relative z-10 metric text-[3.5rem] font-medium leading-none tracking-tighter text-fg md:text-[4.25rem]">
                  <Counter value={metric.value} />
                </div>
                <p className="relative z-10 text-body mt-5 text-[15px] leading-snug">
                  {metric.label}
                </p>
                <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-hairline pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-mute">
                  <span className="h-[1px] w-4 bg-fg-ghost" />
                  {metric.sub}
                </div>

                {/* Subtle accent corner */}
                <span className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-30 [background:radial-gradient(circle_at_100%_0%,rgba(79,195,247,0.2)_0%,transparent_70%)]" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Why now + CTA */}
        <div className="mt-20 shell">
          <div className="shell-inner grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-12">
            {/* Left: why now */}
            <div className="border-b border-hairline p-8 md:p-12 lg:col-span-7 lg:border-b-0 lg:border-r">
              <Reveal>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {t.opportunity.pitchTitle}
                </h3>
              </Reveal>
              <ul className="mt-7 space-y-5">
                {t.opportunity.pitchPoints.map((point, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <li className="flex items-start gap-4 border-t border-hairline pt-5 first:border-t-0 first:pt-0">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#4fc3f7]/40 bg-[#4fc3f7]/10 text-[#4fc3f7]">
                        <Check size={12} weight="bold" />
                      </span>
                      <p className="text-body text-[15px] leading-snug">{point}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Right: CTA block */}
            <div className="relative flex flex-col justify-between gap-6 p-8 md:p-12 lg:col-span-5">
              <div className="absolute inset-0 opacity-[0.5] [background:radial-gradient(ellipse_at_top_right,rgba(79,195,247,0.12)_0%,transparent_60%)]" />
              <div className="relative">
                <Reveal>
                  <h3 className="h-section text-3xl md:text-4xl">
                    Let&apos;s talk.
                  </h3>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-body mt-4 max-w-sm text-[15px]">
                    Early-stage conversations with mission-aligned investors and
                    health-system partners for LATAM and Africa.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={220}>
                <div className="relative flex flex-col gap-3">
                  <Magnetic>
                    <a href="#contact" className="btn-primary group">
                      <span>{t.opportunity.cta}</span>
                      <span className="icon-disc">
                        <ArrowUpRight size={14} weight="bold" />
                      </span>
                    </a>
                  </Magnetic>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
                    Deck available under mutual NDA
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
