"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { Counter } from "@/components/Counter";

export function Problem() {
  const { t } = useLocale();

  return (
    <section id="problem" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="01"
          label={t.problem.eyebrow}
          title={
            <>
              {t.problem.titleLead}
              <span className="text-ink-mute">{t.problem.titleTail}</span>
            </>
          }
          body={t.problem.body}
        />

        {/* Stat ledger */}
        <div className="mt-14 md:mt-20">
          {t.problem.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 90}>
              <div className="data-row grid-cols-1 gap-x-6 gap-y-2 py-6 sm:grid-cols-[240px_1fr_auto] sm:items-baseline md:gap-x-12 md:py-8">
                <div className="flex items-baseline gap-3.5">
                  <span
                    className={`h-2 w-2 shrink-0 -translate-y-0.5 rounded-full ${
                      i === t.problem.stats.length - 1 ? "bg-accent" : "bg-alert"
                    }`}
                    aria-hidden
                  />
                  <span className="metric text-4xl font-medium text-ink sm:text-5xl md:text-[3.4rem]">
                    <Counter value={stat.value} />
                  </span>
                </div>
                <p className="t-body text-[14px] md:text-[15.5px]">{stat.label}</p>
                <span className="t-label sm:text-right">{stat.source}</span>
              </div>
            </Reveal>
          ))}
          <hr className="rule" />
        </div>

        <Reveal delay={120}>
          <p className="mt-6 max-w-3xl font-mono text-[10.5px] leading-relaxed text-ink-ghost">
            {t.problem.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
