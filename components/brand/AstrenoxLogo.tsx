"use client";

import Link from "next/link";
import { memo, type CSSProperties, type MouseEventHandler } from "react";
import "./brand-logo.css";

const LOGO_SRC = "/brand/astrenox-logo.png";

export type AstrenoxLogoVariant = "nav" | "footer" | "drawer";

const VARIANT_HEIGHT: Record<AstrenoxLogoVariant, number> = {
  nav: 40,
  footer: 64,
  drawer: 36,
};

type AstrenoxLogoProps = {
  variant?: AstrenoxLogoVariant;
  height?: number;
  href?: string | null;
  className?: string;
  showWordmark?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function AstrenoxLogo({
  variant = "nav",
  height,
  href = "/",
  className = "",
  showWordmark = variant === "nav" || variant === "drawer",
  onClick,
}: AstrenoxLogoProps) {
  const h = height ?? VARIANT_HEIGHT[variant];

  const mark = (
    // Plain img, no optimization, filters, or transforms applied to the asset
    <img
      src={LOGO_SRC}
      alt="Astrenox"
      className={`ax-logo-mark ${className}`.trim()}
      style={{ height: h, width: "auto" }}
      decoding="async"
    />
  );

  const content = showWordmark ? (
    <>
      {mark}
      <span className="ax-brand-word">Astrenox</span>
    </>
  ) : (
    mark
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`ax-logo-link ax-logo-link--${variant} ${showWordmark ? "ax-brand-lockup" : ""}`}
        aria-label="Astrenox home"
        onClick={onClick}
        style={{ "--ax-logo-h": `${h}px` } as CSSProperties}
      >
        {content}
      </Link>
    );
  }

  return (
    <span
      className={`ax-logo-wrap ax-logo-wrap--${variant} ${showWordmark ? "ax-brand-lockup" : ""} ${className}`.trim()}
      style={{ "--ax-logo-h": `${h}px` } as CSSProperties}
    >
      {content}
    </span>
  );
}

export default memo(AstrenoxLogo);
