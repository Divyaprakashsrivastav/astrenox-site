"use client";

import type { AnimationActivityRef } from "./useAnimationActiveRef";

let nextHandle = 1;
const cancellations = new Map<number, () => void>();

/**
 * Schedules a capped animation frame and completely suspends while inactive.
 * Uses a timestamp-based throttle so effective FPS matches the requested rate
 * (no setTimeout + rAF stacking that halves the frame rate).
 */
export function scheduleAnimationFrame(
  activity: AnimationActivityRef,
  callback: FrameRequestCallback,
  fps = 30
) {
  const handle = nextHandle++;
  const effectiveFps = Math.min(Math.max(1, fps), 30);
  const minInterval = 1000 / effectiveFps;
  let raf = 0;
  let lastTs = 0;
  let cancelled = false;
  let unsubscribe: (() => void) | null = null;

  const cancel = () => {
    cancelled = true;
    if (raf) window.cancelAnimationFrame(raf);
    unsubscribe?.();
    cancellations.delete(handle);
  };

  const tick = (timestamp: number) => {
    raf = 0;
    if (cancelled) return;

    if (!activity.current) {
      unsubscribe?.();
      unsubscribe = activity.subscribe((active) => {
        if (!active || cancelled) return;
        unsubscribe?.();
        unsubscribe = null;
        lastTs = 0;
        queue();
      });
      return;
    }

    if (!lastTs || timestamp - lastTs >= minInterval) {
      lastTs = timestamp;
      cancellations.delete(handle);
      if (!cancelled) callback(timestamp);
      return;
    }

    queue();
  };

  const queue = () => {
    if (cancelled || raf) return;
    cancellations.set(handle, cancel);
    raf = window.requestAnimationFrame(tick);
  };

  cancellations.set(handle, cancel);
  queue();
  return handle;
}

export function cancelScheduledAnimationFrame(handle: number) {
  cancellations.get(handle)?.();
}

export function createAnimationScheduler(
  activity: AnimationActivityRef,
  fps = 30
) {
  return {
    requestAnimationFrame: (callback: FrameRequestCallback) =>
      scheduleAnimationFrame(activity, callback, fps),
    cancelAnimationFrame: cancelScheduledAnimationFrame,
  };
}
