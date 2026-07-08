import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import ServicePage from "@/app/component/service-page/ServicePage";
import { blockchainWeb3Content } from "@/app/content/service-pages";

export const metadata: Metadata = {
  title: blockchainWeb3Content.metadata.title,
  description: blockchainWeb3Content.metadata.description,
};

export default function BlockchainWeb3Page() {
  return (
    <SiteLayout>
      <ServicePage content={blockchainWeb3Content} visual="blockchain" />
    </SiteLayout>
  );
}
