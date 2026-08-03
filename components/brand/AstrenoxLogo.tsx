"use client";

import Link from "next/link";
import { memo, type CSSProperties, type MouseEventHandler } from "react";
import "./brand-logo.css";

/** Full lockup: icon + ASTRENOX + tagline */
const LOGO_FULL = "/brand/astrenox-logo.png";
/** Icon-only mark for tight spaces (nav, drawer, chat, favicon) */
const LOGO_MARK = "/brand/astrenox-mark.png";

export type AstrenoxLogoVariant = "nav" | "footer" | "drawer" | "compact";

const VARIANT_HEIGHT: Record<AstrenoxLogoVariant, number> = {
  nav: 40,
  footer: 56,
  drawer: 36,
  compact: 28,
};

/** Use the icon mark wherever horizontal space is limited */
const COMPACT_VARIANTS: ReadonlySet<AstrenoxLogoVariant> = new Set([
  "nav",
  "drawer",
  "compact",
]);

type AstrenoxLogoProps = {
  variant?: AstrenoxLogoVariant;
  height?: number;
  href?: string | null;
  className?: string;
  /**
   * Force the icon mark (logo2) even on roomy variants.
   * Defaults to true for nav/drawer/compact, false for footer.
   */
  compact?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function AstrenoxLogo({
  variant = "nav",
  height,
  href = "/",
  className = "",
  compact,
  onClick,
}: AstrenoxLogoProps) {
  const h = height ?? VARIANT_HEIGHT[variant];
  const useMark = compact ?? COMPACT_VARIANTS.has(variant);
  const src = useMark ? LOGO_MARK : LOGO_FULL;

  const mark = (
    // Plain img — asset used as provided, no filters/transforms
    <img
      src={src}
      alt="Astrenox"
      className={`ax-logo-mark ${useMark ? "ax-logo-mark--icon" : "ax-logo-mark--full"} ${className}`.trim()}
      style={{ height: h, width: "auto" }}
      decoding="async"
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`ax-logo-link ax-logo-link--${variant}`}
        aria-label="Astrenox home"
        onClick={onClick}
        style={{ "--ax-logo-h": `${h}px` } as CSSProperties}
      >
        {mark}
      </Link>
    );
  }

  return (
    <span
      className={`ax-logo-wrap ax-logo-wrap--${variant} ${className}`.trim()}
      style={{ "--ax-logo-h": `${h}px` } as CSSProperties}
    >
      {mark}
    </span>
  );
}

export default memo(AstrenoxLogo);
