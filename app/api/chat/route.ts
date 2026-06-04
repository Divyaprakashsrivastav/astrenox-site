import OpenAI, { APIError } from "openai";
import { CHAT_SYSTEM_PROMPT } from "@/app/content/chat-content";

export const runtime = "nodejs";

const DEFAULT_MODEL = "gpt-4o-mini";
const MAX_MESSAGES = 24;
const MAX_CONTENT_LENGTH = 4000;

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

function logChat(event: string, detail?: unknown) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[api/chat] ${event}`, detail ?? "");
  }
}

function errorResponse(error: string, status: number) {
  logChat("error response", { status, error });
  return Response.json({ success: false, error }, { status });
}

function formatError(err: unknown): string {
  if (err instanceof APIError) {
    const parts = [err.message];
    if (err.code) parts.push(`(code: ${err.code})`);
    if (err.status) parts.push(`(status: ${err.status})`);
    return parts.join(" ");
  }
  if (err instanceof Error) return err.message;
  return String(err);
}

function sanitizeMessages(raw: unknown): IncomingMessage[] {
  if (!Array.isArray(raw)) return [];

  const out: IncomingMessage[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const role = (item as IncomingMessage).role;
    const content = (item as IncomingMessage).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string" || !content.trim()) continue;
    out.push({
      role,
      content: content.trim().slice(0, MAX_CONTENT_LENGTH),
    });
  }
  return out.slice(-MAX_MESSAGES);
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  logChat("API Key exists:", !!apiKey);

  if (!apiKey) {
    return errorResponse(
      "Chat is not configured. Add OPENAI_API_KEY to .env.local and restart the dev server.",
      503
    );
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch (err) {
    logChat("JSON parse failed", err);
    return errorResponse("Invalid JSON body.", 400);
  }

  const messages = sanitizeMessages(body.messages);
  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return errorResponse("A user message is required.", 400);
  }

  const model = (process.env.OPENAI_MODEL ?? DEFAULT_MODEL).trim();
  logChat("request", { model, messageCount: messages.length });

  const openai = new OpenAI({ apiKey });

  try {
    const stream = await openai.chat.completions.create({
      model,
      temperature: 0.6,
      max_tokens: 800,
      stream: true,
      messages: [{ role: "system", content: CHAT_SYSTEM_PROMPT }, ...messages],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) controller.enqueue(encoder.encode(text));
          }
          controller.close();
        } catch (streamErr) {
          logChat("stream error", streamErr);
          controller.error(streamErr);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Chat-Model": model,
      },
    });
  } catch (err) {
    console.error("[api/chat] OpenAI error:", err);
    if (err instanceof APIError) {
      console.error("[api/chat] details:", {
        status: err.status,
        code: err.code,
        type: err.type,
        message: err.message,
      });
    }

    const message = formatError(err);
    const status =
      err instanceof APIError && err.status ? err.status : 500;

    return errorResponse(message, status);
  }
}
