/** Deterministic pseudo-random in [0, 1) */
function hash01(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Uniform jittered-grid cloud. Jitter is capped so logo boxes
 * stay inside their cells and cannot overlap neighbors.
 */
export function getLogoCloudLayout(count: number) {
  // Prefer wider grids — cloud is landscape, so this improves vertical gaps
  const cols = Math.max(9, Math.ceil(Math.sqrt(count * 1.55)));
  const rows = Math.ceil(count / cols);
  const size = 32;

  const padX = 7;
  const padY = 11;
  const cellW = (100 - padX * 2) / cols;
  const cellH = (100 - padY * 2) / rows;

  // Keep centers in the inner half of each cell so boxes never cross edges
  const jitterX = cellW * 0.18;
  const jitterY = cellH * 0.16;

  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const itemsInRow = Math.min(cols, count - row * cols);
    const rowShift = ((cols - itemsInRow) * cellW) / 2;

    const cx = padX + rowShift + (col + 0.5) * cellW;
    const cy = padY + (row + 0.5) * cellH;

    const x = cx + (hash01(i * 2.1 + 1) - 0.5) * 2 * jitterX;
    const y = cy + (hash01(i * 3.7 + 5) - 0.5) * 2 * jitterY;

    return {
      x: Number(Math.min(94, Math.max(6, x)).toFixed(2)),
      y: Number(Math.min(90, Math.max(10, y)).toFixed(2)),
      size,
      duration: Number((5 + hash01(i + 23) * 2.5).toFixed(2)),
      delay: Number((hash01(i + 31) * 2).toFixed(2)),
    };
  });
}
