"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import { ECOSYSTEM_METRICS } from "./ecosystem-data";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface EcosystemMetricsBarProps {
  active: boolean;
}

export default function EcosystemMetricsBar({ active }: EcosystemMetricsBarProps) {
  return (
    <motion.div
      className="tech-eco-metrics"
      initial={{ opacity: 0, y: 8 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.85, ease: EASE_OUT }}
    >
      {ECOSYSTEM_METRICS.map((metric, i) => (
        <motion.div
          key={metric.id}
          className="tech-eco-metric"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 + i * 0.06, duration: 0.45, ease: EASE_OUT }}
        >
          <span className="tech-eco-metric-value tabular-nums">
            <AnimatedCounter
              value={metric.value}
              suffix={metric.suffix}
              decimals={"decimals" in metric ? metric.decimals : 0}
              duration={1.1}
              immediate={active}
            />
          </span>
          <span className="tech-eco-metric-label">{metric.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
