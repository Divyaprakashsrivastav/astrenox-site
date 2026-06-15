"use client";

import { useState } from "react";

const SPLINE_URL =
  "https://my.spline.design/boxeshover-pSm2IDdiLSNI60i34l3WDROp/";

export default function HeroSplineBg() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="hero-spline-bg" aria-hidden>
      {/* Subtle soft blur veil applied on top of the iframe */}
      <div className="hero-spline-veil" />
      <iframe
        src={SPLINE_URL}
        title=""
        className={`hero-spline-bg-iframe${loaded ? " is-loaded" : ""}`}
        onLoad={() => setLoaded(true)}
        allow="autoplay"
        loading="eager"
        tabIndex={-1}
      />
    </div>
  );
}
