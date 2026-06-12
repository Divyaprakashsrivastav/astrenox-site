"use client";

import AmbientBlobs from "./ui/AmbientBlobs";
import HeroLeft from "./hero/HeroLeft";
import HeroLayeredEngine from "./hero/HeroLayeredEngine";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section-bg" aria-hidden>
        <AmbientBlobs variant="hero" />
        <div className="hero-section-mesh" />
        <div className="hero-section-grid" />
      </div>
      <div className="hero-section-inner">
        <HeroLeft />
        <HeroLayeredEngine />
      </div>
    </section>
  );
}
