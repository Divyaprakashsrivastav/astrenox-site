"use client";

import { useMemo, type CSSProperties } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export default function ParticleField({ count = 20 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: seededValue(i, 1) * 100,
      y: seededValue(i, 2) * 100,
      size: seededValue(i, 3) * 2.5 + 0.5,
      duration: seededValue(i, 4) * 8 + 6,
      delay: seededValue(i, 5) * 4,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="ambient-css-particle absolute rounded-full bg-primary/35"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              "--particle-duration": `${p.duration}s`,
              "--particle-delay": `${p.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
