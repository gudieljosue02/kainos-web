import { cn } from "@/lib/cn";

type LetterRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  light?: boolean;
};

const KEYFRAMES = `@keyframes letter-reveal{from{clip-path:inset(0 100% 0 0);transform:translateY(3px)}to{clip-path:inset(0 0% 0 0);transform:translateY(0)}}`;

const GRADIENT_DARK = "linear-gradient(110deg,#ffffff 0%,#e4eef9 28%,#7bb5e3 52%,#4fc3f7 64%,#e4eef9 82%,#ffffff 100%)";
const GRADIENT_LIGHT = "linear-gradient(110deg,#0a1428 0%,#0f2a54 28%,#143a74 50%,#4fc3f7 64%,#143a74 80%,#0a1428 100%)";

export function LetterReveal({
  text,
  className,
  delay = 0,
  stagger = 55,
  duration = 780,
  light = false,
}: LetterRevealProps) {
  const GRADIENT = light ? GRADIENT_LIGHT : GRADIENT_DARK;
  const n = text.length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <span className={cn("inline-block", className)} aria-label={text}>
        {text.split("").map((char, i) => {
          const isSpace = char === " ";
          const bgPos = n > 1 ? `${(i / (n - 1)) * 100}% 0` : "0% 0";
          return (
            <span
              key={`${char}-${i}`}
              aria-hidden
              className="inline-block"
              style={{
                background: GRADIENT,
                backgroundSize: `${n * 100}% 100%`,
                backgroundPosition: bgPos,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: `letter-reveal ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}ms both`,
              }}
            >
              {isSpace ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </>
  );
}
