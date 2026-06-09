"use client";

import Link from "next/link";

interface FooterNavLinkProps {
  href: string;
  label: string;
  index: number;
}

export default function FooterNavLink({ href, label }: FooterNavLinkProps) {
  return (
    <Link href={href} className="ax-footer-quicklink">
      {label}
    </Link>
  );
}
