"use client";

import { motion } from "framer-motion";
import VisualFrame from "./VisualFrame";
import { useReducedMotion } from "../../features/useReducedMotion";

const PATIENTS = [
  { x: 70, y: 100 },
  { x: 70, y: 130 },
];
const TRIALS = [
  { x: 300, y: 85 },
  { x: 300, y: 115 },
  { x: 300, y: 145 },
];

export default function ClinicalVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotion();

  return (
    <VisualFrame label="Trial matching" active={active}>
      <svg viewBox="0 0 400 176" className="w-full h-full" aria-hidden>
        <text x="52" y="68" fontSize="8" fill="#5F6778" fontFamily="system-ui,sans-serif" fontWeight="600">
          PATIENTS
        </text>
        <text x="278" y="68" fontSize="8" fill="#5F6778" fontFamily="system-ui,sans-serif" fontWeight="600">
          TRIALS
        </text>
        {PATIENTS.map((p, pi) =>
          TRIALS.map((t, ti) => {
            const match = (pi + ti) % 2 === 0;
            if (!match) return null;
            return (
              <motion.line
                key={`${pi}-${ti}`}
                x1={p.x + 12}
                y1={p.y}
                x2={t.x - 12}
                y2={t.y}
                stroke="#8E2F74"
                strokeWidth="0.8"
                strokeOpacity={0.25}
                animate={
                  reduced
                    ? {}
                    : { strokeOpacity: active ? [0.2, 0.55, 0.2] : [0.15, 0.35, 0.15] }
                }
                transition={{ duration: 2, delay: (pi + ti) * 0.2, repeat: Infinity }}
              />
            );
          })
        )}
        {PATIENTS.map((p, i) => (
          <g key={`p-${i}`}>
            <circle cx={p.x} cy={p.y} r="10" fill="#F8F8FA" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx={p.x} cy={p.y} r="4" fill="#8E2F74" fillOpacity="0.5" />
          </g>
        ))}
        {TRIALS.map((t, i) => (
          <g key={`t-${i}`}>
            <rect x={t.x - 10} y={t.y - 8} width="20" height="16" rx="3" fill="#fff" stroke="#8E2F74" strokeWidth="1" />
            {!reduced && active && (
              <motion.circle
                cx={t.x}
                cy={t.y}
                r="14"
                fill="none"
                stroke="#C97B84"
                strokeWidth="0.6"
                animate={{ opacity: [0.5, 0, 0.5], r: [12, 18, 12] }}
                transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity }}
              />
            )}
          </g>
        ))}
        <text x="16" y="24" fontSize="9" fill="#5F6778" fontFamily="system-ui,sans-serif" fontWeight="600">
          HIPAA PIPELINE · CRITERIA MATCH
        </text>
      </svg>
    </VisualFrame>
  );
}
