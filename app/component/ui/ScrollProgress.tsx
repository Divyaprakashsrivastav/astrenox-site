"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const bar = barRef.current;
    if (!bar) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div ref={barRef} className="scroll-progress" aria-hidden>
      <span />
    </div>
  );
}
