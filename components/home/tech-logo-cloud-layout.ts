/** Radial positions for floating logo cloud, deterministic, no overflow */
export function getLogoCloudLayout(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2 + (i % 2) * 0.15;
    const ring = i % 3;
    const radius = 26 + ring * 11 + (i % 4) * 1.5;
    const x = 50 + Math.cos(angle) * radius * (0.92 + (i % 5) * 0.04);
    const y = 50 + Math.sin(angle) * radius * 0.78;
    return {
      x: Math.min(92, Math.max(8, x)),
      y: Math.min(88, Math.max(12, y)),
      size: 32 + (i % 5) * 5,
      duration: 4.2 + (i % 6) * 0.55,
      delay: i * 0.22,
    };
  });
}
