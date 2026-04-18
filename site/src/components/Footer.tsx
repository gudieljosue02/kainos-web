"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.07] bg-[#060d1c] pt-20 pb-12 text-[#f3f5f8]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <LogoMark />
              <span className="text-[16px] font-medium tracking-tight">
                Kainos Medical
              </span>
            </div>
            <p className="text-body mt-5 max-w-sm text-[14.5px]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Right: links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterCol
              label="Product"
              links={[
                { href: "#bridge", label: t.nav.bridge },
                { href: "#how", label: t.nav.how },
                { href: "#capabilities", label: t.nav.capabilities },
                { href: "#kit", label: t.nav.kit },
              ]}
            />
            <FooterCol
              label="Company"
              links={[
                { href: "#impact", label: t.nav.impact },
                { href: "#opportunity", label: t.nav.opportunity },
                { href: "#contact", label: t.nav.contact },
              ]}
            />
            <FooterCol
              label="Legal"
              links={[
                { href: "#disclaimer", label: "Disclaimer" },
                { href: "#privacy", label: "Privacy" },
              ]}
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-16 max-w-3xl font-mono text-[11px] leading-relaxed text-fg-mute">
          {t.footer.disclaimer}
        </p>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-hairline pt-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fg-mute sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.copy}</span>
          <span>Designed &amp; engineered in Latin America</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-mute">
        {label}
      </h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[13.5px] text-fg-dim transition-colors duration-300 hover:text-fg"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="10.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M 6 18 L 12 4 L 18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.6" fill="#4fc3f7" />
    </svg>
  );
}
