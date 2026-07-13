"use client";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();

  const indexLinks = [
    { href: "#problem", label: t.nav.problem },
    { href: "#bridge", label: t.nav.bridge },
    { href: "#how", label: t.nav.how },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#kit", label: t.nav.kit },
  ];

  const companyLinks = [
    { href: "#impact", label: t.nav.impact },
    { href: "#opportunity", label: t.nav.opportunity },
    { href: "#model", label: t.nav.model },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative mt-28 md:mt-40">
      <div className="mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <hr className="rule-head" />

        <div className="grid grid-cols-1 gap-12 pt-10 md:grid-cols-12 md:pt-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 font-display text-[16px] font-semibold tracking-tight text-ink">
              <LogoMark />
              Kainos Medical
            </div>
            <p className="t-body mt-4 max-w-sm text-[14.5px]">{t.footer.tagline}</p>
          </div>

          {/* Index */}
          <nav className="md:col-span-3" aria-label={t.footer.colIndex}>
            <h4 className="t-label">{t.footer.colIndex}</h4>
            <ul className="mt-4 space-y-2.5">
              {indexLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-baseline gap-2.5 text-[13.5px] text-ink-dim transition-colors duration-200 hover:text-ink"
                  >
                    <span className="t-label !text-[9.5px] text-ink-ghost">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="md:col-span-3" aria-label={t.footer.colCompany}>
            <h4 className="t-label">{t.footer.colCompany}</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-baseline gap-2.5 text-[13.5px] text-ink-dim transition-colors duration-200 hover:text-ink"
                  >
                    <span className="t-label !text-[9.5px] text-ink-ghost">
                      {String(i + 6).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top */}
          <div className="md:col-span-1 md:text-right">
            <a
              href="#top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-hairline-strong text-ink transition-colors duration-200 hover:border-ink"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp size={15} weight="regular" />
            </a>
          </div>
        </div>

        {/* Regulatory note — a real anchor, not a dead link */}
        <div id="disclaimer" className="mt-14 border-t border-hairline pt-6">
          <span className="t-label">{t.footer.disclaimerLabel}</span>
          <p className="mt-2 max-w-3xl font-mono text-[11px] leading-relaxed text-ink-mute">
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-2 border-t border-hairline py-6 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.copy}</span>
          <span>{t.footer.madeIn}</span>
        </div>
      </div>

      {/* Giant closing wordmark */}
      <div className="overflow-hidden" aria-hidden>
        <p className="t-index mx-auto max-w-[88rem] px-5 text-center text-[clamp(3.5rem,14vw,13rem)] md:px-10">
          KAINOS
        </p>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path
        d="M 6 18 L 12 4 L 18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.6" fill="var(--accent)" />
    </svg>
  );
}
