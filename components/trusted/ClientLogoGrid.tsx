"use client";

import { motion } from "framer-motion";
import { trustedSection } from "@/app/content/astrenox-content";

const logoContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.45 },
  },
};

const logoItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ClientLogoGrid({ inView }: { inView: boolean }) {
  return (
    <motion.ul
      className="trusted-logos"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={logoContainer}
    >
      {trustedSection.clientLogos.map((name) => (
        <motion.li key={name} variants={logoItem} className="trusted-logo-card">
          <span className="trusted-logo-card-glow" aria-hidden />
          <span className="trusted-logo-name">{name}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
