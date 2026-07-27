"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const PARTNERS = ["OpenAI", "AWS", "Azure", "Google Cloud", "Anthropic"] as const;

export default function HeroTrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-4%" });

  return (
    <div ref={ref} className="hero-trust-bar">
      <motion.p
        className="hero-trust-copy"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        Trusted by enterprises deploying AI in production
      </motion.p>
      <motion.ul
        className="hero-trust-logos"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
        }}
      >
        {PARTNERS.map((name) => (
          <motion.li
            key={name}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
            }}
            className="hero-trust-logo"
          >
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
