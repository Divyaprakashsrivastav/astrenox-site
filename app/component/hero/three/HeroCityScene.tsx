"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../features/useReducedMotion";
import { HeroMouseProvider } from "./HeroMouseProvider";
import "./hero-three.css";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function HeroCityScene() {
  const reduced = useReducedMotion();
  const mountRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reduced) {
    return <div className="hero-city-mount hero-city-mount--static" aria-hidden="true" />;
  }

  return (
    <div ref={mountRef} className="hero-city-wrapper" aria-hidden="true">
      <HeroMouseProvider>
        <HeroCanvas active={visible} />
      </HeroMouseProvider>
      <div className="hero-city-vignette" />
      <div className="hero-city-fade hero-city-fade--top" />
      <div className="hero-city-fade hero-city-fade--bottom" />
    </div>
  );
}
