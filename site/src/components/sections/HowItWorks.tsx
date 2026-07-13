"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="03"
          label={t.how.eyebrow}
          title={
            <>
              {t.how.titleLead}
              <span className="text-ink-mute">{t.how.titleTail}</span>
            </>
          }
          body={t.how.body}
        />

        {/* Three layers — offset ledger, not equal cards */}
        <div className="mt-14 grid grid-cols-1 gap-y-0 md:mt-20 lg:grid-cols-12">
          <div className="hidden lg:col-span-3 lg:block" aria-hidden>
            <div className="sticky top-28">
              <span className="t-index block text-[7rem] leading-none">03</span>
            </div>
          </div>

          <div className="lg:col-span-9">
            {t.how.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <article className="data-row grid-cols-1 gap-x-10 gap-y-3 py-8 sm:grid-cols-[110px_minmax(0,260px)_1fr] sm:items-start md:py-10">
                  <span className="t-label pt-1.5">{card.meta}</span>
                  <h3 className="t-section text-2xl text-ink md:text-3xl">{card.title}</h3>
                  <p className="t-body text-[14px] md:text-[15.5px]">{card.body}</p>
                </article>
              </Reveal>
            ))}
            <hr className="rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
