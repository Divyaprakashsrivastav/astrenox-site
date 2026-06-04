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
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-10 lg:mb-12 ${alignment}`}
    >
      {label && (
        <p className="text-[11px] font-medium text-muted uppercase tracking-[0.22em] mb-3">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted leading-relaxed font-light">
          {description}
        </p>
      )}
    </motion.header>
  );
}
