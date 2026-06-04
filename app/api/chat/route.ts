import OpenAI from "openai";
import { CHAT_SYSTEM_PROMPT } from "@/app/content/chat-content";

export const runtime = "nodejs";

const MAX_MESSAGES = 24;
const MAX_CONTENT_LENGTH = 4000;

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

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
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured. Set OPENAI_API_KEY." },
      { status: 503 }
    );
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = sanitizeMessages(body.messages);
  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return Response.json({ error: "A user message is required." }, { status: 400 });
  }

  const openai = new OpenAI({ apiKey });

  try {
    const stream = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
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
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("[api/chat]", err);
    return Response.json(
      { error: "Unable to generate a response. Please try again." },
      { status: 500 }
    );
  }
}
