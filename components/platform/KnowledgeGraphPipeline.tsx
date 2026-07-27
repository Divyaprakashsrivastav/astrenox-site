"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

export default function KnowledgeGraphPipeline() {
  const s = intelligencePlatform.knowledgeGraph;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PlatformSection
      id={s.id}
      label={s.label}
      title={s.title}
      description={s.description}
    >
      <div ref={ref} className="platform-pipeline">
        {s.pipeline.map((stage, index) => (
          <div key={stage.id} className="platform-pipeline-stage">
            <motion.article
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="enterprise-card p-5 text-center w-full"
            >
              {stage.id === "graph" ? (
                <div className="mb-3" aria-hidden>
                  <svg viewBox="0 0 120 80" className="w-full h-14 mx-auto max-w-[10rem]">
                    {[
                      [60, 40, 20, 20],
                      [60, 40, 100, 25],
                      [60, 40, 30, 60],
                      [60, 40, 95, 58],
                    ].map(([x1, y1, x2, y2], i) => (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                    ))}
                    <circle cx="60" cy="40" r="8" fill="#F8F8FA" stroke="#8E2F74" strokeWidth="1" />
                    {(
                      [
                        [20, 20],
                        [100, 25],
                        [30, 60],
                        [95, 58],
                      ] as const
                    ).map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="4" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
                    ))}
                  </svg>
                </div>
              ) : null}
              <h3 className="font-heading text-lg font-semibold text-text">{stage.title}</h3>
              <p className="text-xs text-muted mt-1">{stage.subtitle}</p>
            </motion.article>

            {index < s.pipeline.length - 1 ? (
              <div
                className="w-px h-8 bg-border my-1"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        {s.stats.map((stat) => (
          <div key={stat.label} className="enterprise-card p-5 text-center">
            <p className="font-heading text-xl font-semibold text-text">{stat.value}</p>
            <p className="text-sm text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </PlatformSection>
  );
}
