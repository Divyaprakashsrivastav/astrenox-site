"use client";

import type { ReactNode } from "react";
import ProductsAmbient from "./ProductsAmbient";
import "./products.css";

export default function ProductsCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="products-canvas">
      <ProductsAmbient />
      {children}
    </div>
  );
}
