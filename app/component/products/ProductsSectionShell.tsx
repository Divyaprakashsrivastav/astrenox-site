"use client";

import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

interface ProductsSectionShellProps {
  eyebrow?: string;
  title: string;
  description?: string | readonly string[];
  children?: ReactNode;
  centered?: boolean;
  className?: string;
}

function ProductsSectionShell({
  eyebrow,
  title,
  description,
  children,
  centered = false,
  className = "",
}: ProductsSectionShellProps) {
  const descriptions = description
    ? Array.isArray(description)
      ? description
      : [description]
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE_PREMIUM }}
      className={`${centered ? "text-center max-w-3xl mx-auto" : ""} ${className}`}
    >
      {eyebrow && <p className="products-eyebrow">{eyebrow}</p>}
      <h2 className="products-section-title">{title}</h2>
      {descriptions.map((para) => (
        <p key={para} className={`products-body mt-4 ${centered ? "mx-auto" : ""}`}>
          {para}
        </p>
      ))}
      {children}
    </motion.div>
  );
}

export default memo(ProductsSectionShell);
