"use client";

import { motion } from "framer-motion";
import StorySection, { StoryReveal } from "../system/StorySection";
import { homeMethodology } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

export default function MethodologyPipeline() {
  return (
    <StorySection
      id="methodology"
      label={homeMethodology.label}
      title={homeMethodology.title}
      description={homeMethodology.description}
      variant="surface"
    >
      <div className="method-pipeline">
        <motion.div
          className="method-pipeline-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_PREMIUM }}
          aria-hidden
        />
        {homeMethodology.stages.map((stage, i) => (
          <StoryReveal key={stage.id} delay={i * 0.1}>
            <article className="method-stage">
              <div className="method-stage-marker">
                <span>{stage.number}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text">{stage.title}</h3>
              <p className="text-xs text-primary font-medium mt-1">{stage.tagline}</p>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                {stage.items[0]}
              </p>
            </article>
          </StoryReveal>
        ))}
      </div>
    </StorySection>
  );
}
