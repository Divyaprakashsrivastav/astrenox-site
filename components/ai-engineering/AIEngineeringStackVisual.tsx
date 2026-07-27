"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

const LAYERS = [
  { id: "fe", label: "Interface", y: 12 },
  { id: "api", label: "API Layer", y: 32 },
  { id: "orch", label: "Orchestration", y: 52 },
  { id: "data", label: "Vector / Data", y: 72 },
  { id: "ops", label: "MLOps", y: 92 },
] as const;

function AIEngineeringStackVisual() {
  return (
    <div className="aie-stack-visual" aria-hidden>
      <svg viewBox="0 0 400 280" className="aie-stack-svg">
        <defs>
          <linearGradient id="aie-stack-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124,92,255,0.35)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0.15)" />
          </linearGradient>
        </defs>

        {LAYERS.map((layer, i) => (
          <g key={layer.id}>
            <motion.rect
              x={40 + i * 8}
              y={layer.y}
              width={320 - i * 16}
              height={36}
              rx={6}
              fill="rgba(12,10,28,0.6)"
              stroke="url(#aie-stack-grad)"
              strokeWidth={1}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_PREMIUM }}
            />
            <motion.text
              x={56 + i * 8}
              y={layer.y + 22}
              fill="rgba(237,233,254,0.55)"
              fontSize={11}
              fontFamily="ui-monospace, monospace"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              {layer.label}
            </motion.text>
            {i < LAYERS.length - 1 && (
              <motion.line
                x1={200}
                y1={layer.y + 36}
                x2={200}
                y2={LAYERS[i + 1].y}
                stroke="rgba(124,92,255,0.25)"
                strokeWidth={1}
                strokeDasharray="3 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              />
            )}
          </g>
        ))}

        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={200}
            r={2}
            fill="rgba(167,139,250,0.8)"
            initial={{ cy: 48 }}
            animate={{ cy: [48, 200, 48] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default memo(AIEngineeringStackVisual);
