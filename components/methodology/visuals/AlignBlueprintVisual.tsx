"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../../features/useReducedMotion";

const BLOCKS = [
  { id: "ingest", x: 10, y: 12, w: 22, h: 11, toX: 10, toY: 12 },
  { id: "graph", x: 62, y: 8, w: 24, h: 11, toX: 38, toY: 12 },
  { id: "policy", x: 8, y: 40, w: 20, h: 10, toX: 10, toY: 36 },
  { id: "core", x: 36, y: 38, w: 26, h: 14, toX: 37, toY: 32 },
  { id: "ops", x: 66, y: 42, w: 22, h: 10, toX: 64, toY: 36 },
];

const LINKS = [
  [21, 17, 50, 17],
  [50, 17, 75, 17],
  [21, 39, 50, 39],
  [50, 39, 75, 39],
  [50, 25, 50, 32],
];

interface AlignBlueprintVisualProps {
  active: boolean;
}

export default function AlignBlueprintVisual({ active }: AlignBlueprintVisualProps) {
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 100 56" className="signal-visual-svg" aria-hidden>
      <rect
        x="6"
        y="6"
        width="88"
        height="44"
        rx="2"
        fill="none"
        stroke="#E8E8EE"
        strokeWidth="0.5"
        strokeDasharray="3 4"
        opacity="0.6"
      />

      {LINKS.map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#9b4d8f"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          animate={
            active
              ? { opacity: reduced ? 0.45 : [0.3, 0.6, 0.3], strokeDashoffset: [0, -10] }
              : { opacity: 0.2, strokeDashoffset: 0 }
          }
          transition={{
            opacity: { duration: 2.2, delay: i * 0.1, repeat: active && !reduced ? Infinity : 0 },
            strokeDashoffset: { duration: 1.8, repeat: active && !reduced ? Infinity : 0, ease: "linear" },
          }}
        />
      ))}

      {BLOCKS.map((block, i) => (
        <motion.rect
          key={block.id}
          width={block.w}
          height={block.h}
          rx="1.5"
          fill={block.id === "core" ? "rgba(155, 77, 143, 0.1)" : "#fff"}
          stroke="#9b4d8f"
          strokeWidth="0.7"
          initial={{ x: block.x, y: block.y, opacity: 0.35 }}
          animate={
            active
              ? { x: block.toX, y: block.toY, opacity: 1 }
              : { x: block.x, y: block.y, opacity: 0.4 }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            delay: active ? i * 0.06 : 0,
          }}
        />
      ))}
    </svg>
  );
}
