"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

interface EcosystemParticleFieldProps {
  active: boolean;
}

const PARTICLE_COUNT = 9;

function buildParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: 8 + ((i * 17) % 84),
    y: 6 + ((i * 23) % 88),
    size: 0.35 + (i % 3) * 0.15,
    duration: 5 + (i % 5) * 0.8,
    delay: (i % 7) * 0.35,
  }));
}

const LINKS = [
  [0, 3],
  [2, 7],
  [4, 8],
] as const;

export default function EcosystemParticleField({ active }: EcosystemParticleFieldProps) {
  const reduced = useReducedMotion();
  const particles = useMemo(() => buildParticles(), []);

  if (reduced) return null;

  return (
    <svg
      viewBox="0 0 100 100"
      className="tech-eco-particles-svg"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {LINKS.map(([a, b], i) => {
        const p1 = particles[a]!;
        const p2 = particles[b]!;
        return (
          <motion.line
            key={`link-${a}-${b}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="#7D2E68"
            strokeWidth="0.08"
            initial={{ opacity: 0 }}
            animate={
              active
                ? { opacity: [0, 0.12, 0] }
                : { opacity: 0 }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 1 + i * 0.9,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {particles.map((p) => (
        <motion.circle
          key={p.id}
          cx={p.x}
          cy={p.y}
          r={p.size}
          fill="#7D2E68"
          initial={{ opacity: 0 }}
          animate={
            active
              ? {
                  opacity: [0, 0.18, 0.08, 0.2, 0],
                  cy: [p.y, p.y - 1.2, p.y, p.y + 0.6, p.y],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: 0.8 + p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
