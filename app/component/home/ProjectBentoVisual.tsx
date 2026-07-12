"use client";

type ProjectBentoVisualProps = {
  id: string;
  active: boolean;
};

export default function ProjectBentoVisual({ id, active }: ProjectBentoVisualProps) {
  const cls = `prj-visual prj-visual--${id}${active ? " is-active" : ""}`;

  switch (id) {
    case "carelink":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-care">
            <div className="prj-visual-care-cal">
              {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                <span key={d} className={`prj-visual-care-day${d === 2 ? " is-booked" : ""}`} />
              ))}
            </div>
            <div className="prj-visual-care-timeline">
              <span className="prj-visual-care-slot" />
              <span className="prj-visual-care-slot is-active" />
              <span className="prj-visual-care-slot" />
            </div>
          </div>
        </div>
      );

    case "estateflow":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-estate">
            <div className="prj-visual-estate-heatmap">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="prj-visual-estate-cell"
                  style={{ opacity: 0.2 + (i % 5) * 0.12 }}
                />
              ))}
            </div>
            <div className="prj-visual-estate-bar" />
          </div>
        </div>
      );

    case "buildsync":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-build">
            <svg viewBox="0 0 200 120" className="prj-visual-build-svg">
              <defs>
                <pattern id="prj-blueprint" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L0 0 0 20" fill="none" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="200" height="120" fill="url(#prj-blueprint)" />
              <rect x="30" y="25" width="60" height="45" fill="none" stroke="rgba(196,181,253,0.5)" strokeWidth="1" />
              <rect x="100" y="35" width="70" height="55" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
              <line x1="30" y1="70" x2="90" y2="70" stroke="rgba(168,85,247,0.3)" strokeWidth="0.75" />
            </svg>
          </div>
        </div>
      );

    case "tendervault":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-tender">
            <div className="prj-visual-tender-pipe">
              {["Discover", "Analyze", "Draft", "Submit"].map((step, i) => (
                <span key={step} className={`prj-visual-tender-step${i === 1 ? " is-active" : ""}`}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      );

    case "visionops":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-vision">
            <div className="prj-visual-vision-frame">
              <span className="prj-visual-vision-box" />
              <span className="prj-visual-vision-scan" />
              <span className="prj-visual-vision-box prj-visual-vision-box--b" />
            </div>
          </div>
        </div>
      );

    case "flowchain":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-flow">
            <svg viewBox="0 0 200 100" className="prj-visual-flow-svg">
              <path
                className="prj-visual-flow-path"
                d="M10,50 Q50,20 90,50 T170,50"
                fill="none"
                stroke="rgba(168,85,247,0.35)"
                strokeWidth="1.5"
              />
              <circle className="prj-visual-flow-dot" cx="10" cy="50" r="4" fill="#a855f7" />
              <circle className="prj-visual-flow-dot" cx="90" cy="50" r="4" fill="#c4b5fd" />
              <circle className="prj-visual-flow-dot" cx="170" cy="50" r="4" fill="#7c3aed" />
            </svg>
          </div>
        </div>
      );

    case "dealcore":
      return (
        <div className={cls} aria-hidden>
          <div className="prj-visual-deal">
            <span className="prj-visual-deal-window prj-visual-deal-window--a" />
            <span className="prj-visual-deal-window prj-visual-deal-window--b" />
            <span className="prj-visual-deal-token" />
            <span className="prj-visual-deal-token prj-visual-deal-token--b" />
          </div>
        </div>
      );

    default:
      return <div className={cls} aria-hidden />;
  }
}
