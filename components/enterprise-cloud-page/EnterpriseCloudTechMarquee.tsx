"use client";

import Image from "next/image";
import { CLOUD_TECH_STACK } from "./cloud-tech-stack-config";

export default function EnterpriseCloudTechMarquee() {
  const track = [...CLOUD_TECH_STACK, ...CLOUD_TECH_STACK];

  return (
    <div className="ecms-tech-marquee" aria-label="Technology stack logos">
      <div className="ecms-tech-fade ecms-tech-fade--l" aria-hidden />
      <div className="ecms-tech-fade ecms-tech-fade--r" aria-hidden />
      <div className="ecms-tech-track-wrap">
        <ul className="ecms-tech-track">
          {track.map((logo, i) => (
            <li
              key={`${logo.file}-${i}`}
              className="ecms-tech-logo"
              style={{ ["--ecms-brand" as string]: logo.brand }}
            >
              <Image
                src={`/tech/${logo.file}`}
                alt={logo.name}
                width={40}
                height={40}
                className="ecms-tech-logo-img"
              />
              <span className="ecms-tech-logo-name">{logo.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
