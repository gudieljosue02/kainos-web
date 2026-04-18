"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/fx/Spotlight";
import { ScanReveal } from "@/components/fx/ScanReveal";

function AbdominalIcon({ liver, kidneys, bladder }: { liver: string; kidneys: string; bladder: string }) {
  return (
    <svg viewBox="0 0 48 56" className="h-full w-full" aria-hidden>
      <path d="M 10 14 Q 10 6 24 6 Q 38 6 38 14 L 40 50 Q 38 54 24 54 Q 10 54 8 50 Z"
        fill="rgba(79,195,247,0.06)" stroke="rgba(79,195,247,0.25)" strokeWidth="0.8" />
      <path d="M 13 18 Q 16 14 26 14 Q 32 14 34 18 Q 34 24 27 25 Q 18 25 13 22 Z"
        fill="rgba(79,195,247,0.18)" stroke="rgba(79,195,247,0.6)" strokeWidth="0.6" />
      <text x="23" y="21" textAnchor="middle" fontSize="4" fill="rgba(79,195,247,0.9)" fontFamily="monospace">{liver}</text>
      <ellipse cx="16" cy="33" rx="4" ry="6" fill="rgba(79,195,247,0.14)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.6" />
      <ellipse cx="32" cy="33" rx="4" ry="6" fill="rgba(79,195,247,0.14)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.6" />
      <text x="24" y="33.5" textAnchor="middle" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">{kidneys}</text>
      <path d="M 19 44 Q 24 40 29 44 Q 30 49 24 50 Q 18 49 19 44 Z"
        fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.45)" strokeWidth="0.6" />
      <text x="24" y="47" textAnchor="middle" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">{bladder}</text>
    </svg>
  );
}

function ObstetricsIcon({ hr }: { hr: string }) {
  return (
    <svg viewBox="0 0 48 56" className="h-full w-full" aria-hidden>
      <path d="M 10 20 Q 10 10 24 10 Q 38 10 38 20 L 38 40 Q 36 52 24 52 Q 12 52 10 40 Z"
        fill="rgba(79,195,247,0.06)" stroke="rgba(79,195,247,0.25)" strokeWidth="0.8" />
      <circle cx="24" cy="24" r="8" fill="rgba(79,195,247,0.14)" stroke="rgba(79,195,247,0.55)" strokeWidth="0.7" />
      <line x1="16" x2="32" y1="24" y2="24" stroke="rgba(79,195,247,0.6)" strokeWidth="0.5" strokeDasharray="1 1" />
      <circle cx="24" cy="24" r="8" fill="none" stroke="rgba(79,195,247,0.3)" strokeWidth="0.4" strokeDasharray="2 1" />
      <circle cx="21" cy="23" r="0.8" fill="rgba(255,255,255,0.7)" />
      <path d="M 24 32 Q 20 38 22 44 Q 24 48 26 44 Q 28 38 24 32"
        fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.45)" strokeWidth="0.6" />
      <polyline points="12,44 15,44 17,40 19,48 21,44 24,44"
        fill="none" stroke="rgba(79,195,247,0.8)" strokeWidth="0.7" strokeLinecap="round" />
      <text x="28" y="45" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">{hr}</text>
    </svg>
  );
}

function EmergencyIcon({ fluid }: { fluid: string }) {
  return (
    <svg viewBox="0 0 48 56" className="h-full w-full" aria-hidden>
      <path d="M 10 14 Q 10 6 24 6 Q 38 6 38 14 L 40 50 Q 38 54 24 54 Q 10 54 8 50 Z"
        fill="rgba(79,195,247,0.05)" stroke="rgba(79,195,247,0.2)" strokeWidth="0.8" />
      <ellipse cx="24" cy="20" rx="6" ry="5" fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.6" />
      <path d="M 22 19 Q 22 17 24 18 Q 26 17 26 19 Q 26 21 24 23 Q 22 21 22 19"
        fill="rgba(79,195,247,0.6)" />
      <ellipse cx="16" cy="32" rx="4" ry="3" fill="rgba(79,195,247,0.25)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.5" />
      <ellipse cx="32" cy="34" rx="4" ry="3" fill="rgba(79,195,247,0.25)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.5" />
      <ellipse cx="24" cy="44" rx="5" ry="3" fill="rgba(79,195,247,0.25)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.5" />
      <circle cx="38" cy="12" r="6" fill="rgba(79,195,247,0.2)" stroke="rgba(79,195,247,0.8)" strokeWidth="0.7" />
      <text x="38" y="14" textAnchor="middle" fontSize="7" fill="rgba(79,195,247,1)" fontFamily="monospace" fontWeight="bold">!</text>
      <text x="24" y="40" textAnchor="middle" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">{fluid}</text>
    </svg>
  );
}

export function Capabilities() {
  const { t } = useLocale();
  const svg = t.capabilities.svgLabels;

  const GROUPS = [
    {
      ...t.capabilities.groups[0],
      color: "#4fc3f7",
      icon: <AbdominalIcon liver={svg.liver} kidneys={svg.kidneys} bladder={svg.bladder} />,
    },
    {
      ...t.capabilities.groups[1],
      color: "#4fc3f7",
      icon: <ObstetricsIcon hr={svg.hr} />,
    },
    {
      ...t.capabilities.groups[2],
      color: "#4fc3f7",
      icon: <EmergencyIcon fluid={svg.fluid} />,
    },
  ];

  return (
    <section id="capabilities" className="relative isolate overflow-hidden py-5 md:py-28 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-3 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-3 md:mb-6">
                <span className="eyebrow-dot" />
                {t.capabilities.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[1.6rem] sm:text-[2.25rem] md:text-5xl lg:text-6xl">
              {t.capabilities.titleLead}
              <ScanReveal text={t.capabilities.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-2 max-w-2xl text-[13.5px] md:mt-7 md:text-lg">
                {t.capabilities.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Mobile: horizontal compact list ── */}
        <div className="mt-5 grid grid-cols-1 gap-2 md:hidden">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <article
                className="relative flex items-center gap-3 overflow-hidden rounded-[0.875rem] border bg-bg-elev-1/60 p-3"
                style={{ borderColor: `${group.color}22` }}
              >
                <div className="relative h-[56px] w-[46px] shrink-0">
                  {group.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.22em]" style={{ color: `${group.color}80` }}>
                    {group.label}
                  </div>
                  <h3 className="mt-0.5 text-[13px] font-medium leading-tight tracking-tight text-fg">
                    {group.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-1.5 py-[2px] font-mono text-[8px] leading-none"
                        style={{ borderColor: `${group.color}30`, color: `${group.color}bb`, background: `${group.color}08` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-15 blur-2xl" style={{ background: group.color }} />
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Desktop: 3-column cards ── */}
        <div className="mt-20 hidden grid-cols-3 gap-6 md:grid">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <article
                className="group relative h-full overflow-hidden rounded-[1.25rem] border bg-bg-elev-1/60 p-8 transition-all duration-500 hover:bg-bg-elev-1 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                style={{ borderColor: `${group.color}22` }}
              >
                <Spotlight size={340} />
                <div className="relative z-10 mb-6 h-[120px] w-[100px]">
                  {group.icon}
                </div>
                <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: `${group.color}99` }}>
                  {group.label}
                </div>
                <h3 className="relative z-10 mt-2 text-[19px] font-medium leading-tight tracking-tight text-fg">
                  {group.title}
                </h3>
                <div className="relative z-10 mt-4 flex flex-wrap gap-1">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2 py-0.5 font-mono text-[10px] leading-none"
                      style={{ borderColor: `${group.color}33`, color: `${group.color}cc`, background: `${group.color}0a` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: group.color }} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
