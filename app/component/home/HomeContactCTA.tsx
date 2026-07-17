"use client";

import "./contact-ending.css";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  FileText,
  Link2,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { homeContactCta } from "@/app/content/homepage-content";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";
import ContactCTAAmbient from "./ContactCTAAmbient";
import HomeContactForm from "./HomeContactForm";

const INFO_ICONS = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  file: FileText,
  calendar: Calendar,
} as const;

const TRUST_STRIP = [
  "NDA Protected",
  "Senior Engineers",
  "Enterprise Ready",
  "30-Min Discovery",
] as const;

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const ITEM = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_PREMIUM } },
};

const actionLinkChannel = homeContactCta.channels.find((c) => c.label === "Action Link");

export default function HomeContactCTA() {
  const descriptionParagraphs = homeContactCta.description.split("\n\n").filter(Boolean);
  const supportingParagraph = descriptionParagraphs[0] ?? "";
  const advisoryParagraph = descriptionParagraphs[1] ?? "";

  return (
    <section id="contact" className="cta-section scroll-mt-28">
      <ContactCTAAmbient />

      <div className="cta-inner">
        <div className="cta-showcase">
          <motion.div
            className="cta-left"
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

            {supportingParagraph ? (
              <motion.p className="cta-supporting" variants={ITEM}>
                <FormattedText text={supportingParagraph} />
              </motion.p>
            ) : null}

            {advisoryParagraph ? (
              <motion.div className="cta-protocol-card" variants={ITEM}>
                <span className="cta-protocol-icon" aria-hidden>
                  <Shield size={18} strokeWidth={1.75} />
                </span>
                <p className="cta-protocol-text">
                  <FormattedText text={advisoryParagraph} />
                </p>
              </motion.div>
            ) : null}

            <motion.div className="cta-info-cards" variants={ITEM}>
              {homeContactCta.infoRows.map((row, index) => {
                const Icon = INFO_ICONS[row.icon];
                return (
                  <motion.a
                    key={row.label}
                    href={row.href}
                    className="cta-info-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.48, delay: 0.04 + index * 0.06, ease: EASE_PREMIUM }}
                    whileHover={{ y: -2 }}
                    data-cursor-hover
                  >
                    <span className="cta-info-card-icon" aria-hidden>
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="cta-info-card-body">
                      <span className="cta-info-card-label">{row.label}</span>
                      <span className="cta-info-card-value">{row.value}</span>
                    </span>
                  </motion.a>
                );
              })}

              {actionLinkChannel ? (
                <motion.div
                  className="cta-info-card cta-info-card--static"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.48,
                    delay: 0.04 + homeContactCta.infoRows.length * 0.06,
                    ease: EASE_PREMIUM,
                  }}
                  whileHover={{ y: -2 }}
                >
                  <span className="cta-info-card-icon" aria-hidden>
                    <Link2 size={16} strokeWidth={1.75} />
                  </span>
                  <span className="cta-info-card-body">
                    <span className="cta-info-card-label">{actionLinkChannel.label}</span>
                    <span className="cta-info-card-value">{actionLinkChannel.value}</span>
                  </span>
                </motion.div>
              ) : null}
            </motion.div>

            <motion.ul className="cta-trust-strip" variants={ITEM} aria-label="Engagement guarantees">
              {TRUST_STRIP.map((badge, i) => (
                <motion.li
                  key={badge}
                  className="cta-trust-chip"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: 0.05 + i * 0.07, ease: EASE_PREMIUM }}
                  whileHover={{ y: -2 }}
                >
                  <Check className="cta-trust-icon" size={12} strokeWidth={2.5} aria-hidden />
                  {badge}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="cta-actions" variants={ITEM}>
              <motion.a
                href={homeContactCta.primaryHref}
                className="cta-btn-primary group"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.32, ease: EASE_PREMIUM }}
                data-cursor-hover
              >
                {homeContactCta.primaryCta}
                <ArrowRight size={17} className="cta-btn-arrow" aria-hidden />
              </motion.a>

              <motion.a
                href={homeContactCta.secondaryHref}
                className="cta-btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.32, ease: EASE_PREMIUM }}
                data-cursor-hover
              >
                {homeContactCta.secondaryCta}
                <ArrowRight size={16} className="cta-btn-arrow" aria-hidden />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="cta-right"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.65, delay: 0.28, ease: EASE_PREMIUM }}
          >
            <HomeContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
