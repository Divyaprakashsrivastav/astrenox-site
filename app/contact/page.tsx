import type { Metadata } from "next";
import { Suspense } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const ContactPageClient = dynamic(() => import("@/components/pages/ContactPageClient"));
import { contactPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Contact Us | Astrenox",
  description: contactPage.hero.description,
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <Suspense fallback={<div className="cp-page" style={{ minHeight: "60vh" }} />}>
        <ContactPageClient />
      </Suspense>
    </SiteLayout>
  );
}
