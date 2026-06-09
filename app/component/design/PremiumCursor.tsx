"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export default function PremiumCursor() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const ringX = useSpring(0, { stiffness: 120, damping: 18 });
  const ringY = useSpring(0, { stiffness: 120, damping: 18 });

  useEffect(() => {
    if (reduced || typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reduced, ringX, ringY]);

  if (reduced) return null;

  return (
    <>
      <motion.div
        className="ax-cursor-dot"
        style={{ left: pos.x, top: pos.y }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
        aria-hidden
      />
      <motion.div
        className="ax-cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.6 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden
      />
    </>
  );
}
