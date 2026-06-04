"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import ChatMessageBubble from "./ChatMessageBubble";
import ChatTypingIndicator from "./ChatTypingIndicator";
import {
  chatAssistantName,
  chatSuggestedPrompts,
  chatWelcomeMessage,
} from "@/app/content/chat-content";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function AstrenoxChatbot() {
  const formId = useId();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: newId(), role: "assistant", content: chatWelcomeMessage },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, streamingId, scrollToBottom]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 280);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setError(null);
      const userMessage: ChatMessage = {
        id: newId(),
        role: "user",
        content: trimmed,
      };

      const history = [...messages, userMessage];
      setMessages(history);
      setInput("");
      setIsLoading(true);

      const assistantId = newId();
      setStreamingId(assistantId);
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map(({ role, content }) => ({ role, content })),
          }),
        });

        if (!res.ok) {
          let errMsg = "Something went wrong. Please try again.";
          try {
            const data = await res.json();
            if (data?.error) errMsg = data.error;
          } catch {
            /* plain stream error */
          }
          throw new Error(errMsg);
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No response stream.");

        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: accumulated } : m
            )
          );
        }
      } catch (e) {
        const errMsg = e instanceof Error ? e.message : "Request failed.";
        setError(errMsg);
        setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      } finally {
        setIsLoading(false);
        setStreamingId(null);
      }
    },
    [isLoading, messages]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  };

  const showPrompts =
    !isLoading &&
    messages.length <= 1 &&
    messages.every((m) => m.role === "assistant");

  return (
    <div className="chat-widget-root" aria-live="polite">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            id="astrenox-chat-panel"
            className="chat-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${formId}-title`}
          >
            <header className="chat-panel-header">
              <div className="chat-panel-brand">
                <span className="chat-panel-logo" aria-hidden>
                  <Sparkles size={14} strokeWidth={2} />
                </span>
                <div>
                  <h2 id={`${formId}-title`} className="chat-panel-title">
                    {chatAssistantName}
                  </h2>
                  <p className="chat-panel-subtitle">Enterprise AI assistant</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="chat-icon-btn"
                aria-label="Close chat"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </header>

            <div ref={scrollRef} className="chat-messages">
              {messages.map((msg) => {
                if (msg.role === "assistant" && !msg.content && isLoading) {
                  return null;
                }
                return (
                  <ChatMessageBubble
                    key={msg.id}
                    role={msg.role}
                    content={msg.content}
                    isStreaming={streamingId === msg.id && isLoading}
                  />
                );
              })}
              {isLoading && streamingId && !messages.find((m) => m.id === streamingId)?.content ? (
                <ChatTypingIndicator />
              ) : null}
              {error ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="chat-error"
                  role="alert"
                >
                  {error}
                </motion.p>
              ) : null}

              {showPrompts ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="chat-prompts"
                >
                  <p className="chat-prompts-label">Suggested</p>
                  <div className="chat-prompts-grid">
                    {chatSuggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        className="chat-prompt-chip"
                        onClick={() => void sendMessage(prompt)}
                        disabled={isLoading}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </div>

            <form onSubmit={onSubmit} className="chat-composer">
              <label htmlFor={`${formId}-input`} className="sr-only">
                Message Astrenox AI
              </label>
              <textarea
                id={`${formId}-input`}
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about services, platform, or demos…"
                className="chat-input"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <Send size={16} strokeWidth={2} />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="chat-launcher"
        aria-expanded={open}
        aria-controls="astrenox-chat-panel"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} strokeWidth={2} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="chat-launcher-inner"
            >
              <MessageCircle size={22} strokeWidth={2} />
              <span className="chat-launcher-pulse" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="chat-launcher-label">Ask Astrenox</span>
      </motion.button>
    </div>
  );
}
