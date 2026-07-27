"use client";

import { motion } from "framer-motion";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop } from "./motion";

const detections = [
  { x: 24, y: 28, w: 72, h: 48, label: "OBJ-01", conf: 0.94 },
  { x: 118, y: 42, w: 64, h: 40, label: "OBJ-02", conf: 0.87 },
  { x: 200, y: 32, w: 52, h: 44, label: "OBJ-03", conf: 0.91 },
  { x: 88, y: 98, w: 88, h: 36, label: "OBJ-04", conf: 0.82 },
];

function DetectionBox({
  x,
  y,
  w,
  h,
  label,
  conf,
  active,
  reducedMotion,
  delay,
  speed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  conf: number;
  active: boolean;
  reducedMotion: boolean;
  delay: number;
  speed: number;
}) {
  const c = 10;
  const corners = [
    `M ${x} ${y + c} L ${x} ${y} L ${x + c} ${y}`,
    `M ${x + w - c} ${y} L ${x + w} ${y} L ${x + w} ${y + c}`,
    `M ${x + w} ${y + h - c} L ${x + w} ${y + h} L ${x + w - c} ${y + h}`,
    `M ${x + c} ${y + h} L ${x} ${y + h} L ${x} ${y + h - c}`,
  ];

  return (
    <g>
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={COLORS.primary}
        animate={reducedMotion ? { fillOpacity: 0.05 } : { fillOpacity: active ? [0.03, 0.1, 0.03] : [0.02, 0.06, 0.02] }}
        transition={loop(reducedMotion, { duration: 2.2 * speed, delay })}
      />
      {corners.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={COLORS.secondary}
          strokeWidth={1.5}
          animate={reducedMotion ? {} : { opacity: [0.35, 1, 0.35] }}
          transition={loop(reducedMotion, { duration: 1.8 * speed, delay: delay + i * 0.06 })}
        />
      ))}
      <text x={x + 4} y={y + 12} fontSize={7} fill={COLORS.primary} fontFamily="system-ui,sans-serif" fontWeight={600}>
        {label}
      </text>
      <text x={x + w - 4} y={y + 12} fontSize={7} fill={COLORS.secondary} textAnchor="end" fontFamily="system-ui,sans-serif">
        {(conf * 100).toFixed(0)}%
      </text>
    </g>
  );
}

export function ComputerVisionVisual({ active, reducedMotion }: VisualProps) {
  const speed = active ? 0.65 : 1;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect x={12} y={14} width={296} height={152} rx={8} fill={COLORS.fill} stroke={COLORS.line} strokeWidth={1} fillOpacity={0.6} />

      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1={12}
          y1={14 + (i + 1) * 10.1}
          x2={308}
          y2={14 + (i + 1) * 10.1}
          stroke={COLORS.lineMuted}
          strokeWidth={0.5}
        />
      ))}
      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={12 + (i + 1) * 16}
          y1={14}
          x2={12 + (i + 1) * 16}
          y2={166}
          stroke={COLORS.lineMuted}
          strokeWidth={0.5}
        />
      ))}

      <motion.line
        x1={12}
        x2={308}
        stroke={COLORS.primary}
        strokeWidth={1.25}
        strokeOpacity={active ? 0.65 : 0.4}
        animate={reducedMotion ? { y1: 90, y2: 90 } : { y1: [14, 166, 14], y2: [14, 166, 14] }}
        transition={loop(reducedMotion, { duration: (active ? 2.2 : 3) * speed, ease: "linear" })}
      />
      <motion.rect
        x={12}
        width={296}
        fill={COLORS.primary}
        fillOpacity={0.07}
        animate={reducedMotion ? { y: 78, height: 20 } : { y: [14, 146, 14], height: [0, 22, 0] }}
        transition={loop(reducedMotion, { duration: (active ? 2.2 : 3) * speed, ease: "linear" })}
      />

      {detections.map((d, i) => (
        <DetectionBox key={d.label} {...d} active={active} reducedMotion={reducedMotion} delay={i * 0.25} speed={speed} />
      ))}

      <motion.g
        animate={reducedMotion ? {} : { x: [100, 200, 150, 100], y: [70, 90, 120, 70] }}
        transition={loop(reducedMotion, { duration: 5 * speed, ease: "easeInOut" })}
      >
        <line x1={-8} y1={0} x2={8} y2={0} stroke={COLORS.primary} strokeWidth={1.25} />
        <line x1={0} y1={-8} x2={0} y2={8} stroke={COLORS.primary} strokeWidth={1.25} />
        <circle r={12} fill="none" stroke={COLORS.secondary} strokeWidth={0.75} strokeOpacity={0.6} />
      </motion.g>
    </svg>
  );
}
