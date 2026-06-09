"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import AnimatedCounter from "../ui/AnimatedCounter";
import { homeMetrics } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export default function HomeMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <DesignSection id="metrics">
      <DesignHeader
        label={homeMetrics.label}
        title={homeMetrics.title}
        description={homeMetrics.description}
        align="center"
      />

      <div ref={ref} className="metrics-band">
        {homeMetrics.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="metrics-band-item"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08, ease: EASE_OUT }}
          >
            <p className="metrics-band-value">
              {"display" in stat ? (
                stat.display
              ) : (
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                  immediate={inView}
                />
              )}
            </p>
            <p className="metrics-band-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </DesignSection>
  );
}
