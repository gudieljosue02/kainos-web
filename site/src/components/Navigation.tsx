"use client";

import { useEffect, useState } from "react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

const SECTION_IDS = [
  "problem",
  "bridge",
  "how",
  "capabilities",
  "kit",
  "impact",
  "opportunity",
  "model",
  "contact",
] as const;

export function Navigation() {
  const { t, locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in the reading band
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: { href: string; id: string; label: string }[] = [
    { href: "#problem", id: "problem", label: t.nav.problem },
    { href: "#bridge", id: "bridge", label: t.nav.bridge },
    { href: "#how", id: "how", label: t.nav.how },
    { href: "#capabilities", id: "capabilities", label: t.nav.capabilities },
    { href: "#kit", id: "kit", label: t.nav.kit },
    { href: "#impact", id: "impact", label: t.nav.impact },
    { href: "#opportunity", id: "opportunity", label: t.nav.opportunity },
    { href: "#model", id: "model", label: t.nav.model },
  ];

  return (
    <>
      <a href="#main" className="skip-link">
        {locale === "en" ? "Skip to content" : "Saltar al contenido"}
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-hairline bg-[rgba(242,244,245,0.92)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-[88rem] items-center px-5 md:px-10">
          {/* Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-ink"
            aria-label="Kainos Medical"
          >
            <LogoMark />
            <span>
              Kainos
              <span className="hidden text-ink-mute sm:inline"> Medical</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative whitespace-nowrap px-2.5 py-2 text-[12.5px] font-medium transition-colors duration-200 xl:px-3",
                  active === link.id ? "text-ink" : "text-ink-mute hover:text-ink"
                )}
              >
                <span
                  className={cn(
                    "absolute inset-x-2.5 bottom-0.5 h-[1.5px] origin-left bg-accent transition-transform duration-300 xl:inset-x-3",
                    active === link.id ? "scale-x-100" : "scale-x-0"
                  )}
                  aria-hidden
                />
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="ml-auto flex items-center gap-3">
            {/* Locale toggle — squared segmented control */}
            <button
              type="button"
              onClick={toggle}
              aria-label={t.lang.label}
              className="relative flex h-8 items-center rounded-[3px] border border-hairline-strong p-[2px] font-mono text-[10.5px] font-bold uppercase tracking-[0.08em]"
            >
              <span
                className={cn(
                  "absolute top-[2px] h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-[2px] bg-ink transition-all duration-300",
                  locale === "en" ? "left-[2px]" : "left-[calc(50%)]"
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "relative z-10 w-8 text-center transition-colors duration-200",
                  locale === "en" ? "text-paper" : "text-ink-mute"
                )}
              >
                EN
              </span>
              <span
                className={cn(
                  "relative z-10 w-8 text-center transition-colors duration-200",
                  locale === "es" ? "text-paper" : "text-ink-mute"
                )}
              >
                ES
              </span>
            </button>

            {/* CTA — wrapper controls visibility: .btn-ink is unlayered CSS and
                would otherwise override Tailwind's layered `hidden` utility */}
            <span className="hidden md:block">
              <a href="#contact" className="btn-ink !gap-2.5 !px-4 !py-2 text-[12.5px]">
                {t.nav.primaryCta}
                <ArrowUpRight size={13} weight="bold" className="btn-arrow" />
              </a>
            </span>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              aria-label={locale === "en" ? "Menu" : "Menú"}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center border border-hairline-strong rounded-[3px] text-ink lg:hidden"
            >
              <span className="relative h-4 w-4">
                <List
                  size={16}
                  weight="regular"
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    open ? "rotate-90 opacity-0" : "opacity-100"
                  )}
                />
                <X
                  size={16}
                  weight="regular"
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    open ? "opacity-100" : "-rotate-90 opacity-0"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-page index */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-paper transition-opacity duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col justify-end px-6 pb-10 pt-24">
          <nav className="flex flex-col" aria-label={locale === "en" ? "Sections" : "Secciones"}>
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-baseline gap-4 border-t border-hairline py-3 transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                )}
                style={{
                  transitionDelay: open ? `${i * 40 + 80}ms` : "0ms",
                  transitionTimingFunction: "var(--ease-out)",
                }}
              >
                <span className="t-label w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-section text-[26px] text-ink">{link.label}</span>
              </a>
            ))}
          </nav>

          <div
            className={cn(
              "mt-8 flex flex-col gap-3 transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            )}
            style={{
              transitionDelay: open ? `${links.length * 40 + 120}ms` : "0ms",
              transitionTimingFunction: "var(--ease-out)",
            }}
          >
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ink !justify-center !py-3.5"
            >
              {t.nav.primaryCta}
              <ArrowUpRight size={14} weight="bold" className="btn-arrow" />
            </a>
            <button
              type="button"
              onClick={() => {
                toggle();
                setOpen(false);
              }}
              className="t-label py-2 text-center"
            >
              {locale === "en" ? "Español" : "English"}
            </button>
          </div>
        </div>
      </div>
    </>
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
