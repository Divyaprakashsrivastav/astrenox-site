"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export default function EcosystemBackground({ active }: { active: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div className="eco-network-bg" aria-hidden>
      <div className="eco-network-grid mesh-grid opacity-30" />
      <svg className="eco-network-topology" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 12 }).map((_, i) => {
          const x1 = 100 + (i % 4) * 180;
          const y1 = 80 + Math.floor(i / 4) * 200;
          const x2 = x1 + 120;
          const y2 = y1 + 60;
          return (
            <motion.path
              key={i}
              d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${y1 - 40} ${x2} ${y2}`}
              fill="none"
              stroke="#7D2E68"
              strokeWidth="0.5"
              strokeOpacity="0.12"
              animate={
                active && !reduced
                  ? { strokeOpacity: [0.08, 0.2, 0.08] }
                  : {}
              }
              transition={{ duration: 4 + i * 0.3, repeat: Infinity }}
            />
          );
        })}
      </svg>
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="eco-network-particle"
          style={{
            left: `${8 + ((i * 23) % 84)}%`,
            top: `${10 + ((i * 31) % 80)}%`,
          }}
          animate={
            active && !reduced
              ? { opacity: [0.1, 0.4, 0.1], y: [0, -6, 0] }
              : { opacity: 0.15 }
          }
          transition={{ duration: 3.5 + (i % 4), delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
