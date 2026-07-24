"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM } from "../v2/motion";

type NodeType = "agents" | "models" | "systems" | "workflows";

interface GraphNode {
  id: string;
  x: number;
  y: number;
  type: NodeType;
  hub?: boolean;
}

const TYPE_COLOR: Record<NodeType, string> = {
  agents: "#7D2E68",
  models: "#C97B84",
  systems: "#251351",
  workflows: "#9B6B8F",
};

/** 25 nodes, hub + ring layers */
function buildNodes(): GraphNode[] {
  const hub: GraphNode = { id: "hub", x: 200, y: 130, type: "systems", hub: true };
  const nodes: GraphNode[] = [hub];
  const types: NodeType[] = ["agents", "models", "systems", "workflows"];

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    nodes.push({
      id: `o-${i}`,
      x: 200 + Math.cos(a) * 72,
      y: 130 + Math.sin(a) * 52,
      type: types[i % 4]!
    });
  }

  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    nodes.push({
      id: `m-${i}`,
      x: 200 + Math.cos(a) * 118,
      y: 130 + Math.sin(a) * 78,
      type: types[(i + 1) % 4]!
    });
  }

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.4;
    nodes.push({
      id: `p-${i}`,
      x: 200 + Math.cos(a) * 42,
      y: 130 + Math.sin(a) * 30,
      type: types[(i + 2) % 4]!
    });
  }

  return nodes;
}

const NODES = buildNodes();
const HUB = NODES[0]!;

function buildEdges(): [GraphNode, GraphNode][] {
  const edges: [GraphNode, GraphNode][] = [];
  const outer = NODES.filter((n) => n.id.startsWith("m-"));
  const mid = NODES.filter((n) => n.id.startsWith("o-"));
  const inner = NODES.filter((n) => n.id.startsWith("p-"));

  for (const n of NODES) {
    if (!n.hub) edges.push([HUB, n]);
  }

  for (let i = 0; i < mid.length; i++) {
    edges.push([mid[i]!, mid[(i + 1) % mid.length]!]);
  }

  for (let i = 0; i < outer.length; i++) {
    if (i % 2 === 0) edges.push([outer[i]!, mid[i % mid.length]!]);
  }

  for (let i = 0; i < inner.length; i++) {
    edges.push([inner[i]!, mid[i % mid.length]!]);
  }

  return edges;
}

const EDGES = buildEdges();

const LEGEND: { type: NodeType; label: string }[] = [
  { type: "agents", label: "Agents" },
  { type: "models", label: "Models" },
  { type: "systems", label: "Systems" },
  { type: "workflows", label: "Workflows" },
];

export default function HeroDashboardGraph() {
  const reduced = useReducedMotion();

  return (
    <div className="hero-dash-network">
      <svg viewBox="0 0 400 260" className="hero-dash-network-svg" aria-hidden>
        <defs>
          <radialGradient id="hero-graph-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(125,46,104,0.08)" />
            <stop offset="100%" stopColor="rgba(125,46,104,0)" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="400" height="260" fill="url(#hero-graph-glow)" />

        {EDGES.map(([a, b], i) => (
          <g key={`${a.id}-${b.id}-${i}`}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#E8E8EE"
              strokeWidth="1"
            />
            {!reduced && (
              <motion.circle
                r="2"
                fill="#C97B84"
                animate={{ cx: [a.x, b.x], cy: [a.y, b.y] }}
                transition={{
                  duration: 2.4 + (i % 5) * 0.35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                opacity={0.85}
              />
            )}
          </g>
        ))}

        {!reduced && (
          <>
            <motion.circle
              cx={HUB.x}
              cy={HUB.y}
              r="28"
              fill="none"
              stroke="#C97B84"
              strokeWidth="1"
              animate={{ r: [24, 34, 24], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx={HUB.x}
              cy={HUB.y}
              r="20"
              fill="none"
              stroke="#7D2E68"
              strokeWidth="0.75"
              animate={{ r: [18, 26, 18], opacity: [0.25, 0, 0.25] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </>
        )}

        {NODES.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 + i * 0.025, duration: 0.35, ease: EASE_PREMIUM }}
          >
            {node.hub ? (
              <>
                <circle cx={node.x} cy={node.y} r="10" fill="rgba(125,46,104,0.12)" />
                <circle cx={node.x} cy={node.y} r="5" fill="#7D2E68" />
              </>
            ) : (
              <>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="#FAFAFB"
                  stroke={TYPE_COLOR[node.type]}
                  strokeWidth="1"
                />
                <circle cx={node.x} cy={node.y} r="2" fill={TYPE_COLOR[node.type]} />
              </>
            )}
          </motion.g>
        ))}
      </svg>

      <div className="hero-dash-legend">
        {LEGEND.map((item) => (
          <span key={item.type} className="hero-dash-legend-item">
            <span
              className="hero-dash-legend-dot"
              style={{ background: TYPE_COLOR[item.type] }}
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
