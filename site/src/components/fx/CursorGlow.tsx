"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed-position soft glow that follows the cursor across the page.
 * Adds a premium, subtle ambient presence. Hidden on touch devices
 * and for users who prefer reduced motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const pingRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarse) {
      el.style.display = "none";
      return;
    }

    let raf = 0;
    let tx = -9999;
    let ty = -9999;
    let cx = -9999;
    let cy = -9999;

    const loop = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      el.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      if (Math.abs(cx - tx) > 0.5 || Math.abs(cy - ty) > 0.5) {
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    // Sonar ping on click — ultrasound "probe contact"
    const onDown = (e: PointerEvent) => {
      if (coarse) return;
      const ping = document.createElement("span");
      ping.className = "pointer-events-none fixed z-[60] h-6 w-6 rounded-full";
      ping.style.left = `${e.clientX - 12}px`;
      ping.style.top = `${e.clientY - 12}px`;
      ping.style.border = "1px solid rgba(79,195,247,0.9)";
      ping.style.animation = "sonar-contact 720ms cubic-bezier(0.16,1,0.3,1) forwards";
      document.body.appendChild(ping);
      setTimeout(() => ping.remove(), 780);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[0] h-[640px] w-[640px] rounded-full opacity-0 transition-opacity duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background:
            "radial-gradient(circle, rgba(79,195,247,0.09) 0%, rgba(79,195,247,0.03) 30%, transparent 60%)",
          mixBlendMode: "screen",
          willChange: "transform",
        }}
      >
        <span ref={pingRef} aria-hidden />
      </div>
      <style jsx global>{`
        @keyframes sonar-contact {
          0% {
            transform: scale(0.4);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(79, 195, 247, 0.45);
          }
          60% {
            opacity: 0.6;
          }
          100% {
            transform: scale(6);
            opacity: 0;
            box-shadow: 0 0 0 12px rgba(79, 195, 247, 0);
          }
        }
      `}</style>
    </>
  );
}
