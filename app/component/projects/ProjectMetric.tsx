"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectMetricProps {
  value: string;
  label: string;
  animate: boolean;
}

function parseNumeric(value: string): { num: number; prefix: string; suffix: string; decimals: number } | null {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return null;
  const num = parseFloat(match[1]);
  if (Number.isNaN(num)) return null;
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { num, prefix: "", suffix: match[2], decimals };
}

export default function ProjectMetric({ value, label, animate }: ProjectMetricProps) {
  const parsed = parseNumeric(value);
  const [display, setDisplay] = useState(parsed ? "0" : value);

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    if (!animate) {
      setDisplay(
        parsed.decimals > 0
          ? `${parsed.num.toFixed(parsed.decimals)}${parsed.suffix}`
          : `${Math.round(parsed.num)}${parsed.suffix}`
      );
      return;
    }

    let frame: number;
    const start = performance.now();
    const duration = 700;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = parsed.num * eased;
      setDisplay(
        parsed.decimals > 0
          ? `${current.toFixed(parsed.decimals)}${parsed.suffix}`
          : `${Math.round(current)}${parsed.suffix}`
      );
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, value, parsed]);

  return (
    <div className="project-metric-cell">
      <motion.p
        className="text-sm font-bold text-text tabular-nums"
        animate={animate ? { scale: [1, 1.04, 1] } : {}}
        transition={{ duration: 0.35 }}
      >
        {display}
      </motion.p>
      <p className="text-[9px] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}
