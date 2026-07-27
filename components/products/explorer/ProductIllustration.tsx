"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "../../features/useReducedMotion";

const IllustrationInner = dynamic(() => import("./ProductIllustrationInner"), {
  loading: () => <div className="products-illustration-skeleton" aria-hidden />,
  ssr: false,
});

type ProductIllustrationProps = {
  illustrationId: string;
};

function ProductIllustration({ illustrationId }: ProductIllustrationProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className="products-illustration products-illustration--reduced" aria-hidden />;
  }
  return (
    <div className="products-illustration">
      <IllustrationInner illustrationId={illustrationId} />
    </div>
  );
}

export default memo(ProductIllustration);
