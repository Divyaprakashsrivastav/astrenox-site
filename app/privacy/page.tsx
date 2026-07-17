import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import { legalPages } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Privacy Policy | Astrenox",
  description: legalPages.privacy.description,
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero title={legalPages.privacy.title} description={legalPages.privacy.description} />
      <section className="section-shell relative bg-background pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 premium-card p-6 text-sm text-muted leading-relaxed space-y-4">
          <p>
            We process contact details and project information you submit voluntarily. Data is used
            to respond to inquiries, deliver services, and improve our offerings, not sold to third
            parties.
          </p>
          <p>
            For privacy requests, contact{" "}
            <a href="mailto:hello@astrenox.com" className="text-primary hover:underline">
              hello@astrenox.com
            </a>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
