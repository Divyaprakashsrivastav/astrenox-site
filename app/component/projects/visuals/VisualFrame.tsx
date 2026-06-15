"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Badge } from "../../ui/primitives/badge";

interface VisualFrameProps {
  label: string;
  active: boolean;
  children: ReactNode;
  dark?: boolean;
  hideChrome?: boolean;
}

export default function VisualFrame({
  label,
  active,
  children,
  dark = false,
  hideChrome = false,
}: VisualFrameProps) {
  return (
    <div
      className={[
        "project-visual-frame",
        active ? "is-active" : "",
        dark ? "project-visual-frame--dark" : "",
        hideChrome ? "project-visual-frame--bare" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {!hideChrome && (
        <>
          <div className="project-visual-sweep" aria-hidden />
          <div className="project-visual-glow-border" aria-hidden />
          <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" aria-hidden />
          <div className="project-visual-status">
            <Badge variant={active ? "live" : "default"}>
              {active ? "● Live" : "Standby"}
            </Badge>
            <span className="text-[9px] font-semibold tracking-[0.14em] text-muted uppercase">
              {label}
            </span>
          </div>
        </>
      )}
      {hideChrome && dark && <div className="project-visual-dark-ambient" aria-hidden />}
      <div className="project-visual-stage">{children}</div>
    </div>
  );
}
