"use client";

import Image from "next/image";
import { BMS_TECH_STACK } from "./bms-tech-stack-config";

export default function BmsTechMarquee() {
  const track = [...BMS_TECH_STACK, ...BMS_TECH_STACK];

  return (
    <div className="bmsp-tech-marquee" aria-label="Technology ecosystem logos">
      <div className="bmsp-tech-fade bmsp-tech-fade--l" aria-hidden />
      <div className="bmsp-tech-fade bmsp-tech-fade--r" aria-hidden />
      <div className="bmsp-tech-track-wrap">
        <ul className="bmsp-tech-track">
          {track.map((logo, i) => (
            <li
              key={`${logo.file}-${i}`}
              className="bmsp-tech-logo"
              style={{ ["--bmsp-brand" as string]: logo.brand }}
            >
              <Image
                src={`/tech/${logo.file}`}
                alt={logo.name}
                width={40}
                height={40}
                className="bmsp-tech-logo-img"
              />
              <span className="bmsp-tech-logo-name">{logo.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
