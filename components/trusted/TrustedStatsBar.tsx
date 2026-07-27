"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trustedSection } from "@/app/content/astrenox-content";

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
        {trustedSection.stats.map((stat, i) => (
          <motion.li
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
            className="trusted-stat-item"
          >
            <span className="trusted-stat-value">{stat.value}</span>
            <span className="trusted-stat-label">{stat.label}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
