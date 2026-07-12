"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

const NODES = [
  { id: "store", label: "Storefront", x: 12, y: 38 },
  { id: "api", label: "API Gateway", x: 32, y: 22 },
  { id: "orders", label: "Order Router", x: 52, y: 38 },
  { id: "pay", label: "Payments", x: 72, y: 22 },
  { id: "inv", label: "Inventory", x: 88, y: 42 },
] as const;

const PATHS = [
  "M 120 152 L 320 88 L 520 152 L 720 88 L 880 168",
  "M 120 152 L 520 152 L 880 168",
  "M 320 88 L 320 200 L 520 240 L 720 200",
  "M 520 152 L 520 240 L 720 280",
  "M 720 88 L 720 200 L 880 168",
] as const;

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  path: PATHS[i % PATHS.length],
  dur: 3.2 + (i % 5) * 0.6,
  delay: i * 0.35,
}));

export default function WhitelabelCommerceHeroBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div className="wlc-hero-backdrop" aria-hidden>
      <div className="wlc-hero-backdrop-noise" />
      <div className="wlc-hero-backdrop-grid" />
      <motion.div
        className="wlc-hero-backdrop-aurora"
        animate={reduced ? { opacity: 0.35 } : { opacity: [0.28, 0.48, 0.28] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="wlc-hero-backdrop-rays">
        <span className="wlc-hero-ray wlc-hero-ray--a" />
        <span className="wlc-hero-ray wlc-hero-ray--b" />
      </div>

      <svg className="wlc-hero-pipeline-svg" viewBox="0 0 1000 360" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="wlc-pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(45,212,191,0)" />
            <stop offset="45%" stopColor="rgba(45,212,191,0.7)" />
            <stop offset="55%" stopColor="rgba(245,158,11,0.55)" />
            <stop offset="100%" stopColor="rgba(45,212,191,0)" />
          </linearGradient>
          <filter id="wlc-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {PATHS.map((d, i) => (
          <g key={d}>
            <path d={d} className="wlc-hero-pipe" style={{ animationDelay: `${i * 0.4}s` }} />
            <path d={d} className="wlc-hero-pipe wlc-hero-pipe--ghost" />
          </g>
        ))}

        {!reduced
          ? PARTICLES.map((p) => (
              <circle key={p.id} r="2.5" className="wlc-hero-particle" filter="url(#wlc-glow)">
                <animateMotion dur={`${p.dur}s`} repeatCount="indefinite" path={p.path} begin={`${p.delay}s`} />
              </circle>
            ))
          : null}

        {NODES.map((node, i) => (
          <g key={node.id} transform={`translate(${node.x * 10}, ${node.y * 6})`}>
            <motion.rect
              x={-36}
              y={-14}
              width={72}
              height={28}
              rx={6}
              className="wlc-hero-node"
              animate={reduced ? {} : { opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
            <text className="wlc-hero-node-label" textAnchor="middle" y={4}>
              {node.label}
            </text>
          </g>
        ))}

        <motion.g
          animate={reduced ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="430" y="118" width="140" height="52" rx="10" className="wlc-hero-core" />
          <text className="wlc-hero-core-label" x="500" y="150" textAnchor="middle">
            Commerce Core
          </text>
        </motion.g>
      </svg>

      <div className="wlc-hero-backdrop-particles">
        {Array.from({ length: 24 }, (_, i) => (
          <motion.span
            key={i}
            className="wlc-hero-ambient-dot"
            style={{
              left: `${4 + ((i * 19) % 92)}%`,
              top: `${10 + ((i * 27) % 80)}%`,
            }}
            animate={
              reduced
                ? { opacity: 0.2 }
                : { opacity: [0.1, 0.45, 0.1], y: [0, -12 - (i % 4) * 4, 0] }
            }
            transition={{
              duration: 10 + (i % 6),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      <div className="wlc-hero-backdrop-vignette" />
    </div>
  );
}
