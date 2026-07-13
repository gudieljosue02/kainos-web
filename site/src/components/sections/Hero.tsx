"use client";

import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SectorScan } from "@/components/fx/SectorScan";

export function Hero() {
  const { t } = useLocale();

  const meta = [
    { label: t.hero.statusLabel, value: t.hero.statusValue },
    { label: t.hero.pilotsLabel, value: t.hero.pilotsValue },
    { label: t.hero.focusLabel, value: t.hero.focusValue },
  ];

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col pt-24 md:pt-28">
      <div className="mx-auto flex w-full max-w-[88rem] flex-1 flex-col px-5 md:px-10">
        {/* Masthead rule */}
        <div className="intro">
          <hr className="rule-head" />
          <div className="flex items-baseline justify-between gap-4 pt-3">
            <span className="t-label !text-ink">{t.hero.eyebrow}</span>
            <span className="t-label hidden sm:block">{t.hero.pill}</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid flex-1 grid-cols-1 items-center gap-14 py-14 md:py-16 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h1 className="t-display text-[2.9rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="intro block" style={{ "--intro-delay": "100ms" } as React.CSSProperties}>
                {t.hero.titleA}
              </span>
              <span className="intro relative block w-fit" style={{ "--intro-delay": "220ms" } as React.CSSProperties}>
                {t.hero.titleB}
                <span
                  aria-hidden
                  className="intro-rule absolute -bottom-2 left-0 h-[3px] w-full bg-accent md:-bottom-3"
                />
              </span>
            </h1>

            <p
              className="t-body intro mt-8 max-w-xl text-[16px] md:mt-10 md:text-[18px]"
              style={{ "--intro-delay": "380ms" } as React.CSSProperties}
            >
              {t.hero.body}
            </p>

            <div
              className="intro mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center md:mt-11"
              style={{ "--intro-delay": "520ms" } as React.CSSProperties}
            >
              <a href="#contact" className="btn-ink">
                {t.hero.primary}
                <ArrowUpRight size={14} weight="bold" className="btn-arrow" />
              </a>
              <a href="#bridge" className="link-line">
                {t.hero.secondary}
                <ArrowDown size={13} weight="regular" />
              </a>
            </div>
          </div>

          {/* Instrument */}
          <div className="intro lg:col-span-5" style={{ "--intro-delay": "420ms" } as React.CSSProperties}>
            <SectorScan labels={t.capabilities.svgLabels} />
            <p className="t-label mt-3 flex items-center justify-between">
              <span>{t.hero.scanCaption}</span>
              <span aria-hidden>fig. 01</span>
            </p>
          </div>
        </div>

        {/* Meta strip */}
        <div className="intro mb-8 md:mb-10" style={{ "--intro-delay": "680ms" } as React.CSSProperties}>
          <hr className="rule-strong" />
          <dl className="grid grid-cols-1 gap-x-8 gap-y-3 pt-4 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label} className="flex items-baseline justify-between gap-4 sm:block">
                <dt className="t-label">{m.label}</dt>
                <dd className="mt-0 font-display text-[15px] font-medium text-ink sm:mt-1.5">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
