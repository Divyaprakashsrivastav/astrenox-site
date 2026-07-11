"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export default function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        className="ft-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="ft-link">
      {children}
    </Link>
  );
}
