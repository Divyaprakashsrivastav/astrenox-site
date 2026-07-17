"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { MOTION } from "../motion/home-motion";

interface HeroCtaProps {
  href: string;
  variant: "primary" | "ghost";
  children: ReactNode;
}

export default function HeroCta({ href, variant, children }: HeroCtaProps) {
  const reduced = useReducedMotion();
  const cls =
    variant === "primary"
      ? "hero-btn hero-btn-primary group"
      : "hero-btn hero-btn-ghost group";

  return (
    <motion.a
      href={href}
      className={cls}
      whileHover={
        reduced
          ? undefined
          : {
              y: variant === "primary" ? 0 : -2,
              scale: variant === "primary" ? 1.04 : 1.015,
              boxShadow:
                variant === "primary"
                  ? "0 0 35px rgba(177, 78, 255, 0.45), 0 8px 28px rgba(124, 58, 237, 0.28)"
                  : "0 6px 24px rgba(124, 58, 237, 0.12), 0 2px 6px rgba(17,17,17,0.04)",
            }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: MOTION.lineReveal.ease }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: MOTION.lineReveal.duration, ease: MOTION.lineReveal.ease },
        },
      }}
    >
      {children}
      <motion.span
        className="hero-btn-arrow-wrap"
        aria-hidden
        initial={false}
        whileHover={reduced ? undefined : { x: 4 }}
        transition={{ duration: 0.25, ease: MOTION.lineReveal.ease }}
      >
        <ArrowRight
          size={16}
          className={
            variant === "primary"
              ? "hero-btn-arrow"
              : "hero-btn-arrow hero-btn-arrow--ghost"
          }
        />
      </motion.span>
    </motion.a>
  );
}
