"use client";

import { memo } from "react";

type NavMegaBackdropProps = {
  open: boolean;
  onClose: () => void;
  onPointerEnter: () => void;
};

function NavMegaBackdrop({ open, onClose, onPointerEnter }: NavMegaBackdropProps) {
  return (
    <div
      className={`dock-backdrop${open ? " is-open" : ""}`}
      onClick={onClose}
      onPointerEnter={onPointerEnter}
      aria-hidden
    />
  );
}

export default memo(NavMegaBackdrop);
