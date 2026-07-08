"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type NavActiveLinkProps = {
  href: string;
  active: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export default function NavActiveLink({
  href,
  active,
  children,
  className = "",
  onClick,
  "aria-label": ariaLabel,
}: NavActiveLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`dock-link ${active ? "dock-link--active" : ""} ${className}`}
      aria-current={active ? "page" : undefined}
      aria-label={ariaLabel}
    >
      <span className="dock-link-text">{children}</span>
      <span className="dock-link-hover-bar" aria-hidden />
      {active && (
        <motion.span
          layoutId="dock-active-bar"
          className="dock-link-active-bar"
          transition={{ type: "spring", stiffness: 400, damping: 34 }}
        />
      )}
    </Link>
  );
}
