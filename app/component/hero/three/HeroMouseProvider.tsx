"use client";

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface HeroMouseState {
  x: number;
  y: number;
  intensity: number;
}

const HeroMouseContext = createContext<HeroMouseState>({
  x: 0,
  y: 0,
  intensity: 0.5,
});

export function useHeroMouse() {
  return useContext(HeroMouseContext);
}

interface HeroMouseProviderProps {
  children: ReactNode;
}

export function HeroMouseProvider({ children }: HeroMouseProviderProps) {
  const [mouse, setMouse] = useState<HeroMouseState>({ x: 0, y: 0, intensity: 0.5 });
  const target = useRef({ x: 0, y: 0, intensity: 0.5 });

  const handlers = useMemo(
    () => ({
      onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        target.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        target.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        target.current.intensity = 0.85;
        setMouse({ ...target.current });
      },
      onPointerLeave: () => {
        target.current.x = 0;
        target.current.y = 0;
        target.current.intensity = 0.5;
        setMouse({ ...target.current });
      },
    }),
    []
  );

  return (
    <HeroMouseContext.Provider value={mouse}>
      <div className="hero-city-mount" {...handlers}>
        {children}
      </div>
    </HeroMouseContext.Provider>
  );
}
