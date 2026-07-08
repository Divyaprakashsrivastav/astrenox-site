"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useMouseParallax } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";

const HUB = { x: 240, y: 228 };

const NODES = [
  { id: "solvoris", label: "Solvoris", x: 240, y: 68, tier: "core" as const },
  { id: "astrenai", label: "AstrenAI", x: 104, y: 162, tier: "core" as const },
  { id: "akiren", label: "AkiRen", x: 376, y: 162, tier: "core" as const },
  { id: "automation", label: "Automation Hub", x: HUB.x, y: HUB.y, tier: "hub" as const },
  { id: "workflow", label: "Workflow Engine", x: 240, y: 336, tier: "service" as const },
  { id: "agents", label: "AI Agents", x: 82, y: 302, tier: "service" as const },
  { id: "apis", label: "Enterprise APIs", x: 398, y: 302, tier: "service" as const },
  { id: "crm", label: "CRM", x: 58, y: 118, tier: "integration" as const },
  { id: "erp", label: "ERP", x: 422, y: 118, tier: "integration" as const },
  { id: "datalake", label: "Data Lake", x: 240, y: 412, tier: "integration" as const },
];

const EDGES: [string, string][] = [
  ["solvoris", "automation"],
  ["astrenai", "automation"],
  ["akiren", "automation"],
  ["solvoris", "astrenai"],
  ["solvoris", "akiren"],
  ["automation", "workflow"],
  ["automation", "agents"],
  ["automation", "apis"],
  ["workflow", "agents"],
  ["apis", "erp"],
  ["astrenai", "crm"],
  ["akiren", "datalake"],
  ["solvoris", "datalake"],
  ["crm", "agents"],
  ["erp", "apis"],
];

const TIER_RADIUS = {
  hub: 38,
  core: 24,
  service: 17,
  integration: 13,
};

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function NetworkNode({
  label,
  x,
  y,
  tier,
  index,
  reduced,
}: {
  label: string;
  x: number;
  y: number;
  tier: keyof typeof TIER_RADIUS;
  index: number;
  reduced: boolean;
}) {
  const r = TIER_RADIUS[tier];
  const isHub = tier === "hub";
  const isCore = tier === "core";
  const breathDuration = 3.4 + (index % 4) * 0.35;

  return (
    <motion.g
      style={{ transformOrigin: `${x}px ${y}px` }}
      animate={reduced ? { scale: 1 } : { scale: [1, 1.045, 1] }}
      transition={{ duration: breathDuration, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
    >
      <motion.circle
        cx={x}
        cy={y}
        r={r + (isHub ? 22 : 12)}
        fill="url(#nodeGlow)"
        animate={reduced ? { opacity: 0.18 } : { opacity: [0.1, 0.32, 0.1] }}
        transition={{ duration: breathDuration, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
      />
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={isHub ? "rgba(124,58,237,0.42)" : "rgba(18,14,32,0.94)"}
        stroke={isHub ? "rgba(196,181,253,0.9)" : isCore ? "rgba(168,85,247,0.8)" : "rgba(139,92,246,0.5)"}
        strokeWidth={isHub ? 2 : isCore ? 1.6 : 1.2}
      />
      {!reduced && (
        <motion.circle
          cx={x}
          cy={y}
          r={r}
          fill="none"
          stroke="rgba(196,181,253,0.55)"
          strokeWidth={1}
          animate={{ r: [r, r + (isHub ? 10 : 6), r], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.22, ease: "easeOut" }}
        />
      )}
      <text
        x={x}
        y={y + (label.includes(" ") ? -3 : 4)}
        textAnchor="middle"
        fill="rgba(250,250,251,0.92)"
        fontSize={isHub ? 10 : tier === "integration" ? 8.5 : 9}
        fontWeight={isHub || isCore ? 600 : 500}
      >
        {label.includes(" ") ? (
          label.split(" ").map((word, wi) => (
            <tspan key={wi} x={x} dy={wi === 0 ? 0 : 10}>
              {word}
            </tspan>
          ))
        ) : (
          label
        )}
      </text>
    </motion.g>
  );
}

function ProductsHeroNetwork() {
  const { ref, transform, onMove, onLeave, reduced } = useMouseParallax(20);

  return (
    <div
      ref={ref}
      className="products-hero-network-wrap"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden
    >
      <div className="products-hero-network-glow" />
      <motion.div className="products-hero-network-stage" style={{ transform }}>
        <svg viewBox="0 0 480 480" className="products-hero-network-svg">
          <defs>
            <radialGradient id="hubCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#7c3aed" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.35" />
            </linearGradient>
            <filter id="edgeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.circle
            cx={HUB.x}
            cy={HUB.y}
            r={105}
            fill="url(#hubCenterGlow)"
            animate={reduced ? { opacity: 0.5 } : { opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {EDGES.map(([a, b], i) => {
            const na = nodeById(a);
            const nb = nodeById(b);
            return (
              <g key={`${a}-${b}`} filter="url(#edgeGlow)">
                <line
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="url(#edgeGrad)"
                  strokeWidth="1.5"
                  opacity={0.52}
                />
                <motion.line
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="#d8b4fe"
                  strokeWidth="1.75"
                  strokeDasharray="5 12"
                  animate={
                    reduced
                      ? { opacity: 0.45 }
                      : { strokeDashoffset: [0, -34], opacity: [0.35, 0.75, 0.35] }
                  }
                  transition={{
                    strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.1 },
                    opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 },
                  }}
                />
              </g>
            );
          })}

          {!reduced &&
            EDGES.map(([a, b], i) => (
              <motion.circle
                key={`particle-${a}-${b}`}
                r={1.75}
                fill="#f3e8ff"
                filter="url(#edgeGlow)"
                animate={{
                  cx: [nodeById(a).x, nodeById(b).x],
                  cy: [nodeById(a).y, nodeById(b).y],
                  opacity: [0, 0.9, 0.9, 0],
                }}
                transition={{
                  duration: 2.2 + (i % 5) * 0.35,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.22,
                  times: [0, 0.12, 0.88, 1],
                }}
              />
            ))}

          {NODES.map((node, i) => (
            <NetworkNode key={node.id} {...node} index={i} reduced={!!reduced} />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

export default memo(ProductsHeroNetwork);
