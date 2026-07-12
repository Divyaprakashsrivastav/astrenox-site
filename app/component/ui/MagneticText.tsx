"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type MouseEvent,
} from "react";
import "./magnetic-text.css";

type MagneticTextContextValue = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isActive: () => boolean;
  strength: number;
  radius: number;
  scrollReveal: boolean;
};

const MagneticTextContext = createContext<MagneticTextContextValue | null>(null);

function MagneticWord({ word }: { word: string }) {
  const ctx = useContext(MagneticTextContext);
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 16, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 170, damping: 16, mass: 0.45 });

  useEffect(() => {
    if (!ctx) return;

    const update = () => {
      const el = ref.current;
      if (!el || !ctx.isActive()) {
        x.set(0);
        y.set(0);
        return;
      }

      const rect = el.getBoundingClientRect();
      const dx = ctx.mouseX.get() - (rect.left + rect.width / 2);
      const dy = ctx.mouseY.get() - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);

      if (distance > ctx.radius) {
        x.set(0);
        y.set(0);
        return;
      }

      const proximity = 1 - distance / ctx.radius;
      const pull = proximity * proximity * ctx.strength;
      x.set(dx * pull);
      y.set(dy * pull);
    };

    const unsubX = ctx.mouseX.on("change", update);
    const unsubY = ctx.mouseY.on("change", update);

    return () => {
      unsubX();
      unsubY();
    };
  }, [ctx, x, y]);

  const magneticWord = (
    <motion.span
      ref={ref}
      className="magnetic-text-word"
      style={{ x: springX, y: springY }}
    >
      {word}
    </motion.span>
  );

  if (ctx?.scrollReveal) {
    return <span className="magnetic-text-reveal">{magneticWord}</span>;
  }

  return magneticWord;
}

type MagneticTextProps = {
  children: string;
  className?: string;
  as?: "p" | "span";
  strength?: number;
  radius?: number;
  scrollReveal?: boolean;
};

export default function MagneticText({
  children,
  className = "",
  as: Tag = "p",
  strength = 0.16,
  radius = 120,
  scrollReveal = false,
}: MagneticTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);
  const isActiveRef = useRef(false);

  const ctx = useMemo(
    () => ({
      mouseX,
      mouseY,
      isActive: () => isActiveRef.current,
      strength,
      radius,
      scrollReveal: scrollReveal && !prefersReducedMotion,
    }),
    [mouseX, mouseY, strength, radius, scrollReveal, prefersReducedMotion],
  );

  useEffect(() => {
    if (!scrollReveal || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLElement>(".magnetic-text-reveal");

    gsap.set(words, { opacity: 0, y: 18, filter: "blur(6px)" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        once: true,
      },
    });

    timeline.to(words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.022,
      delay: 0.25,
    });

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [scrollReveal, prefersReducedMotion, children]);

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    isActiveRef.current = true;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleLeave = () => {
    isActiveRef.current = false;
    mouseX.set(-10000);
    mouseY.set(-10000);
  };

  const segments = children.split(/(\s+)/);

  return (
    <div
      ref={containerRef}
      className={scrollReveal ? "magnetic-text-anchor" : "magnetic-text-contents"}
    >
      <MagneticTextContext.Provider value={ctx}>
        <Tag
          className={`magnetic-text${scrollReveal ? " magnetic-text-scroll-reveal" : ""}${className ? ` ${className}` : ""}`}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          {segments.map((segment, i) =>
            segment.trim() ? (
              <MagneticWord key={`${segment}-${i}`} word={segment} />
            ) : (
              <span key={`space-${i}`} aria-hidden="true">
                {segment}
              </span>
            ),
          )}
        </Tag>
      </MagneticTextContext.Provider>
    </div>
  );
}
