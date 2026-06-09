"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../../features/useReducedMotion";

const NODES = [
  { cx: 20, cy: 35 },
  { cx: 50, cy: 22 },
  { cx: 80, cy: 38 },
  { cx: 35, cy: 68 },
  { cx: 65, cy: 72 },
];

interface ExecuteDeploymentVisualProps {
  active: boolean;
}

export default function ExecuteDeploymentVisual({ active }: ExecuteDeploymentVisualProps) {
  const reduced = useReducedMotion();

  return (
    <div className="journey-execute-wrap">
      <svg viewBox="0 0 100 100" className="journey-visual-svg" aria-hidden>
        <rect x="8" y="8" width="84" height="84" rx="4" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
        {NODES.map((n, i) => (
          <g key={i}>
            <motion.line
              x1="50"
              y1="50"
              x2={n.cx}
              y2={n.cy}
              stroke="#7D2E68"
              strokeWidth="0.5"
              strokeOpacity={active ? 0.4 : 0.15}
              animate={
                active && !reduced
                  ? { strokeOpacity: [0.2, 0.6, 0.2] }
                  : {}
              }
              transition={{ duration: 1.8, delay: i * 0.2, repeat: Infinity }}
            />
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r="4"
              fill="#fff"
              stroke="#7D2E68"
              strokeWidth="1"
              animate={
                active && !reduced
                  ? { opacity: [0.65, 1, 0.65] }
                  : {}
              }
              transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
            />
          </g>
        ))}
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          fill="rgba(125,46,104,0.15)"
          stroke="#7D2E68"
          strokeWidth="1"
          animate={active && !reduced ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
      {active ? (
        <div className="journey-telemetry">
          {["Deploy", "Validate", "Scale"].map((label, i) => (
            <motion.div
              key={label}
              className="journey-telemetry-row"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <span className="journey-telemetry-label">{label}</span>
              <motion.span
                className="journey-telemetry-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
