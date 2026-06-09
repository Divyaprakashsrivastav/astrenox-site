"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const CATEGORY_LABELS: Record<string, string> = {
  cloud: "Cloud",
  ai: "AI",
  integration: "Enterprise",
};

export default function TrustedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const track = [...homeEnterpriseEcosystem.marquee, ...homeEnterpriseEcosystem.marquee];

  const allPartners = homeEnterpriseEcosystem.rings.flatMap((ring) =>
    ring.partners.map((p) => ({ ...p, ringId: ring.id }))
  );

  return (
    <DesignSection id="trusted" border className="ax-section-compact partners-section">
      <DesignHeader
        label={homeEnterpriseEcosystem.label}
        title={homeEnterpriseEcosystem.title}
        description={homeEnterpriseEcosystem.description}
        align="center"
      />

      <div ref={ref} className="partners-cloud">
        <div className="partners-categories">
          {homeEnterpriseEcosystem.rings.map((ring, i) => (
            <motion.div
              key={ring.id}
              className="partners-category-card"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
            >
              <p className="partners-category-label">
                {CATEGORY_LABELS[ring.id] ?? ring.title}
              </p>
              <ul className="partners-category-list">
                {ring.partners.slice(0, 4).map((p) => (
                  <li key={p.id}>{p.name}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="partners-marquee" aria-label="Partner logos">
          <div className="partners-marquee-track">
            {track.map((name, i) => (
              <span key={`${name}-${i}`} className="partners-logo-chip" data-cursor-hover>
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="partners-grid">
          {allPartners.slice(0, 12).map((p, i) => (
            <motion.span
              key={p.id}
              className="partners-logo-tile"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.03, duration: 0.4 }}
              data-cursor-hover
            >
              {p.name}
            </motion.span>
          ))}
        </div>
      </div>
    </DesignSection>
  );
}
