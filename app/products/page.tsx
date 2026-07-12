import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ProductsPageShowcase from "@/app/component/products/page/ProductsPageShowcase";
import { productsInfrastructureIntro } from "@/app/content/products-page-content";

export const metadata: Metadata = {
  title: "Products | Astrenox",
  description: productsInfrastructureIntro,
};

export default function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsPageShowcase />
    </SiteLayout>
  );
}
