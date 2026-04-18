"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import {
  VideoCamera,
  Brain,
  MonitorPlay,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Spotlight } from "@/components/fx/Spotlight";
import { ScanReveal } from "@/components/fx/ScanReveal";

const ICONS: Icon[] = [VideoCamera, Brain, MonitorPlay];

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how" className="relative isolate overflow-hidden py-28 md:py-40">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                {t.how.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[2.25rem] sm:text-5xl md:text-6xl">
              {t.how.titleLead}
              <ScanReveal text={t.how.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-7 max-w-2xl text-lg">{t.how.body}</p>
            </Reveal>
          </div>
        </div>

        {/* 3 cards — Motion Engine Bento */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {t.how.cards.map((card, i) => {
            const IconCmp = ICONS[i];
            return (
              <Reveal key={card.title} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-hairline bg-bg-elev-1/60 p-8 transition-all duration-700 hover:border-hairline-strong hover:bg-bg-elev-1 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:p-10">
                  <Spotlight size={340} />
                  {/* Icon badge */}
                  <div className="relative z-10 mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong bg-white/[0.03] text-fg-dim transition-all duration-500 group-hover:border-[#4fc3f7]/40 group-hover:bg-[#4fc3f7]/10 group-hover:text-[#4fc3f7]">
                    <IconCmp size={22} weight="light" />
                  </div>

                  <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
                    {card.meta}
                  </div>

                  <h3 className="relative z-10 mt-3 text-[1.65rem] font-medium leading-none tracking-tight text-fg">
                    {card.title}
                  </h3>

                  <p className="relative z-10 text-body mt-4 text-[15px]">{card.body}</p>

                  {/* Bottom hairline accent */}
                  <span className="pointer-events-none absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#4fc3f7]/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
