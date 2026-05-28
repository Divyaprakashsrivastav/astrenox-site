"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mb-20 lg:mb-24 ${alignment}`}
    >
      {label && (
        <span className="inline-block text-xs font-medium text-primary tracking-[0.2em] uppercase mb-5">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
