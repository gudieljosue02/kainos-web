"use client";

import { Reveal } from "@/components/Reveal";

type SectionHeadProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  body?: string;
  /** Optional slot rendered to the right of the body on desktop. */
  aside?: React.ReactNode;
};

/**
 * Editorial section opener: heavy double rule, mono index row,
 * display title, optional running text. The shared skeleton that
 * makes the page read as one continuous report.
 */
export function SectionHead({ index, label, title, body, aside }: SectionHeadProps) {
  return (
    <header>
      <Reveal>
        <hr className="rule-head rule-draw is-in-view" />
        <div className="flex items-baseline justify-between gap-4 pt-3">
          <span className="t-label">
            {index} — {label}
          </span>
          <span className="t-label hidden text-ink-ghost sm:block" aria-hidden>
            Kainos Medical
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-12 lg:gap-10">
        <Reveal as="h2" className="t-section col-span-1 text-4xl sm:text-5xl md:text-6xl lg:col-span-7 lg:text-[4.25rem]">
          {title}
        </Reveal>
        <div className="lg:col-span-5">
          {body ? (
            <Reveal delay={120}>
              <p className="t-body text-[15px] md:text-[17px]">{body}</p>
            </Reveal>
          ) : null}
          {aside ? <Reveal delay={200}>{aside}</Reveal> : null}
        </div>
      </div>
    </header>
  );
}
