import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ProductsCanvas from "@/app/component/products/ProductsCanvas";
import ProductsHero from "@/app/component/products/ProductsHero";
import { productsExplorerHero } from "@/app/content/products-catalog";

const ProductsExplorer = dynamic(
  () => import("@/app/component/products/explorer/ProductsExplorer"),
  { loading: () => <div className="products-section products-inner min-h-[70vh]" /> }
);

export const metadata: Metadata = {
  title: "Products | Astrenox",
  description: productsExplorerHero.description,
};

export default function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsCanvas>
        <ProductsHero />
        <ProductsExplorer />
      </ProductsCanvas>
    </SiteLayout>
  );
}
