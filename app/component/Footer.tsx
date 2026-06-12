"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import FooterBackground from "./footer/FooterBackground";
import SocialIcons from "./footer/SocialIcons";
import { footer } from "@/app/content/astrenox-content";
import { homeFooter } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

const PRODUCTS = [
  { label: "NexusCore Orchestrator", href: "/platform" },
  { label: "Synapse Logistics", href: "/projects" },
  { label: "CodeForge Insight", href: "/services/ai-engineering" },
  { label: "ClinicalMatch MVP", href: "/services/mvp-studio" },
] as const;

const RESOURCES = [
  { label: "Research", href: "/research" },
  { label: "Platform", href: "/platform" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
] as const;

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <footer ref={ref} className="ax-footer ax-footer-glass">
      <FooterBackground active={inView} />

      <motion.p className="ax-footer-wordmark" aria-hidden initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
        ASTRENOX
      </motion.p>

      <div className="ax-footer-inner">
        <motion.div
          className="ax-footer-grid ax-footer-grid-premium"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Company</h4>
            <Link href="/" className="ax-footer-card-logo">Astrenox</Link>
            <p className="ax-footer-card-copy">{homeFooter.about}</p>
            <SocialIcons revealed={inView} />
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Services</h4>
            <ul className="ax-footer-card-list">
              {homeFooter.servicesLinks.map((link) => (
                <li key={link.href + link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Industries</h4>
            <ul className="ax-footer-card-list">
              {homeFooter.industriesLinks.map((link) => (
                <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Products</h4>
            <ul className="ax-footer-card-list">
              {PRODUCTS.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Resources</h4>
            <ul className="ax-footer-card-list">
              {RESOURCES.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Contact</h4>
            <ul className="ax-footer-card-list">
              <li>{footer.address}</li>
              <li><a href={`tel:${footer.phone.replace(/\s/g, "")}`}>{footer.phone}</a></li>
              <li><a href={`mailto:${footer.contactEmail}`} className="ax-footer-card-accent">{footer.contactEmail}</a></li>
            </ul>
          </motion.article>
        </motion.div>

        <motion.div
          className="ax-footer-bar"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.4, ease: EASE_OUT }}
        >
          <span>&copy; {new Date().getFullYear()} Astrenox</span>
          <span>Enterprise AI · Robotics · Aerospace</span>
          <span>Built for Production</span>
        </motion.div>
      </div>
    </footer>
  );
}
