import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import ProductsPageShowcase from "@/components/products/page/ProductsPageShowcase";

export const metadata: Metadata = {
  title: "Products | Astrenox",
  description:
    "Explore Astrenox applied AI platforms, MVP Studio, and the AI-Native Software Factory.",
};

export default function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsPageShowcase />
    </SiteLayout>
  );
}
