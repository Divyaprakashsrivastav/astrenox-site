"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `ax-btn ${variant === "primary" ? "ax-btn-primary" : "ax-btn-ghost"} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        style={{ x: springX, y: springY }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileTap={{ scale: 0.98 }}
        className={cls}
        data-cursor-hover
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.98 }}
      className={cls}
      data-cursor-hover
    >
      {children}
    </motion.button>
  );
}
