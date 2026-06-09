"use client";

import { motion } from "framer-motion";
import { Plane, Bot, Factory, Truck } from "lucide-react";
import StorySection, { StoryReveal } from "../system/StorySection";
import { homePhysicalWorld } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const ICONS = [Bot, Plane, Truck, Factory];

const VISUALS = [
  "M 20 70 L 50 30 L 80 55",
  "M 15 50 Q 50 20 85 45",
  "M 25 75 L 45 40 L 70 60 L 90 35",
  "M 30 65 L 55 25 L 75 70",
];

export default function PhysicalWorldSection() {
  return (
    <StorySection
      id="physical-world"
      label={homePhysicalWorld.label}
      title={homePhysicalWorld.title}
      description={homePhysicalWorld.description}
      variant="dark"
    >
      <div className="physical-world-grid">
        {homePhysicalWorld.domains.map((domain, i) => {
          const Icon = ICONS[i] ?? Bot;
          return (
            <StoryReveal key={domain.id} delay={i * 0.08}>
              <motion.article
                className="physical-world-panel"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              >
                <div className="physical-world-visual">
                  <svg viewBox="0 0 100 80" className="w-full h-full" aria-hidden>
                    <motion.path
                      d={VISUALS[i]}
                      fill="none"
                      stroke="rgba(201,123,132,0.45)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0.4 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: EASE_PREMIUM }}
                    />
                    <motion.circle
                      r="2.5"
                      fill="#C97B84"
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 2.2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      cx={50}
                      cy={35 + i * 8}
                    />
                  </svg>
                </div>
                <div className="physical-world-body">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-secondary" strokeWidth={2} />
                    <h3 className="text-sm font-semibold text-white">{domain.title}</h3>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed">{domain.outcome}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-secondary mt-3">
                    {domain.metric}
                  </p>
                </div>
              </motion.article>
            </StoryReveal>
          );
        })}
      </div>
    </StorySection>
  );
}
