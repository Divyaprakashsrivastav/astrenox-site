"use client";

import "./method-journey.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeMethodology } from "@/app/content/homepage-content";
import { useReducedMotion } from "../features/useReducedMotion";
import FormattedText from "../ui/FormattedText";
import MethodStoryAtmosphere, { useMethodStoryParallax } from "./MethodStoryAtmosphere";

type Stage = (typeof homeMethodology.stages)[number];

export default function MethodJourney() {
  const reduced = useReducedMotion();

  if (reduced) {
    return <MethodJourneyStatic />;
  }

  return <MethodJourneyHorizontal />;
}

function MethodJourneyHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useMethodStoryParallax(sectionRef, true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
    const inners = panels.map((p) => p.querySelector<HTMLElement>(".method-story-inner"));
    const panelCount = panels.length;

    const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);

    inners.forEach((inner, i) => {
      if (!inner) return;
      if (i === 0) {
        gsap.set(inner, { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 });
      }
    });

    const horizontalTween = gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 0.85,
        end: () => `+=${getScrollDistance()}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    const progressTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollDistance()}`,
      scrub: 0.85,
      onUpdate: (self) => {
        const progress = self.progress;
        const focus = progress * (panelCount - 1);

        const fill = section.querySelector<HTMLElement>(".method-story-progress-fill");
        if (fill) {
          gsap.set(fill, { scaleX: progress, transformOrigin: "left center" });
        }

        inners.forEach((inner, i) => {
          if (!inner) return;
          const dist = Math.abs(focus - i);
          const t = Math.max(0, 1 - dist * 1.15);
          const eased = gsap.parseEase("power2.out")(t);

          gsap.set(inner, {
            opacity: 0.35 + eased * 0.65,
            scale: 0.95 + eased * 0.05,
            filter: `blur(${(1 - eased) * 10}px)`,
            x: (1 - eased) * (i < focus ? -48 : 48),
          });
        });
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", onResize);
      horizontalTween.scrollTrigger?.kill();
      progressTrigger.kill();
      horizontalTween.kill();
    };
  }, []);

  const setPanelRef = (index: number) => (el: HTMLDivElement | null) => {
    panelRefs.current[index] = el;
  };

  return (
    <section
      ref={sectionRef}
      id={homeMethodology.id}
      className="method-story scroll-mt-28"
      aria-label={homeMethodology.title}
    >
      <div className="method-story-pin">
        <MethodStoryAtmosphere />

        <div ref={trackRef} className="method-story-track">
          <div ref={setPanelRef(0)} className="method-story-panel method-story-panel--intro">
            <IntroContent />
          </div>

          {homeMethodology.stages.map((stage, i) => (
            <div
              key={stage.id}
              ref={setPanelRef(i + 1)}
              className="method-story-panel"
              aria-labelledby={`${stage.id}-heading`}
            >
              <StageContent stage={stage} />
            </div>
          ))}
        </div>

        <div className="method-story-progress" aria-hidden>
          <span className="method-story-progress-label">Methodology</span>
          <div className="method-story-progress-track">
            <div className="method-story-progress-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodJourneyStatic() {
  return (
    <section id={homeMethodology.id} className="method-story method-story--static scroll-mt-28">
      <MethodStoryAtmosphere />
      <div className="method-story-static">
        <IntroContent />
        {homeMethodology.stages.map((stage) => (
          <div key={stage.id} className="method-story-panel method-story-panel--static">
            <StageContent stage={stage} />
          </div>
        ))}
      </div>
    </section>
  );
}

function IntroContent() {
  return (
    <div className="method-story-inner">
      <p className="method-story-eyebrow">{homeMethodology.label}</p>
      <h2 className="method-story-title">{homeMethodology.title}</h2>
      <p className="method-story-desc"><FormattedText text={homeMethodology.description} /></p>
    </div>
  );
}

function StageContent({ stage }: { stage: Stage }) {
  return (
    <div className="method-story-inner">
      <p className="method-story-stage-num" aria-hidden>
        {stage.number}
      </p>
      <h3 id={`${stage.id}-heading`} className="method-story-stage-title">
        {stage.title}
      </h3>
      <p className="method-story-stage-tagline"><FormattedText text={stage.tagline} /></p>
      <ul className="method-story-stage-list">
        {stage.items.map((item) => (
          <li key={item} className="method-story-stage-item">
            <FormattedText text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
