"use client";

import { useEffect, useState } from "react";
import { List, X, ArrowUpRight, Globe } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

export function Navigation() {
  const { t, locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links: { href: string; label: string }[] = [
    { href: "#problem", label: t.nav.problem },
    { href: "#bridge", label: t.nav.bridge },
    { href: "#how", label: t.nav.how },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#kit", label: t.nav.kit },
    { href: "#impact", label: t.nav.impact },
    { href: "#opportunity", label: t.nav.opportunity },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-black/[0.06] bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center px-5 md:px-8">

          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-[#0a1428]"
            aria-label="Kainos Medical"
          >
            <LogoMark />
            <span>Kainos</span>
          </a>

          {/* Desktop links — centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-md px-3 py-1.5 text-[13px] font-medium text-[#64748b] transition-colors duration-200 hover:text-[#0a1428]"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] overflow-hidden rounded-full bg-[#0f2a54]/30">
                  <span className="absolute inset-y-0 -left-full w-full rounded-full bg-gradient-to-r from-transparent via-[#0f2a54] to-transparent opacity-0 transition-none group-hover:opacity-100 group-hover:[animation:nav-shimmer_500ms_ease-out_forwards]" />
                </span>
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2">
            {/* Locale toggle — always visible */}
            <button
              type="button"
              onClick={toggle}
              aria-label={t.lang.label}
              className="flex h-8 items-center gap-1.5 rounded-full border border-[#0a1428]/25 px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0a1428] transition-all duration-200 hover:border-[#0f2a54] hover:bg-[#0f2a54]/5"
            >
              <Globe size={13} weight="regular" />
              {locale === "en" ? "ES" : "EN"}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden rounded-full bg-[#0a1428] px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#143a74] active:scale-[0.98] md:inline-flex"
            >
              {t.nav.primaryCta}
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              aria-label="Menu"
              aria-expanded={open}
              className="flex h-8 w-8 items-center justify-center text-[#64748b] transition-colors duration-200 hover:text-[#0a1428] lg:hidden"
            >
              <span className="relative h-4 w-4">
                <List
                  size={16}
                  weight="regular"
                  className={cn("absolute inset-0 transition-all duration-300", open ? "rotate-90 opacity-0" : "opacity-100")}
                />
                <X
                  size={16}
                  weight="regular"
                  className={cn("absolute inset-0 transition-all duration-300", open ? "opacity-100" : "-rotate-90 opacity-0")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative flex h-full flex-col justify-center px-6 pt-14">
          <nav className="flex flex-col">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-black/[0.06] py-4 text-[22px] font-medium text-[#0a1428] transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{
                  transitionDelay: open ? `${i * 45 + 60}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {link.label}
                <ArrowUpRight size={16} weight="regular" className="text-[#94a3b8]" />
              </a>
            ))}
          </nav>

          <div
            className={cn(
              "mt-6 flex flex-col gap-3 transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{
              transitionDelay: open ? `${links.length * 45 + 100}ms` : "0ms",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#0a1428] py-3.5 text-[14px] font-medium text-white"
            >
              {t.nav.primaryCta}
              <ArrowUpRight size={14} weight="bold" />
            </a>
            <button
              type="button"
              onClick={() => { toggle(); setOpen(false); }}
              className="py-2 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-[#94a3b8]"
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
      <circle cx="12" cy="12" r="10.5" stroke="#0a1428" strokeWidth="1" opacity="0.2" />
      <path
        d="M 6 18 L 12 4 L 18 18"
        stroke="#0a1428"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.6" fill="#4fc3f7" />
    </svg>
  );
}
