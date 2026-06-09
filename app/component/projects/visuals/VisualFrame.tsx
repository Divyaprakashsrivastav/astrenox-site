"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Badge } from "../../ui/primitives/badge";

interface VisualFrameProps {
  label: string;
  active: boolean;
  children: ReactNode;
}

export default function VisualFrame({ label, active, children }: VisualFrameProps) {
  return (
    <div className={`project-visual-frame ${active ? "is-active" : ""}`}>
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
      <div className="project-visual-stage">{children}</div>
    </div>
  );
}
