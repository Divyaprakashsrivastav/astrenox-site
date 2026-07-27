const RING_RADIUS: Record<1 | 2 | 3, number> = {
  1: 32,
  2: 46,
  3: 60,
};

const RING_ANGLE_OFFSET: Record<1 | 2 | 3, number> = {
  1: 0,
  2: 18,
  3: -12,
};

export function partnerPosition(
  ringIndex: 1 | 2 | 3,
  index: number,
  count: number
) {
  const radius = RING_RADIUS[ringIndex];
  const angle = -90 + (360 / count) * index + RING_ANGLE_OFFSET[ringIndex];
  const rad = (angle * Math.PI) / 180;
  const layoutScale = 0.88;

  return {
    x: 50 + Math.cos(rad) * radius * layoutScale,
    y: 50 + Math.sin(rad) * radius * layoutScale,
    svgX: 50 + Math.cos(rad) * radius,
    svgY: 50 + Math.sin(rad) * radius,
  };
}

export function ringRevealDelay(ringIndex: 1 | 2 | 3) {
  return 0.35 + ringIndex * 0.35;
}
