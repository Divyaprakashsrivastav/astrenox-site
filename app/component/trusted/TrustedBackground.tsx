"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export default function TrustedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="trusted-bg" aria-hidden>
      <div className="trusted-bg-grid" />
      <motion.div
        className="trusted-bg-orb trusted-bg-orb--1"
        animate={reducedMotion ? {} : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="trusted-bg-orb trusted-bg-orb--2"
        animate={reducedMotion ? {} : { x: [0, -24, 0], y: [0, 16, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {!reducedMotion &&
        Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="trusted-bg-particle"
            style={{
              left: `${8 + (i * 7.5) % 84}%`,
              top: `${12 + ((i * 11) % 76)}%`,
            }}
            animate={{
              y: [0, -12 - (i % 4) * 4, 0],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}
