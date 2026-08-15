"use client";

import { memo } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";

export type OverviewTimelineStep = {
  name: string;
  description: string;
};

function OverviewTimeline({
  steps,
  title,
  titleId,
}: {
  steps: OverviewTimelineStep[];
  title?: string;
  titleId?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="mvp-overview-timeline-wrap">
      {title ? (
        <motion.h3
          id={titleId}
          className="mvp-about-title mvp-overview-timeline-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          {title}
        </motion.h3>
      ) : null}

      <div className="mvp-ov-tl">
        <span className="mvp-ov-tl-spine" aria-hidden>
          <span className="mvp-ov-tl-spine-fill" />
        </span>
        <ol className="mvp-ov-tl-list">
        {steps.map((step, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <motion.li
              key={step.name}
              className={`mvp-ov-tl-item mvp-ov-tl-item--${side}`}
              initial={{ opacity: 0, y: reduced ? 0 : 18, x: reduced ? 0 : side === "left" ? -16 : 16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_PREMIUM }}
            >
              <span className="mvp-ov-tl-node" aria-hidden>
                <span className="mvp-ov-tl-node-ring" />
                <span className="mvp-ov-tl-node-num">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <article className="mvp-ov-tl-card">
                <h3 className="mvp-ov-tl-heading">{step.name}</h3>
                <p className="mvp-ov-tl-copy">
                  <FormattedText text={step.description} />
                </p>
              </article>
            </motion.li>
          );
        })}
        </ol>
      </div>
    </div>
  );
}

export default memo(OverviewTimeline);
