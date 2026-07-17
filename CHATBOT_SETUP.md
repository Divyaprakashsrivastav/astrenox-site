# Astrenox AI Chatbot - Setup

The chatbot calls OpenAI **only from the server** (`app/api/chat/route.ts`). The API key is never sent to the browser or bundled in client code.

## 1. Install dependencies

```bash
npm install openai
```

(`openai` is already listed in `package.json`; run the command after cloning or when dependencies change.)

## 2. API key in `.env.local`

Create a file at the **project root** (same folder as `package.json`):

**`.env.local`**

```env
OPENAI_API_KEY=sk-your-openai-key-here
```

Optional:

```env
OPENAI_MODEL=gpt-4o-mini
```

Rules:

- Use your real key from [OpenAI API keys](https://platform.openai.com/api-keys).
- Do **not** commit `.env.local` (it is ignored via `.gitignore`).
- Do **not** put the key in React components, `NEXT_PUBLIC_*` variables, or any client-side file.

Copy the template from `.env.example` if you need a starter:

```bash
cp .env.example .env.local
# then edit .env.local and paste your key
```

## 3. Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use the **Ask Astrenox** button (bottom-right). Messages go to `POST /api/chat`, which reads `process.env.OPENAI_API_KEY` on the server.

If the key is missing, the API returns `503` and the UI shows a configuration error.

**Restart the dev server** after creating or editing `.env.local` - Next.js only loads env files at startup.

### Troubleshooting

| UI / API error | Fix |
|----------------|-----|
| `Chat is not configured` | Add `OPENAI_API_KEY` to `.env.local`, restart `npm run dev` |
| `429` / `insufficient_quota` | Add billing or credits at [OpenAI Billing](https://platform.openai.com/settings/organization/billing) |
| `401` / invalid API key | Rotate key in OpenAI dashboard, update `.env.local` and Vercel env vars |

Test the API directly (dev server running):

```bash
node scripts/test-chat-api.mjs
node scripts/test-chat-route.mjs
```

Errors return `{ "success": false, "error": "..." }` with the real OpenAI message.

## 4. Deploy on Vercel

1. Push the repo to GitHub (without `.env.local`).
2. Import the project in [Vercel](https://vercel.com).
3. **Settings → Environment Variables** add:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** your OpenAI secret key
   - **Environments:** Production (and Preview/Development if you want chat in previews)
4. Redeploy after saving variables.

Optional: add `OPENAI_MODEL` the same way.

Never add `NEXT_PUBLIC_OPENAI_API_KEY` - that would expose the key to the client.

## Architecture

| Piece | Path | Role |
|--------|------|------|
| API route | `app/api/chat/route.ts` | Validates input, calls OpenAI with `process.env.OPENAI_API_KEY`, streams text |
| UI | `app/component/chat/AstrenoxChatbot.tsx` | Floating widget; `fetch("/api/chat")` only |
| Copy / system prompt | `app/content/chat-content.ts` | Prompts and suggested questions |
| Layout | `app/component/layout/SiteLayout.tsx` | Mounts chatbot on all pages |

## Suggested prompts (UI)

- Tell me about Astrenox
- What products do you offer?
- Show AI consulting services
- Book a demo
- Contact sales

## Security checklist

- [ ] Key only in `.env.local` (local) and Vercel env vars (production)
- [ ] No `NEXT_PUBLIC_` prefix on the OpenAI key
- [ ] Rotate the key if it was ever shared in chat, email, or committed to git
