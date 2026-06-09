"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { useReducedMotion } from "../../features/useReducedMotion";
import { safeSvgId, pulseOpacity, pulseTransition } from "../../features/visuals/motion";

const NODES = [
  { x: 50, y: 28, r: 6 },
  { x: 22, y: 52, r: 5 },
  { x: 78, y: 48, r: 5 },
  { x: 38, y: 72, r: 4 },
  { x: 68, y: 70, r: 4 },
  { x: 50, y: 50, r: 8 },
];

const EDGES: [number, number][] = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [0, 2],
  [1, 3],
  [2, 4],
];

interface ThinkNeuralVisualProps {
  active: boolean;
}

export default function ThinkNeuralVisual({ active }: ThinkNeuralVisualProps) {
  const uid = safeSvgId(useId());
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 100 100" className="journey-visual-svg" aria-hidden>
      <defs>
        <radialGradient id={`${uid}-g`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7D2E68" stopOpacity={active ? 0.2 : 0.08} />
          <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill={`url(#${uid}-g)`} />
      {EDGES.map(([a, b], i) => {
        const n1 = NODES[a];
        const n2 = NODES[b];
        return (
          <motion.line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="#7D2E68"
            strokeWidth="0.6"
            strokeOpacity={active ? 0.45 : 0.2}
            animate={
              active && !reduced
                ? { strokeOpacity: [0.25, 0.65, 0.25] }
                : {}
            }
            transition={{ duration: 2.2, delay: i * 0.15, repeat: Infinity }}
          />
        );
      })}
      {NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#fff"
          stroke="#7D2E68"
          strokeWidth="1"
          animate={active ? pulseOpacity(reduced) : { opacity: 0.5 }}
          transition={pulseTransition(reduced, 2 + i * 0.2)}
        />
      ))}
      {active && !reduced
        ? NODES.slice(0, 4).map((n, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="none"
              stroke="#C97B84"
              strokeWidth="0.5"
              initial={{ r: n.r, opacity: 0.6 }}
              animate={{ r: n.r + 8, opacity: 0 }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
            />
          ))
        : null}
    </svg>
  );
}
