"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/fx/Spotlight";
import { ScanReveal } from "@/components/fx/ScanReveal";

/* ── Desktop silhouettes (unchanged) ──────────────────────── */
const SILHOUETTES = [
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path d="M 12 42 Q 18 22 38 20 Q 62 15 82 28 Q 92 35 88 50 Q 78 60 60 58 Q 38 55 22 55 Q 10 52 12 42 Z" fill="url(#grad-liver)" stroke="rgba(79,195,247,0.4)" strokeWidth="0.6" />
      <defs><linearGradient id="grad-liver" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="rgba(79,195,247,0.22)" /><stop offset="100%" stopColor="rgba(79,195,247,0.04)" /></linearGradient></defs>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path d="M 28 22 Q 18 22 18 35 Q 18 50 28 52 Q 40 52 42 40 Q 44 22 34 20 Q 30 20 28 22 Z" fill="url(#grad-kidney)" stroke="rgba(79,195,247,0.4)" strokeWidth="0.6" />
      <path d="M 72 22 Q 62 22 62 35 Q 62 50 72 52 Q 84 52 86 40 Q 88 22 78 20 Q 74 20 72 22 Z" fill="url(#grad-kidney)" stroke="rgba(79,195,247,0.4)" strokeWidth="0.6" />
      <defs><linearGradient id="grad-kidney" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="rgba(79,195,247,0.22)" /><stop offset="100%" stopColor="rgba(79,195,247,0.04)" /></linearGradient></defs>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path d="M 35 25 Q 50 18 65 25 Q 72 32 70 45 Q 65 56 50 56 Q 35 56 30 45 Q 28 32 35 25 Z" fill="url(#grad-bladder)" stroke="rgba(79,195,247,0.4)" strokeWidth="0.6" />
      <line x1="35" x2="65" y1="38" y2="38" stroke="rgba(79,195,247,0.3)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
      <defs><linearGradient id="grad-bladder" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="rgba(79,195,247,0.2)" /><stop offset="100%" stopColor="rgba(79,195,247,0.04)" /></linearGradient></defs>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <circle cx="55" cy="32" r="11" fill="url(#grad-fetal)" stroke="rgba(79,195,247,0.4)" strokeWidth="0.6" />
      <path d="M 55 43 Q 40 45 35 52 Q 32 58 40 58 Q 52 58 58 50" fill="url(#grad-fetal)" stroke="rgba(79,195,247,0.4)" strokeWidth="0.6" />
      <circle cx="50" cy="30" r="1" fill="rgba(255,255,255,0.8)" />
      <defs><linearGradient id="grad-fetal" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="rgba(79,195,247,0.22)" /><stop offset="100%" stopColor="rgba(79,195,247,0.04)" /></linearGradient></defs>
    </svg>
  ),
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path d="M 35 10 Q 50 6 65 10 L 70 60 Q 50 62 30 60 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
      {[[50,18],[62,30],[38,40],[52,50]].map(([x,y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="2.5" fill="rgba(79,195,247,0.8)" />
          <circle cx={x} cy={y} r="5" fill="none" stroke="rgba(79,195,247,0.35)" strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  ),
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <rect x="30" y="16" width="40" height="44" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
      {[28,34,40].map((y) => (<line key={y} x1="36" x2="64" y1={y} y2={y} stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />))}
      <circle cx="64" cy="48" r="6" fill="rgba(239,91,91,0.25)" stroke="rgba(239,91,91,0.8)" strokeWidth="0.6" />
      <text x="64" y="50" textAnchor="middle" fontSize="6" fill="rgba(239,91,91,1)" fontFamily="monospace" fontWeight="bold">!</text>
    </svg>
  ),
];

/* ── Mobile grouped cards data ────────────────────────────── */
const MOBILE_GROUPS = [
  {
    label: "Abdominal",
    title: "Abdominal Organs",
    color: "#4fc3f7",
    icon: (
      <svg viewBox="0 0 48 56" className="h-full w-full" aria-hidden>
        {/* Body outline */}
        <path d="M 10 14 Q 10 6 24 6 Q 38 6 38 14 L 40 50 Q 38 54 24 54 Q 10 54 8 50 Z"
          fill="rgba(79,195,247,0.06)" stroke="rgba(79,195,247,0.25)" strokeWidth="0.8" />
        {/* Liver */}
        <path d="M 13 18 Q 16 14 26 14 Q 32 14 34 18 Q 34 24 27 25 Q 18 25 13 22 Z"
          fill="rgba(79,195,247,0.18)" stroke="rgba(79,195,247,0.6)" strokeWidth="0.6" />
        <text x="23" y="21" textAnchor="middle" fontSize="4" fill="rgba(79,195,247,0.9)" fontFamily="monospace">LIVER</text>
        {/* Left kidney */}
        <ellipse cx="16" cy="33" rx="4" ry="6" fill="rgba(79,195,247,0.14)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.6" />
        {/* Right kidney */}
        <ellipse cx="32" cy="33" rx="4" ry="6" fill="rgba(79,195,247,0.14)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.6" />
        <text x="24" y="33.5" textAnchor="middle" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">KIDNEYS</text>
        {/* Bladder */}
        <path d="M 19 44 Q 24 40 29 44 Q 30 49 24 50 Q 18 49 19 44 Z"
          fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.45)" strokeWidth="0.6" />
        <text x="24" y="47" textAnchor="middle" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">BLADDER</text>
      </svg>
    ),
    tags: ["Liver echogenicity", "Kidney morphology", "Bladder volume", "Hydronephrosis", "Free fluid (Morison's)"],
  },
  {
    label: "Obstetrics",
    title: "Fetal Development",
    color: "#4fc3f7",
    icon: (
      <svg viewBox="0 0 48 56" className="h-full w-full" aria-hidden>
        {/* Uterus outline */}
        <path d="M 10 20 Q 10 10 24 10 Q 38 10 38 20 L 38 40 Q 36 52 24 52 Q 12 52 10 40 Z"
          fill="rgba(79,195,247,0.06)" stroke="rgba(79,195,247,0.25)" strokeWidth="0.8" />
        {/* Fetal head */}
        <circle cx="24" cy="24" r="8" fill="rgba(79,195,247,0.14)" stroke="rgba(79,195,247,0.55)" strokeWidth="0.7" />
        {/* BPD diameter line */}
        <line x1="16" x2="32" y1="24" y2="24" stroke="rgba(79,195,247,0.6)" strokeWidth="0.5" strokeDasharray="1 1" />
        {/* HC arc hint */}
        <circle cx="24" cy="24" r="8" fill="none" stroke="rgba(79,195,247,0.3)" strokeWidth="0.4" strokeDasharray="2 1" />
        {/* Eye dot */}
        <circle cx="21" cy="23" r="0.8" fill="rgba(255,255,255,0.7)" />
        {/* Body curve */}
        <path d="M 24 32 Q 20 38 22 44 Q 24 48 26 44 Q 28 38 24 32"
          fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.45)" strokeWidth="0.6" />
        {/* Heartbeat line */}
        <polyline points="12,44 15,44 17,40 19,48 21,44 24,44"
          fill="none" stroke="rgba(79,195,247,0.8)" strokeWidth="0.7" strokeLinecap="round" />
        <text x="28" y="45" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">HR</text>
      </svg>
    ),
    tags: ["Gestational age", "BPD · HC · AC · FL", "Heart rate", "Growth curves", "Presentation"],
  },
  {
    label: "Emergency",
    title: "FAST & Pathology",
    color: "#4fc3f7",
    icon: (
      <svg viewBox="0 0 48 56" className="h-full w-full" aria-hidden>
        {/* Body silhouette */}
        <path d="M 10 14 Q 10 6 24 6 Q 38 6 38 14 L 40 50 Q 38 54 24 54 Q 10 54 8 50 Z"
          fill="rgba(79,195,247,0.05)" stroke="rgba(79,195,247,0.2)" strokeWidth="0.8" />
        {/* Pericardial window */}
        <ellipse cx="24" cy="20" rx="6" ry="5" fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.6" />
        {/* Heart icon inside */}
        <path d="M 22 19 Q 22 17 24 18 Q 26 17 26 19 Q 26 21 24 23 Q 22 21 22 19"
          fill="rgba(79,195,247,0.6)" />
        {/* Fluid pockets */}
        <ellipse cx="16" cy="32" rx="4" ry="3" fill="rgba(79,195,247,0.25)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.5" />
        <ellipse cx="32" cy="34" rx="4" ry="3" fill="rgba(79,195,247,0.25)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.5" />
        <ellipse cx="24" cy="44" rx="5" ry="3" fill="rgba(79,195,247,0.25)" stroke="rgba(79,195,247,0.5)" strokeWidth="0.5" />
        {/* Alert badge */}
        <circle cx="38" cy="12" r="6" fill="rgba(79,195,247,0.2)" stroke="rgba(79,195,247,0.8)" strokeWidth="0.7" />
        <text x="38" y="14" textAnchor="middle" fontSize="7" fill="rgba(79,195,247,1)" fontFamily="monospace" fontWeight="bold">!</text>
        {/* Fluid label */}
        <text x="24" y="40" textAnchor="middle" fontSize="3.5" fill="rgba(79,195,247,0.7)" fontFamily="monospace">FREE FLUID</text>
      </svg>
    ),
    tags: ["Pericardial window", "Perihepatic · perisplenic", "Pelvic free fluid", "Pathology flags", "Specialist referral alerts"],
  },
];

export function Capabilities() {
  const { t } = useLocale();

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

        {/* ── Mobile: 3 grouped cards ── */}
        <div className="mt-5 grid grid-cols-1 gap-3 md:hidden">
          {MOBILE_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <article
                className="relative overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/60 p-4"
                style={{ borderColor: `${group.color}22` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="relative h-[72px] w-[60px] shrink-0">
                    {group.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: `${group.color}99` }}>
                      {group.label}
                    </div>
                    <h3 className="mt-0.5 text-[14px] font-medium leading-tight tracking-tight text-fg">
                      {group.title}
                    </h3>
                    {/* Tag pills */}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {group.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2 py-0.5 font-mono text-[9px] leading-none"
                          style={{ borderColor: `${group.color}33`, color: `${group.color}cc`, background: `${group.color}0a` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle corner glow */}
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 blur-2xl"
                  style={{ background: group.color }}
                />
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Desktop: bento 6-column grid ── */}
        <div className="mt-20 hidden gap-5 md:grid lg:grid-cols-6 lg:grid-rows-2" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
          {t.capabilities.items.map((item, i) => {
            const Silhouette = SILHOUETTES[i];
            const spanClass = ["lg:col-span-2","lg:col-span-2","lg:col-span-2","lg:col-span-3","lg:col-span-2","lg:col-span-1"][i];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className={`group relative flex h-full flex-col overflow-hidden rounded-[1rem] border border-hairline bg-bg-elev-1/60 p-7 transition-all duration-700 hover:border-hairline-strong hover:bg-bg-elev-1 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${spanClass}`}>
                  <Spotlight size={320} />
                  <div className="relative z-10 h-24 overflow-hidden">
                    {Silhouette ? <Silhouette /> : null}
                  </div>
                  <h3 className="relative z-10 mt-5 text-[19px] font-medium leading-tight tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-body mt-2.5 text-[13.5px]">
                    {item.body}
                  </p>
                  <div className="absolute right-4 top-4 z-10 font-mono text-[9.5px] uppercase tracking-[0.2em] text-fg-ghost transition-colors duration-500 group-hover:text-fg-mute">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
