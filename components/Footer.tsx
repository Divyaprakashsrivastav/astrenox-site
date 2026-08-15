"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import AstrenoxLogo from "./brand/AstrenoxLogo";
import { homeFooter } from "@/app/content/homepage-content";
import {
  navContactHref,
  navIndustriesHref,
  navInfrastructureHref,
} from "@/app/content/nav-config";
import { EASE_PREMIUM } from "./v2/motion";
import FooterGlassWordmark from "./footer/FooterGlassWordmark";
import FooterPremiumBackground from "./footer/FooterPremiumBackground";
import FooterLink from "./footer/FooterLink";
import "./footer/footer-premium.css";

const QUICK_LINKS = [
  { label: "AI Consulting", href: "/services/ai-consulting-advisory" },
  { label: "Digital Consulting", href: "/services/digital-it-consulting" },
  { label: "Products", href: "/products/solvoris" },
  { label: "Infrastructure", href: navInfrastructureHref },
  { label: "Industries", href: navIndustriesHref },
  { label: "Privacy", href: "/privacy" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.54-2.04-.185-2.55.075-.78.3-1.5 1.005-1.23 1.995.27.96 1.455 1.17 2.55 1.695.96.555 1.29 1.725 1.455 2.01.45.735.165 1.455.075 1.77 1.305.15 2.685-.495 3.675-1.425 2.55-2.34 3.9-5.79 3.9-9.84 0-7.41-6.015-13.425-13.425-13.425z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width={16} height={16} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="ft-social-btn"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {icon}
    </a>
  );
}

function FooterContent({ inView }: { inView: boolean }) {
  return (
    <>
      <FooterGlassWordmark />

      <div className="ft-inner">
        <motion.div
          className="ft-main"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
        >
          <motion.div variants={fadeUp} className="ft-brand">
            <AstrenoxLogo variant="footer" />
          </motion.div>

          <motion.nav variants={fadeUp} className="ft-col" aria-label="Quick links">
            <ul className="ft-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={fadeUp} className="ft-connect">
            <div className="ft-socials">
              <SocialButton
                href={homeFooter.linkedin.href}
                label="LinkedIn"
                icon={<LinkedInIcon />}
                external
              />
              <SocialButton
                href={homeFooter.github.href}
                label="GitHub"
                icon={<GitHubIcon />}
                external
              />
              <SocialButton
                href={homeFooter.instagram.href}
                label="Instagram"
                icon={<InstagramIcon />}
                external
              />
              <SocialButton
                href={`mailto:${homeFooter.email}`}
                label="Email"
                icon={<MailIcon />}
              />
              <SocialButton href={homeFooter.x.href} label="X" icon={<XIcon />} external />
            </div>
            <Link href={navContactHref} className="ft-schedule-btn">
              Schedule Call
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="ft-bottom"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_PREMIUM }}
        >
          <span className="ft-bottom-copy">{homeFooter.copyright}</span>
          <span className="ft-bottom-tagline">Built for Enterprise AI</span>
        </motion.div>
      </div>
    </>
  );
}

export default function Footer({ embedded = false }: { embedded?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  const footer = (
    <footer ref={ref} className={`ft-footer${embedded ? " ft-footer--embedded" : ""}`}>
      <FooterPremiumBackground />
      <FooterContent inView={inView} />
    </footer>
  );

  if (embedded) return footer;

  return (
    <div className="site-ending-shell site-ending-shell--standalone">
      {footer}
    </div>
  );
}
