"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { ProductId } from "@/app/content/products-content";
import { useReducedMotion } from "../features/useReducedMotion";

interface ProductVisualProps {
  productId: ProductId;
}

function SolvorisVisual() {
  const nodes = [
    { id: "knowledge", label: "Knowledge", x: 60, y: 80 },
    { id: "documents", label: "Documents", x: 180, y: 50 },
    { id: "vectordb", label: "Vector DB", x: 300, y: 90 },
    { id: "llm", label: "LLM", x: 240, y: 200 },
    { id: "tracing", label: "Tracing", x: 100, y: 220 },
    { id: "telemetry", label: "Telemetry", x: 320, y: 240 },
  ];

  return (
    <svg viewBox="0 0 380 320" className="w-full h-full" aria-hidden="true">
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m) => (
          <line
            key={`${n.id}-${m.id}`}
            x1={n.x + 40}
            y1={n.y + 16}
            x2={m.x + 40}
            y2={m.y + 16}
            stroke="rgba(139,92,246,0.2)"
            strokeWidth="1"
          />
        ))
      )}
      {nodes.map((n) => (
        <g key={n.id}>
          <rect
            x={n.x}
            y={n.y}
            width="80"
            height="32"
            rx="8"
            fill="rgba(124,58,237,0.15)"
            stroke="rgba(139,92,246,0.35)"
            className="products-pulse-node"
          />
          <text x={n.x + 40} y={n.y + 20} textAnchor="middle" fill="rgba(250,250,251,0.85)" fontSize="10">
            {n.label}
          </text>
        </g>
      ))}
      <motion.circle
        cx="200" cy="160" r="4"
        fill="#8b5cf6"
        animate={{ cx: [60, 180, 300, 240, 100, 320, 60], cy: [96, 66, 106, 216, 236, 256, 96] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

function AstrenAIVisual() {
  const steps = ["CRM", "LLM", "Decision Engine", "API", "ERP", "Email", "Execution"];
  return (
    <svg viewBox="0 0 280 400" className="w-full h-auto mx-auto" aria-hidden="true">
      {steps.map((step, i) => (
        <g key={step}>
          <rect
            x="60"
            y={20 + i * 52}
            width="160"
            height="36"
            rx="10"
            fill="rgba(79,140,255,0.12)"
            stroke="rgba(79,140,255,0.35)"
          />
          <text x="140" y={42 + i * 52} textAnchor="middle" fill="rgba(250,250,251,0.9)" fontSize="11">
            {step}
          </text>
          {i < steps.length - 1 && (
            <motion.line
              x1="140" y1={56 + i * 52}
              x2="140" y2={68 + i * 52}
              stroke="#8b5cf6"
              strokeWidth="2"
              markerEnd="url(#arrow)"
              className="products-flow-line"
            />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6" />
        </marker>
      </defs>
    </svg>
  );
}

function AkiRenVisual() {
  const steps = ["Data Source", "Pipeline", "Cleaning", "Prompt", "LLM", "Evaluation", "Production"];
  return (
    <svg viewBox="0 0 400 120" className="w-full h-auto" aria-hidden="true">
      {steps.map((step, i) => (
        <g key={step}>
          <rect
            x={10 + i * 54}
            y="40"
            width="48"
            height="40"
            rx="8"
            fill="rgba(124,58,237,0.12)"
            stroke="rgba(139,92,246,0.3)"
          />
          <text
            x={34 + i * 54}
            y="58"
            textAnchor="middle"
            fill="rgba(250,250,251,0.8)"
            fontSize="7"
          >
            {step.split(" ").map((w, wi) => (
              <tspan key={wi} x={34 + i * 54} dy={wi === 0 ? 0 : 10}>
                {w}
              </tspan>
            ))}
          </text>
          {i < steps.length - 1 && (
            <line
              x1={58 + i * 54}
              y1="60"
              x2={64 + i * 54}
              y2="60"
              stroke="#4f8cff"
              strokeWidth="1.5"
              className="products-flow-line"
            />
          )}
        </g>
      ))}
      <motion.rect
        x="10" y="38" width="48" height="44" rx="8"
        fill="none" stroke="#8b5cf6" strokeWidth="2"
        animate={{ x: [10, 64, 118, 172, 226, 280, 334] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

function ProductVisual({ productId }: ProductVisualProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className="products-glass products-visual-wrap flex items-center justify-center p-8 opacity-60" />;
  }
  return (
    <div className="products-glass products-visual-wrap p-6">
      {productId === "solvoris" && <SolvorisVisual />}
      {productId === "astrenai" && <AstrenAIVisual />}
      {productId === "akiren" && <AkiRenVisual />}
    </div>
  );
}

export default memo(ProductVisual);
