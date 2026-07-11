"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 19) % 88)}%`,
  delay: (i % 5) * 0.7,
  duration: 10 + (i % 4) * 2,
}));

export default function FooterPremiumBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="ft-bg" aria-hidden>
      <div className="ft-bg-base" />
      <motion.div
        className="ft-bg-nebula ft-bg-nebula--1"
        animate={reduced ? {} : { x: ["-2%", "2%", "-2%"], y: ["0%", "-1%", "0%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ft-bg-nebula ft-bg-nebula--2"
        animate={reduced ? {} : { x: ["2%", "-1%", "2%"], y: ["0%", "1%", "0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ft-bg-radial" />
      <div className="ft-bg-aurora" />
      <div className="ft-bg-vignette" />
      <div className="ft-bg-noise" />
      <div className="ft-bg-sweep" />
      <div className="ft-bg-particles">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="ft-bg-particle"
            style={{ left: p.left, bottom: `${8 + (p.id % 6) * 12}%` }}
            animate={
              reduced
                ? { opacity: 0.15 }
                : { y: [0, -28, 0], opacity: [0.08, 0.35, 0.08] }
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
