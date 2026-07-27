"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { Card, CardContent } from "../ui/primitives/card";
import { useReducedMotion } from "../features/useReducedMotion";
import WorkflowMap from "./WorkflowMap";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const BOTTOM_METRICS = [
  { id: "models", title: "AI Models", value: 12, suffix: "", label: "Active" },
  { id: "workflows", title: "Workflows", value: 47, suffix: "", label: "Running" },
  { id: "health", title: "System Health", value: 99.99, suffix: "%", label: "", decimals: 2 },
] as const;

interface CommandCenterPanelProps {
  active: boolean;
}

export default function CommandCenterPanel({ active }: CommandCenterPanelProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), {
    stiffness: 180,
    damping: 22,
  });

  const [agents, setAgents] = useState(47);
  const [latency, setLatency] = useState(142);

  useEffect(() => {
    if (!active || reduced) return;
    const id = setInterval(() => {
      setAgents((v) => Math.max(44, Math.min(51, v + (Math.random() > 0.5 ? 1 : -1))));
      setLatency((v) => Math.max(128, Math.min(156, v + Math.floor(Math.random() * 7) - 3)));
    }, 4200);
    return () => clearInterval(id);
  }, [active, reduced]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="tech-cmd-panel-wrap">
      <div className="tech-cmd-panel-glow" aria-hidden />
      <motion.div
        ref={ref}
        className="tech-cmd-panel"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          reduced
            ? undefined
            : {
                rotateX,
                rotateY,
                transformPerspective: 1200,
              }
        }
        initial={{ opacity: 0, y: 24 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.8 }}
        whileHover={
          reduced
            ? undefined
            : {
                boxShadow:
                  "0 24px 64px rgba(17,17,17,0.1), 0 0 48px rgba(201,123,132,0.12)",
              }
        }
      >
        <header className="tech-cmd-topbar">
          <div className="tech-cmd-topbar-left">
            <span className="tech-cmd-live">
              <span className="tech-cmd-live-dot" />
              LIVE SYSTEMS
            </span>
          </div>
          <div className="tech-cmd-topbar-stats">
            <span>
              Connected Agents:{" "}
              <strong className="tabular-nums">{agents}</strong>
            </span>
            <span>
              Model Router: <strong className="text-[#7D2E68]">Active</strong>
            </span>
            <span>
              Latency: <strong className="tabular-nums">{latency}ms</strong>
            </span>
          </div>
        </header>

        <div className="tech-cmd-workflow-area">
          <WorkflowMap active={active} />
        </div>

        <motion.div
          className="tech-cmd-bottom"
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
          }}
        >
          {BOTTOM_METRICS.map((m) => (
            <motion.div key={m.id} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } } }}>
              <Card className="tech-cmd-metric-card">
                <CardContent className="p-4">
                  <p className="tech-cmd-metric-title">{m.title}</p>
                  <p className="tech-cmd-metric-value tabular-nums">
                    <AnimatedCounter
                      value={m.value}
                      suffix={m.suffix}
                      decimals={"decimals" in m ? m.decimals : 0}
                      duration={1.1}
                      immediate={active}
                    />
                    {m.label && (
                      <span className="tech-cmd-metric-suffix"> {m.label}</span>
                    )}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
