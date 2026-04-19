"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { ScanReveal } from "@/components/fx/ScanReveal";
import { Spotlight } from "@/components/fx/Spotlight";

export function BusinessModel() {
  const { t } = useLocale();

  return (
    <section id="model" className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-3 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.businessModel.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              {t.businessModel.titleLead}
              <ScanReveal text={t.businessModel.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-2xl text-[13.5px] md:mt-7 md:text-lg">
                {t.businessModel.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Segments — mobile: 2-col, tablet: 2-col, desktop: 3-col */}
        <div className="mt-5 grid grid-cols-2 gap-2 md:mt-14 md:gap-4 lg:grid-cols-3">
          {t.businessModel.segments.map((seg, i) => (
            <Reveal key={seg.title} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-[0.875rem] border border-hairline bg-bg-elev-1/60 p-3 transition-all duration-500 hover:border-hairline-strong hover:bg-bg-elev-1 md:rounded-[1.25rem] md:p-6 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <Spotlight size={280} />
                <div className="relative z-10 flex flex-col gap-1.5 md:flex-row md:items-start md:gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-hairline-strong font-mono text-[9px] text-fg-mute transition-colors duration-300 group-hover:border-[#4fc3f7]/40 group-hover:text-[#4fc3f7] md:mt-0.5 md:h-6 md:w-6 md:text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent md:text-[9px]">
                      {seg.label}
                    </div>
                    <h3 className="mt-0.5 text-[11px] font-medium leading-tight tracking-tight text-fg md:mt-1 md:text-[15px]">
                      {seg.title}
                    </h3>
                    <p className="text-body mt-1 hidden text-[10px] leading-snug md:block md:mt-2 md:text-[13px]">
                      {seg.body}
                    </p>
                  </div>
                </div>
                <span className="pointer-events-none absolute right-0 top-0 h-20 w-20 opacity-20 [background:radial-gradient(circle_at_100%_0%,rgba(79,195,247,0.25)_0%,transparent_70%)]" />
                <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#4fc3f7]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
