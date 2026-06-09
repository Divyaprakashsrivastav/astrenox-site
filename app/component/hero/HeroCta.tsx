"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "../features/useReducedMotion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface HeroCtaProps {
  href: string;
  variant: "primary" | "ghost";
  children: ReactNode;
}

export default function HeroCta({ href, variant, children }: HeroCtaProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 24 });
  const springY = useSpring(y, { stiffness: 260, damping: 24 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.14);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.14);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls =
    variant === "primary"
      ? "hero-btn hero-btn-primary group"
      : "hero-btn hero-btn-ghost group";

  return (
    <motion.a
      href={href}
      className={cls}
      style={reduced ? undefined : { x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.98 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE_OUT },
        },
      }}
    >
      {children}
      <ArrowRight
        size={16}
        className={
          variant === "primary"
            ? "hero-btn-arrow"
            : "hero-btn-arrow hero-btn-arrow--ghost"
        }
      />
    </motion.a>
  );
}
