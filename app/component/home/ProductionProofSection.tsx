"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import { homeMetrics, homeTestimonials } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const featured = homeTestimonials.items[0];

export default function ProductionProofSection() {
  return (
    <section className="astrenox-section astrenox-section-surface">
      <div className="astrenox-section-inner">
        <div className="proof-layout">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            className="proof-stats"
          >
            <p className="astrenox-label mb-4">Production Proof</p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {homeMetrics.stats.map((stat) => (
                <div key={stat.label} className="proof-stat-cell">
                  <p className="font-heading text-2xl font-semibold text-text tabular-nums">
                    {"display" in stat ? (
                      stat.display
                    ) : (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={"decimals" in stat ? stat.decimals : 0}
                      />
                    )}
                  </p>
                  <p className="text-[10px] text-muted mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_PREMIUM }}
            className="proof-quote"
          >
            <p className="font-heading text-xl text-text leading-relaxed">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted">
              <span className="text-text font-medium">{featured.author}</span> — {featured.role}
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
