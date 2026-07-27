"use client";

import { memo } from "react";

type NavMegaBackdropProps = {
  open: boolean;
  onClose: () => void;
};

function NavMegaBackdrop({ open, onClose }: NavMegaBackdropProps) {
  return (
    <div
      className={`dock-backdrop${open ? " is-open" : ""}`}
      onClick={onClose}
      aria-hidden
    />
  );
}

export default memo(NavMegaBackdrop);
