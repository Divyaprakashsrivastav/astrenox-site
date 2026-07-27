"use client";

import { motion, useInView } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import { useRef } from "react";
import DesignSection from "../design/DesignSection";
import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export default function TrustedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const track = [...homeEnterpriseEcosystem.marquee, ...homeEnterpriseEcosystem.marquee];

  return (
    <DesignSection id="ecosystem" border className="trust-eco-section">
      <div ref={ref} className="trust-eco-glass">
        <motion.div
          className="trust-eco-head"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <p className="trust-eco-label">{homeEnterpriseEcosystem.label}</p>
          <h2 className="trust-eco-title">{homeEnterpriseEcosystem.title}</h2>
          <p className="trust-eco-desc"><FormattedText text={homeEnterpriseEcosystem.description} /></p>
        </motion.div>

        <div className="trust-eco-marquee" aria-label="Partner ecosystem">
          <div className="trust-eco-marquee-track trust-eco-marquee-track--live">
            {track.map((name, i) => (
              <motion.span
                key={`${name}-${i}`}
                className="trust-eco-logo"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.25 }}
                data-cursor-hover
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </DesignSection>
  );
}
