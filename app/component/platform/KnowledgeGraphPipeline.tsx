"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

export default function KnowledgeGraphPipeline() {
  const s = intelligencePlatform.knowledgeGraph;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <PlatformSection
      id={s.id}
      label={s.label}
      title={s.title}
      description={s.description}
      variant="muted"
    >
      <div ref={ref} className="platform-pipeline">
        {s.pipeline.map((stage, index) => (
          <div key={stage.id} className="platform-pipeline-stage">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`platform-pipeline-card ${stage.id === "graph" ? "platform-pipeline-card-hub" : ""}`}
            >
              {stage.id === "graph" ? (
                <div className="platform-graph-mini" aria-hidden>
                  <svg viewBox="0 0 120 80" className="w-full h-16">
                    {[
                      [60, 40, 20, 20],
                      [60, 40, 100, 25],
                      [60, 40, 30, 60],
                      [60, 40, 95, 58],
                    ].map(([x1, y1, x2, y2], i) => (
                      <motion.line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#7D2E68"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        animate={
                          reduced
                            ? {}
                            : { strokeOpacity: [0.25, 0.65, 0.25] }
                        }
                        transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                    <circle cx="60" cy="40" r="10" fill="#7D2E68" fillOpacity="0.2" stroke="#7D2E68" />
                    {(
                      [
                        [20, 20],
                        [100, 25],
                        [30, 60],
                        [95, 58],
                      ] as const
                    ).map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="5" fill="#fff" stroke="#C97B84" strokeWidth="1" />
                    ))}
                  </svg>
                </div>
              ) : null}
              <h3 className="font-heading text-lg font-semibold text-text">{stage.title}</h3>
              <p className="text-xs text-muted mt-1">{stage.subtitle}</p>
            </motion.article>

            {index < s.pipeline.length - 1 ? (
              <motion.div
                className="platform-pipeline-connector"
                aria-hidden
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.12 + 0.08 }}
              >
                <motion.div
                  className="platform-flow-packet"
                  animate={reduced ? {} : { y: ["0%", "100%"] }}
                  transition={{
                    duration: 1.8,
                    delay: index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ) : null}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {s.stats.map((stat) => (
          <div key={stat.label} className="premium-card p-5 text-center">
            <p className="font-heading text-xl font-semibold text-primary">{stat.value}</p>
            <p className="text-sm text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </PlatformSection>
  );
}
