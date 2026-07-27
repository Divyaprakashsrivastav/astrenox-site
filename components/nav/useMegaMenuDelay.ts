"use client";

import { useCallback, useRef } from "react";

const CLOSE_DELAY_MS = 200;

export function useMegaMenuDelay() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback((onClose: () => void) => {
    cancelClose();
    timerRef.current = setTimeout(onClose, CLOSE_DELAY_MS);
  }, [cancelClose]);

  return { cancelClose, scheduleClose };
}
