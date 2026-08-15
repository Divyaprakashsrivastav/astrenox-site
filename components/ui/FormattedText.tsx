import { createElement, type ReactNode } from "react";
import { emphasizeImportantWords } from "@/lib/emphasize-text";

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

export function parseFormattedText(text: string, keyPrefix = "ft"): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  BOLD_PATTERN.lastIndex = 0;

  while ((match = BOLD_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Prefix keeps keys unique when multiple parse passes are siblings
    // (e.g. text before/after a "Business Outcome:" split).
    parts.push(<strong key={`${keyPrefix}-${key++}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : [text];
}

export function toCopyLines(text: string): string[] {
  const explicit = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (explicit.length > 1) return explicit;

  return (explicit[0] ?? text)
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .map((line) => line.trim())
    .filter(Boolean);
}

type FormattedTextProps = {
  text: string;
  as?: "span" | "p" | "li" | "h3";
  className?: string;
  /** Auto-bold important terms when content has no explicit ** markers */
  autoEmphasize?: boolean;
};

export default function FormattedText({
  text,
  as: Tag = "span",
  className,
  autoEmphasize = true,
}: FormattedTextProps) {
  const resolved =
    autoEmphasize && text && !text.includes("**")
      ? emphasizeImportantWords(text)
      : text;

  const outcomeMatch = /Business Outcome:\s*/.exec(resolved);
  if (outcomeMatch && outcomeMatch.index != null) {
    const before = resolved.slice(0, outcomeMatch.index).trimEnd();
    const after = resolved.slice(outcomeMatch.index + outcomeMatch[0].length).trim();
    if (after) {
      return createElement(
        Tag,
        { className },
        ...(before ? parseFormattedText(before, "bo-pre") : []),
        before ? <br key="bo-br" /> : null,
        <strong key="bo-label" className="svc-business-outcome-label">
          Business Outcome:
        </strong>,
        <br key="bo-br-2" />,
        ...parseFormattedText(after, "bo-post"),
      );
    }
  }

  return createElement(Tag, { className }, ...parseFormattedText(resolved, "ft"));
}

export function FormattedParagraphs({
  paragraphs,
  className,
  paragraphClassName,
}: {
  paragraphs: readonly string[];
  className?: string;
  paragraphClassName?: string;
}) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p key={`p-${index}-${paragraph.slice(0, 24)}`} className={paragraphClassName}>
          <FormattedText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
