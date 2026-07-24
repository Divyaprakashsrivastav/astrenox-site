"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../features/useReducedMotion";
import { useAnimationActiveRef } from "../features/useAnimationActiveRef";
import { createAnimationScheduler } from "../features/animationScheduler";

const COLORS = ["#A855F7", "#7C3AED", "#C084FC", "#6366F1"] as const;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function MethodStoryAtmosphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const activeRef = useAnimationActiveRef(mountRef);

  useEffect(() => {
    const { requestAnimationFrame, cancelAnimationFrame } = createAnimationScheduler(activeRef, 24);
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const g = ctx;
    let raf = 0;
    let disposed = false;
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    function createParticles(count: number): Particle[] {
      return Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.07,
        r: 0.7 + Math.random() * 1.6,
        alpha: 0.06 + Math.random() * 0.14,
        color: COLORS[i % COLORS.length],
      }));
    }

    function resize() {
      const rect = mount!.getBoundingClientRect();
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(w < 640 ? 8 : 12);
    }

    function frame() {
      if (disposed) return;
      if (!activeRef.current) {
        raf = requestAnimationFrame(frame);
        return;
      }
      g.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        // Solid fill - no per-frame radial gradient allocation
        g.beginPath();
        g.fillStyle = hexToRgba(p.color, p.alpha);
        g.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        g.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();
    raf = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, [activeRef, reduced]);

  return (
    <div className="method-story-atmosphere" aria-hidden>
      <div className="method-story-atmosphere-base" />
      <div ref={gridRef} className="method-story-atmosphere-grid" />
      <div ref={glowRef} className="method-story-atmosphere-glow" />
      {!reduced && <div ref={mountRef} className="method-story-atmosphere-particles" />}
      <div className="method-story-atmosphere-vignette" />
      <div className="method-story-atmosphere-noise" />
    </div>
  );
}

export function useMethodStoryParallax(
  sectionRef: React.RefObject<HTMLElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const grid = section.querySelector(".method-story-atmosphere-grid");
    const glow = section.querySelector(".method-story-atmosphere-glow");
    const triggers: ScrollTrigger[] = [];

    // Match horizontal scrub (0.35) so parallax stays in sync without lag stacking
    if (grid) {
      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => {
            const track = section.querySelector(".method-story-track") as HTMLElement | null;
            const distance = track
              ? Math.max(track.scrollWidth - window.innerWidth, 0)
              : section.offsetHeight;
            return `+=${distance}`;
          },
          scrub: 0.35,
          animation: gsap.to(grid, { x: -120, ease: "none", force3D: true }),
        })
      );
    }

    if (glow) {
      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => {
            const track = section.querySelector(".method-story-track") as HTMLElement | null;
            const distance = track
              ? Math.max(track.scrollWidth - window.innerWidth, 0)
              : section.offsetHeight;
            return `+=${distance}`;
          },
          scrub: 0.35,
          animation: gsap.fromTo(
            glow,
            { x: 0, y: 0 },
            { x: 60, y: -40, ease: "none", force3D: true }
          ),
        })
      );
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [sectionRef, enabled]);
}
