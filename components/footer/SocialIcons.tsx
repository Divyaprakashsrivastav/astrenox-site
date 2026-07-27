"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { site, socialLinks } from "@/app/content/astrenox-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.54-2.04-.185-2.55.075-.78.3-1.5 1.005-1.23 1.995.27.96 1.455 1.17 2.55 1.695.96.555 1.29 1.725 1.455 2.01.45.735.165 1.455.075 1.77 1.305.15 2.685-.495 3.675-1.425 2.55-2.34 3.9-5.79 3.9-9.84 0-7.41-6.015-13.425-13.425-13.425z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-[15px] h-[15px]" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const iconMap: Record<string, ReactNode> = {
  LinkedIn: <LinkedInIcon />,
  "X / Twitter": <XIcon />,
  GitHub: <GitHubIcon />,
};

const socialItems: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon /> },
  ...socialLinks.map((s) => ({
    label: s.label,
    href: s.href,
    icon: iconMap[s.label] ?? <LinkedInIcon />,
  })),
];

function SocialGlassButton({
  social,
  index,
  revealed,
}: {
  social: SocialLink;
  index: number;
  revealed: boolean;
}) {
  const external = social.href.startsWith("http");

  return (
    <motion.a
      href={social.href}
      aria-label={social.label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="ax-footer-social-btn"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={revealed ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: 0.35 + index * 0.07,
        duration: 0.5,
        ease: EASE_OUT,
      }}
      whileHover={{ scale: 1.1, rotate: 8 }}
      whileTap={{ scale: 0.95 }}
    >
      {social.icon}
    </motion.a>
  );
}

interface SocialIconsProps {
  revealed?: boolean;
}

export default function SocialIcons({ revealed = false }: SocialIconsProps) {
  return (
    <div className="ax-footer-socials">
      {socialItems.map((social, i) => (
        <SocialGlassButton
          key={social.label}
          social={social}
          index={i}
          revealed={revealed}
        />
      ))}
    </div>
  );
}
