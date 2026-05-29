"use client";

export default function FooterBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #111111 0%, #171020 50%, #0f0b14 100%)`,
        }}
      />

      {/* Very soft radial — no blue/purple bloom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(255,255,255,0.03),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(201,123,132,0.04),transparent_50%)]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      <div className="footer-grain absolute inset-0" />

      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
    </div>
  );
}
