import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import dynamic from "next/dynamic";
const BlockchainWeb3PageClient = dynamic(() => import("@/components/blockchain-web3/BlockchainWeb3PageClient"));
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
