"use client";

import dynamic from "next/dynamic";
import HeroContent from "./hero/HeroContent";

const HexGridBackground = dynamic(
  () => import("@/components/backgrounds/HexGridBackground"),
  { ssr: false }
);

const HeroParticles = dynamic(() => import("./backgrounds/HeroParticles"), {
  ssr: false,
});

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
