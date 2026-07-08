import type { Metadata } from "next";
import PlaceholderPage from "@/app/component/nav/PlaceholderPage";
import { placeholderPages, type PlaceholderMeta } from "@/app/content/placeholder-pages";

export function createPlaceholderRoute(path: keyof typeof placeholderPages) {
  const meta: PlaceholderMeta = placeholderPages[path];
  const metadata: Metadata = {
    title: `${meta.title} | Astrenox`,
    description: meta.description,
  };
  function Page() {
    return <PlaceholderPage {...meta} />;
  }
  return { metadata, Page };
}
