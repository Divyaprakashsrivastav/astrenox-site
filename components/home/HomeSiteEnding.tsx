"use client";

import EndingAmbient from "../footer/EndingAmbient";
import HomeContactCTA from "./HomeContactCTA";
import Footer from "../Footer";

/** Unified contact + footer canvas for the homepage ending. */
export default function HomeSiteEnding() {
  return (
    <div className="site-ending-shell">
      <EndingAmbient />
      <HomeContactCTA />
      <Footer embedded />
    </div>
  );
}
