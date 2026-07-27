"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { ECOSYSTEM_STATS } from "./ecosystem-data";

export default function EcosystemStats() {
  return (
    <motion.div
      className="tech-eco-stats"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {ECOSYSTEM_STATS.map((stat, i) => (
        <motion.div
          key={stat.id}
          className="tech-eco-stat-card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + i * 0.06 }}
        >
          <Check size={14} className="text-[#7D2E68] shrink-0 mt-0.5" strokeWidth={2.5} />
          <div>
            <p className="font-heading text-xl sm:text-2xl font-semibold text-text tabular-nums leading-none">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={"decimals" in stat ? stat.decimals : 0}
              />
            </p>
            <p className="text-xs text-muted mt-1">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
