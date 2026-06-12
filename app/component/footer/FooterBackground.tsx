"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

interface FooterBackgroundProps {
  active?: boolean;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 17) % 84)}%`,
  top: `${10 + ((i * 23) % 75)}%`,
  size: 2 + (i % 3),
  duration: 12 + (i % 6) * 2,
  delay: (i % 5) * 0.8,
}));

export default function FooterBackground({ active = true }: FooterBackgroundProps) {
  const reduced = useReducedMotion();
  const particles = useMemo(() => PARTICLES, []);

  return (
    <div className="ax-footer-bg" aria-hidden>
      <div className="ax-footer-bg-base" />
      <div className="ax-footer-bg-radial" />
      <div className="footer-grain ax-footer-grain" />
      <motion.div
        className="ax-footer-orb"
        animate={active && !reduced ? { x: ["-12%", "12%", "-12%"] } : { x: 0 }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ax-footer-particles">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="ax-footer-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={
              active && !reduced
                ? {
                    y: [0, -14, 0],
                    opacity: [0.15, 0.45, 0.15],
                  }
                : { opacity: 0.2 }
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
