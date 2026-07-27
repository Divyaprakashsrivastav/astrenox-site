"use client";

import type { ReactNode } from "react";

interface VisualSvgFrameProps {
  viewBox: string;
  children: ReactNode;
}

/** Ensures SVG always has explicit dimensions inside the flex visual area. */
export function VisualSvgFrame({ viewBox, children }: VisualSvgFrameProps) {
  return (
    <svg
      viewBox={viewBox}
      width="100%"
      height="100%"
      className="feature-visual-svg"
      preserveAspectRatio="xMidYMid meet"
      overflow="visible"
      aria-hidden
    >
      {children}
    </svg>
  );
}
