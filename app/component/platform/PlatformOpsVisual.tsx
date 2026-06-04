"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

const NODES = [
  { x: 50, y: 28, label: "Search" },
  { x: 78, y: 42, label: "Graph" },
  { x: 22, y: 48, label: "Agents" },
  { x: 62, y: 68, label: "Workflows" },
];

export default function PlatformOpsVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="platform-ops-panel premium-card p-4 lg:p-5 h-full min-h-[320px]">
      <div className="flex items-center justify-between mb-4 px-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          Live operations
        </span>
        <span className="platform-live-dot text-[10px] font-medium text-primary">● Active</span>
      </div>

      <div className="platform-dashboard-grid">
        <div className="platform-dash-card col-span-2">
          <p className="text-[10px] uppercase tracking-wider text-muted mb-2">Agent throughput</p>
          <p className="font-heading text-2xl font-semibold text-text">2.4k</p>
          <p className="text-xs text-muted mt-1">tasks / 24h</p>
          <div className="platform-sparkline mt-3" aria-hidden>
            {[40, 55, 48, 72, 65, 88, 76].map((h, i) => (
              <motion.span
                key={i}
                className="platform-spark-bar"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: reduced ? 0 : 0.4 + i * 0.06, duration: 0.5 }}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="platform-dash-card">
          <p className="text-[10px] uppercase tracking-wider text-muted mb-2">Graph nodes</p>
          <p className="font-heading text-xl font-semibold text-text">184k</p>
        </div>

        <div className="platform-dash-card">
          <p className="text-[10px] uppercase tracking-wider text-muted mb-2">Sources</p>
          <p className="font-heading text-xl font-semibold text-text">47</p>
        </div>

        <div className="platform-dash-card col-span-2 relative min-h-[140px] overflow-hidden">
          <p className="text-[10px] uppercase tracking-wider text-muted mb-2 relative z-10">
            Knowledge flow
          </p>
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-4" aria-hidden>
            <circle cx="50" cy="50" r="32" fill="none" stroke="#E5E7EB" strokeWidth="0.5" strokeDasharray="3 5" />
            {NODES.map((n, i) => (
              <g key={n.label}>
                <motion.line
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="#7D2E68"
                  strokeWidth="0.8"
                  strokeOpacity="0.35"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: reduced ? 0 : 1.2,
                    delay: 0.2 + i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r="4"
                  fill="#fff"
                  stroke="#7D2E68"
                  strokeWidth="1"
                  animate={reduced ? {} : { opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
              </g>
            ))}
            <circle cx="50" cy="50" r="8" fill="#7D2E68" fillOpacity="0.15" stroke="#7D2E68" strokeWidth="1" />
            <text x="50" y="52" textAnchor="middle" fontSize="5" fill="#7D2E68" fontWeight="600">
              AIP
            </text>
          </svg>
          <ul className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
            {NODES.map((n) => (
              <li
                key={n.label}
                className="text-[9px] px-2 py-0.5 rounded-full bg-background/90 border border-border text-muted"
              >
                {n.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
