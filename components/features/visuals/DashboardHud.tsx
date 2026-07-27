"use client";

import { motion } from "framer-motion";
import { loop } from "./motion";

interface DashboardHudProps {
  label: string;
  code: string;
  active: boolean;
  reducedMotion: boolean;
  metrics?: number[];
}

export function DashboardHud({
  label,
  code,
  active,
  reducedMotion,
  metrics = [72, 88, 64, 91],
}: DashboardHudProps) {
  return (
    <div className="feature-hud pointer-events-none">
      <div className="feature-hud-bar">
        <span className="feature-hud-live">
          <motion.span
            className="feature-hud-dot"
            animate={reducedMotion ? {} : { opacity: active ? [1, 0.35, 1] : [0.7, 0.4, 0.7] }}
            transition={loop(reducedMotion, { duration: active ? 1.2 : 2, ease: "easeInOut" })}
          />
          LIVE
        </span>
        <span className="feature-hud-code">{code}</span>
        <span className="feature-hud-label">{label}</span>
      </div>
      <div className="feature-hud-metrics" aria-hidden>
        {metrics.map((h, i) => (
          <motion.span
            key={i}
            className="feature-hud-metric"
            style={{ height: `${h}%` }}
            animate={
              reducedMotion
                ? { scaleY: 1 }
                : { scaleY: active ? [0.65, 1, 0.75] : [0.5, 0.85, 0.6] }
            }
            transition={loop(reducedMotion, {
              duration: 1.8,
              delay: i * 0.12,
              ease: "easeInOut",
            })}
          />
        ))}
      </div>
    </div>
  );
}
