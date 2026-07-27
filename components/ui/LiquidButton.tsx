"use client";

import type { ReactNode } from "react";
import MagneticButton from "./MagneticButton";

type Variant = "primary" | "outline" | "ghost";

interface LiquidButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-primary hover:bg-[#7a2966] border border-transparent shadow-sm",
  outline:
    "text-text bg-card border border-border hover:border-[#d0d5dd] hover:bg-background",
  ghost: "text-muted bg-transparent border border-transparent hover:text-text",
};

export default function LiquidButton({
  children,
  href,
  variant = "primary",
  className = "",
}: LiquidButtonProps) {
  return (
    <MagneticButton
      href={href}
      strength={0.08}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </MagneticButton>
  );
}
