"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatConfig {
  label: string;
  type: "counter" | "decimal" | "static";
  value?: number;
  suffix?: string;
  display?: string;
}

const stats: StatConfig[] = [
  { type: "counter", value: 50, suffix: "+", label: "Enterprise Deployments" },
  { type: "counter", value: 100, suffix: "M+", label: "Autonomous Decisions Processed" },
  { type: "decimal", value: 99.98, suffix: "%", label: "Reliability" },
  { type: "static", display: "24/7", label: "Operations" },
];

function useAnimatedNumber(target: number, active: boolean, decimals = 0) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | undefined;
    let frame: number;
    const duration = 2000;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = eased * target;
      setCurrent(decimals > 0 ? Math.round(val * 100) / 100 : Math.floor(val));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, decimals]);

  return current;
}

function CounterStat({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const n = useAnimatedNumber(value, active);
  return (
    <span className="trusted-stat-value">
      {n}
      {suffix}
    </span>
  );
}

function DecimalStat({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const n = useAnimatedNumber(value, active, 2);
  return (
    <span className="trusted-stat-value">
      {n.toFixed(2)}
      {suffix}
    </span>
  );
}

function StatValue({ stat, active }: { stat: StatConfig; active: boolean }) {
  if (stat.type === "static") {
    return <span className="trusted-stat-value">{stat.display}</span>;
  }
  if (stat.type === "decimal" && stat.value !== undefined) {
    return <DecimalStat value={stat.value} suffix={stat.suffix ?? ""} active={active} />;
  }
  return (
    <CounterStat
      value={stat.value ?? 0}
      suffix={stat.suffix ?? ""}
      active={active}
    />
  );
}

export default function TrustedStatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="trusted-stats-bar"
    >
      <ul className="trusted-stats-list">
        {stats.map((stat, i) => (
          <motion.li
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
            className="trusted-stat-item"
          >
            <StatValue stat={stat} active={inView} />
            <span className="trusted-stat-label">{stat.label}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
