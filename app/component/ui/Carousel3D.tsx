"use client";

import { memo, useCallback, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import "./carousel-3d.css";

export type Carousel3DFace = {
  id: string;
  content: ReactNode;
};

type Carousel3DProps = {
  faces: Carousel3DFace[];
  className?: string;
  duration?: number;
  radius?: number;
  hint?: string;
};

function Carousel3D({
  faces,
  className,
  duration = 55,
  radius = 430,
  hint = "Click to pause",
}: Carousel3DProps) {
  const reducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const count = faces.length;

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  if (count === 0) return null;

  const angleStep = 360 / count;
  const ringStyle = {
    "--carousel3d-duration": `${duration}s`,
    "--carousel3d-radius": `${radius}px`,
  } as CSSProperties;

  return (
    <div
      className={`carousel3d-wrap${isPaused ? " carousel3d-wrap--paused" : ""}${className ? ` ${className}` : ""}`}
      style={ringStyle}
      onClick={togglePause}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          togglePause();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isPaused}
      aria-label={isPaused ? "Resume carousel rotation" : "Pause carousel rotation"}
    >
      <div className="carousel3d-container">
        <div
          className={`carousel3d-ring${isPaused || reducedMotion ? " carousel3d-ring--paused" : ""}`}
        >
          {faces.map((face, index) => {
            const angle = angleStep * index;
            const faceStyle = {
              transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
            } as CSSProperties;

            return (
              <article
                key={face.id}
                className="carousel3d-face"
                style={faceStyle}
              >
                <span className="carousel3d-face-noise" aria-hidden />
                {!reducedMotion ? (
                  <span className="carousel3d-face-sweep" aria-hidden />
                ) : null}
                {face.content}
              </article>
            );
          })}
        </div>
      </div>
      {hint ? (
        <p className="carousel3d-hint" aria-hidden>
          {isPaused ? "Click to resume" : hint}
        </p>
      ) : null}
    </div>
  );
}

export default memo(Carousel3D);
