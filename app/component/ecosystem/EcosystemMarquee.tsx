"use client";

import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";

export default function EcosystemMarquee() {
  const items = homeEnterpriseEcosystem.marquee;
  const sequence = [...items, ...items];

  return (
    <div className="eco-premium-marquee">
      <div className="eco-premium-marquee-fade eco-premium-marquee-fade-l" aria-hidden />
      <div className="eco-premium-marquee-fade eco-premium-marquee-fade-r" aria-hidden />
      <div className="eco-premium-marquee-track">
        {sequence.map((name, i) => (
          <span key={`${name}-${i}`} className="eco-premium-marquee-item">
            <span className="eco-premium-marquee-dot" aria-hidden />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
