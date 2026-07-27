"use client";

import { motion } from "framer-motion";

export default function ChatTypingIndicator() {
  return (
    <div className="chat-message-row chat-message-row-assistant" aria-label="Assistant is typing">
      <div className="chat-avatar" aria-hidden>
        A
      </div>
      <div className="chat-bubble chat-bubble-assistant chat-bubble-typing">
        <div className="chat-typing-dots">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="chat-typing-dot"
              animate={{ y: [0, -5, 0], opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
