"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionReveal, EASE_PREMIUM } from "../v2/motion";

interface StorySectionProps {
  id?: string;
  label?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  variant?: "light" | "dark" | "surface";
  className?: string;
}

export default function StorySection({
  id,
  label,
  title,
  description,
  children,
  variant = "light",
  className = "",
}: StorySectionProps) {
  const variantClass =
    variant === "dark"
      ? "astrenox-section-dark"
      : variant === "surface"
        ? "astrenox-section-surface"
        : "astrenox-section-light";

  return (
    <section id={id} className={`astrenox-section ${variantClass} ${className}`}>
      <div className="astrenox-section-inner">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionReveal}
          className="astrenox-section-header"
        >
          {label && <p className="astrenox-label">{label}</p>}
          <h2 className="astrenox-title">{title}</h2>
          {description && <p className="astrenox-description">{description}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

export function StoryReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EASE_PREMIUM }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
