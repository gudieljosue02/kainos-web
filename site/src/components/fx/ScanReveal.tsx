"use client";

import { useEffect, useRef, useState } from "react";
import { LetterReveal } from "@/components/fx/LetterReveal";
import { cn } from "@/lib/cn";

type ScanRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function ScanReveal({ text, className, delay = 0 }: ScanRevealProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.setTimeout(() => setActive(true), delay);
            io.unobserve(e.target);
            break;
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      {active ? (
        <LetterReveal text={text} delay={0} stagger={60} duration={350} />
      ) : (
        <span className="opacity-0">{text}</span>
      )}
      {active && (
        <span className="pointer-events-none absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#4fc3f7] via-[#4fc3f7]/40 to-transparent [animation:scan-underline_900ms_cubic-bezier(0.16,1,0.3,1)_400ms_forwards]" />
      )}
    </span>
  );
}
