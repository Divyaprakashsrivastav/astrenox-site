"use client";

import { motion } from "framer-motion";
import { VisualSvgFrame } from "../../features/visuals/VisualSvgFrame";
import { COLORS, loop } from "../../features/visuals/motion";
import type { ProjectVisualProps } from "../ProjectCardVisual";

const boxes = [
  { x: 36, y: 40, w: 90, h: 56, label: "AIRCRAFT" },
  { x: 150, y: 55, w: 72, h: 48, label: "TARGET" },
  { x: 250, y: 38, w: 100, h: 62, label: "VECTOR" },
];

export function VisionProjectVisual({ active, reducedMotion }: ProjectVisualProps) {
  const speed = active ? 0.65 : 1;

  return (
    <VisualSvgFrame viewBox="0 0 400 200">
      <g>
        <rect x={20} y={24} width={360} height={152} rx={8} fill="#0a0a12" fillOpacity={0.04} stroke={COLORS.line} strokeWidth={1} />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={20} y1={24 + (i + 1) * 12} x2={380} y2={24 + (i + 1) * 12} stroke={COLORS.lineMuted} strokeWidth={0.5} />
        ))}
        {boxes.map((b) => (
          <g key={b.label}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={COLORS.primary} fillOpacity={0.06} stroke="none" />
            <path
              d={`M ${b.x} ${b.y + 10} L ${b.x} ${b.y} L ${b.x + 10} ${b.y} M ${b.x + b.w - 10} ${b.y} L ${b.x + b.w} ${b.y} L ${b.x + b.w} ${b.y + 10} M ${b.x + b.w} ${b.y + b.h - 10} L ${b.x + b.w} ${b.y + b.h} L ${b.x + b.w - 10} ${b.y + b.h} M ${b.x + 10} ${b.y + b.h} L ${b.x} ${b.y + b.h} L ${b.x} ${b.y + b.h - 10}`}
              fill="none"
              stroke={COLORS.secondary}
              strokeWidth={1.25}
            />
            <text x={b.x + 6} y={b.y + 14} fontSize={8} fill={COLORS.secondary} fontFamily="system-ui,sans-serif" fontWeight={600}>
              {b.label}
            </text>
          </g>
        ))}
        <text x={28} y={42} fontSize={9} fill={COLORS.primary} fontWeight={600} fontFamily="system-ui,sans-serif">
          REC · 60 FPS
        </text>
      </g>

      {!reducedMotion && (
        <g>
          <motion.line
            x1={20}
            x2={380}
            stroke={COLORS.primary}
            strokeWidth={1.25}
            strokeOpacity={0.6}
            initial={{ y1: 30, y2: 30 }}
            animate={{ y1: [24, 176, 24], y2: [24, 176, 24] }}
            transition={loop(reducedMotion, { duration: 2.8 * speed, ease: "linear" })}
          />
          <motion.rect
            x={20}
            width={360}
            fill={COLORS.primary}
            fillOpacity={0.08}
            initial={{ y: 30, height: 12 }}
            animate={{ y: [24, 164, 24], height: [0, 18, 0] }}
            transition={loop(reducedMotion, { duration: 2.8 * speed, ease: "linear" })}
          />
          {boxes.map((b, i) => (
            <motion.rect
              key={`pulse-${b.label}`}
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              fill={COLORS.primary}
              animate={{ fillOpacity: active ? [0.04, 0.14, 0.04] : [0.03, 0.08, 0.03] }}
              transition={loop(reducedMotion, { duration: 2 * speed, delay: i * 0.25 })}
            />
          ))}
          <motion.g
            animate={{ x: [120, 220, 180, 120], y: [90, 70, 110, 90] }}
            transition={loop(reducedMotion, { duration: 5 * speed, ease: "easeInOut" })}
          >
            <line x1={-8} y1={0} x2={8} y2={0} stroke={COLORS.primary} strokeWidth={1.25} />
            <line x1={0} y1={-8} x2={0} y2={8} stroke={COLORS.primary} strokeWidth={1.25} />
          </motion.g>
        </g>
      )}
    </VisualSvgFrame>
  );
}
