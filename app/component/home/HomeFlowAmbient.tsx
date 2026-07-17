"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

export default function HomeFlowAmbient() {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    function resize() {
      const el = mountRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--home-flow-w", `${Math.max(rect.width, 1)}px`);
      el.style.setProperty("--home-flow-h", `${Math.max(rect.height, 1)}px`);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    return () => {
      ro.disconnect();
    };
  }, [reduced]);

  return (
    <div ref={mountRef} className="home-flow-ambient" aria-hidden="true">
      <div className="home-flow-vignette" />
      <div className="home-flow-noise" />
    </div>
  );
}
