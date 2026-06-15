"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SPLINE_URL =
  "https://my.spline.design/boxeshover-pSm2IDdiLSNI60i34l3WDROp/";

export default function HeroSpline() {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="hero-spline-wrap"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {!loaded && (
        <div className="hero-spline-loader" aria-hidden>
          <span className="hero-spline-loader-ring" />
        </div>
      )}
      <iframe
        src={SPLINE_URL}
        title="Astrenox 3D interactive visualization"
        className={`hero-spline-iframe${loaded ? " is-loaded" : ""}`}
        onLoad={() => setLoaded(true)}
        allow="autoplay"
        loading="eager"
        aria-hidden={!loaded}
      />
    </motion.div>
  );
}
