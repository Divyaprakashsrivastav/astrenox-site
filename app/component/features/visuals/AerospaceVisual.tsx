"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop, safeSvgId } from "./motion";
import { VisualSvgFrame } from "./VisualSvgFrame";

export function AerospaceVisual({ active, reducedMotion }: VisualProps) {
  const uid = safeSvgId(useId());
  const speed = active ? 0.65 : 1;
  const cx = 160;
  const cy = 82;

  const telemetryPaths = [
    { x1: cx + 88, y1: cy, x2: 48, y2: 128 },
    { x1: cx + 72, y1: cy - 12, x2: 100, y2: 132 },
    { x1: cx + 60, y1: cy + 8, x2: 220, y2: 130 },
  ];

  return (
    <VisualSvgFrame viewBox="0 0 320 160">
      <defs>
        <linearGradient id={`${uid}-orbit-glow`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.05" />
          <stop offset="50%" stopColor={COLORS.secondary} stopOpacity={active ? 0.55 : 0.35} />
          <stop offset="100%" stopColor={COLORS.accent} stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Earth horizon */}
      <ellipse cx={cx} cy={148} rx={140} ry={18} fill={COLORS.lineMuted} fillOpacity={0.35} />
      <ellipse cx={cx} cy={146} rx={100} ry={8} fill="none" stroke={COLORS.line} strokeWidth={0.5} strokeOpacity={0.4} />

      {/* Static orbital paths */}
      {[68, 88, 108].map((rx, i) => (
        <ellipse
          key={rx}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={rx * 0.26}
          fill="none"
          stroke={COLORS.line}
          strokeWidth={0.6}
          strokeOpacity={0.35}
          transform={`rotate(${-18 + i * 10} ${cx} ${cy})`}
        />
      ))}

      {/* Glowing primary orbital path */}
      <motion.ellipse
        cx={cx}
        cy={cy}
        rx={108}
        ry={30}
        fill="none"
        stroke={`url(#${uid}-orbit-glow)`}
        strokeWidth={active ? 1.5 : 1}
        strokeDasharray="5 8"
        animate={reducedMotion ? {} : { strokeDashoffset: [0, -26] }}
        transition={loop(reducedMotion, { duration: 4 * speed, ease: "linear" })}
      />

      {/* Orbiting satellite */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={loop(reducedMotion, {
          duration: (active ? 12 : 20) * speed,
          ease: "linear",
        })}
      >
        <g transform={`translate(${cx + 108}, ${cy})`}>
          <rect
            x={-7}
            y={-3.5}
            width={14}
            height={7}
            rx={1}
            fill={COLORS.fill}
            stroke={COLORS.primary}
            strokeWidth={0.85}
          />
          <line x1={-9} y1={0} x2={-16} y2={0} stroke={COLORS.secondary} strokeWidth={0.85} />
          <line x1={9} y1={0} x2={16} y2={0} stroke={COLORS.secondary} strokeWidth={0.85} />
          <circle r={1.5} fill={COLORS.primary} />
          <motion.circle
            r={10}
            fill="none"
            stroke={COLORS.primary}
            strokeWidth={0.5}
            strokeOpacity={0.3}
            animate={reducedMotion ? {} : { r: [8, 14, 8], strokeOpacity: [0.35, 0, 0.35] }}
            transition={loop(reducedMotion, { duration: 2.5 * speed, ease: "easeOut" })}
          />
        </g>
      </motion.g>

      {/* Ground station */}
      <g transform="translate(48, 128)">
        <path d="M 0 0 L -8 -14 L 8 -14 Z" fill={COLORS.fill} stroke={COLORS.primary} strokeWidth={0.75} />
        <line x1={0} y1={0} x2={0} y2={8} stroke={COLORS.line} strokeWidth={0.75} />
      </g>

      {/* Telemetry particles */}
      {!reducedMotion &&
        telemetryPaths.map((path, i) => (
          <motion.circle
            key={i}
            r={2}
            fill={COLORS.accent}
            fillOpacity={0.85}
            initial={{ cx: path.x1, cy: path.y1, opacity: 0 }}
            animate={{
              cx: [path.x1, path.x2],
              cy: [path.y1, path.y2],
              opacity: [0, 0.9, 0],
            }}
            transition={loop(reducedMotion, {
              duration: (active ? 1.8 : 2.6) * speed,
              delay: i * 0.5,
              ease: "easeInOut",
            })}
          />
        ))}

      {/* Telemetry lines */}
      {telemetryPaths.map((path, i) => (
        <line
          key={`tl-${i}`}
          x1={path.x1}
          y1={path.y1}
          x2={path.x2}
          y2={path.y2}
          stroke={COLORS.accent}
          strokeWidth={0.5}
          strokeOpacity={active ? 0.25 : 0.12}
          strokeDasharray="2 4"
        />
      ))}

      {/* Mission core */}
      <motion.circle
        cx={cx}
        cy={cy + 2}
        r={5}
        fill={COLORS.primary}
        fillOpacity={0.2}
        animate={reducedMotion ? {} : { r: [4, 7, 4], fillOpacity: [0.15, 0.3, 0.15] }}
        transition={loop(reducedMotion, { duration: 3 * speed, ease: "easeInOut" })}
      />
      <circle cx={cx} cy={cy + 2} r={2} fill={COLORS.primary} />
    </VisualSvgFrame>
  );
}
