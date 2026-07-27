import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const PageHero = dynamic(() => import("@/components/pages/PageHero"));
import { legalPages } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Legal | Astrenox",
  description: legalPages.legal.description,
};

export default function LegalPage() {
  return (
    <SiteLayout>
      <PageHero title={legalPages.legal.title} description={legalPages.legal.description} />
      <section className="section-shell relative bg-background pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 premium-card p-6 text-sm text-muted leading-relaxed space-y-4">
          <p>
            Astrenox trademarks, logos, and site content are protected. Unauthorized reproduction is
            prohibited without written consent.
          </p>
          <p>
            Professional services are provided under mutually executed agreements defining scope,
            confidentiality, and deliverables.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
