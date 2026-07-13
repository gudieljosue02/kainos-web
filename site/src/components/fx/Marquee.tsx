"use client";

import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
};

/** Editorial ticker: content duplicated once, scrolled at reading pace. */
export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("marquee", className)}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
