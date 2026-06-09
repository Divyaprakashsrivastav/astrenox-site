"use client";

import { motion } from "framer-motion";
import VisualFrame from "./VisualFrame";
import { useReducedMotion } from "../../features/useReducedMotion";

const CODE_LINES = [
  { w: 180, delay: 0 },
  { w: 140, delay: 0.15 },
  { w: 200, delay: 0.3 },
  { w: 110, delay: 0.45 },
];

const PIPELINE = ["Lint", "Test", "Build", "Deploy"];

export default function CodeForgeVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotion();

  return (
    <VisualFrame label="CI/CD intelligence" active={active}>
      <svg viewBox="0 0 400 176" className="w-full h-full" aria-hidden>
        <rect x="20" y="36" width="200" height="88" rx="6" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
        {CODE_LINES.map((line, i) => (
          <motion.rect
            key={i}
            x="32"
            y={48 + i * 14}
            height="6"
            rx="2"
            fill="#E5E7EB"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: active ? line.w : line.w * 0.7,
              opacity: 1,
            }}
            transition={{
              duration: reduced ? 0 : 0.6,
              delay: line.delay,
              repeat: active && !reduced ? Infinity : 0,
              repeatType: "reverse",
              repeatDelay: 2.5,
            }}
          />
        ))}
        <motion.rect
          x="32"
          y="108"
          width="8"
          height="10"
          fill="#8E2F74"
          animate={reduced ? {} : { opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <g transform="translate(240 48)">
          {PIPELINE.map((stage, i) => (
            <g key={stage} transform={`translate(${i * 38} 0)`}>
              <motion.rect
                width="30"
                height="22"
                rx="4"
                fill="#F8F8FA"
                stroke="#E5E7EB"
                animate={
                  active && !reduced
                    ? { stroke: ["#E5E7EB", "#8E2F74", "#E5E7EB"] }
                    : {}
                }
                transition={{ duration: 1.2, delay: i * 0.25, repeat: Infinity }}
              />
              <text x="15" y="14" textAnchor="middle" fontSize="7" fill="#5F6778" fontFamily="system-ui,sans-serif">
                {stage}
              </text>
              {i < PIPELINE.length - 1 && (
                <line x1="32" y1="11" x2="38" y2="11" stroke="#E5E7EB" strokeWidth="1" />
              )}
            </g>
          ))}
        </g>
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`commit-${i}`}
            cx={320 + i * 18}
            cy="130"
            r="4"
            fill="#8E2F74"
            fillOpacity="0.5"
            animate={
              reduced
                ? {}
                : {
                    fillOpacity: active ? [0.3, 1, 0.3] : [0.2, 0.6, 0.2],
                    scale: active ? [1, 1.2, 1] : 1,
                  }
            }
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
        <text x="16" y="24" fontSize="9" fill="#5F6778" fontFamily="system-ui,sans-serif" fontWeight="600">
          PR AGENTS · QUALITY GATES · DEPLOY
        </text>
      </svg>
    </VisualFrame>
  );
}
