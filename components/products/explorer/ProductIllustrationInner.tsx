"use client";

import { memo } from "react";
import { motion } from "framer-motion";

type Props = { illustrationId: string };

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <motion.rect
        x={x}
        y={y}
        width={72}
        height={28}
        rx={8}
        fill="rgba(124,58,237,0.12)"
        stroke="rgba(139,92,246,0.35)"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <text x={x + 36} y={y + 18} textAnchor="middle" fill="rgba(250,250,251,0.85)" fontSize="9">
        {label}
      </text>
    </g>
  );
}

function ProductIllustrationInner({ illustrationId }: Props) {
  if (illustrationId === "solvoris") {
    const nodes = [
      { label: "Knowledge", x: 40, y: 60 },
      { label: "Vector DB", x: 160, y: 40 },
      { label: "LLM", x: 280, y: 70 },
      { label: "Tracing", x: 100, y: 140 },
      { label: "Telemetry", x: 240, y: 150 },
    ];
    return (
      <svg viewBox="0 0 400 220" className="w-full h-auto" aria-hidden>
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m) => (
            <line
              key={`${n.label}-${m.label}`}
              x1={n.x + 36}
              y1={n.y + 14}
              x2={m.x + 36}
              y2={m.y + 14}
              stroke="rgba(139,92,246,0.2)"
              strokeWidth="1"
            />
          ))
        )}
        {nodes.map((n) => (
          <Node key={n.label} {...n} />
        ))}
        <motion.circle
          r={4}
          fill="#8b5cf6"
          animate={{ cx: [76, 196, 316, 136, 276], cy: [74, 54, 84, 154, 164] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    );
  }

  if (illustrationId === "astrenai") {
    const steps = ["CRM", "LLM", "Decision", "API", "ERP", "Execute"];
    return (
      <svg viewBox="0 0 320 280" className="w-full h-auto mx-auto" aria-hidden>
        {steps.map((step, i) => (
          <g key={step}>
            <rect
              x={80}
              y={16 + i * 42}
              width={160}
              height={32}
              rx={10}
              fill="rgba(79,140,255,0.1)"
              stroke="rgba(79,140,255,0.35)"
            />
            <text x={160} y={36 + i * 42} textAnchor="middle" fill="rgba(250,250,251,0.9)" fontSize="11">
              {step}
            </text>
            {i < steps.length - 1 && (
              <motion.line
                x1={160}
                y1={48 + i * 42}
                x2={160}
                y2={58 + i * 42}
                stroke="#8b5cf6"
                strokeWidth="2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
          </g>
        ))}
      </svg>
    );
  }

  if (illustrationId === "akiren") {
    const steps = ["Data", "Pipeline", "Prompt", "LLM", "Eval", "Prod"];
    return (
      <svg viewBox="0 0 400 100" className="w-full h-auto" aria-hidden>
        {steps.map((step, i) => (
          <g key={step}>
            <rect
              x={12 + i * 62}
              y={30}
              width={52}
              height={36}
              rx={8}
              fill="rgba(124,58,237,0.1)"
              stroke="rgba(139,92,246,0.3)"
            />
            <text x={38 + i * 62} y={52} textAnchor="middle" fill="rgba(250,250,251,0.8)" fontSize="9">
              {step}
            </text>
            {i < steps.length - 1 && (
              <line
                x1={64 + i * 62}
                y1={48}
                x2={72 + i * 62}
                y2={48}
                stroke="#4f8cff"
                strokeWidth="1.5"
              />
            )}
          </g>
        ))}
        <motion.rect
          x={10}
          y={28}
          width={56}
          height={40}
          rx={8}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          animate={{ x: [10, 72, 134, 196, 258, 320] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    );
  }

  if (illustrationId === "factory") {
    const layers = ["Intent", "Agents", "Code", "Test", "Deploy"];
    return (
      <svg viewBox="0 0 300 300" className="w-full h-auto mx-auto" aria-hidden>
        {layers.map((layer, i) => (
          <g key={layer}>
            <motion.rect
              x={30 + i * 10}
              y={30 + i * 48}
              width={240 - i * 20}
              height={40}
              rx={10}
              fill="rgba(124,58,237,0.1)"
              stroke="rgba(139,92,246,0.3)"
              animate={{ strokeOpacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            />
            <text
              x={150}
              y={56 + i * 48}
              textAnchor="middle"
              fill="rgba(250,250,251,0.85)"
              fontSize="11"
            >
              {layer}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (illustrationId === "mission") {
    return (
      <svg viewBox="0 0 300 300" className="w-full h-auto mx-auto" aria-hidden>
        <motion.circle
          cx={150}
          cy={150}
          r={48}
          fill="rgba(124,58,237,0.15)"
          stroke="rgba(139,92,246,0.4)"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <text x={150} y={154} textAnchor="middle" fill="rgba(250,250,251,0.9)" fontSize="11">
          AI Core
        </text>
        {["Guardrails", "RAG", "HITL", "Verify", "Monitor"].map((label, i) => {
          const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
          const x = 150 + Math.cos(angle) * 100;
          const y = 150 + Math.sin(angle) * 100;
          return (
            <g key={label}>
              <motion.circle
                cx={x}
                cy={y}
                r={22}
                fill="rgba(14,10,28,0.8)"
                stroke="rgba(139,92,246,0.35)"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
              <text x={x} y={y + 4} textAnchor="middle" fill="rgba(250,250,251,0.75)" fontSize="8">
                {label}
              </text>
              <line x1={150} y1={150} x2={x} y2={y} stroke="rgba(139,92,246,0.15)" />
            </g>
          );
        })}
      </svg>
    );
  }

  if (illustrationId === "public") {
    return (
      <svg viewBox="0 0 360 200" className="w-full h-auto" aria-hidden>
        {["Citizen", "Revenue", "Health", "Urban"].map((label, i) => (
          <g key={label}>
            <rect
              x={20 + i * 85}
              y={60}
              width={75}
              height={80}
              rx={12}
              fill="rgba(124,58,237,0.1)"
              stroke="rgba(139,92,246,0.3)"
            />
            <text x={57 + i * 85} y={105} textAnchor="middle" fill="rgba(250,250,251,0.8)" fontSize="9">
              {label}
            </text>
          </g>
        ))}
        <motion.rect
          x={20}
          y={58}
          width={79}
          height={84}
          rx={12}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          animate={{ x: [20, 105, 190, 275, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    );
  }

  if (illustrationId.startsWith("infra-")) {
    return (
      <svg viewBox="0 0 360 180" className="w-full h-auto" aria-hidden>
        <motion.rect
          x={40}
          y={40}
          width={280}
          height={100}
          rx={16}
          fill="rgba(124,58,237,0.08)"
          stroke="rgba(139,92,246,0.3)"
          animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={60 + i * 85}
            y={65}
            width={60}
            height={50}
            rx={8}
            fill="rgba(79,140,255,0.12)"
            stroke="rgba(79,140,255,0.3)"
            animate={{ y: [65, 62, 65] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        <text x={180} y={130} textAnchor="middle" fill="rgba(250,250,251,0.5)" fontSize="10">
          Infrastructure Topology
        </text>
      </svg>
    );
  }

  if (illustrationId === "crm" || illustrationId === "genai") {
    return (
      <svg viewBox="0 0 320 160" className="w-full h-auto" aria-hidden>
        <motion.circle
          cx={160}
          cy={80}
          r={30}
          fill="rgba(124,58,237,0.2)"
          stroke="rgba(139,92,246,0.5)"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = 160 + Math.cos(angle) * 90;
          const y = 80 + Math.sin(angle) * 55;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={16} fill="rgba(14,10,28,0.9)" stroke="rgba(139,92,246,0.3)" />
              <line x1={160} y1={80} x2={x} y2={y} stroke="rgba(139,92,246,0.2)" />
            </g>
          );
        })}
      </svg>
    );
  }

  if (illustrationId === "cta") {
    return (
      <svg viewBox="0 0 300 120" className="w-full h-auto" aria-hidden>
        <motion.path
          d="M40 60 H240"
          stroke="url(#ctaGrad)"
          strokeWidth="2"
          strokeDasharray="6 10"
          animate={{ strokeDashoffset: [0, -32] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx={40}
          cy={60}
          r={8}
          fill="#8b5cf6"
          animate={{ cx: [40, 240, 40] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f8cff" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 300 120" className="w-full h-auto" aria-hidden>
      <motion.rect
        x={50}
        y={30}
        width={200}
        height={60}
        rx={12}
        fill="rgba(124,58,237,0.1)"
        stroke="rgba(139,92,246,0.35)"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}

export default memo(ProductIllustrationInner);
