"use client";

import { memo, useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAnimationActiveRef } from "../features/useAnimationActiveRef";

type NodeDef = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const PIPELINE: NodeDef[] = [
  { id: "llm", label: "LLM", x: 50, y: 8 },
  { id: "vdb", label: "Vector DB", x: 18, y: 26 },
  { id: "router", label: "Prompt Router", x: 82, y: 26 },
  { id: "agents", label: "AI Agents", x: 50, y: 42 },
  { id: "logic", label: "Business Logic", x: 22, y: 60 },
  { id: "api", label: "API Layer", x: 78, y: 60 },
  { id: "fe", label: "Frontend", x: 35, y: 80 },
  { id: "ana", label: "Analytics", x: 65, y: 80 },
];

const LINKS: [string, string][] = [
  ["llm", "vdb"],
  ["llm", "router"],
  ["vdb", "agents"],
  ["router", "agents"],
  ["agents", "logic"],
  ["agents", "api"],
  ["logic", "fe"],
  ["api", "ana"],
  ["logic", "api"],
  ["fe", "ana"],
];

const SNIPPETS = [
  "inference.stream()",
  "vector.query(k=12)",
  "agent.orchestrate()",
  "model.deploy()",
  "pipeline.run()",
];

function nodeById(id: string) {
  return PIPELINE.find((n) => n.id === id)!;
}

function AiEngineeringCanvas() {
  const rootRef = useRef<HTMLDivElement>(null);
  const activeRef = useAnimationActiveRef(rootRef);
  const [active, setActive] = useState(0);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 55, damping: 22 });
  const sy = useSpring(my, { stiffness: 55, damping: 22 });
  const [light, setLight] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const ux = sx.on("change", (v) => setLight((p) => ({ ...p, x: v * 100 })));
    const uy = sy.on("change", (v) => setLight((p) => ({ ...p, y: v * 100 })));
    return () => {
      ux();
      uy();
    };
  }, [sx, sy]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!activeRef.current) return;
      setActive((v) => (v + 1) % PIPELINE.length);
    }, 1500);
    return () => window.clearInterval(id);
  }, [activeRef]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      ref={rootRef}
      className="aipe-canvas"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.4);
      }}
      aria-hidden
    >
      <div className="aipe-canvas-blueprint" />
      <div
        className="aipe-canvas-light"
        style={{
          background: `radial-gradient(520px circle at ${light.x}% ${light.y}%, rgba(34,211,238,0.18), rgba(139,92,246,0.1) 38%, transparent 68%)`,
        }}
      />

      <div className="aipe-canvas-snippets">
        {SNIPPETS.map((s, i) => (
          <span key={s} className="aipe-snippet" style={{ animationDelay: `${i * 1.35}s` }}>
            {s}
          </span>
        ))}
      </div>

      <svg className="aipe-canvas-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="aipe-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.75)" />
            <stop offset="55%" stopColor="rgba(167,139,250,0.7)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0.75)" />
          </linearGradient>
          <filter id="aipe-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {LINKS.map(([a, b], i) => {
          const n1 = nodeById(a);
          const n2 = nodeById(b);
          return (
            <g key={`${a}-${b}`}>
              <line
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="rgba(96,165,250,0.16)"
                strokeWidth="0.22"
              />
              <motion.line
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="url(#aipe-flow)"
                strokeWidth="0.32"
                strokeDasharray="1.8 2.6"
                filter="url(#aipe-glow)"
                animate={{ strokeDashoffset: [0, -18] }}
                transition={{
                  duration: 2.2 + i * 0.12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <circle r="0.5" fill="#22d3ee" filter="url(#aipe-glow)">
                <animateMotion
                  dur={`${2.6 + (i % 4) * 0.35}s`}
                  repeatCount="indefinite"
                  path={`M${n1.x},${n1.y} L${n2.x},${n2.y}`}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {PIPELINE.map((node, i) => (
        <motion.div
          key={node.id}
          className={`aipe-canvas-node ${active === i ? "is-active" : ""}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{ y: [0, i % 2 === 0 ? -7 : 6, 0] }}
          transition={{
            duration: 4.2 + i * 0.28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="aipe-canvas-node-core" />
          <span className="aipe-canvas-node-label">{node.label}</span>
        </motion.div>
      ))}

      <div className="aipe-canvas-scan" />
    </div>
  );
}

export default memo(AiEngineeringCanvas);
