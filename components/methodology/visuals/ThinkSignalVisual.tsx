"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { useReducedMotion } from "../../features/useReducedMotion";
import { safeSvgId } from "../../features/visuals/motion";

const PACKETS = [
  { y: 38, delay: 0 },
  { y: 52, delay: 0.35 },
  { y: 44, delay: 0.7 },
];

interface ThinkSignalVisualProps {
  active: boolean;
}

export default function ThinkSignalVisual({ active }: ThinkSignalVisualProps) {
  const uid = safeSvgId(useId());
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 100 56" className="signal-visual-svg" aria-hidden>
      <defs>
        <linearGradient id={`${uid}-wave`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b4d8f" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#9b4d8f" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9b4d8f" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {[18, 30, 42].map((y, i) => (
        <motion.line
          key={y}
          x1="8"
          y1={y}
          x2="92"
          y2={y}
          stroke="#E8E8EE"
          strokeWidth="0.4"
          strokeDasharray="2 6"
          animate={active && !reduced ? { opacity: [0.35, 0.7, 0.35] } : { opacity: 0.35 }}
          transition={{ duration: 2.4, delay: i * 0.2, repeat: Infinity }}
        />
      ))}

      <motion.path
        d="M 8 28 C 20 18, 28 38, 40 28 S 60 18, 72 28 S 84 38, 92 28"
        fill="none"
        stroke={`url(#${uid}-wave)`}
        strokeWidth="1.2"
        strokeLinecap="round"
        animate={
          active && !reduced
            ? { opacity: [0.65, 1, 0.65] }
            : { opacity: 0.45 }
        }
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {PACKETS.map((packet, i) => (
        <motion.g
          key={i}
          animate={
            active && !reduced
              ? { x: [-14, 0], opacity: [0, 1, 0.85] }
              : { x: 0, opacity: active ? 0.7 : 0.35 }
          }
          transition={{
            duration: 2.2,
            delay: packet.delay,
            repeat: active && !reduced ? Infinity : 0,
            ease: "easeOut",
          }}
        >
          <rect
            x={10}
            y={packet.y - 3}
            width="8"
            height="6"
            rx="1"
            fill="#fff"
            stroke="#9b4d8f"
            strokeWidth="0.6"
          />
        </motion.g>
      ))}

      <motion.circle
        cx="92"
        cy="28"
        r="3"
        fill="#9b4d8f"
        animate={active && !reduced ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.35 }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    </svg>
  );
}
