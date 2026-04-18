"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/fx/Spotlight";
import { ScanReveal } from "@/components/fx/ScanReveal";

/**
 * Custom anatomy silhouette components — abstract, not medically literal,
 * but recognizable as organ/structure silhouettes.
 */
const SILHOUETTES = [
  // Liver — wedge shape
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path
        d="M 12 42 Q 18 22 38 20 Q 62 15 82 28 Q 92 35 88 50 Q 78 60 60 58 Q 38 55 22 55 Q 10 52 12 42 Z"
        fill="url(#grad-liver)"
        stroke="rgba(79,195,247,0.4)"
        strokeWidth="0.6"
      />
      <defs>
        <linearGradient id="grad-liver" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(79,195,247,0.22)" />
          <stop offset="100%" stopColor="rgba(79,195,247,0.04)" />
        </linearGradient>
      </defs>
    </svg>
  ),
  // Kidneys — pair of beans
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path
        d="M 28 22 Q 18 22 18 35 Q 18 50 28 52 Q 40 52 42 40 Q 44 22 34 20 Q 30 20 28 22 Z"
        fill="url(#grad-kidney)"
        stroke="rgba(79,195,247,0.4)"
        strokeWidth="0.6"
      />
      <path
        d="M 72 22 Q 62 22 62 35 Q 62 50 72 52 Q 84 52 86 40 Q 88 22 78 20 Q 74 20 72 22 Z"
        fill="url(#grad-kidney)"
        stroke="rgba(79,195,247,0.4)"
        strokeWidth="0.6"
      />
      <defs>
        <linearGradient id="grad-kidney" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(79,195,247,0.22)" />
          <stop offset="100%" stopColor="rgba(79,195,247,0.04)" />
        </linearGradient>
      </defs>
    </svg>
  ),
  // Bladder — rounded shape
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path
        d="M 35 25 Q 50 18 65 25 Q 72 32 70 45 Q 65 56 50 56 Q 35 56 30 45 Q 28 32 35 25 Z"
        fill="url(#grad-bladder)"
        stroke="rgba(79,195,247,0.4)"
        strokeWidth="0.6"
      />
      <line
        x1="35"
        x2="65"
        y1="38"
        y2="38"
        stroke="rgba(79,195,247,0.3)"
        strokeWidth="0.4"
        strokeDasharray="1.5 1.5"
      />
      <defs>
        <linearGradient id="grad-bladder" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(79,195,247,0.2)" />
          <stop offset="100%" stopColor="rgba(79,195,247,0.04)" />
        </linearGradient>
      </defs>
    </svg>
  ),
  // Fetal development — abstract fetus curl
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <circle
        cx="55"
        cy="32"
        r="11"
        fill="url(#grad-fetal)"
        stroke="rgba(79,195,247,0.4)"
        strokeWidth="0.6"
      />
      <path
        d="M 55 43 Q 40 45 35 52 Q 32 58 40 58 Q 52 58 58 50"
        fill="url(#grad-fetal)"
        stroke="rgba(79,195,247,0.4)"
        strokeWidth="0.6"
      />
      <circle cx="50" cy="30" r="1" fill="rgba(255,255,255,0.8)" />
      <defs>
        <linearGradient id="grad-fetal" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(79,195,247,0.22)" />
          <stop offset="100%" stopColor="rgba(79,195,247,0.04)" />
        </linearGradient>
      </defs>
    </svg>
  ),
  // FAST windows — 4 dots on a torso outline
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <path
        d="M 35 10 Q 50 6 65 10 L 70 60 Q 50 62 30 60 Z"
        fill="rgba(255,255,255,0.02)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.6"
      />
      {[
        [50, 18, "RUQ"],
        [62, 30, "LUQ"],
        [38, 40, "PEL"],
        [52, 50, "SUB"],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x as number}
            cy={y as number}
            r="2.5"
            fill="rgba(79,195,247,0.8)"
          />
          <circle
            cx={x as number}
            cy={y as number}
            r="5"
            fill="none"
            stroke="rgba(79,195,247,0.35)"
            strokeWidth="0.5"
          />
        </g>
      ))}
    </svg>
  ),
  // Pathology flags — document with alert
  () => (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <rect
        x="30"
        y="16"
        width="40"
        height="44"
        rx="3"
        fill="rgba(255,255,255,0.02)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.6"
      />
      {[28, 34, 40].map((y) => (
        <line
          key={y}
          x1="36"
          x2="64"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.5"
        />
      ))}
      <circle
        cx="64"
        cy="48"
        r="6"
        fill="rgba(239,91,91,0.25)"
        stroke="rgba(239,91,91,0.8)"
        strokeWidth="0.6"
      />
      <text
        x="64"
        y="50"
        textAnchor="middle"
        fontSize="6"
        fill="rgba(239,91,91,1)"
        fontFamily="monospace"
        fontWeight="bold"
      >
        !
      </text>
    </svg>
  ),
];

export function Capabilities() {
  const { t } = useLocale();

  return (
    <section
      id="capabilities"
      className="relative isolate overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">
                <span className="eyebrow-dot" />
                {t.capabilities.eyebrow}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="h2" className="h-section text-[2.25rem] sm:text-5xl md:text-6xl">
              {t.capabilities.titleLead}
              <ScanReveal text={t.capabilities.titleTail} />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-body mt-7 max-w-2xl text-lg">
                {t.capabilities.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Bento — asymmetric */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-6 lg:grid-rows-2">
          {t.capabilities.items.map((item, i) => {
            const Silhouette = SILHOUETTES[i];
            // Asymmetric spans: 0->2 cols, 1->2 cols, 2->2 cols | 3->3 cols, 4->2 cols, 5->1 col (desktop 6 cols)
            const spanClass = [
              "lg:col-span-2",
              "lg:col-span-2",
              "lg:col-span-2",
              "lg:col-span-3",
              "lg:col-span-2",
              "lg:col-span-1",
            ][i];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-hairline bg-bg-elev-1/60 p-6 transition-all duration-700 hover:border-hairline-strong hover:bg-bg-elev-1 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:p-7 ${spanClass}`}
                >
                  <Spotlight size={320} />
                  <div className="relative z-10 h-20 overflow-hidden md:h-24">
                    {Silhouette ? <Silhouette /> : null}
                  </div>
                  <h3 className="relative z-10 mt-5 text-[19px] font-medium leading-tight tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-body mt-2.5 text-[13.5px] leading-snug">
                    {item.body}
                  </p>

                  {/* Corner marker */}
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
