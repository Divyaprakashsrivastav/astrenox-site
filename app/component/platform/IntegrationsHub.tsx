"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PlatformSection from "./PlatformSection";
import { intelligencePlatform } from "@/app/content/platform-content";

const CONNECTORS = intelligencePlatform.integrations.connectors;

export default function IntegrationsHub() {
  const s = intelligencePlatform.integrations;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <PlatformSection id={s.id} label={s.label} title={s.title} description={s.description}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="enterprise-card p-5 lg:p-6 text-center max-w-xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Hub</p>
          <p className="font-heading text-xl font-semibold text-text mt-1">{s.hubLabel}</p>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            One control plane for search, graph, agents, and workflow automation.
          </p>
        </motion.div>

        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {CONNECTORS.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.04 }}
              className="enterprise-card p-4 flex items-center gap-3"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: c.accent }}
              />
              <span className="text-sm font-semibold text-text">{c.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-center text-sm text-muted max-w-xl mx-auto">
        Data flows into <strong className="text-text font-medium">{s.hubLabel}</strong>—not
        another vendor silo. Your teams search, graph, and automate from one Astrenox control plane.
      </p>
    </PlatformSection>
  );
}
