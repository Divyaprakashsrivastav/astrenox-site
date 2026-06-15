"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { safeSvgId } from "../features/visuals/motion";

type VisualVariant = "signal" | "neural" | "orbital";

interface MissionCardVisualProps {
  variant: VisualVariant;
}

export default function MissionCardVisual({ variant }: MissionCardVisualProps) {
  const uid = safeSvgId(useId());
  const reduced = useReducedMotion();
  const live = !reduced;

  if (variant === "signal") {
    return (
      <svg viewBox="0 0 200 80" className="mission-card-visual-svg" aria-hidden>
        <defs>
          <linearGradient id={`${uid}-sig`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[24, 40, 56].map((y, i) => (
          <line
            key={y}
            x1="16"
            y1={y}
            x2="184"
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.6"
            strokeDasharray="3 8"
          />
        ))}
        <motion.path
          d="M 16 40 C 48 22, 72 58, 100 40 S 152 22, 184 40"
          fill="none"
          stroke={`url(#${uid}-sig)`}
          strokeWidth="1.8"
          strokeLinecap="round"
          animate={live ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.55 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {[0, 0.45, 0.9].map((delay, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#c084fc"
            cy="40"
            animate={live ? { cx: [20, 180], opacity: [0, 1, 0] } : { cx: 60 + i * 40, opacity: 0.6 }}
            transition={{
              duration: 2.4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    );
  }

  if (variant === "neural") {
    const nodes = [
      { x: 100, y: 40, r: 5 },
      { x: 52, y: 24, r: 3.5 },
      { x: 148, y: 24, r: 3.5 },
      { x: 40, y: 58, r: 3 },
      { x: 160, y: 58, r: 3 },
      { x: 72, y: 62, r: 2.8 },
      { x: 128, y: 62, r: 2.8 },
    ];
    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4], [1, 5], [2, 6], [5, 6],
    ];

    return (
      <svg viewBox="0 0 200 80" className="mission-card-visual-svg" aria-hidden>
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(139,92,246,0.35)"
            strokeWidth="0.8"
            animate={live ? { opacity: [0.2, 0.75, 0.2] } : { opacity: 0.35 }}
            transition={{ duration: 2.2, delay: i * 0.12, repeat: Infinity }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={i === 0 ? "#c084fc" : "#8b5cf6"}
            animate={
              live
                ? { opacity: [0.45, 1, 0.45], r: [node.r * 0.9, node.r * 1.1, node.r * 0.9] }
                : { opacity: 0.7 }
            }
            transition={{ duration: 2.6, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </svg>
    );
  }

  const orbitNodes = [
    { angle: 0, r: 28 },
    { angle: 72, r: 28 },
    { angle: 144, r: 28 },
    { angle: 216, r: 28 },
    { angle: 288, r: 28 },
  ];

  return (
    <svg viewBox="0 0 200 80" className="mission-card-visual-svg" aria-hidden>
      <circle cx="100" cy="40" r="30" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="0.8" />
      <circle cx="100" cy="40" r="18" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="0.6" />
      <motion.circle
        cx="100"
        cy="40"
        r="6"
        fill="#c084fc"
        animate={live ? { opacity: [0.6, 1, 0.6], r: [5.5, 7, 5.5] } : { opacity: 0.8 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {orbitNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 100 + Math.cos(rad) * node.r;
        const y = 40 + Math.sin(rad) * node.r * 0.72;
        return (
          <motion.g
            key={i}
            animate={live ? { rotate: 360 } : undefined}
            style={{ transformOrigin: "100px 40px" }}
            transition={{ duration: 12 + i, repeat: Infinity, ease: "linear" }}
          >
            <line x1="100" y1="40" x2={x} y2={y} stroke="rgba(96,165,250,0.35)" strokeWidth="0.7" />
            <circle cx={x} cy={y} r="2.8" fill="#60a5fa" />
          </motion.g>
        );
      })}
      <motion.circle
        r="2.5"
        fill="#ffffff"
        animate={live ? { cx: [128, 100, 72, 100, 128], cy: [40, 52, 40, 28, 40] } : { cx: 128, cy: 40 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
