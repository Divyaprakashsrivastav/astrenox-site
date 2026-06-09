"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "../pages/ContactForm";
import DesignSection from "../design/DesignSection";
import { homeContactCta } from "@/app/content/homepage-content";
import { footer, site } from "@/app/content/astrenox-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

export default function HomeContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <DesignSection id="contact" dark className="contact-split-section" border={false}>
      <div ref={ref} className="contact-split">
        <motion.div
          className="contact-split-copy"
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <p className="ax-label">{homeContactCta.eyebrow}</p>
          <h2 className="contact-split-title">{homeContactCta.title}</h2>
          <p className="contact-split-desc">{homeContactCta.description}</p>
          <ul className="contact-split-trust">
            {homeContactCta.trust.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="contact-split-actions">
            <a href={homeContactCta.primaryHref} className="hero-btn hero-btn-primary group">
              {homeContactCta.primaryCta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={homeContactCta.secondaryHref} className="hero-btn hero-btn-ghost-light">
              {homeContactCta.secondaryCta}
            </a>
          </div>
          <p className="contact-split-note">{homeContactCta.calendarNote}</p>
          <div className="contact-split-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{footer.phone}</span>
            <span>{footer.address}</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-split-form"
          initial={{ opacity: 0, x: 16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </DesignSection>
  );
}
