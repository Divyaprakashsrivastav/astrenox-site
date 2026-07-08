"use client";

import { memo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type RippleButtonProps = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
};

function RippleButton({ href, children, primary }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const ref = useRef<HTMLAnchorElement>(null);
  const rippleId = useRef(0);

  function addRipple(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const id = ++rippleId.current;
    setRipples((r) => [
      ...r,
      { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
    ]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 600);
  }

  return (
    <Link
      ref={ref}
      href={href}
      onClick={addRipple}
      className={primary ? "products-btn-primary products-btn-ripple" : "products-btn-secondary products-btn-ripple"}
    >
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="products-ripple"
          style={{ left: r.x, top: r.y }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          aria-hidden
        />
      ))}
      {children}
    </Link>
  );
}

export default memo(RippleButton);
