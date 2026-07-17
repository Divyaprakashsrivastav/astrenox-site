"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

export default function PremiumCursor() {
  const reduced = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let visible = false;
    let hovering = false;
    let running = false;

    const apply = () => {
      raf = 0;

      ringX += (x - ringX) * 0.22;
      ringY += (y - ringY) * 0.22;

      const opacity = visible ? "1" : "0";
      const dotScale = hovering ? "0.5" : "1";
      const ringScale = hovering ? "1.6" : "1";

      dot.style.opacity = opacity;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.style.opacity = opacity;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      const settled =
        Math.abs(x - ringX) < 0.35 && Math.abs(y - ringY) < 0.35 && !hovering;

      if (!settled || visible) {
        if (Math.abs(x - ringX) >= 0.35 || Math.abs(y - ringY) >= 0.35) {
          raf = window.requestAnimationFrame(apply);
          return;
        }
      }

      running = false;
    };

    const schedule = () => {
      if (running) return;
      running = true;
      raf = window.requestAnimationFrame(apply);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
      schedule();
    };

    const onLeave = () => {
      visible = false;
      schedule();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const next = !!target.closest("a, button, [data-cursor-hover]");
      if (next !== hovering) {
        hovering = next;
        schedule();
      }
    };

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div ref={dotRef} className="ax-cursor-dot" aria-hidden={true} />
      <div ref={ringRef} className="ax-cursor-ring" aria-hidden={true} />
    </>
  );
}
