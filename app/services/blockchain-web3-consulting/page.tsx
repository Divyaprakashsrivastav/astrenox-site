import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import BlockchainWeb3PageClient from "@/app/component/blockchain-web3/BlockchainWeb3PageClient";
import { blockchainWeb3PageContent } from "@/app/content/blockchain-web3-content";

export const metadata: Metadata = {
  title: "Blockchain & Web3 Consulting | Astrenox",
  description: blockchainWeb3PageContent.hero.description,
};

export default function BlockchainWeb3Page() {
  return (
    <SiteLayout>
      <BlockchainWeb3PageClient />
    </SiteLayout>
  );
}
