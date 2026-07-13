"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { Counter } from "@/components/Counter";

export function Impact() {
  const { t } = useLocale();
  const [lead, ...rest] = t.impact.markets;

  return (
    <section id="impact" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="06"
          label={t.impact.eyebrow}
          title={
            <>
              {t.impact.titleLead}
              <span className="text-ink-mute">{t.impact.titleTail}</span>
            </>
          }
          body={t.impact.body}
        />

        {/* Asymmetric figures — one lead number, two supporting */}
        <div className="mt-14 grid grid-cols-1 gap-0 md:mt-20 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <figure className="border-t-2 border-ink pt-6 md:pt-8">
              <span className="t-label">{lead.region}</span>
              <div className="metric mt-4 text-7xl font-medium text-ink sm:text-8xl lg:text-[9.5rem]">
                <Counter value={lead.stat} />
              </div>
              <figcaption className="mt-5">
                <p className="t-body text-[14.5px] md:text-[16px]">{lead.label}</p>
                <span className="t-label mt-3 block !text-ink-ghost">{lead.source}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-12 flex flex-col justify-between gap-12 lg:col-span-6 lg:mt-0">
            {rest.map((m, i) => (
              <Reveal key={m.region} delay={(i + 1) * 120}>
                <figure className="border-t border-hairline-strong pt-5">
                  <span className="t-label">{m.region}</span>
                  <div className="metric mt-3 text-5xl font-medium text-ink sm:text-6xl">
                    <Counter value={m.stat} />
                  </div>
                  <figcaption className="mt-4">
                    <p className="t-body text-[14px] md:text-[15px]">{m.label}</p>
                    <span className="t-label mt-2.5 block !text-ink-ghost">{m.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
