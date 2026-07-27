"use client";

import { motion } from "framer-motion";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop, pulseOpacity, pulseTransition } from "./motion";

const nodes = [
  { cx: 160, cy: 75, hub: true },
  { cx: 70, cy: 50 },
  { cx: 250, cy: 45 },
  { cx: 90, cy: 120 },
  { cx: 230, cy: 115 },
  { cx: 300, cy: 80 },
];

const edges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 3], [2, 4], [2, 5],
];

export function ResearchVisual({ active, reducedMotion }: VisualProps) {
  const speed = active ? 0.7 : 1;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {[40, 80, 120, 160, 200, 240, 280].map((x) => (
        <line key={x} x1={x} y1={24} x2={x} y2={156} stroke={COLORS.lineMuted} strokeWidth={0.5} strokeOpacity={0.4} />
      ))}

      <motion.rect
        x={118}
        y={88}
        width={24}
        height={52}
        rx={2}
        fill={COLORS.fill}
        stroke={COLORS.primary}
        strokeWidth={1}
        animate={reducedMotion ? {} : { y: [88, 84, 88] }}
        transition={loop(reducedMotion, { duration: 3.5 * speed, ease: "easeInOut" })}
      />
      <line x1={130} y1={88} x2={130} y2={68} stroke={COLORS.secondary} strokeWidth={1} />
      <motion.circle
        cx={130}
        cy={64}
        r={5}
        fill="none"
        stroke={COLORS.secondary}
        strokeWidth={0.75}
        animate={reducedMotion ? {} : pulseOpacity(reducedMotion)}
        transition={pulseTransition(reducedMotion, 2 * speed)}
      />

      {edges.map(([a, b], i) => {
        const na = nodes[a];
        const nb = nodes[b];
        return (
          <motion.line
            key={i}
            x1={na.cx}
            y1={na.cy}
            x2={nb.cx}
            y2={nb.cy}
            stroke={COLORS.primary}
            strokeWidth={1}
            strokeOpacity={active ? 0.45 : 0.28}
            animate={reducedMotion ? {} : { strokeOpacity: [0.2, 0.55, 0.2] }}
            transition={loop(reducedMotion, { duration: 2.4 * speed, delay: i * 0.1 })}
          />
        );
      })}

      {!reducedMotion &&
        edges.slice(0, 4).map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          return (
            <motion.circle
              key={`f-${i}`}
              r={2}
              fill={COLORS.secondary}
              animate={{ cx: [na.cx, nb.cx], cy: [na.cy, nb.cy], opacity: [0, 1, 0] }}
              transition={loop(reducedMotion, { duration: 2 * speed, delay: i * 0.4, ease: "linear" })}
            />
          );
        })}

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.hub ? 7 : 4}
          fill={n.hub ? COLORS.primary : COLORS.fill}
          stroke={COLORS.primary}
          strokeWidth={1}
          animate={reducedMotion ? {} : n.hub ? pulseOpacity(reducedMotion) : { opacity: [0.5, 1, 0.5] }}
          transition={pulseTransition(reducedMotion, 2.2 * speed + i * 0.08)}
        />
      ))}

      {["α", "β", "γ"].map((s, i) => (
        <text
          key={s}
          x={48 + i * 100}
          y={36}
          fontSize={9}
          fill={COLORS.primary}
          fillOpacity={0.5}
          fontFamily="system-ui,sans-serif"
        >
          Trial {s}
        </text>
      ))}
    </svg>
  );
}
