import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const FlagshipProductPageClient = dynamic(() => import("@/components/products/FlagshipProductPageClient"));
import {
  flagshipProducts,
  getFlagshipProduct,
} from "@/app/content/products/flagship-products-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return flagshipProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getFlagshipProduct(slug);
  if (!product) return { title: "Product | Astrenox" };
  return {
    title: `${product.name} | Astrenox`,
    description: product.description,
  };
}

export default async function FlagshipProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getFlagshipProduct(slug);
  if (!product) notFound();

  return (
    <SiteLayout>
      <FlagshipProductPageClient product={product} />
    </SiteLayout>
  );
}
