"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import "./gradient-headline.css";

type GradientHeadlineProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function GradientHeadline({
  id,
  className = "",
  children,
}: GradientHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1
      id={id}
      className={`gradient-headline${prefersReducedMotion ? " gradient-headline-static" : ""}${className ? ` ${className}` : ""}`}
    >
      <span className="gradient-headline-mask" aria-hidden="true">
        {children}
      </span>
      <span className="gradient-headline-fallback">{children}</span>
    </h1>
  );
}
