import { createElement, type ReactNode } from "react";

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
};

export default function FormattedText({
  text,
  as: Tag = "span",
  className,
}: FormattedTextProps) {
  return createElement(Tag, { className }, ...parseFormattedText(text));
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
