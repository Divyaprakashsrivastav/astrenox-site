"use client";

type AmbientVariant = "hero" | "section" | "section-alt";

interface AmbientBlobsProps {
  variant?: AmbientVariant;
  className?: string;
}

export default function AmbientBlobs({
  variant = "section",
  className = "",
}: AmbientBlobsProps) {
  return (
    <div className={`ax-ambient ax-ambient--${variant} ${className}`.trim()} aria-hidden>
      <div className="ax-blob ax-blob--purple" />
      <div className="ax-blob ax-blob--magenta" />
      <div className="ax-blob ax-blob--cyan" />
    </div>
  );
}
