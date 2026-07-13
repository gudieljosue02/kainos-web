"use client";

import { Check } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function AlethiaKit() {
  const { t } = useLocale();

  return (
    <section id="kit" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="05"
          label={t.kit.eyebrow}
          title={
            <>
              {t.kit.title}{" "}
              <span className="text-ink-mute">{t.kit.subtitle}</span>
            </>
          }
          body={t.kit.body}
        />

        {/* Datasheet */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-12">
          {/* Spec table */}
          <div className="lg:col-span-8">
            {t.kit.parts.map((part, i) => (
              <Reveal key={part.label} delay={i * 100}>
                <div className="data-row grid-cols-1 gap-x-10 gap-y-2 py-7 sm:grid-cols-[110px_minmax(0,280px)_1fr] sm:items-start md:py-9">
                  <span className="t-label pt-1">{part.label}</span>
                  <h3 className="t-section text-xl text-ink md:text-2xl">{part.title}</h3>
                  <p className="t-body text-[14px] md:text-[15px]">{part.body}</p>
                </div>
              </Reveal>
            ))}
            <hr className="rule" />
          </div>

          {/* Contents card — the "one box" */}
          <Reveal delay={200} className="lg:col-span-4">
            <aside className="border border-ink bg-ink p-6 text-paper md:p-8">
              <span className="t-label !text-paper/60">Alethia Kit</span>
              <p className="t-section mt-3 text-2xl">1 ×</p>
              <ul className="mt-6 space-y-3.5">
                {t.kit.parts.map((part) => (
                  <li key={part.label} className="flex items-start gap-3 border-t border-paper/15 pt-3.5">
                    <Check size={13} weight="bold" className="mt-1 shrink-0 text-accent-sky" />
                    <span className="text-[13.5px] leading-snug text-paper/85">{part.title}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/50">
                VGA · DVI · S-Video · RCA
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
