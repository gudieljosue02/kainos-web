"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ScanReveal } from "@/components/fx/ScanReveal";

export function Impact() {
  const { t } = useLocale();

  return (
    <section id="impact" className="relative isolate overflow-hidden py-28 md:py-40">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                {t.impact.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[2.25rem] sm:text-5xl md:text-6xl">
              {t.impact.titleLead}
              <ScanReveal text={t.impact.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-7 max-w-2xl text-lg">{t.impact.body}</p>
            </Reveal>
          </div>
        </div>

        {/* Markets split — visual world hint on left, stats on right */}
        <div className="mt-20 shell">
          <div className="shell-inner grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-12">
            {/* Left: abstract region map */}
            <div className="relative min-h-[360px] border-b border-hairline bg-[radial-gradient(circle_at_30%_40%,rgba(20,58,116,0.3)_0%,transparent_60%)] lg:col-span-5 lg:border-b-0 lg:border-r">
              <RegionMap />
            </div>

            {/* Right: markets list */}
            <div className="lg:col-span-7">
              <ul className="divide-y divide-hairline">
                {t.impact.markets.map((market, i) => (
                  <Reveal key={market.region} delay={i * 120}>
                    <li className="group flex flex-col gap-4 p-7 transition-colors duration-500 hover:bg-white/[0.015] md:flex-row md:items-center md:justify-between md:p-10 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)]">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
                          {String(i + 1).padStart(2, "0")} · {market.region}
                        </div>
                        <p className="text-body mt-3 max-w-sm text-[14.5px]">
                          {market.label}
                        </p>
                        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-ghost">
                          {market.source}
                        </div>
                      </div>
                      <div className="metric text-[2.75rem] font-medium tracking-tighter text-fg md:text-[3.5rem]">
                        <Counter value={market.stat} />
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Abstract world map focused on LATAM + Africa. */
function RegionMap() {
  return (
    <div className="absolute inset-0 p-8 md:p-10">
      <div className="relative h-full w-full">
        <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern id="dotgrid" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.4" fill="rgba(255,255,255,0.15)" />
            </pattern>
          </defs>
          <rect width="200" height="140" fill="url(#dotgrid)" />

          {/* LATAM — rough silhouette */}
          <path
            d="M 52 62 Q 56 52 62 54 Q 68 58 66 72 Q 64 86 60 100 Q 54 118 50 122 Q 44 120 46 108 Q 48 92 50 82 Q 48 72 52 62 Z"
            fill="rgba(79,195,247,0.12)"
            stroke="rgba(79,195,247,0.5)"
            strokeWidth="0.5"
          />
          {/* Africa — rough silhouette */}
          <path
            d="M 108 50 Q 118 46 128 50 Q 136 58 138 72 Q 138 88 132 100 Q 126 112 118 112 Q 110 110 106 98 Q 102 84 104 68 Q 106 56 108 50 Z"
            fill="rgba(79,195,247,0.12)"
            stroke="rgba(79,195,247,0.5)"
            strokeWidth="0.5"
          />

          {/* Connection arc */}
          <path
            d="M 58 80 Q 90 40 120 80"
            fill="none"
            stroke="rgba(79,195,247,0.5)"
            strokeWidth="0.5"
            strokeDasharray="1.5 1.5"
          />

          {/* Focal points */}
          <g>
            <circle cx="58" cy="80" r="1.8" fill="rgba(79,195,247,1)" />
            <circle cx="58" cy="80" r="4" fill="none" stroke="rgba(79,195,247,0.5)" strokeWidth="0.4" />
            <circle cx="58" cy="80" r="7" fill="none" stroke="rgba(79,195,247,0.25)" strokeWidth="0.4" />
          </g>
          <g>
            <circle cx="120" cy="80" r="1.8" fill="rgba(79,195,247,1)" />
            <circle cx="120" cy="80" r="4" fill="none" stroke="rgba(79,195,247,0.5)" strokeWidth="0.4" />
            <circle cx="120" cy="80" r="7" fill="none" stroke="rgba(79,195,247,0.25)" strokeWidth="0.4" />
          </g>
        </svg>

        {/* Labels */}
        <div className="absolute left-[18%] top-[60%] font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          LATAM
        </div>
        <div className="absolute left-[55%] top-[60%] font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          Africa
        </div>
      </div>
    </div>
  );
}
