/** Quick check: POST /api/chat - run while `npm run dev` is active */
const res = await fetch("http://127.0.0.1:3000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messages: [{ role: "user", content: "Hi" }] }),
});
const data = await res.json().catch(async () => ({ raw: await res.text() }));
console.log(JSON.stringify({ status: res.status, body: data }, null, 2));
