// src/chatbot/ai.js
// Optional OpenAI-style fallback. Disabled unless you add an API key.
// 1) Add to .env: VITE_OPENAI_API_KEY=sk-xxxx
// 2) In Chatbot.jsx, set `enableAI = true`.

export async function aiAnswer(prompt) {
  const key = import.meta.env.VITE_OPENAI_API_KEY;
  if (!key) return null; // disabled

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a cosmic portfolio guide for Sakshi Meena. Be concise, helpful, and honest.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
      }),
    });
    const data = await res.json();
    const out =
      data?.choices?.[0]?.message?.content?.trim?.() || null;
    return out;
  } catch (e) {
    return null;
  }
}
