"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, GitBranch, Rocket } from "lucide-react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { homeMethodology } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];
const ICONS = [Brain, GitBranch, Rocket];

export default function MethodologyHorizon() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <DesignSection id="methodology">
      <DesignHeader label={homeMethodology.label} title={homeMethodology.title} description={homeMethodology.description} />
      <p className="meth-horizon-subtitle">{homeMethodology.subtitle}</p>

      <div ref={ref} className="meth-horizon">
        <div className="meth-horizon-track" aria-hidden>
          <motion.div
            className="meth-horizon-track-fill"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 }}
          />
        </div>

        <div className="meth-horizon-grid">
          {homeMethodology.stages.map((stage, i) => {
            const Icon = ICONS[i] ?? Brain;
            const active = hovered === stage.id;
            return (
              <motion.article
                key={stage.id}
                className={`meth-horizon-card ${active ? "is-active" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: EASE_OUT }}
                onMouseEnter={() => setHovered(stage.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -6, scale: 1.02 }}
                data-cursor-hover
              >
                <div className="meth-horizon-card-glass">
                  <div className="meth-horizon-card-head">
                    <span className="meth-horizon-num">{stage.number}</span>
                    <motion.div
                      className="meth-horizon-icon"
                      animate={active ? { scale: 1.08 } : { scale: 1 }}
                      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </motion.div>
                  </div>
                  <h3 className="meth-horizon-title">{stage.title}</h3>
                  <p className="meth-horizon-tagline">{stage.tagline}</p>

                  <motion.div
                    className="meth-horizon-details"
                    initial={false}
                    animate={{
                      height: active ? "auto" : 0,
                      opacity: active ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  >
                    <ul className="meth-horizon-items">
                      {stage.items.map((item) => (
                        <li key={item.title}>
                          <strong>{item.title}</strong>
                          <span>{item.description}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="meth-horizon-metrics">
                      {stage.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="meth-horizon-metric-val">{m.value}</p>
                          <p className="meth-horizon-metric-lbl">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </DesignSection>
  );
}
