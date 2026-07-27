"use client";

import { memo } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

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
      <div className="mvp-timeline mvp-timeline--overview">
        {steps.map((step, i) => (
          <motion.div
            key={step.name}
            className="mvp-timeline-step"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: EASE_PREMIUM }}
          >
            <div className="mvp-glass-card mvp-timeline-step-inner">
              <span className="mvp-overview-timeline-index" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.name}</h3>
              <p><FormattedText text={step.description} /></p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default memo(OverviewTimeline);
