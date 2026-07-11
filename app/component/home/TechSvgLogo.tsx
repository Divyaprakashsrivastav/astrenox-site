"use client";

import "./tech-svg-logo.css";
import {
  TECH_LOGO_BRAND_COLORS,
  TECH_LOGO_OPTICAL_SCALE,
  TECH_SVG_INLINE,
} from "./tech-logo-assets";

type TechSvgLogoProps = {
  file: string;
  name: string;
  className?: string;
  size?: number;
};

function slugFromFile(file: string) {
  return file.replace(/\.svg$/i, "");
}

export default function TechSvgLogo({
  file,
  name,
  className = "",
  size = 48,
}: TechSvgLogoProps) {
  const slug = slugFromFile(file);
  const markup = TECH_SVG_INLINE[slug];
  const brandColor = TECH_LOGO_BRAND_COLORS[slug] ?? null;
  const opticalScale = TECH_LOGO_OPTICAL_SCALE[slug] ?? 1;

  if (!markup) {
    console.error(`[TechSvgLogo] Missing inline SVG for: ${file}`);
    return null;
  }

  return (
    <span
      className={`tech-svg-logo ${className}`.trim()}
      style={{
        width: size,
        height: size,
        ["--logo-brand" as string]: brandColor ?? "#ffffff",
        ["--logo-optical-scale" as string]: opticalScale,
      }}
      role="img"
      aria-label={name}
      title={name}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
