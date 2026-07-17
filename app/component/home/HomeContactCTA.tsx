"use client";

import "./contact-ending.css";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield } from "lucide-react";
import { homeContactCta } from "@/app/content/homepage-content";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";
import ContactCTAAmbient from "./ContactCTAAmbient";

const TRUST_BADGES = [
  "30-minute consultation",
  "NDA available",
  "Enterprise architects",
  "Response within 24 hours",
] as const;

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const FADE_UP = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_PREMIUM },
  },
};

const SLIDE_UP = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: EASE_PREMIUM },
  },
};

const BUTTON = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_PREMIUM },
  },
};

const BADGE = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_PREMIUM },
  },
};

/** Slim homepage closing CTA, full contact experience lives on /contact */
export default function HomeContactCTA() {
  const supporting =
    homeContactCta.description.split("\n\n").filter(Boolean)[0] ?? "";

  return (
    <section id="contact" className="cta-section cta-section--slim scroll-mt-28">
      <ContactCTAAmbient />
      <div className="cta-pulse-glow" aria-hidden />

      <div className="cta-inner">
        <motion.div
          className="cta-slim"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
        >
          <motion.p className="cta-eyebrow" variants={FADE_UP}>
            {homeContactCta.eyebrow}
          </motion.p>

          <motion.h2 className="cta-title" variants={FADE_UP}>
            {homeContactCta.title}
          </motion.h2>

          {supporting ? (
            <motion.p className="cta-supporting cta-supporting--slim" variants={FADE_UP}>
              <FormattedText text={supporting} />
            </motion.p>
          ) : null}

          <motion.div className="cta-protocol-card cta-protocol-card--slim" variants={SLIDE_UP}>
            <span className="cta-protocol-icon" aria-hidden>
              <Shield size={18} strokeWidth={1.75} />
            </span>
            <p className="cta-protocol-text">
              Every discovery session is led by a senior architect. Technical audits are NDA-protected.
            </p>
          </motion.div>

          <motion.div className="cta-actions cta-actions--premium" variants={STAGGER}>
            <motion.a
              href="/contact"
              className="cta-btn-primary group"
              variants={BUTTON}
              data-cursor-hover
            >
              Schedule Discovery Call
              <ArrowRight size={16} className="cta-btn-arrow" aria-hidden />
            </motion.a>
            <motion.a
              href="/contact"
              className="cta-btn-secondary group"
              variants={BUTTON}
              data-cursor-hover
            >
              Contact Our Team
              <ArrowRight size={16} className="cta-btn-arrow" aria-hidden />
            </motion.a>
          </motion.div>

          <motion.ul
            className="cta-trust-row"
            variants={STAGGER}
            aria-label="Engagement guarantees"
          >
            {TRUST_BADGES.map((badge) => (
              <motion.li key={badge} className="cta-trust-chip" variants={BADGE}>
                <Check className="cta-trust-icon" size={12} strokeWidth={2.5} aria-hidden />
                {badge}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
