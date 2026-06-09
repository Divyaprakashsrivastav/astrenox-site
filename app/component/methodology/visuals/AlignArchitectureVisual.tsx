"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../../features/useReducedMotion";

const BLOCKS = [
  { x: 12, y: 18, w: 28, h: 14, label: "Data" },
  { x: 60, y: 14, w: 28, h: 14, label: "Agents" },
  { x: 8, y: 58, w: 24, h: 12, label: "Policy" },
  { x: 38, y: 52, w: 24, h: 16, label: "Core" },
  { x: 68, y: 56, w: 24, h: 12, label: "Ops" },
];

interface AlignArchitectureVisualProps {
  active: boolean;
}

export default function AlignArchitectureVisual({ active }: AlignArchitectureVisualProps) {
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 100 100" className="journey-visual-svg" aria-hidden>
      {[
        [38, 52, 26, 18],
        [60, 14, 38, 52],
        [8, 58, 38, 52],
        [68, 56, 38, 52],
        [12, 18, 38, 52],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.path
          key={i}
          d={`M ${x1} ${y1} L ${x2} ${y2}`}
          fill="none"
          stroke="#7D2E68"
          strokeWidth="0.5"
          strokeDasharray="3 4"
          strokeOpacity={active ? 0.5 : 0.2}
          animate={
            active && !reduced
              ? { strokeDashoffset: [0, -14] }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {BLOCKS.map((b, i) => (
        <g key={b.label}>
          <motion.rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="2"
            fill={b.label === "Core" ? "rgba(125,46,104,0.12)" : "#fff"}
            stroke="#7D2E68"
            strokeWidth="0.8"
            strokeOpacity={active ? 0.7 : 0.35}
            animate={active && !reduced ? { y: [b.y, b.y - 1, b.y] } : {}}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
          <text
            x={b.x + b.w / 2}
            y={b.y + b.h / 2 + 1}
            textAnchor="middle"
            fontSize="4"
            fill="#667085"
            fontWeight="600"
          >
            {b.label}
          </text>
        </g>
      ))}
      {active && !reduced ? (
        <motion.circle
          r="2"
          fill="#C97B84"
          animate={{
            cx: [26, 50, 74, 50],
            cy: [25, 45, 62, 50],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </svg>
  );
}
