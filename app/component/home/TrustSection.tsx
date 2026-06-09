"use client";

import { motion } from "framer-motion";
import { homeEnterpriseEcosystem, homeMetrics, homeTestimonials } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const TRUST_LOGOS = [
  "AWS",
  "Microsoft Azure",
  "OpenAI",
  "Anthropic",
  "Snowflake",
  "Salesforce",
] as const;

const PROOF_STATS = homeMetrics.stats.slice(0, 3);
const featured = homeTestimonials.items[0];

export default function TrustSection() {
  return (
    <section id="trust" className="trust-section-enterprise scroll-mt-28">
      <div className="enterprise-inner">
        <motion.header
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          className="enterprise-header"
        >
          <p className="enterprise-label">{homeEnterpriseEcosystem.label}</p>
          <h2 className="enterprise-title">{homeEnterpriseEcosystem.title}</h2>
          <p className="enterprise-description">{homeEnterpriseEcosystem.description}</p>
        </motion.header>

        <div className="trust-logo-row">
          {TRUST_LOGOS.map((label) => (
            <span key={label} className="trust-logo-text">
              {label}
            </span>
          ))}
        </div>

        <div className="trust-proof-row">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="trust-proof-stat">
              <p className="trust-proof-value">
                {"display" in stat ? stat.display : `${stat.value}${stat.suffix}`}
              </p>
              <p className="trust-proof-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <blockquote className="trust-quote">
          <p>&ldquo;{featured.quote}&rdquo;</p>
          <footer>
            {featured.author} — {featured.role}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
