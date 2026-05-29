"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "core", cx: 200, cy: 200, r: 7, delay: 0 },
  { id: "n1", cx: 120, cy: 140, r: 4, delay: 0.1 },
  { id: "n2", cx: 280, cy: 130, r: 4, delay: 0.15 },
  { id: "n3", cx: 300, cy: 240, r: 4, delay: 0.2 },
  { id: "n4", cx: 100, cy: 260, r: 4, delay: 0.25 },
  { id: "n5", cx: 200, cy: 90, r: 3.5, delay: 0.3 },
  { id: "n6", cx: 200, cy: 310, r: 3.5, delay: 0.35 },
  { id: "n7", cx: 60, cy: 200, r: 3.5, delay: 0.4 },
  { id: "n8", cx: 340, cy: 200, r: 3.5, delay: 0.45 },
];

const edges: [string, string][] = [
  ["core", "n1"],
  ["core", "n2"],
  ["core", "n3"],
  ["core", "n4"],
  ["core", "n5"],
  ["core", "n6"],
  ["core", "n7"],
  ["core", "n8"],
  ["n1", "n5"],
  ["n2", "n5"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function HeroAINetwork() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto aspect-square">
      <div
        className="absolute inset-[10%] rounded-full border border-border bg-card shadow-sm"
        aria-hidden
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[18%] rounded-full border border-dashed border-border"
        aria-hidden
      />

      <svg viewBox="0 0 400 400" className="relative w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5E7EB" />
            <stop offset="100%" stopColor="#D0D5DD" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const na = nodeMap[a];
          const nb = nodeMap[b];
          if (!na || !nb) return null;
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.6 }}
            />
          );
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            {node.id === "core" && (
              <circle
                cx={node.cx}
                cy={node.cy}
                r={18}
                fill="rgba(125, 46, 104, 0.08)"
              />
            )}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.id === "core" ? "#7D2E68" : "#E5E7EB"}
              stroke={node.id === "core" ? "none" : "#D0D5DD"}
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 0.45 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
