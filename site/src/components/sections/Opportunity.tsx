"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { Counter } from "@/components/Counter";

export function Opportunity() {
  const { t } = useLocale();

  return (
    <section id="opportunity" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="07"
          label={t.opportunity.eyebrow}
          title={
            <>
              {t.opportunity.titleLead}
              <span className="text-ink-mute">{t.opportunity.titleTail}</span>
            </>
          }
          body={t.opportunity.body}
        />

        {/* Market ledger — full-width rows, numbers never clip */}
        <div className="mt-14 md:mt-20">
          {t.opportunity.metrics.map((metric, i) => (
            <Reveal key={metric.value} delay={i * 90}>
              <div className="data-row grid-cols-1 gap-x-10 gap-y-1.5 py-6 sm:grid-cols-[minmax(200px,280px)_1fr_auto] sm:items-baseline md:py-8">
                <span className="metric text-5xl font-medium text-ink sm:text-6xl md:text-[4.25rem]">
                  <Counter value={metric.value} />
                </span>
                <p className="t-body text-[14px] md:text-[15.5px]">{metric.label}</p>
                <span className="t-label sm:text-right">{metric.sub}</span>
              </div>
            </Reveal>
          ))}
          <hr className="rule" />
        </div>

        {/* Why now + CTA */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="t-label !text-ink">{t.opportunity.pitchTitle}</h3>
            </Reveal>
            <ol className="mt-6">
              {t.opportunity.pitchPoints.map((point, i) => (
                <Reveal as="li" key={i} delay={i * 80}>
                  <div className="flex items-baseline gap-5 border-t border-hairline py-4 md:py-5">
                    <span className="t-label shrink-0 !text-ink-ghost">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="t-body text-[14.5px] md:text-[16px]">{point}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={150} className="lg:col-span-5">
            <aside className="flex h-full flex-col justify-between gap-8 border border-hairline-strong bg-card p-7 md:p-9">
              <div>
                <h3 className="t-section text-3xl text-ink md:text-4xl">
                  {t.opportunity.talkTitle}
                </h3>
                <p className="t-body mt-4 text-[14.5px] md:text-[15.5px]">
                  {t.opportunity.talkBody}
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <a href="#contact" className="btn-ink">
                  {t.opportunity.cta}
                  <ArrowUpRight size={14} weight="bold" className="btn-arrow" />
                </a>
                <span className="t-label">{t.opportunity.talkNote}</span>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
