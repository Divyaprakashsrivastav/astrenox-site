"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { VisualSvgFrame } from "../../features/visuals/VisualSvgFrame";
import { COLORS, loop, safeSvgId } from "../../features/visuals/motion";
import type { ProjectVisualProps } from "../ProjectCardVisual";

const RADAR = { x: 200, y: 130 };
const targets = [
  { x: 56, y: 88 },
  { x: 140, y: 58 },
  { x: 280, y: 92 },
];

function Drone({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <line x1={0} y1={0} x2={-16} y2={-9} stroke={COLORS.line} strokeWidth={1.2} />
      <line x1={0} y1={0} x2={16} y2={-9} stroke={COLORS.line} strokeWidth={1.2} />
      <line x1={0} y1={0} x2={-16} y2={9} stroke={COLORS.line} strokeWidth={1.2} />
      <line x1={0} y1={0} x2={16} y2={9} stroke={COLORS.line} strokeWidth={1.2} />
      <rect x={-8} y={-4} width={16} height={8} rx={2} fill="#fff" stroke={COLORS.primary} strokeWidth={1.2} />
      <circle r={2} fill={COLORS.primary} />
    </g>
  );
}

export function SkyGuardProjectVisual({ active, reducedMotion }: ProjectVisualProps) {
  const uid = safeSvgId(useId());
  const speed = active ? 0.65 : 1;

  return (
    <VisualSvgFrame viewBox="0 0 400 200">
      <defs>
        <linearGradient id={`${uid}-sweep`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0" />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <g opacity={1}>
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={i * 80} y1={12} x2={i * 80} y2={175} stroke={COLORS.lineMuted} strokeWidth={0.5} strokeOpacity={0.45} />
        ))}
        <path
          d={`M 24 150 Q 120 55 200 72 T 376 130`}
          fill="none"
          stroke={COLORS.primary}
          strokeWidth={1.25}
          strokeOpacity={0.35}
          strokeDasharray="6 8"
        />
        {[36, 52, 68].map((r) => (
          <circle key={r} cx={RADAR.x} cy={RADAR.y} r={r} fill="none" stroke={COLORS.primary} strokeWidth={0.75} strokeOpacity={0.2} />
        ))}
        <path
          d={`M ${RADAR.x} ${RADAR.y} L ${RADAR.x} ${RADAR.y - 62} A 62 62 0 0 1 ${RADAR.x + 54} ${RADAR.y - 6} Z`}
          fill={`url(#${uid}-sweep)`}
          fillOpacity={0.3}
        />
        {targets.map((t, i) => (
          <g key={i}>
            <circle cx={t.x} cy={t.y} r={3} fill={COLORS.secondary} />
            <line x1={t.x} y1={t.y} x2={RADAR.x} y2={RADAR.y} stroke={COLORS.line} strokeWidth={0.75} strokeDasharray="3 4" strokeOpacity={0.35} />
          </g>
        ))}
        <Drone x={200} y={72} />
        <text x={24} y={28} fontSize={9} fill={COLORS.primary} fontFamily="system-ui,sans-serif" fontWeight={600}>
          ALT 142m
        </text>
        <text x={24} y={42} fontSize={8} fill="#667085" fontFamily="system-ui,sans-serif">
          SPD 12.4 m/s
        </text>
      </g>

      {!reducedMotion && (
        <g>
          <motion.line
            x1={12}
            x2={388}
            y1={0}
            y2={0}
            stroke={COLORS.primary}
            strokeWidth={1}
            strokeOpacity={0.45}
            initial={{ y1: 20, y2: 20 }}
            animate={{ y1: [20, 175, 20], y2: [20, 175, 20] }}
            transition={loop(reducedMotion, { duration: 3 * speed, ease: "linear" })}
          />
          <motion.path
            d={`M 24 150 Q 120 55 200 72 T 376 130`}
            fill="none"
            stroke={COLORS.secondary}
            strokeWidth={1}
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={loop(reducedMotion, { duration: 2 * speed, ease: "linear" })}
          />
          <motion.g
            transform={`translate(${RADAR.x}, ${RADAR.y})`}
            animate={{ rotate: 360 }}
            transition={loop(reducedMotion, { duration: 4 * speed, ease: "linear" })}
          >
            <line x1={0} y1={0} x2={0} y2={-62} stroke={COLORS.primary} strokeOpacity={0.6} />
          </motion.g>
          {targets.map((t, i) => (
            <motion.circle
              key={i}
              cx={t.x}
              cy={t.y}
              r={5}
              fill="none"
              stroke={COLORS.secondary}
              strokeWidth={0.75}
              initial={{ opacity: 0.5 }}
              animate={{ r: [4, 14, 4], opacity: [0.8, 0, 0.8] }}
              transition={loop(reducedMotion, { duration: 2 * speed, delay: i * 0.35, ease: "easeOut" })}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={`p-${i}`}
              r={1.5}
              fill={COLORS.secondary}
              initial={{ cx: 80 + i * 40, cy: 100, opacity: 0.6 }}
              animate={{
                cx: [80 + i * 40, 120 + i * 30, 200],
                cy: [100, 60 + i * 8, 72],
                opacity: [0, 0.8, 0],
              }}
              transition={loop(reducedMotion, { duration: 3 * speed, delay: i * 0.4, ease: "linear" })}
            />
          ))}
          <motion.g
            initial={{ transform: "translate(200px, 72px)" }}
            animate={{
              transform: [
                "translate(56px, 88px)",
                "translate(140px, 58px)",
                "translate(200px, 72px)",
                "translate(280px, 92px)",
                "translate(200px, 72px)",
              ],
            }}
            transition={loop(reducedMotion, { duration: 9 * speed, ease: "easeInOut" })}
          >
            <Drone x={0} y={0} />
          </motion.g>
        </g>
      )}
    </VisualSvgFrame>
  );
}
