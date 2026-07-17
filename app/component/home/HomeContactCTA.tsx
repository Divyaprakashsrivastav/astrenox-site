"use client";

import "./contact-ending.css";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { homeContactCta, homeHero } from "@/app/content/homepage-content";
import HeroCta from "../hero/HeroCta";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";
import ContactCTAAmbient from "./ContactCTAAmbient";

const ITEM = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_PREMIUM } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

/** Slim homepage closing CTA — full contact experience lives on /contact */
export default function HomeContactCTA() {
  const supporting =
    homeContactCta.description.split("\n\n").filter(Boolean)[0] ?? "";

  return (
    <section id="contact" className="cta-section cta-section--slim scroll-mt-28">
      <ContactCTAAmbient />

      <div className="cta-inner">
        <motion.div
          className="cta-slim"
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
        >
          <motion.p className="cta-eyebrow" variants={ITEM}>
            {homeContactCta.eyebrow}
          </motion.p>

          <motion.h2 className="cta-title" variants={ITEM}>
            {homeContactCta.title}
          </motion.h2>

          {supporting ? (
            <motion.p className="cta-supporting cta-supporting--slim" variants={ITEM}>
              <FormattedText text={supporting} />
            </motion.p>
          ) : null}

          <motion.div className="cta-protocol-card cta-protocol-card--slim" variants={ITEM}>
            <span className="cta-protocol-icon" aria-hidden>
              <Shield size={18} strokeWidth={1.75} />
            </span>
            <p className="cta-protocol-text">
              Every discovery session is led by a senior architect. Technical audits are NDA-protected.
            </p>
          </motion.div>

          <motion.div className="hero-cta-row cta-hero-actions" variants={ITEM}>
            <HeroCta href={homeHero.primaryHref} variant="primary">
              {homeHero.primaryCta}
            </HeroCta>
            <HeroCta href={homeHero.secondaryHref} variant="ghost">
              {homeHero.secondaryCta}
            </HeroCta>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
