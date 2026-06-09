"use client";

import HeroLeft from "./hero/HeroLeft";
import HeroKpis from "./hero/HeroKpis";
import HeroControlCenter from "./hero/HeroControlCenter";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section-bg" aria-hidden>
        <div className="hero-section-radial" />
        <div className="hero-section-grid" />
        <div className="hero-section-sweep" />
      </div>
      <div className="hero-section-inner">
        <HeroLeft />
        <HeroControlCenter />
        <HeroKpis className="hero-kpis-mobile" />
      </div>
    </section>
  );
}
