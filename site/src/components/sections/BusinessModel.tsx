"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { ScanReveal } from "@/components/fx/ScanReveal";

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

        {/* Segments — mobile: 1-col, desktop: 3-col */}
        <div className="mt-5 grid grid-cols-1 gap-2 md:mt-14 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {t.businessModel.segments.map((seg, i) => (
            <Reveal key={seg.title} delay={i * 70}>
              <article className="relative h-full overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/60 p-4 transition-all duration-500 hover:bg-bg-elev-1 md:rounded-[1.25rem] md:p-6 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline-strong font-mono text-[10px] text-fg-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
                      {seg.label}
                    </div>
                    <h3 className="mt-1 text-[13.5px] font-medium leading-tight tracking-tight text-fg md:text-[15px]">
                      {seg.title}
                    </h3>
                    <p className="text-body mt-2 text-[11.5px] leading-snug md:text-[13px]">
                      {seg.body}
                    </p>
                  </div>
                </div>
                <span className="pointer-events-none absolute right-0 top-0 h-20 w-20 opacity-20 [background:radial-gradient(circle_at_100%_0%,rgba(79,195,247,0.25)_0%,transparent_70%)]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
