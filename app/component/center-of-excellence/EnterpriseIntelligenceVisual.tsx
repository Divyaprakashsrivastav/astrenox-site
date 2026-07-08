"use client";

import { memo, useEffect, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type OrbitNode = {
  id: string;
  label: string;
  angle: number;
  radius: number;
  tier: "platform" | "dept" | "gov";
};

const PLATFORMS: OrbitNode[] = [
  { id: "sap", label: "SAP", angle: -72, radius: 38, tier: "platform" },
  { id: "azure", label: "Azure", angle: -18, radius: 38, tier: "platform" },
  { id: "oracle", label: "Oracle", angle: 36, radius: 38, tier: "platform" },
  { id: "sf", label: "Salesforce", angle: 108, radius: 38, tier: "platform" },
  { id: "sn", label: "ServiceNow", angle: 180, radius: 38, tier: "platform" },
];

const DEPARTMENTS: OrbitNode[] = [
  { id: "ops", label: "Operations", angle: 0, radius: 58, tier: "dept" },
  { id: "fin", label: "Finance", angle: 60, radius: 58, tier: "dept" },
  { id: "scm", label: "Supply Chain", angle: 120, radius: 58, tier: "dept" },
  { id: "it", label: "IT", angle: 180, radius: 58, tier: "dept" },
  { id: "hr", label: "HR", angle: 240, radius: 58, tier: "dept" },
  { id: "cx", label: "Customer", angle: 300, radius: 58, tier: "dept" },
];

const GOVERNANCE: OrbitNode[] = [
  { id: "risk", label: "Risk", angle: 45, radius: 74, tier: "gov" },
  { id: "data", label: "Data Gov", angle: 135, radius: 74, tier: "gov" },
  { id: "sec", label: "Security", angle: 225, radius: 74, tier: "gov" },
  { id: "inn", label: "Innovation", angle: 315, radius: 74, tier: "gov" },
];

const ALL_NODES = [...PLATFORMS, ...DEPARTMENTS, ...GOVERNANCE];

function polar(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radiusPct * Math.cos(rad),
    y: 50 + radiusPct * Math.sin(rad),
  };
}

function EnterpriseIntelligenceVisual() {
  const [pulse, setPulse] = useState(0);
  const [activeId, setActiveId] = useState("sap");
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.45);
  const sx = useSpring(mx, { stiffness: 48, damping: 24 });
  const sy = useSpring(my, { stiffness: 48, damping: 24 });
  const [glow, setGlow] = useState({ x: 50, y: 45 });

  useEffect(() => {
    const ux = sx.on("change", (v) => setGlow((p) => ({ ...p, x: v * 100 })));
    const uy = sy.on("change", (v) => setGlow((p) => ({ ...p, y: v * 100 })));
    return () => {
      ux();
      uy();
    };
  }, [sx, sy]);

  useEffect(() => {
    const pulseId = window.setInterval(() => setPulse((v) => (v + 1) % 360), 40);
    const nodeId = window.setInterval(() => {
      setActiveId((prev) => {
        const idx = PLATFORMS.findIndex((n) => n.id === prev);
        return PLATFORMS[(idx + 1) % PLATFORMS.length].id;
      });
    }, 2200);
    return () => {
      window.clearInterval(pulseId);
      window.clearInterval(nodeId);
    };
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div className="coe-visual" onMouseMove={onMove} aria-hidden>
      <div
        className="coe-visual-light"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(56, 189, 248, 0.14), transparent 42%)`,
        }}
      />
      <div className="coe-visual-mesh" />
      <svg className="coe-visual-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="coe-core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#6366f1" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="coe-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
          </linearGradient>
          <filter id="coe-glow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[38, 58, 74].map((r, i) => (
          <motion.circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(167, 139, 250, 0.12)"
            strokeWidth="0.15"
            strokeDasharray="1.2 2.4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 + i * 0.1, rotate: pulse * (i % 2 === 0 ? 1 : -1) }}
            style={{ transformOrigin: "50px 50px" }}
          />
        ))}

        {ALL_NODES.map((node) => {
          const pos = polar(node.angle, node.radius);
          const active = node.id === activeId;
          const stroke =
            node.tier === "platform"
              ? active
                ? "rgba(56, 189, 248, 0.85)"
                : "rgba(167, 139, 250, 0.45)"
              : node.tier === "dept"
                ? "rgba(96, 165, 250, 0.35)"
                : "rgba(212, 175, 55, 0.28)";
          return (
            <motion.line
              key={`link-${node.id}`}
              x1="50"
              y1="50"
              x2={pos.x}
              y2={pos.y}
              stroke="url(#coe-line-grad)"
              strokeWidth={active ? 0.22 : 0.12}
              strokeOpacity={active ? 0.75 : 0.35}
              animate={{ strokeOpacity: active ? [0.45, 0.85, 0.45] : 0.3 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}

        <motion.circle
          cx="50"
          cy="50"
          r="9"
          fill="url(#coe-core-grad)"
          filter="url(#coe-glow)"
          animate={{ r: [8.5, 9.4, 8.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="50" cy="50" r="4.2" fill="rgba(224, 231, 255, 0.9)" />
        <text x="50" y="51.2" textAnchor="middle" className="coe-visual-core-label">
          COE
        </text>

        {ALL_NODES.map((node) => {
          const pos = polar(node.angle, node.radius);
          const active = node.id === activeId;
          const r = node.tier === "platform" ? 3.2 : node.tier === "dept" ? 2.4 : 2.1;
          return (
            <g key={node.id}>
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={r}
                fill={
                  node.tier === "platform"
                    ? active
                      ? "#38bdf8"
                      : "#818cf8"
                    : node.tier === "dept"
                      ? "#3b82f6"
                      : "#d4af37"
                }
                fillOpacity={active ? 0.95 : 0.65}
                animate={active ? { r: [r, r + 0.5, r] } : {}}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <text
                x={pos.x}
                y={pos.y + (node.tier === "platform" ? 6.5 : 5.5)}
                textAnchor="middle"
                className={`coe-visual-node-label coe-visual-node-label--${node.tier}`}
              >
                {node.label}
              </text>
            </g>
          );
        })}

        <motion.path
          d="M 18 82 Q 50 88 82 82"
          fill="none"
          stroke="rgba(212, 175, 55, 0.35)"
          strokeWidth="0.2"
          strokeDasharray="1.5 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="coe-visual-legend">
        <span>Platforms</span>
        <span>Departments</span>
        <span>Governance</span>
      </div>
    </div>
  );
}

export default memo(EnterpriseIntelligenceVisual);
