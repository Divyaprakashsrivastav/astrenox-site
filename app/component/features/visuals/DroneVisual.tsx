"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop, safeSvgId } from "./motion";
import { VisualSvgFrame } from "./VisualSvgFrame";

const RADAR_X = 160;
const RADAR_Y = 128;
const DRONE_X = 160;
const DRONE_Y = 62;

const targets = [
  { cx: 48, cy: 88 },
  { cx: 108, cy: 52 },
  { cx: 212, cy: 78 },
  { cx: 268, cy: 48 },
];

function DroneIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse cx={0} cy={10} rx={11} ry={4} fill={COLORS.primary} fillOpacity={0.15} />
      <line x1={0} y1={0} x2={-18} y2={-10} stroke={COLORS.line} strokeWidth={1.25} />
      <line x1={0} y1={0} x2={18} y2={-10} stroke={COLORS.line} strokeWidth={1.25} />
      <line x1={0} y1={0} x2={-18} y2={10} stroke={COLORS.line} strokeWidth={1.25} />
      <line x1={0} y1={0} x2={18} y2={10} stroke={COLORS.line} strokeWidth={1.25} />
      {[
        [-18, -10],
        [18, -10],
        [-18, 10],
        [18, 10],
      ].map(([px, py], i) => (
        <circle
          key={i}
          cx={px}
          cy={py}
          r={7}
          fill="none"
          stroke={COLORS.primary}
          strokeWidth={0.85}
        />
      ))}
      <rect
        x={-9}
        y={-5}
        width={18}
        height={10}
        rx={2}
        fill={COLORS.fill}
        stroke={COLORS.primary}
        strokeWidth={1.25}
      />
      <circle cx={0} cy={0} r={2.5} fill={COLORS.primary} />
    </g>
  );
}

export function DroneVisual({ active, reducedMotion }: VisualProps) {
  const uid = safeSvgId(useId());
  const speed = active ? 0.65 : 1;

  return (
    <VisualSvgFrame viewBox="0 0 320 160">
      <defs>
        <linearGradient id={`${uid}-sweep`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0" />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Static layer — always visible */}
      <g>
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`g-${i}`}
            x1={i * 36}
            y1={16}
            x2={i * 36}
            y2={RADAR_Y - 8}
            stroke={COLORS.lineMuted}
            strokeWidth={0.5}
            strokeOpacity={0.55}
          />
        ))}

        <path
          d={`M 16 ${RADAR_Y - 6} Q 80 42 ${DRONE_X} ${DRONE_Y + 8} T 304 ${RADAR_Y - 12}`}
          fill="none"
          stroke={COLORS.primary}
          strokeWidth={1.25}
          strokeOpacity={0.4}
          strokeDasharray="5 7"
        />

        {[28, 44, 60].map((r) => (
          <circle
            key={r}
            cx={RADAR_X}
            cy={RADAR_Y}
            r={r}
            fill="none"
            stroke={COLORS.primary}
            strokeWidth={0.85}
            strokeOpacity={0.22}
          />
        ))}

        <path
          d={`M ${RADAR_X} ${RADAR_Y} L ${RADAR_X} ${RADAR_Y - 56} A 56 56 0 0 1 ${RADAR_X + 48} ${RADAR_Y - 8} Z`}
          fill={`url(#${uid}-sweep)`}
          fillOpacity={0.35}
        />

        {targets.map((pt, i) => (
          <g key={i}>
            <circle cx={pt.cx} cy={pt.cy} r={2.5} fill={COLORS.secondary} />
            <line
              x1={pt.cx}
              y1={pt.cy}
              x2={RADAR_X}
              y2={RADAR_Y}
              stroke={COLORS.line}
              strokeWidth={0.75}
              strokeDasharray="3 4"
              strokeOpacity={0.35}
            />
          </g>
        ))}

        <DroneIcon x={DRONE_X} y={DRONE_Y} />
      </g>

      {/* Animated layer */}
      {!reducedMotion && (
        <g>
          <motion.path
            d={`M 16 ${RADAR_Y - 6} Q 80 42 ${DRONE_X} ${DRONE_Y + 8} T 304 ${RADAR_Y - 12}`}
            fill="none"
            stroke={COLORS.secondary}
            strokeWidth={1}
            strokeOpacity={0.65}
            strokeDasharray="5 7"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: [0, -48] }}
            transition={loop(reducedMotion, { duration: 2.2 * speed, ease: "linear" })}
          />

          {[28, 44, 60].map((r, i) => (
            <motion.circle
              key={`ring-${r}`}
              cx={RADAR_X}
              cy={RADAR_Y}
              r={r}
              fill="none"
              stroke={COLORS.primary}
              strokeWidth={0.85}
              initial={{ strokeOpacity: 0.2 }}
              animate={{
                r: [r, r + (active ? 10 : 6), r],
                strokeOpacity: [0.12, active ? 0.45 : 0.3, 0.12],
              }}
              transition={loop(reducedMotion, {
                duration: 2.8 * speed,
                delay: i * 0.35,
                ease: "easeOut",
              })}
            />
          ))}

          <motion.g
            transform={`translate(${RADAR_X}, ${RADAR_Y})`}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={loop(reducedMotion, {
              duration: (active ? 3 : 5) * speed,
              ease: "linear",
            })}
          >
            <line x1={0} y1={0} x2={0} y2={-56} stroke={COLORS.primary} strokeWidth={1} strokeOpacity={0.55} />
            <path d="M 0 0 L 0 -56 A 56 56 0 0 1 48 -8 Z" fill={COLORS.primary} fillOpacity={0.12} />
          </motion.g>

          {targets.map((pt, i) => (
            <motion.circle
              key={`t-${i}`}
              cx={pt.cx}
              cy={pt.cy}
              r={6}
              fill="none"
              stroke={COLORS.secondary}
              strokeWidth={0.75}
              initial={{ opacity: 0.6 }}
              animate={{ r: [4, 12, 4], opacity: [0.7, 0, 0.7] }}
              transition={loop(reducedMotion, {
                duration: 2 * speed,
                delay: i * 0.28,
                ease: "easeOut",
              })}
            />
          ))}

          <motion.g
            initial={{ transform: `translate(${DRONE_X}px, ${DRONE_Y}px)` }}
            animate={{
              transform: [
                `translate(48px, 88px)`,
                `translate(108px, 52px)`,
                `translate(${DRONE_X}px, ${DRONE_Y}px)`,
                `translate(212px, 78px)`,
                `translate(268px, 48px)`,
                `translate(${DRONE_X}px, ${DRONE_Y}px)`,
              ],
            }}
            transition={loop(reducedMotion, { duration: 8 * speed, ease: "easeInOut" })}
          >
            <DroneIcon x={0} y={0} />
          </motion.g>
        </g>
      )}
    </VisualSvgFrame>
  );
}
