"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PlatformSectionProps {
  id: string;
  label: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  variant?: "default" | "muted" | "dark";
}

export default function PlatformSection({
  id,
  label,
  title,
  description,
  children,
  variant = "default",
}: PlatformSectionProps) {
  const bg =
    variant === "dark"
      ? "platform-section-dark"
      : variant === "muted"
        ? "bg-[#f3f2f6]"
        : "bg-background";

  return (
    <section id={id} className={`section-shell relative ${bg} scroll-mt-28`}>
      {variant !== "dark" ? <div className="section-divider" /> : null}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-8 lg:mb-10"
        >
          <p className="text-[11px] font-medium text-muted uppercase tracking-[0.22em] mb-3">
            {label}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-text tracking-tight leading-[1.12]">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed font-light">{description}</p>
        </motion.header>
        {children}
      </div>
    </section>
  );
}
