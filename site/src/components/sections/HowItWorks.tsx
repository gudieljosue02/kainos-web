"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { WaveSquare, Atom, Crosshair } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Spotlight } from "@/components/fx/Spotlight";
import { ScanReveal } from "@/components/fx/ScanReveal";

const ICONS: Icon[] = [WaveSquare, Atom, Crosshair];

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how" className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-3 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.how.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              {t.how.titleLead}
              <ScanReveal text={t.how.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-2xl text-[13.5px] md:mt-7 md:text-lg">{t.how.body}</p>
            </Reveal>
          </div>
        </div>

        {/* ── Mobile: compact stacked list ── */}
        <Reveal delay={120}>
          <div className="mt-5 md:hidden">
            <div className="overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/60">
              {t.how.cards.map((card, i) => {
                const IconCmp = ICONS[i];
                return (
                  <div key={card.title}>
                    <div className="flex items-start gap-3 p-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline-strong bg-white/[0.03] text-fg-dim">
                        <IconCmp size={17} weight="light" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-fg-mute">
                          {card.meta}
                        </div>
                        <h3 className="mt-0.5 text-[13.5px] font-medium leading-tight tracking-tight text-fg">
                          {card.title}
                        </h3>
                        <p className="text-body mt-1 text-[11.5px] leading-snug">{card.body}</p>
                      </div>
                      <span className="mt-1 shrink-0 font-mono text-[10px] text-fg-ghost">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i < t.how.cards.length - 1 && (
                      <div className="flex items-center gap-3 border-t border-hairline/50 px-4 py-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 2v10M4 9l3 3 3-3" stroke="rgba(79,195,247,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="relative h-[1px] flex-1 overflow-hidden bg-hairline/50">
                          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#4fc3f7]/50 to-transparent [animation:flow-line_2.2s_linear_infinite]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── Desktop: full 3-column cards ── */}
        <div className="mt-20 hidden grid-cols-3 gap-6 md:grid">
          {t.how.cards.map((card, i) => {
            const IconCmp = ICONS[i];
            return (
              <Reveal key={card.title} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-[1.25rem] border border-hairline bg-bg-elev-1/60 p-10 transition-all duration-700 hover:border-hairline-strong hover:bg-bg-elev-1 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]">
                  <Spotlight size={340} />
                  <div className="relative z-10 mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-hairline-strong bg-white/[0.03] text-fg-dim transition-all duration-500 group-hover:border-[#4fc3f7]/40 group-hover:bg-[#4fc3f7]/10 group-hover:text-[#4fc3f7]">
                    <IconCmp size={18} weight="light" />
                  </div>
                  <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
                    {card.meta}
                  </div>
                  <h3 className="relative z-10 mt-3 text-[1.65rem] font-medium leading-tight tracking-tight text-fg">
                    {card.title}
                  </h3>
                  <p className="relative z-10 text-body mt-4 text-[15px]">{card.body}</p>
                  <span className="pointer-events-none absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#4fc3f7]/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes flow-line {
          from { transform: translateX(-100%); }
          to   { transform: translateX(400%); }
        }
      `}</style>
    </section>
  );
}
