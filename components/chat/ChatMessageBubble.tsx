"use client";

import { motion } from "framer-motion";

interface ChatMessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function ChatMessageBubble({
  role,
  content,
  isStreaming = false,
}: ChatMessageBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`chat-message-row ${isUser ? "chat-message-row-user" : "chat-message-row-assistant"}`}
    >
      {!isUser ? (
        <div className="chat-avatar" aria-hidden>
          A
        </div>
      ) : null}
      <div
        className={`chat-bubble ${isUser ? "chat-bubble-user" : "chat-bubble-assistant"}`}
      >
        <p className="chat-bubble-text whitespace-pre-wrap">
          {content}
          {isStreaming ? <span className="chat-stream-cursor" aria-hidden /> : null}
        </p>
      </div>
    </motion.div>
  );
}
