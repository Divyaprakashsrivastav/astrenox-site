"use client";

import "./ecosystem-alliances.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import { ParagraphExpand } from "./disclosure/HomeDisclosure";
import TechSvgLogo from "./TechSvgLogo";
import { VENDOR_MARQUEE_LOGOS } from "./vendor-marquee-logos";

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });
  const marqueeTrack = [
    ...homeEnterpriseEcosystem.marquee,
    ...homeEnterpriseEcosystem.marquee,
  ];

  return (
    <section id="trust" className="eco-section scroll-mt-28">
      <div className="eco-inner">
        <motion.header
          className="eco-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="eco-eyebrow">{homeEnterpriseEcosystem.label}</p>
          <h2 className="eco-title">{homeEnterpriseEcosystem.title}</h2>
          <div className="eco-description">
            <ParagraphExpand
              paragraphs={[homeEnterpriseEcosystem.description]}
              visibleCount={1}
              paragraphClassName="eco-description-p"
            />
          </div>
        </motion.header>

        <div ref={sectionRef} className="eco-logos-zone">
          <div className="eco-marquee" aria-label="Partner ecosystem">
            <ul className="eco-marquee-track">
              {marqueeTrack.map((label, i) => {
                const logo = VENDOR_MARQUEE_LOGOS[label];
                return (
                  <motion.li
                    key={`${label}-${i}`}
                    className="eco-logo-item"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i * 0.04, 0.5),
                      ease: EASE_PREMIUM,
                    }}
                    data-cursor-hover
                  >
                    <span className="eco-logo-glow" aria-hidden />
                    <TechSvgLogo file={logo.file} name={label} size={48} />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
