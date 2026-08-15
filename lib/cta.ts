/** In-page hash links often fail with soft nav / scroll restore — treat as non-actionable CTAs. */
export function isActionableCtaHref(href?: string | null): href is string {
  if (!href) return false;
  const trimmed = href.trim();
  return trimmed.length > 0 && !trimmed.startsWith("#");
}
