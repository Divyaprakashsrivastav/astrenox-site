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
  navResearchHref,
} from "@/app/content/nav-config";
import { EASE_PREMIUM } from "./v2/motion";
import FooterGlassWordmark from "./footer/FooterGlassWordmark";
import FooterPremiumBackground from "./footer/FooterPremiumBackground";
import FooterLink from "./footer/FooterLink";
import "./footer/footer-premium.css";

const QUICK_LINKS = [
  { label: "AI Services", href: "/services" },
  { label: "Digital Consulting", href: "/services/digital-it-consulting" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: navInfrastructureHref },
  { label: "Industries", href: navIndustriesHref },
] as const;

const RESOURCE_LINKS = [
  { label: "Blog", href: navResearchHref },
  { label: "Case Studies", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Documentation", href: navResearchHref },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/legal" },
] as const;

const BOTTOM_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/legal" },
  { label: "Cookies", href: "/legal" },
  { label: "Accessibility", href: "/legal" },
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
            <AstrenoxLogo variant="footer" showWordmark={false} />
            <p className="ft-brand-copy">{homeFooter.about}</p>
          </motion.div>

          <motion.nav variants={fadeUp} className="ft-col" aria-label="Quick links">
            <h3 className="ft-col-title">Quick Links</h3>
            <ul className="ft-links">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={fadeUp} className="ft-col" aria-label="Resources">
            <h3 className="ft-col-title">Resources</h3>
            <ul className="ft-links">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={fadeUp} className="ft-connect">
            <h3 className="ft-col-title">Connect</h3>
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
                href={`mailto:${homeFooter.email}`}
                label="Email"
                icon={<MailIcon />}
              />
              <SocialButton href={homeFooter.x.href} label="X" icon={<XIcon />} external />
            </div>
            <a href={`mailto:${homeFooter.email}`} className="ft-email">
              {homeFooter.email}
            </a>
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
          <nav className="ft-bottom-nav" aria-label="Legal">
            {BOTTOM_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
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
