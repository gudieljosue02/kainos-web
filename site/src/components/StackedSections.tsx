"use client";

import { useEffect, useRef, Children } from "react";

const STICK_TOP = 72;
const PEEK_GAP = 10;

export function StackedSections({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const desktop = window.innerWidth >= 768;
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-sc]")
    );

    // Apply sticky + top on desktop only
    cards.forEach((card, i) => {
      if (desktop) {
        card.style.position = "sticky";
        card.style.top = `${STICK_TOP + i * PEEK_GAP}px`;
      }
    });

    if (!desktop) return;

    const update = () => {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const isStuck = rect.top <= STICK_TOP + i * PEEK_GAP + 2;
        if (!isStuck) { card.style.transform = ""; return; }

        let scaleReduction = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const progress = Math.max(0, Math.min(1,
            (window.innerHeight - cards[j].getBoundingClientRect().top) / window.innerHeight
          ));
          scaleReduction += progress * 0.03;
        }
        card.style.transform = `scale(${Math.max(0.82, 1 - scaleReduction).toFixed(4)})`;
        card.style.transformOrigin = "top center";
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-4 px-3 pb-4 md:block md:px-0 md:pb-0">
      {Children.toArray(children).map((child, i) => (
        <div
          key={i}
          data-sc=""
          style={{ zIndex: 10 + i, willChange: "transform", transition: "transform 80ms linear" }}
          className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#060d1c] [color:#f3f5f8] shadow-[0_4px_20px_rgba(0,0,0,0.12)] md:mx-8 md:mb-4 md:shadow-[0_-16px_56px_rgba(0,0,0,0.18)] lg:mx-auto lg:max-w-5xl"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
