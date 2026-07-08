"use client";

import type { ReactNode } from "react";
import "./mvp-studio.css";

function MVPStudioAmbient() {
  return (
    <div className="mvp-ambient" aria-hidden>
      <div className="mvp-ambient-glow" />
      <div className="mvp-ambient-noise" />
      <div className="mvp-ambient-vignette" />
    </div>
  );
}

export default function MVPStudioCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="mvp-canvas">
      <MVPStudioAmbient />
      {children}
    </div>
  );
}
