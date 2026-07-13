"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { Marquee } from "@/components/fx/Marquee";

export function Capabilities() {
  const { t } = useLocale();

  return (
    <section id="capabilities" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="04"
          label={t.capabilities.eyebrow}
          title={
            <>
              {t.capabilities.titleLead}
              <span className="text-ink-mute">{t.capabilities.titleTail}</span>
            </>
          }
          body={t.capabilities.body}
        />

        {/* Capability register */}
        <div className="mt-14 md:mt-20">
          {t.capabilities.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 100}>
              <div className="data-row grid-cols-1 gap-x-10 gap-y-4 py-8 lg:grid-cols-[140px_minmax(0,300px)_1fr] lg:items-start md:py-10">
                <span className="t-label pt-1">{group.label}</span>
                <h3 className="t-section text-2xl text-ink md:text-3xl">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li key={tag} className="tag-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <hr className="rule" />
        </div>
      </div>

      {/* Findings ticker — full bleed */}
      <Reveal delay={100}>
        <div className="mt-14 border-y border-hairline py-3 md:mt-20">
          <Marquee>
            {t.capabilities.items.map((item) => (
              <span
                key={item.title}
                className="mx-6 flex items-baseline gap-3 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim"
              >
                <span className="h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent" aria-hidden />
                {item.title}
                <span className="normal-case tracking-normal text-ink-ghost">{item.body}</span>
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
