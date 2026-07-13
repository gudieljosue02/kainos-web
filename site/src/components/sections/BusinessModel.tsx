"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function BusinessModel() {
  const { t } = useLocale();

  return (
    <section id="model" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="08"
          label={t.businessModel.eyebrow}
          title={
            <>
              {t.businessModel.titleLead}
              <span className="text-ink-mute">{t.businessModel.titleTail}</span>
            </>
          }
          body={t.businessModel.body}
        />

        {/* Six routes — two-column register */}
        <div className="mt-14 grid grid-cols-1 border-t border-hairline md:mt-20 lg:grid-cols-2 lg:gap-x-16">
          {t.businessModel.segments.map((segment, i) => (
            <Reveal key={segment.title} delay={(i % 2) * 80}>
              <article className="group grid grid-cols-[44px_1fr] gap-x-5 border-b border-hairline py-7 transition-colors duration-300 hover:bg-[rgba(10,20,40,0.02)] md:py-9">
                <span className="t-index pt-0.5 text-4xl md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="t-label">{segment.label}</span>
                  <h3 className="t-section mt-2 text-xl text-ink md:text-2xl">
                    {segment.title}
                  </h3>
                  <p className="t-body mt-3 text-[14px] md:text-[15px]">{segment.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
