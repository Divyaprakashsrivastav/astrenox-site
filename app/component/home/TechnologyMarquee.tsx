"use client";

import type { TechLogoDef } from "./technology-ecosystem-config";
import TechLogoItem from "./TechLogoItem";

type TechnologyMarqueeProps = {
  rowA: TechLogoDef[];
  rowB: TechLogoDef[];
};

function MarqueeRow({
  logos,
  direction,
  speed,
  rowKey,
}: {
  logos: TechLogoDef[];
  direction: "forward" | "reverse";
  speed: number;
  rowKey: string;
}) {
  const track = [...logos, ...logos];

  return (
    <div
      className={`tech-eco-marquee-row tech-eco-marquee-row--${direction}`}
      style={{ ["--marquee-duration" as string]: `${speed}s` }}
    >
      <ul className="tech-eco-marquee-track" aria-hidden={false}>
        {track.map((logo, i) => (
          <TechLogoItem
            key={`${rowKey}-${logo.id}-${i}`}
            logo={logo}
            index={i}
            floatDelay={(i % 6) * 0.25}
          />
        ))}
      </ul>
    </div>
  );
}

export default function TechnologyMarquee({ rowA, rowB }: TechnologyMarqueeProps) {
  return (
    <div className="tech-eco-marquee" aria-label="Technology partner logos">
      <div className="tech-eco-marquee-fade tech-eco-marquee-fade--l" aria-hidden />
      <div className="tech-eco-marquee-fade tech-eco-marquee-fade--r" aria-hidden />
      <div className="tech-eco-marquee-spotlight" aria-hidden />
      <MarqueeRow logos={rowA} direction="forward" speed={58} rowKey="a" />
      <MarqueeRow logos={rowB} direction="reverse" speed={74} rowKey="b" />
    </div>
  );
}
