import { createElement, type ReactNode } from "react";
import { emphasizeImportantWords } from "@/lib/emphasize-text";

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

export function parseFormattedText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  BOLD_PATTERN.lastIndex = 0;

  while ((match = BOLD_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<strong key={key++}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : [text];
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
        ...(before ? parseFormattedText(before) : []),
        before ? <br key="bo-br" /> : null,
        <strong key="bo-label" className="svc-business-outcome-label">
          Business Outcome:
        </strong>,
        <br key="bo-br-2" />,
        ...parseFormattedText(after),
      );
    }
  }

  return createElement(Tag, { className }, ...parseFormattedText(resolved));
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
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={paragraphClassName}>
          <FormattedText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
