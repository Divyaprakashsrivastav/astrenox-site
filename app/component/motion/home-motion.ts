export const EASE_LANDIO = [0.22, 1, 0.36, 1] as const;

export const MOTION = {
  lineReveal: {
    duration: 0.6,
    stagger: 0.1,
    ease: EASE_LANDIO,
  },
  section: {
    duration: 0.55,
    y: 20,
    blur: 6,
    ease: EASE_LANDIO,
  },
  cardDrift: {
    min: 6,
    max: 8,
    distance: 10,
  },
  parallax: {
    max: 15,
  },
} as const;

export const lineRevealVariant = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: MOTION.lineReveal.duration,
      delay,
      ease: MOTION.lineReveal.ease,
    },
  }),
};

export const sectionRevealVariant = {
  hidden: {
    opacity: 0,
    y: MOTION.section.y,
    filter: `blur(${MOTION.section.blur}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: MOTION.section.duration, ease: MOTION.section.ease },
  },
};
