"use client";

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
    <header className={`enterprise-header max-w-3xl mb-8 ${alignment}`}>
      {label && <p className="enterprise-label">{label}</p>}
      <h2 className="enterprise-title">{title}</h2>
      {description && (
        <p className="enterprise-description mt-4">{description}</p>
      )}
    </header>
  );
}
