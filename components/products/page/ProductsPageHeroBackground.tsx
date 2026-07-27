"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../../features/useReducedMotion";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 17) % 88)}%`,
  top: `${8 + ((i * 23) % 84)}%`,
  size: 1 + (i % 3),
  duration: 14 + (i % 7) * 2,
  delay: (i % 5) * 0.8,
}));

export default function ProductsPageHeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="pp-hero-bg" aria-hidden>
      <div className="pp-hero-bg-noise" />
      <div className="pp-hero-bg-grid" />
      <motion.div
        className="pp-hero-bg-aurora"
        animate={reduced ? { opacity: 0.4 } : { opacity: [0.32, 0.5, 0.32] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pp-hero-bg-ray pp-hero-bg-ray--a" />
      <div className="pp-hero-bg-ray pp-hero-bg-ray--b" />
      <div className="pp-hero-bg-orb" />
      <div className="pp-hero-bg-particles">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="pp-hero-bg-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={
              reduced
                ? { opacity: 0.25 }
                : {
                    opacity: [0.15, 0.55, 0.15],
                    y: [0, -18 - (p.id % 4) * 6, 0],
                    x: [0, (p.id % 2 === 0 ? 1 : -1) * (6 + (p.id % 5)), 0],
                  }
            }
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
