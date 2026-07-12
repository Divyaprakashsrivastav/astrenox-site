"use client";

type Props = { visual: string; active?: boolean };

export default function ProductPageVisual({ visual, active = false }: Props) {
  const cls = `pp-card-visual pp-card-visual--${visual}${active ? " is-active" : ""}`;

  switch (visual) {
    case "knowledge":
      return (
        <div className={cls} aria-hidden>
          <div className="pp-vis-graph">
            {["a", "b", "c", "d", "e"].map((n) => (
              <span key={n} className={`pp-vis-node pp-vis-node--${n}`} />
            ))}
            <svg className="pp-vis-edges" viewBox="0 0 120 80">
              <line x1="20" y1="40" x2="60" y2="20" stroke="rgba(168,85,247,0.35)" />
              <line x1="60" y1="20" x2="100" y2="40" stroke="rgba(168,85,247,0.35)" />
              <line x1="20" y1="40" x2="60" y2="60" stroke="rgba(168,85,247,0.25)" />
              <line x1="100" y1="40" x2="60" y2="60" stroke="rgba(168,85,247,0.25)" />
            </svg>
          </div>
        </div>
      );
    case "brain":
      return (
        <div className={cls} aria-hidden>
          <div className="pp-vis-brain">
            <span className="pp-vis-brain-core" />
            <span className="pp-vis-brain-ring" />
          </div>
        </div>
      );
    case "platform":
      return (
        <div className={cls} aria-hidden>
          <div className="pp-vis-platform">
            <span className="pp-vis-window pp-vis-window--1" />
            <span className="pp-vis-window pp-vis-window--2" />
            <span className="pp-vis-window pp-vis-window--3" />
          </div>
        </div>
      );
    case "workflow":
      return (
        <div className={cls} aria-hidden>
          <div className="pp-vis-workflow">
            {["Ingest", "Route", "Execute", "Ship"].map((s) => (
              <span key={s} className="pp-vis-wf-step">
                {s}
              </span>
            ))}
          </div>
        </div>
      );
    case "enterprise":
      return (
        <div className={cls} aria-hidden>
          <div className="pp-vis-enterprise">
            <span className="pp-vis-stack pp-vis-stack--1" />
            <span className="pp-vis-stack pp-vis-stack--2" />
            <span className="pp-vis-stack pp-vis-stack--3" />
          </div>
        </div>
      );
    case "pipeline":
      return (
        <div className={cls} aria-hidden>
          <svg viewBox="0 0 140 60" className="pp-vis-pipeline-svg">
            <path d="M10,30 H50 M50,30 Q70,10 90,30 T130,30" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" />
            <circle cx="10" cy="30" r="4" fill="#a855f7" />
            <circle cx="50" cy="30" r="4" fill="#c4b5fd" />
            <circle cx="90" cy="30" r="4" fill="#7c3aed" />
            <circle cx="130" cy="30" r="4" fill="#a855f7" />
          </svg>
        </div>
      );
    case "rfx":
      return (
        <div className={cls} aria-hidden>
          <div className="pp-vis-rfx">
            <span className="pp-vis-doc" />
            <span className="pp-vis-doc pp-vis-doc--b" />
            <span className="pp-vis-arrow" />
          </div>
        </div>
      );
    default:
      return <div className={cls} aria-hidden />;
  }
}
