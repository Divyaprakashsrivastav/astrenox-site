"use client";

import type { ReactNode } from "react";
import AmbientBlobs from "../ui/AmbientBlobs";
import { FadeUp } from "./FadeUp";

interface DesignSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  border?: boolean;
  /** Continuous dark flow canvas — no borders or section backgrounds */
  flow?: boolean;
  /** Subtle ambient blobs behind section (light sections only) */
  ambient?: boolean | "alt";
}

export default function DesignSection({
  id,
  children,
  className = "",
  dark = false,
  border = true,
  flow = false,
  ambient = true,
}: DesignSectionProps) {
  const ambientVariant =
    ambient === "alt" ? "section-alt" : ambient ? "section" : null;

  if (flow) {
    return (
      <section id={id} className={`flow-section scroll-mt-28 ${className}`}>
        <div className="flow-section-inner">{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`ax-section ax-section-wrap scroll-mt-28 ${dark ? "ax-section-dark" : "ax-section-light"} ${border ? "ax-section-border" : ""} ${className}`}
    >
      {!dark && ambientVariant && <AmbientBlobs variant={ambientVariant} />}
      <div className="ax-container ax-section-content">{children}</div>
    </section>
  );
}

export function DesignHeader({
  label,
  title,
  description,
  align = "left",
  flow = false,
}: {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  flow?: boolean;
}) {
  if (flow) {
    return (
      <FadeUp
        className={`flow-header ${align === "center" ? "" : "flow-header--left"}`}
      >
        {label && <p className="flow-eyebrow">{label}</p>}
        <h2 className="flow-title">{title}</h2>
        {description && <p className="flow-description">{description}</p>}
      </FadeUp>
    );
  }

  return (
    <FadeUp className={`ax-header ${align === "center" ? "ax-header-center" : ""}`}>
      {label && <p className="ax-label">{label}</p>}
      <h2 className="ax-title">{title}</h2>
      {description && <p className="ax-description">{description}</p>}
    </FadeUp>
  );
}
