"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { Card, CardContent } from "../ui/primitives/card";
import { useReducedMotion } from "../features/useReducedMotion";
import {
  MISSION_LOG,
  MISSION_METRICS,
  MISSION_STATUS,
  MODEL_LABELS,
} from "./control-plane-data";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface MissionControlDashboardProps {
  active: boolean;
}

interface LogEntry {
  id: number;
  message: string;
  time: string;
}

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function buildThroughputPoints(seed: number) {
  return Array.from({ length: 24 }, (_, i) => {
    const base = 40 + Math.sin((i + seed) * 0.45) * 18;
    const noise = ((i * 7 + seed) % 11) - 5;
    return Math.max(12, Math.min(88, base + noise));
  });
}

export default function MissionControlDashboard({
  active,
}: MissionControlDashboardProps) {
  const reduced = useReducedMotion();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [logCursor, setLogCursor] = useState(0);
  const [clock, setClock] = useState("");
  const [throughputSeed, setThroughputSeed] = useState(0);
  const [modelActivity, setModelActivity] = useState<number[]>(
    () => MODEL_LABELS.map((_, i) => 30 + (i % 5) * 12)
  );
  const [statusIndex, setStatusIndex] = useState(0);

  const throughputPoints = useMemo(
    () => buildThroughputPoints(throughputSeed),
    [throughputSeed]
  );

  const throughputPath = useMemo(() => {
    const w = 100;
    const h = 100;
    const step = w / (throughputPoints.length - 1);
    return throughputPoints
      .map((y, i) => {
        const x = i * step;
        const py = h - (y / 100) * h;
        return `${i === 0 ? "M" : "L"} ${x} ${py}`;
      })
      .join(" ");
  }, [throughputPoints]);

  useEffect(() => {
    if (!active) return;
    const initial = MISSION_LOG.slice(0, 4).map((msg, i) => ({
      id: i,
      message: msg,
      time: formatTime(new Date(Date.now() - (4 - i) * 4000)),
    }));
    setLogs(initial);
    setLogCursor(4);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const tick = () => setClock(formatTime(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [active]);

  useEffect(() => {
    if (!active || reduced) return;

    let cursor = logCursor;

    const logInterval = setInterval(() => {
      const msg = MISSION_LOG[cursor % MISSION_LOG.length]!;
      setLogs((prev) => [
        { id: cursor, message: msg, time: formatTime(new Date()) },
        ...prev.slice(0, 5),
      ]);
      cursor += 1;
      setLogCursor(cursor);
    }, 3200);

    const dataInterval = setInterval(() => {
      setThroughputSeed((s) => s + 1);
      setModelActivity((prev) =>
        prev.map((v) => {
          const delta = Math.floor(Math.random() * 14) - 6;
          return Math.max(12, Math.min(92, v + delta));
        })
      );
      setStatusIndex((i) => (i + 1) % MISSION_STATUS.length);
    }, 2800);

    return () => {
      clearInterval(logInterval);
      clearInterval(dataInterval);
    };
  }, [active, reduced]);

  return (
    <motion.div
      className="mc-dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 130, damping: 22 }}
    >
      {/* Left, key metrics */}
      <motion.aside
        className="mc-col mc-col-metrics"
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
      >
        {MISSION_METRICS.map((m) => (
          <motion.div
            key={m.id}
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
            }}
          >
            <Card className="mc-metric-card">
              <CardContent className="p-4">
                <p className="mc-metric-value tabular-nums">
                  {m.prefix}
                  <AnimatedCounter
                    value={m.value}
                    suffix={m.suffix}
                    decimals={"decimals" in m ? m.decimals : 0}
                    duration={1.2}
                    immediate={active}
                  />
                </p>
                <p className="mc-metric-label">{m.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.aside>

      {/* Center, live operations */}
      <motion.div
        className="mc-col mc-col-ops"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={active ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
      >
        <Card className="mc-ops-panel">
          <CardContent className="p-0">
            <header className="mc-ops-header">
              <span className="mc-ops-live">
                <span className="mc-ops-live-dot" />
                LIVE OPERATIONS
              </span>
              <span className="mc-ops-ts tabular-nums">{active ? clock : ", "}</span>
            </header>

            <div className="mc-ops-body">
              <div className="mc-throughput">
                <div className="mc-panel-label">Throughput</div>
                <svg viewBox="0 0 100 100" className="mc-throughput-svg" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id="mc-throughput-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C97B84" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#C97B84" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={`${throughputPath} L 100 100 L 0 100 Z`}
                    fill="url(#mc-throughput-fill)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.path
                    d={throughputPath}
                    fill="none"
                    stroke="#7D2E68"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, ease: EASE_OUT }}
                  />
                  {!reduced && (
                    <motion.path
                      d={throughputPath}
                      fill="none"
                      stroke="#C97B84"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity={0.5}
                      animate={{ pathLength: [0, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      strokeDasharray="4 96"
                    />
                  )}
                </svg>
              </div>

              <div className="mc-models">
                <div className="mc-panel-label">Model Activity</div>
                <div className="mc-models-bars">
                  {MODEL_LABELS.map((label, i) => (
                    <div key={label} className="mc-model-row">
                      <span className="mc-model-name">{label}</span>
                      <div className="mc-model-track">
                        <motion.div
                          className="mc-model-bar"
                          animate={{ width: `${modelActivity[i]}%` }}
                          transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mc-log-panel">
                <div className="mc-panel-label">Activity Feed</div>
                <ul className="mc-log-list">
                  <AnimatePresence initial={false} mode="popLayout">
                    {logs.map((entry) => (
                      <motion.li
                        key={entry.id}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: EASE_OUT }}
                        className="mc-log-item"
                      >
                        <span className="mc-log-time tabular-nums">{entry.time}</span>
                        <span className="mc-log-msg">{entry.message}</span>
                        <span className="mc-log-status" aria-hidden />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right, system status */}
      <motion.aside
        className="mc-col mc-col-status"
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
        }}
      >
        <p className="mc-status-heading">System Status</p>
        {MISSION_STATUS.map((item, i) => {
          const highlighted = statusIndex === i;
          return (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, x: 12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE_OUT } },
              }}
            >
              <Card className={`mc-status-card ${highlighted ? "is-active" : ""}`}>
                <CardContent className="p-3.5">
                  <p className="mc-status-label">{item.label}</p>
                  <motion.p
                    key={highlighted ? `${item.status}-on` : item.status}
                    className="mc-status-value"
                    animate={{
                      color: highlighted ? "#7D2E68" : "#111111",
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.status}
                  </motion.p>
                  <span className={`mc-status-indicator mc-status-indicator--${item.state}`} />
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.aside>
    </motion.div>
  );
}
