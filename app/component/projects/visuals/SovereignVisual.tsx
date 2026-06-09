"use client";

import { motion } from "framer-motion";
import VisualFrame from "./VisualFrame";
import { useReducedMotion } from "../../features/useReducedMotion";

const GRID = Array.from({ length: 48 }, (_, i) => ({
  x: 24 + (i % 8) * 22,
  y: 44 + Math.floor(i / 8) * 18,
  risk: (i * 7 + 13) % 10,
}));

const TREND = "M 24 150 L 80 130 L 140 118 L 200 95 L 260 88 L 320 72 L 376 58";

export default function SovereignVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotion();

  return (
    <VisualFrame label="Risk heatmap" active={active}>
      <svg viewBox="0 0 400 176" className="w-full h-full" aria-hidden>
        {GRID.map((cell, i) => (
          <motion.rect
            key={i}
            x={cell.x}
            y={cell.y}
            width="18"
            height="14"
            rx="2"
            fill="#8E2F74"
            animate={
              reduced
                ? { fillOpacity: 0.06 + cell.risk * 0.02 }
                : {
                    fillOpacity: active
                      ? [0.04 + cell.risk * 0.015, 0.08 + cell.risk * 0.035, 0.04 + cell.risk * 0.015]
                      : [0.03 + cell.risk * 0.012, 0.06 + cell.risk * 0.02, 0.03 + cell.risk * 0.012],
                  }
            }
            transition={{ duration: 2.5 + (i % 5) * 0.2, repeat: Infinity, delay: (i % 8) * 0.08 }}
          />
        ))}
        <path d={TREND} fill="none" stroke="#C97B84" strokeWidth="1.5" strokeOpacity="0.6" />
        {!reduced && (
          <motion.circle
            r="3"
            fill="#C97B84"
            animate={{ offsetDistance: ["0%", "100%"] }}
            style={{ offsetPath: `path('${TREND}')` }}
            transition={{ duration: active ? 3 : 5, repeat: Infinity, ease: "linear" }}
          />
        )}
        {[
          { x: 140, y: 118 },
          { x: 260, y: 88 },
        ].map((p, i) => (
          <motion.g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="#fff" stroke="#8E2F74" strokeWidth="1" />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="8"
              fill="none"
              stroke="#8E2F74"
              strokeWidth="0.8"
              animate={reduced ? {} : { r: [6, 12, 6], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
            />
          </motion.g>
        ))}
        <text x="16" y="24" fontSize="9" fill="#5F6778" fontFamily="system-ui,sans-serif" fontWeight="600">
          SCENARIO AGENTS · SIGNAL TRAVERSAL
        </text>
      </svg>
    </VisualFrame>
  );
}
