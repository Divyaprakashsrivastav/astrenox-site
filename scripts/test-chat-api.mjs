import fs from "fs";
import OpenAI from "openai";

function loadEnvLocal() {
  const path = ".env.local";
  if (!fs.existsSync(path)) return;
  for (const line of fs.readFileSync(path, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    const key = t.slice(0, i).trim();
    let val = t.slice(i + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnvLocal();

const apiKey = process.env.OPENAI_API_KEY?.trim();
console.log("API Key exists:", !!apiKey);
console.log("API Key length:", apiKey?.length ?? 0);

if (!apiKey) {
  process.exit(1);
}

const openai = new OpenAI({ apiKey });

try {
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    messages: [
      { role: "system", content: "Reply with exactly: OK" },
      { role: "user", content: "test" },
    ],
    max_tokens: 16,
  });
  console.log("OpenAI direct OK:", completion.choices[0]?.message?.content);
} catch (err) {
  console.error("OpenAI direct error:", err?.message ?? err);
  if (err?.status) console.error("status:", err.status);
  if (err?.code) console.error("code:", err.code);
  process.exit(2);
}

try {
  const res = await fetch("http://127.0.0.1:3000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [{ role: "user", content: "Say OK" }] }),
  });
  const text = await res.text();
  console.log("Route status:", res.status);
  console.log("Route body:", text.slice(0, 600));
} catch (err) {
  console.error("Route fetch failed (is npm run dev running on :3000?):", err.message);
}
