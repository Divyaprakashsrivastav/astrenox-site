"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function AIEngineeringHeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 40, damping: 28 });
  const py = useSpring(my, { stiffness: 40, damping: 28 });
  const px2 = useTransform(px, (v) => v * -0.6);
  const py2 = useTransform(py, (v) => v * 0.8);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x * 18);
      my.set(y * 12);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="aie-hero-backdrop" aria-hidden>
      <div className="aie-hero-base" />
      <div className="aie-hero-bg-grid" />
      <div className="aie-hero-noise" />

      <motion.div className="aie-hero-aurora aie-hero-aurora--1" style={{ x: px, y: py }} />
      <motion.div className="aie-hero-aurora aie-hero-aurora--2" style={{ x: px2, y: py2 }} />
      <div className="aie-hero-ray aie-hero-ray--1" />
      <div className="aie-hero-ray aie-hero-ray--2" />

      <div className="aie-hero-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="aie-hero-particle"
            style={{
              left: `${(i * 17 + 8) % 100}%`,
              top: `${(i * 23 + 12) % 100}%`,
              animationDelay: `${(i % 8) * 0.7}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="aie-hero-glass aie-hero-glass--1" />
      <div className="aie-hero-glass aie-hero-glass--2" />
      <div className="aie-hero-vignette" />
    </div>
  );
}

export default memo(AIEngineeringHeroBackdrop);
