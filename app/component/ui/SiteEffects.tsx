"use client";

import ScrollProgress from "./ScrollProgress";

export default function SiteEffects() {
  return (
    <>
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden />
    </>
  );
}
