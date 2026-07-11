"use client";

import { memo, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";

type OverviewSection = NonNullable<ServicePageContent["overview"]>;

const CAPABILITY_CHIPS = [
  "Technical Validation",
  "AI Roadmaps",
  "Governance",
  "Enterprise Architecture",
] as const;

function AdvisoryOverview({ overview }: { overview: OverviewSection }) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.5"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="adv-overview" aria-labelledby="adv-overview-title">
      <div className="adv-overview-bg" aria-hidden>
        <div className="adv-overview-bg-glow" />
        <div className="adv-overview-bg-grid" />
        <div className="adv-overview-bg-sweep" />
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            className="adv-overview-bg-particle"
            style={{
              left: `${(i * 21 + 10) % 90}%`,
              top: `${(i * 29 + 18) % 78}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${9 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="mvp-inner adv-overview-inner">
        <div className="adv-overview-grid">
          <div className="adv-overview-left">
            {overview.title ? (
              <motion.h2
                id="adv-overview-title"
                className="adv-overview-title"
                initial={{ opacity: 0, x: -28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, ease: EASE_PREMIUM }}
              >
                {overview.title}
              </motion.h2>
            ) : null}

            <div className="adv-overview-accent" aria-hidden>
              <motion.span className="adv-overview-accent-dot" />
              <motion.span
                className="adv-overview-accent-line"
                style={{ scaleY: lineScale }}
              />
            </div>
          </div>

          <div className="adv-overview-right">
            <motion.div
              className="adv-overview-editorial"
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12, ease: EASE_PREMIUM }}
            >
              <div className="adv-overview-editorial-sheen" aria-hidden />
              {overview.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 48)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.22 + i * 0.14, ease: EASE_PREMIUM }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <div className="adv-overview-chips" role="list" aria-label="Advisory focus areas">
              {CAPABILITY_CHIPS.map((chip, i) => (
                <motion.span
                  key={chip}
                  className="adv-overview-chip"
                  role="listitem"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.1, ease: EASE_PREMIUM }}
                >
                  <span className="adv-overview-chip-mark" aria-hidden>
                    ✓
                  </span>
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AdvisoryOverview);
