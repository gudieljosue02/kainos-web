"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Bridge() {
  const { t } = useLocale();

  return (
    <section id="bridge" className="pt-28 md:pt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <SectionHead
          index="02"
          label={t.bridge.eyebrow}
          title={
            <>
              {t.bridge.title}{" "}
              <span className="text-ink-mute">{t.bridge.titleHighlight}</span>
            </>
          }
          body={t.bridge.body}
        />

        {/* Signal path diagram */}
        <Reveal delay={150}>
          <div className="mt-14 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center md:mt-20">
            <PathNode
              label="VGA · DVI · RCA"
              title={t.bridge.diagram.inTitle}
              caption={t.bridge.diagram.inCaption}
            />
            <PathLink />
            <PathNode
              label="60 fps"
              title={t.bridge.diagram.midTitle}
              caption={t.bridge.diagram.midCaption}
            />
            <PathLink />
            <PathNode
              label="<100 ms"
              title={t.bridge.diagram.outTitle}
              caption={t.bridge.diagram.outCaption}
              accent
            />
          </div>
        </Reveal>

        {/* Steps ledger */}
        <div className="mt-14 md:mt-20">
          {t.bridge.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="data-row grid-cols-1 gap-x-10 gap-y-3 py-7 sm:grid-cols-[120px_minmax(0,320px)_1fr] sm:items-start md:py-9">
                <span className="t-index text-5xl md:text-6xl">{step.number}</span>
                <h3 className="t-section text-xl text-ink md:text-2xl">{step.title}</h3>
                <p className="t-body text-[14px] md:text-[15.5px]">{step.body}</p>
              </div>
            </Reveal>
          ))}
          <hr className="rule" />
        </div>
      </div>
    </section>
  );
}

function PathNode({
  label,
  title,
  caption,
  accent,
}: {
  label: string;
  title: string;
  caption: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col gap-1 border px-5 py-4 ${
        accent ? "border-ink bg-ink text-paper" : "border-hairline-strong bg-card"
      }`}
    >
      <span className={`t-label ${accent ? "!text-paper/60" : ""}`}>{label}</span>
      <span className="font-display text-[17px] font-medium">{title}</span>
      <span className={`text-[12px] ${accent ? "text-paper/70" : "text-ink-mute"}`}>
        {caption}
      </span>
    </div>
  );
}

function PathLink() {
  return (
    <div className="flex items-center justify-center px-1 py-1 text-ink-mute sm:px-2" aria-hidden>
      <ArrowRight size={14} weight="regular" className="rotate-90 sm:rotate-0" />
    </div>
  );
}
