"use client";

import Image from "next/image";
import { SPTP_TECH_STACK } from "./sptp-tech-stack-config";

export default function SptpTechMarquee() {
  const track = [...SPTP_TECH_STACK, ...SPTP_TECH_STACK];

  return (
    <div className="sptp-tech-marquee" aria-label="Technology ecosystem logos">
      <div className="sptp-tech-fade sptp-tech-fade--l" aria-hidden />
      <div className="sptp-tech-fade sptp-tech-fade--r" aria-hidden />
      <div className="sptp-tech-track-wrap">
        <ul className="sptp-tech-track">
          {track.map((logo, i) => (
            <li
              key={`${logo.file}-${i}`}
              className="sptp-tech-logo"
              style={{ ["--sptp-brand" as string]: logo.brand }}
            >
              <Image
                src={`/tech/${logo.file}`}
                alt={logo.name}
                width={32}
                height={32}
                className="sptp-tech-logo-img"
              />
              <span className="sptp-tech-logo-name">{logo.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
