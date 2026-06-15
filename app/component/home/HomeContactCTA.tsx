"use client";

import "./contact-ending.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Calendar,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "../pages/ContactForm";
import { homeContactCta } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const EASE = EASE_PREMIUM;

const INFO_ICONS = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  file: FileText,
  calendar: Calendar,
} as const;

export default function HomeContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="contact" className="site-ending-contact scroll-mt-28">
      <div ref={ref} className="site-ending-inner">
        <div className="site-ending-grid">
          <motion.div
            className="site-ending-panel"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p className="site-ending-eyebrow">{homeContactCta.eyebrow}</p>
            <h2 className="site-ending-title">{homeContactCta.title}</h2>
            <p className="site-ending-desc">{homeContactCta.description}</p>

            <div className="site-ending-actions">
              <a href={homeContactCta.primaryHref} className="site-ending-btn-primary group">
                {homeContactCta.primaryCta}
                <ArrowRight size={16} className="site-ending-btn-arrow" aria-hidden />
              </a>
              <a href={homeContactCta.secondaryHref} className="site-ending-btn-secondary">
                {homeContactCta.secondaryCta}
              </a>
            </div>

            <div className="site-ending-info">
              {homeContactCta.infoRows.map((row, index) => {
                const Icon = INFO_ICONS[row.icon];
                return (
                  <motion.a
                    key={row.label}
                    href={row.href}
                    className="site-ending-info-row"
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.55, delay: 0.2 + index * 0.07, ease: EASE }}
                    data-cursor-hover
                  >
                    <span className="site-ending-info-icon">
                      <Icon size={16} aria-hidden />
                    </span>
                    <span className="site-ending-info-text">
                      <span className="site-ending-info-label">{row.label}</span>
                      <span className="site-ending-info-value">{row.value}</span>
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="site-ending-form-wrap"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
          >
            <ContactForm variant="premium" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
