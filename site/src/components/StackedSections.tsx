"use client";

import { useEffect, useRef, Children } from "react";

const STICK_TOP = 72; // matches nav height
const PEEK_GAP = 10; // px each buried card peeks above the next

export function StackedSections({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-sc]")
    );

    const update = () => {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const stickyTop = STICK_TOP + i * PEEK_GAP;
        const isStuck = rect.top <= stickyTop + 2;

        if (!isStuck) {
          card.style.transform = "";
          return;
        }

        // Count how far the NEXT card has advanced into the viewport
        let scaleReduction = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const nextRect = cards[j].getBoundingClientRect();
          const progress = Math.max(
            0,
            Math.min(1, (window.innerHeight - nextRect.top) / window.innerHeight)
          );
          scaleReduction += progress * 0.03;
        }

        const scale = Math.max(0.82, 1 - scaleReduction);
        card.style.transform = `scale(${scale.toFixed(4)})`;
        card.style.transformOrigin = "top center";
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={containerRef}>
      {Children.toArray(children).map((child, i) => (
        <div
          key={i}
          data-sc=""
          style={{
            position: "sticky",
            top: STICK_TOP + i * PEEK_GAP,
            zIndex: 10 + i,
            willChange: "transform",
            transition: "transform 80ms linear",
          }}
          className="mx-4 mb-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#060d1c] shadow-[0_-16px_56px_rgba(0,0,0,0.18)] sm:mx-8 md:mx-14 lg:mx-auto lg:max-w-5xl [color:#f3f5f8]"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
