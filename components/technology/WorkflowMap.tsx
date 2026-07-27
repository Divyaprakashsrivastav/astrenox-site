"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

const LANES = [
  { id: "lane-a", y: 28, nodes: ["Ingress", "Router", "Inference", "Dispatch"] },
  { id: "lane-b", y: 50, nodes: ["Memory", "Policy", "Agents", "Output"] },
  { id: "lane-c", y: 72, nodes: ["Queue", "Knowledge", "Execute", "Ack"] },
] as const;

const FLOATING_LABELS = [
  { text: "Inference", x: 18, y: 18 },
  { text: "Routing", x: 72, y: 22 },
  { text: "Memory", x: 12, y: 48 },
  { text: "Agents", x: 78, y: 55 },
  { text: "Policies", x: 22, y: 78 },
  { text: "Knowledge", x: 68, y: 82 },
] as const;

function nodeX(index: number, total: number) {
  const start = 10;
  const end = 90;
  if (total <= 1) return start;
  return start + ((end - start) / (total - 1)) * index;
}

interface WorkflowMapProps {
  active: boolean;
}

export default function WorkflowMap({ active }: WorkflowMapProps) {
  const reduced = useReducedMotion();
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    if (!active || reduced) return;
    const id = setInterval(() => setPulseKey((k) => k + 1), 4000);
    return () => clearInterval(id);
  }, [active, reduced]);

  return (
    <div className="tech-cmd-workflow">
      {FLOATING_LABELS.map((label, i) => (
        <motion.span
          key={label.text}
          className="tech-cmd-float-label"
          style={{ left: `${label.x}%`, top: `${label.y}%` }}
          initial={{ opacity: 0 }}
          animate={
            active && !reduced
              ? { opacity: [0, 0.55, 0.55, 0] }
              : { opacity: 0 }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.9,
            ease: "easeInOut",
          }}
        >
          {label.text}
        </motion.span>
      ))}

      <svg viewBox="0 0 100 100" className="tech-cmd-workflow-svg" aria-hidden>
        {LANES.map((lane, li) => {
          const count = lane.nodes.length;
          return (
            <g key={lane.id}>
              <line
                x1="8"
                y1={lane.y}
                x2="92"
                y2={lane.y}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              {lane.nodes.map((_, ni) => {
                const x = nodeX(ni, count);
                return (
                  <motion.line
                    key={`seg-${ni}`}
                    x1={ni === 0 ? 8 : nodeX(ni - 1, count)}
                    y1={lane.y}
                    x2={x}
                    y2={lane.y}
                    stroke="#C97B84"
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    initial={{ opacity: 0.08 }}
                    animate={
                      active && !reduced
                        ? { opacity: [0.08, 0.45, 0.08] }
                        : { opacity: 0.08 }
                    }
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: li * 0.4 + ni * 0.55 + (pulseKey % 3) * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
              {!reduced &&
                [0, 1].map((pi) => (
                  <motion.circle
                    key={`pkt-${pi}`}
                    r="0.65"
                    fill="#7D2E68"
                    cy={lane.y}
                    animate={
                      active
                        ? { cx: [8, 92], opacity: [0, 0.85, 0.85, 0] }
                        : { cx: 8, opacity: 0 }
                    }
                    transition={{
                      cx: {
                        duration: 3.5 + li * 0.3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: pi * 1.4 + li * 0.5,
                      },
                      opacity: {
                        duration: 3.5 + li * 0.3,
                        repeat: Infinity,
                        times: [0, 0.05, 0.95, 1],
                        delay: pi * 1.4 + li * 0.5,
                      },
                    }}
                  />
                ))}
            </g>
          );
        })}
      </svg>

      {LANES.map((lane, li) =>
        lane.nodes.map((name, ni) => {
          const x = nodeX(ni, lane.nodes.length);
          return (
            <motion.div
              key={`${lane.id}-${name}`}
              className="tech-cmd-node"
              style={{ left: `${x}%`, top: `${lane.y}%` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                active
                  ? {
                      opacity: 1,
                      scale: [1, 1, 1.12, 1],
                    }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                opacity: { duration: 0.4, delay: 0.2 + li * 0.08 + ni * 0.04 },
                scale: {
                  duration: 3.5,
                  repeat: Infinity,
                  delay: li * 0.5 + ni * 0.55,
                  times: [0, 0.88, 0.92, 1],
                  ease: "easeOut",
                },
              }}
            >
              <span className="tech-cmd-node-dot" />
              <span className="tech-cmd-node-label">{name}</span>
            </motion.div>
          );
        })
      )}
    </div>
  );
}
