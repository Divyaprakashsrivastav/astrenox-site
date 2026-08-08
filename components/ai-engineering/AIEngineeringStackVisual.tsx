"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

const LAYERS = [
  {
    id: "fe",
    label: "Frontend & Interface",
    sub: "Next.js · React · Streaming UI",
    y: 48,
    accent: "rgba(56, 189, 248, 0.55)",
  },
  {
    id: "api",
    label: "Backend & API",
    sub: "FastAPI · Node · Routing",
    y: 158,
    accent: "rgba(129, 140, 248, 0.55)",
  },
  {
    id: "orch",
    label: "Orchestration & Platforms",
    sub: "LangGraph · Vertex · Bedrock",
    y: 268,
    accent: "rgba(167, 139, 250, 0.65)",
  },
  {
    id: "data",
    label: "Vector & Semantic Infra",
    sub: "Pinecone · Qdrant · Routing",
    y: 378,
    accent: "rgba(196, 181, 253, 0.55)",
  },
  {
    id: "ops",
    label: "Observability & MLOps",
    sub: "Traces · Eval · CI/CD",
    y: 488,
    accent: "rgba(232, 121, 249, 0.5)",
  },
] as const;

const LAYER_H = 78;
const VIEW_W = 520;
const VIEW_H = 640;

function AIEngineeringStackVisual() {
  return (
    <div className="aie-stack-visual" aria-hidden>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="aie-stack-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="aie-stack-panel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 92, 255, 0.22)" />
            <stop offset="55%" stopColor="rgba(56, 189, 248, 0.08)" />
            <stop offset="100%" stopColor="rgba(12, 10, 28, 0.35)" />
          </linearGradient>
          <linearGradient id="aie-stack-rail" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.55)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.7)" />
            <stop offset="100%" stopColor="rgba(232, 121, 249, 0.45)" />
          </linearGradient>
          <radialGradient id="aie-stack-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(124, 92, 255, 0.18)" />
            <stop offset="100%" stopColor="rgba(124, 92, 255, 0)" />
          </radialGradient>
          <filter id="aie-stack-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={VIEW_W} height={VIEW_H} fill="url(#aie-stack-glow)" />

        {/* Frame */}
        <rect
          x={18}
          y={18}
          width={VIEW_W - 36}
          height={VIEW_H - 36}
          rx={22}
          fill="rgba(8, 6, 18, 0.55)"
          stroke="rgba(167, 139, 250, 0.18)"
          strokeWidth={1}
        />

        {/* Vertical data rail */}
        <line
          x1={VIEW_W / 2}
          y1={40}
          x2={VIEW_W / 2}
          y2={VIEW_H - 40}
          stroke="url(#aie-stack-rail)"
          strokeWidth={1.5}
          strokeOpacity={0.45}
          strokeDasharray="4 8"
        />

        {LAYERS.map((layer, i) => {
          const inset = 36 + i * 10;
          const width = VIEW_W - inset * 2;
          const x = inset;

          return (
            <g key={layer.id}>
              <motion.rect
                x={x}
                y={layer.y}
                width={width}
                height={LAYER_H}
                rx={14}
                fill="url(#aie-stack-panel)"
                stroke={layer.accent}
                strokeWidth={1.25}
                filter="url(#aie-stack-soft)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: EASE_PREMIUM }}
              />

              {/* Accent bar */}
              <motion.rect
                x={x}
                y={layer.y + 14}
                width={4}
                height={LAYER_H - 28}
                rx={2}
                fill={layer.accent}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: `${x + 2}px ${layer.y + LAYER_H / 2}px` }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.09, ease: EASE_PREMIUM }}
              />

              <motion.text
                x={x + 22}
                y={layer.y + 34}
                fill="rgba(244, 242, 255, 0.92)"
                fontSize={15}
                fontWeight={600}
                fontFamily="ui-sans-serif, system-ui, sans-serif"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.09 }}
              >
                {layer.label}
              </motion.text>

              <motion.text
                x={x + 22}
                y={layer.y + 56}
                fill="rgba(196, 181, 253, 0.55)"
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.28 + i * 0.09 }}
              >
                {layer.sub}
              </motion.text>

              {/* Layer index chip */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.25 + i * 0.09 }}
              >
                <rect
                  x={x + width - 44}
                  y={layer.y + LAYER_H / 2 - 12}
                  width={28}
                  height={24}
                  rx={8}
                  fill="rgba(12, 10, 28, 0.7)"
                  stroke="rgba(167, 139, 250, 0.28)"
                />
                <text
                  x={x + width - 30}
                  y={layer.y + LAYER_H / 2 + 5}
                  textAnchor="middle"
                  fill="rgba(216, 180, 254, 0.85)"
                  fontSize={11}
                  fontFamily="ui-monospace, monospace"
                >
                  {String(i + 1).padStart(2, "0")}
                </text>
              </motion.g>

              {i < LAYERS.length - 1 ? (
                <motion.line
                  x1={VIEW_W / 2}
                  y1={layer.y + LAYER_H}
                  x2={VIEW_W / 2}
                  y2={LAYERS[i + 1].y}
                  stroke={layer.accent}
                  strokeWidth={1.5}
                  strokeOpacity={0.35}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                />
              ) : null}
            </g>
          );
        })}

        {/* Flow pulses along the rail */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={VIEW_W / 2}
            r={3.5}
            fill="rgba(196, 181, 253, 0.9)"
            initial={{ cy: 70, opacity: 0 }}
            animate={{ cy: [70, 560, 70], opacity: [0, 1, 0] }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.4,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default memo(AIEngineeringStackVisual);
