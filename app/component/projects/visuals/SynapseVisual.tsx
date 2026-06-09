"use client";

import { motion } from "framer-motion";
import VisualFrame from "./VisualFrame";
import { useReducedMotion } from "../../features/useReducedMotion";

const ROUTES = [
  "M 40 130 Q 120 40 200 90 T 360 55",
  "M 50 145 Q 150 120 240 100 T 370 115",
  "M 30 100 Q 100 150 190 120 T 350 90",
];

const MARKERS = [
  { x: 120, y: 72 },
  { x: 255, y: 82 },
  { x: 330, y: 58 },
];

export default function SynapseVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotion();
  const speed = active ? 0.7 : 1;

  return (
    <VisualFrame label="Fleet routing" active={active}>
      <svg viewBox="0 0 400 176" className="w-full h-full" aria-hidden>
        <rect x="0" y="0" width="400" height="176" fill="url(#synapseGrid)" opacity="0.4" />
        <defs>
          <pattern id="synapseGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
          </pattern>
        </defs>
        {ROUTES.map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke={i === 0 ? "#8E2F74" : "#E5E7EB"}
            strokeWidth={i === 0 ? 1.5 : 1}
            strokeOpacity={i === 0 ? 0.7 : 0.5}
            strokeDasharray={i === 0 ? undefined : "4 6"}
          />
        ))}
        {MARKERS.map((m, i) => (
          <g key={i}>
            <rect x={m.x - 4} y={m.y - 4} width="8" height="8" rx="1" fill="#fff" stroke="#8E2F74" strokeWidth="1" />
            <motion.circle
              cx={m.x}
              cy={m.y}
              r="12"
              fill="none"
              stroke="#C97B84"
              strokeWidth="0.8"
              animate={reduced ? {} : { r: active ? [10, 16, 10] : [12, 14, 12], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2 * speed, delay: i * 0.4, repeat: Infinity }}
            />
          </g>
        ))}
        {!reduced &&
          ROUTES.slice(0, 2).map((d, i) => (
            <motion.circle
              key={`vehicle-${i}`}
              r="3.5"
              fill="#111111"
              initial={{ offsetDistance: "0%" }}
              style={{ offsetPath: `path('${d}')` }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{ duration: (3.5 - i * 0.4) * speed, repeat: Infinity, ease: "linear" }}
            />
          ))}
        <text x="16" y="24" fontSize="9" fill="#5F6778" fontFamily="system-ui,sans-serif" fontWeight="600">
          DYNAMIC ROUTE · RECALC · ACTIVE FLEET
        </text>
      </svg>
    </VisualFrame>
  );
}
