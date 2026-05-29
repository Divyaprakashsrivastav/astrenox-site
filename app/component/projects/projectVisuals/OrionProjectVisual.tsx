"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { VisualSvgFrame } from "../../features/visuals/VisualSvgFrame";
import { COLORS, loop, pulseOpacity, pulseTransition } from "../../features/visuals/motion";
import type { ProjectVisualProps } from "../ProjectCardVisual";

const CX = 200;
const CY = 100;

function buildGraph() {
  const nodes: { cx: number; cy: number; core?: boolean }[] = [{ cx: CX, cy: CY, core: true }];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    nodes.push({ cx: CX + Math.cos(a) * 75, cy: CY + Math.sin(a) * 55 });
  }
  const edges: [number, number][] = [];
  for (let i = 1; i < nodes.length; i++) edges.push([0, i]);
  for (let i = 1; i < 8; i++) edges.push([i, i + 1]);
  edges.push([8, 1]);
  return { nodes, edges };
}

const route = "M 40 155 Q 90 120 140 95 T 240 70 T 360 45";

export function OrionProjectVisual({ active, reducedMotion }: ProjectVisualProps) {
  const { nodes, edges } = useMemo(() => buildGraph(), []);
  const speed = active ? 0.65 : 1;

  return (
    <VisualSvgFrame viewBox="0 0 400 200">
      <g>
        <path d={route} fill="none" stroke={COLORS.line} strokeWidth={1} strokeDasharray="4 6" strokeOpacity={0.45} />
        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          return (
            <line
              key={i}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke={COLORS.primary}
              strokeWidth={1}
              strokeOpacity={0.3}
            />
          );
        })}
        <circle cx={CX} cy={CY} r={32} fill={COLORS.primary} fillOpacity={0.1} />
        <circle cx={CX} cy={CY} r={9} fill={COLORS.primary} />
        {nodes.slice(1).map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={3.5} fill="#fff" stroke={COLORS.primary} strokeWidth={1} />
        ))}
        <circle cx={360} cy={45} r={5} fill={COLORS.secondary} />
        <text x={28} y={28} fontSize={9} fill={COLORS.primary} fontWeight={600} fontFamily="system-ui,sans-serif">
          ROUTE PLAN · ACTIVE
        </text>
      </g>

      {!reducedMotion && (
        <g>
          <motion.path
            d={route}
            fill="none"
            stroke={COLORS.secondary}
            strokeWidth={1.5}
            strokeDasharray="8 10"
            animate={{ strokeDashoffset: [0, -36] }}
            transition={loop(reducedMotion, { duration: 2.5 * speed, ease: "linear" })}
          />
          {edges.map(([a, b], i) => {
            const na = nodes[a];
            const nb = nodes[b];
            return (
              <motion.line
                key={`a-${i}`}
                x1={na.cx}
                y1={na.cy}
                x2={nb.cx}
                y2={nb.cy}
                stroke={COLORS.secondary}
                strokeWidth={1}
                initial={{ strokeOpacity: 0.35 }}
                animate={{ strokeOpacity: [0.3, 0.75, 0.3] }}
                transition={loop(reducedMotion, { duration: 2.2 * speed, delay: i * 0.05 })}
              />
            );
          })}
          <motion.circle
            cx={CX}
            cy={CY}
            r={12}
            fill="none"
            stroke={COLORS.primary}
            animate={{ r: [10, 18, 10], opacity: [0.5, 0.15, 0.5] }}
            transition={loop(reducedMotion, { duration: 2 * speed })}
          />
          <motion.circle
            cx={CX}
            cy={CY}
            r={9}
            fill={COLORS.primary}
            animate={pulseOpacity(reducedMotion)}
            transition={pulseTransition(reducedMotion, 1.8 * speed)}
          />
          {edges.slice(0, 5).map(([a, b], i) => {
            const na = nodes[a];
            const nb = nodes[b];
            return (
              <motion.circle
                key={`p-${i}`}
                r={2.5}
                fill={COLORS.secondary}
                initial={{ cx: na.cx, cy: na.cy, opacity: 0.9 }}
                animate={{ cx: [na.cx, nb.cx], cy: [na.cy, nb.cy], opacity: [0.2, 1, 0.2] }}
                transition={loop(reducedMotion, { duration: 1.8 * speed, delay: i * 0.35, ease: "linear" })}
              />
            );
          })}
          <motion.circle
            r={4}
            fill={COLORS.secondary}
            initial={{ cx: 40, cy: 155, opacity: 1 }}
            animate={{
              cx: [40, 140, 240, 360, 40],
              cy: [155, 95, 70, 45, 155],
            }}
            transition={loop(reducedMotion, { duration: 5 * speed, ease: "easeInOut" })}
          />
        </g>
      )}
    </VisualSvgFrame>
  );
}
