"use client";

/**
 * Aceternity-style 3D tilt card primitives.
 * Usage:
 *   <CardContainer>
 *     <CardBody className="...">
 *       <CardItem translateZ={50}>title</CardItem>
 *       <CardItem translateZ={100} rotateX={10}>image</CardItem>
 *     </CardBody>
 *   </CardContainer>
 */

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type MouseEnterCtx = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const MouseEnterContext = createContext<MouseEnterCtx>([false, () => {}]);

/* ─── CardContainer ────────────────────────────────────────────── */

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }

  function handleMouseEnter() {
    setIsMouseEntered(true);
  }

  function handleMouseLeave() {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center w-full", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative w-full transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

/* ─── CardBody ─────────────────────────────────────────────────── */

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ─── CardItem ─────────────────────────────────────────────────── */

type CardItemProps<T extends React.ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function CardItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext);

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = [
        `translateX(${translateX}px)`,
        `translateY(${translateY}px)`,
        `translateZ(${translateZ}px)`,
        `rotateX(${rotateX}deg)`,
        `rotateY(${rotateY}deg)`,
        `rotateZ(${rotateZ}deg)`,
      ].join(" ");
    } else {
      ref.current.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseEntered]);

  return React.createElement(
    as ?? "div",
    {
      ref,
      className: cn("w-fit transition duration-200 ease-linear", className),
      ...rest,
    },
    children
  );
}
