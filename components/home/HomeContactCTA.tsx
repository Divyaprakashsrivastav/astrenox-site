"use client";

import "./contact-ending.css";
import Link from "next/link";
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

function calendlyEmbedSrc(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("calendly.com")) {
      const path = parsed.pathname.replace(/\/$/, "");
      return `https://calendly.com${path}?hide_gdpr_banner=1&background_color=08060f&text_color=f4f4f5&primary_color=7c3aed`;
    }
  } catch {
    /* fall through */
  }
  return url;
}

/** Slim homepage closing CTA + Calendly embed; full form lives on /contact */
export default function HomeContactCTA() {
  const supporting =
    homeContactCta.description.split("\n\n").filter(Boolean)[0] ?? "";
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  const embedSrc = calendlyUrl ? calendlyEmbedSrc(calendlyUrl) : null;

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
            Book a Consultation
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
            <motion.div variants={BUTTON}>
              <Link href="/contact" className="cta-btn-primary group" data-cursor-hover>
                Contact Us
                <ArrowRight size={16} className="cta-btn-arrow" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>

          {embedSrc ? (
            <motion.div className="cta-calendly-embed" variants={SLIDE_UP}>
              <iframe
                title="Book a consultation"
                src={embedSrc}
                className="cta-calendly-frame"
                loading="lazy"
              />
            </motion.div>
          ) : null}

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
