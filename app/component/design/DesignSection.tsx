"use client";

import type { ReactNode } from "react";
import { FadeUp } from "./FadeUp";

interface DesignSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  border?: boolean;
}

export default function DesignSection({
  id,
  children,
  className = "",
  dark = false,
  border = true,
}: DesignSectionProps) {
  return (
    <section
      id={id}
      className={`ax-section scroll-mt-28 ${dark ? "ax-section-dark" : "ax-section-light"} ${border ? "ax-section-border" : ""} ${className}`}
    >
      <div className="ax-container">{children}</div>
    </section>
  );
}

export function DesignHeader({
  label,
  title,
  description,
  align = "left",
}: {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeUp className={`ax-header ${align === "center" ? "ax-header-center" : ""}`}>
      {label && <p className="ax-label">{label}</p>}
      <h2 className="ax-title">{title}</h2>
      {description && <p className="ax-description">{description}</p>}
    </FadeUp>
  );
}
