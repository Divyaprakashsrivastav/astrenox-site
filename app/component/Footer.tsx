"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import FooterBackground from "./footer/FooterBackground";
import FooterNavLink from "./footer/FooterNavLink";
import SocialIcons from "./footer/SocialIcons";
import { footer } from "@/app/content/astrenox-content";
import { homeFooter } from "@/app/content/homepage-content";
import { footerQuickLinks } from "@/app/content/site-pages";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <footer ref={ref} className="ax-footer">
      <FooterBackground active={inView} />

      <motion.p
        className="ax-footer-wordmark"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        ASTRENOX
      </motion.p>

      <div className="ax-footer-inner">
        <motion.header
          className="ax-footer-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <p className="ax-footer-hero-brand">ASTRENOX</p>
          <h2 className="ax-footer-hero-title">
            Transitioning Enterprise AI
            <br />
            Into Autonomous Systems
          </h2>
          <span className="ax-footer-glow-line" aria-hidden />
        </motion.header>

        <motion.div
          className="ax-footer-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
        >
          <motion.article variants={cardReveal} className="ax-footer-card">
            <Link href="/" className="ax-footer-card-logo">
              Astrenox
            </Link>
            <p className="ax-footer-card-copy">{homeFooter.about}</p>
            <SocialIcons revealed={inView} />
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Services</h4>
            <ul className="ax-footer-card-list">
              {homeFooter.servicesLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Industries</h4>
            <ul className="ax-footer-card-list">
              {homeFooter.industriesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={cardReveal} className="ax-footer-card">
            <h4 className="ax-footer-card-heading">Contact</h4>
            <ul className="ax-footer-card-list">
              <li>{footer.address}</li>
              <li>
                <a href={`tel:${footer.phone.replace(/\s/g, "")}`}>{footer.phone}</a>
              </li>
              <li>
                <a href={`mailto:${footer.contactEmail}`} className="ax-footer-card-accent">
                  {footer.contactEmail}
                </a>
              </li>
            </ul>
          </motion.article>
        </motion.div>

        <motion.nav
          className="ax-footer-card ax-footer-quicklinks"
          aria-label="Footer shortcuts"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE_OUT }}
        >
          {footerQuickLinks.slice(0, 8).map((link, i) => (
            <FooterNavLink key={link.label} href={link.href} label={link.label} index={i} />
          ))}
        </motion.nav>

        <motion.div
          className="ax-footer-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE_OUT }}
        >
          <span className="ax-footer-bar-left">
            &copy; {new Date().getFullYear()} Astrenox
          </span>
          <span className="ax-footer-bar-center">
            Enterprise AI &bull; Robotics &bull; Aerospace
          </span>
          <span className="ax-footer-bar-right">Built for Production</span>
        </motion.div>
      </div>
    </footer>
  );
}
