"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import AnimatedCounter from "../ui/AnimatedCounter";
import { homeMetrics } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import { ParagraphExpand } from "./disclosure/HomeDisclosure";

export default function HomeMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const descriptionParagraphs = homeMetrics.description.split("\n\n").filter(Boolean);

  return (
    <DesignSection id="metrics" flow border={false} ambient={false}>
      <DesignHeader
        flow
        label={homeMetrics.label}
        title={homeMetrics.title}
        description={
          <ParagraphExpand
            paragraphs={descriptionParagraphs}
            visibleCount={2}
            paragraphClassName="flow-description"
          />
        }
        align="center"
      />

      <div ref={ref} className="metrics-flow-grid">
        {homeMetrics.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="metrics-flow-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: EASE_PREMIUM }}
            data-cursor-hover
          >
            <div className="metrics-flow-card-particles" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <p className="metrics-flow-value">
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
            <p className="metrics-flow-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </DesignSection>
  );
}
