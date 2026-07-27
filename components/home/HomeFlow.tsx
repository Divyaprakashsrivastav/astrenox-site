"use client";

import "./home-flow.css";
import "./home-disclosure.css";
import type { ReactNode } from "react";
import HomeFlowAmbient from "./HomeFlowAmbient";

export default function HomeFlow({ children }: { children: ReactNode }) {
  return (
    <div className="home-flow">
      <HomeFlowAmbient />
      {children}
    </div>
  );
}
