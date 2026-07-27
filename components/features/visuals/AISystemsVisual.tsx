"use client";

import { motion } from "framer-motion";
import { useId, useMemo } from "react";
import type { VisualProps } from "../FeatureCardVisual";
import { COLORS, loop, pulseOpacity, pulseTransition, safeSvgId } from "./motion";
import { VisualSvgFrame } from "./VisualSvgFrame";

const CX = 180;
const CY = 80;

function buildNetwork() {
  const nodes: { cx: number; cy: number; r: number; core?: boolean }[] = [
    { cx: CX, cy: CY, r: 7, core: true },
  ];

  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
    nodes.push({
      cx: CX + Math.cos(a) * 68,
      cy: CY + Math.sin(a) * 52,
      r: 3.5,
    });
  }

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    nodes.push({
      cx: CX + Math.cos(a) * 34,
      cy: CY + Math.sin(a) * 28,
      r: 2.5,
    });
  }

  const edges: [number, number][] = [];
  for (let i = 1; i < nodes.length; i++) {
    edges.push([0, i]);
  }
  for (let i = 1; i < 9; i++) {
    edges.push([i, i + 1]);
  }
  edges.push([9, 1]);
  for (let i = 10; i < 17; i++) {
    edges.push([i, i + 1]);
  }
  edges.push([17, 10]);
  edges.push([1, 10], [3, 12], [5, 14], [7, 16]);

  return { nodes, edges };
}

const { nodes, edges } = buildNetwork();

export function AISystemsVisual({ active, reducedMotion }: VisualProps) {
  const uid = safeSvgId(useId());
  const speed = active ? 0.65 : 1;

  const packetEdges = useMemo(
    () => [
      [0, 1],
      [0, 4],
      [0, 7],
      [0, 10],
      [0, 13],
      [2, 12],
      [5, 15],
    ],
    []
  );

  return (
    <VisualSvgFrame viewBox="0 0 360 160">
      <defs>
        <radialGradient id={`${uid}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.5" />
          <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Static fallback, always visible */}
      <g opacity={1}>
        {[32, 52, 72].map((r) => (
          <circle
            key={r}
            cx={CX}
            cy={CY}
            r={r}
            fill="none"
            stroke={COLORS.line}
            strokeWidth={0.75}
            strokeOpacity={0.4}
            strokeDasharray="3 5"
          />
        ))}

        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          return (
            <line
              key={`s-${i}`}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke={COLORS.primary}
              strokeWidth={1}
              strokeOpacity={0.28}
            />
          );
        })}

        <circle cx={CX} cy={CY} r={36} fill={`url(#${uid}-core)`} />
        <circle cx={CX} cy={CY} r={10} fill={COLORS.primary} />
        <circle cx={CX} cy={CY} r={3.5} fill="#ffffff" />

        {nodes.slice(1).map((node, i) => (
          <circle
            key={`n-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={COLORS.fill}
            stroke={COLORS.primary}
            strokeWidth={1}
          />
        ))}
      </g>

      {/* Animated layer */}
      {!reducedMotion && (
        <g>
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
                animate={{ strokeOpacity: active ? [0.35, 0.75, 0.35] : [0.25, 0.5, 0.25] }}
                transition={loop(reducedMotion, {
                  duration: 2.4 * speed,
                  delay: i * 0.04,
                  ease: "easeInOut",
                })}
              />
            );
          })}

          <motion.circle
            cx={CX}
            cy={CY}
            r={14}
            fill="none"
            stroke={COLORS.primary}
            strokeWidth={1}
            initial={{ opacity: 0.4 }}
            animate={{ r: [12, 20, 12], opacity: [0.45, 0.15, 0.45] }}
            transition={loop(reducedMotion, { duration: 2.2 * speed, ease: "easeOut" })}
          />

          <motion.circle
            cx={CX}
            cy={CY}
            r={10}
            fill={COLORS.primary}
            initial={{ opacity: 0.9 }}
            animate={pulseOpacity(reducedMotion)}
            transition={pulseTransition(reducedMotion, 1.8 * speed)}
          />

          {packetEdges.map(([a, b], i) => {
            const na = nodes[a];
            const nb = nodes[b];
            return (
              <motion.circle
                key={`p-${i}`}
                r={2.5}
                fill={COLORS.secondary}
                initial={{ cx: na.cx, cy: na.cy, opacity: 0.9 }}
                animate={{
                  cx: [na.cx, nb.cx, na.cx],
                  cy: [na.cy, nb.cy, na.cy],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={loop(reducedMotion, {
                  duration: (active ? 1.5 : 2.2) * speed,
                  delay: i * 0.3,
                  ease: "linear",
                })}
              />
            );
          })}

          {nodes.slice(1).map((node, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={COLORS.fill}
              stroke={COLORS.primary}
              strokeWidth={1}
              initial={{ opacity: 0.85 }}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={loop(reducedMotion, {
                duration: 2.2 * speed,
                delay: i * 0.08,
                ease: "easeInOut",
              })}
            />
          ))}
        </g>
      )}
    </VisualSvgFrame>
  );
}
