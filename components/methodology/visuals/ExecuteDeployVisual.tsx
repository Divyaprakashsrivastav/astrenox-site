"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../../features/useReducedMotion";

const SYSTEMS = [
  { cx: 22, cy: 22, label: "drone" },
  { cx: 78, cy: 24, label: "robot" },
  { cx: 50, cy: 42, label: "fleet" },
];

interface ExecuteDeployVisualProps {
  active: boolean;
}

export default function ExecuteDeployVisual({ active }: ExecuteDeployVisualProps) {
  const reduced = useReducedMotion();

  return (
    <svg viewBox="0 0 100 56" className="signal-visual-svg" aria-hidden>
      <motion.rect
        x="14"
        y="10"
        width="72"
        height="36"
        rx="3"
        fill="rgba(255,255,255,0.6)"
        stroke="#E8E8EE"
        strokeWidth="0.5"
        animate={active ? { strokeOpacity: 0.9 } : { strokeOpacity: 0.5 }}
      />

      <motion.path
        d="M 22 26 L 26 20 L 30 26 Z"
        fill="none"
        stroke="#9b4d8f"
        strokeWidth="0.8"
        strokeLinejoin="round"
        animate={active && !reduced ? { y: [0, -1, 0] } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.line
        x1="26"
        y1="26"
        x2="26"
        y2="32"
        stroke="#9b4d8f"
        strokeWidth="0.6"
      />

      <motion.g animate={active && !reduced ? { y: [0, 0.5, 0] } : {}} transition={{ duration: 2.8, repeat: Infinity }}>
        <rect x="72" y="22" width="6" height="10" rx="1" fill="#fff" stroke="#9b4d8f" strokeWidth="0.6" />
        <rect x="68" y="26" width="14" height="3" rx="0.5" fill="#9b4d8f" opacity="0.35" />
        <circle cx="82" cy="27" r="2" fill="#fff" stroke="#9b4d8f" strokeWidth="0.5" />
      </motion.g>

      <motion.ellipse
        cx="50"
        cy="42"
        rx="12"
        ry="5"
        fill="rgba(155, 77, 143, 0.08)"
        stroke="#9b4d8f"
        strokeWidth="0.5"
        animate={active && !reduced ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.45 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {SYSTEMS.map((node, i) => (
        <motion.g key={node.label}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill="none"
            stroke="#9b4d8f"
            strokeWidth="0.5"
            strokeOpacity="0.25"
            animate={
              active && !reduced
                ? { r: [6, 9, 6], opacity: [0.2, 0.5, 0.2] }
                : { opacity: 0.15 }
            }
            transition={{ duration: 2.2, delay: i * 0.25, repeat: Infinity }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="2.5"
            fill="#9b4d8f"
            animate={active && !reduced ? { opacity: [0.55, 1, 0.55] } : { opacity: 0.4 }}
            transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity }}
          />
        </motion.g>
      ))}

      {["Deploy", "Monitor", "Scale"].map((label, i) => (
        <motion.g
          key={label}
          transform={`translate(${18 + i * 24}, 48)`}
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0.35 }}
          transition={{ delay: active ? 0.15 + i * 0.1 : 0 }}
        >
          <circle cx="0" cy="0" r="1.5" fill={active ? "#9b4d8f" : "#D0D5DD"} />
          <text x="4" y="1.5" fontSize="3.5" fill="#667085" fontWeight="500">
            {label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
