"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "../features/useReducedMotion";

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export const sectionReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_PREMIUM },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "var(--shadow-card)" },
  hover: {
    y: -4,
    scale: 1.02,
    boxShadow: "var(--shadow-card-hover)",
    transition: { duration: 0.25, ease: EASE_PREMIUM },
  },
};

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionReveal}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function PremiumCard({ children, className, as = "div" }: PremiumCardProps) {
  const Component = motion[as];
  return (
    <Component
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-card shadow-[var(--shadow-card)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function useMouseParallax(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 120,
    damping: 20,
  });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 120,
    damping: 20,
  });
  const transform = useMotionTemplate`translate3d(${x}px, ${y}px, 0)`;

  const onMove = (e: MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return { ref, transform, onMove, onLeave, reduced };
}
