"use client";

import HexGridBackground from "@/components/backgrounds/HexGridBackground";
import HeroParticles from "./backgrounds/HeroParticles";
import HeroContent from "./hero/HeroContent";

export default function Hero() {
  return (
    <section className="hero hero-section hero-section--light">
      <HexGridBackground />
      <HeroParticles />
      <div className="hero-seam-glow" aria-hidden="true" />

      <div className="hero-inner">
        <HeroContent />
      </div>
    </section>
  );
}
