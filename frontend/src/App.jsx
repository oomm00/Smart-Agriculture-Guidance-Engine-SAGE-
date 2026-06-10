import { useState, useRef, useEffect } from "react";

function genId() {
  return crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => genId());
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setMessages((m) => [...m, { role: "bot", text: "..." }]);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, session_id: sessionId }),
    });
    const data = await res.json();
    setMessages((m) => {
      const copy = [...m];
      copy[copy.length - 1] = { role: "bot", text: data.reply };
      return copy;
    });
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <div
        style={{
          background: "#fff3cd",
          border: "1px solid #ffeeba",
          borderRadius: 8,
          padding: "8px 16px",
          marginBottom: 16,
          fontSize: 14,
        }}
      >
        This is an AI assistant for crop advisory. Verify critical info with local experts.
      </div>
      <h1 style={{ margin: "0 0 16px" }}>Smart Agriculture Guidance Engine (SAGE)</h1>
      <div
        ref={listRef}
        style={{
          height: "60vh",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              background: m.role === "user" ? "#dcf8c6" : "#f1f0f0",
              borderRadius: 8,
              padding: "6px 12px",
              maxWidth: "80%",
              whiteSpace: "pre-wrap",
            }}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about crops, pests, soil..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #ccc" }}
        />
        <button
          onClick={send}
          style={{
            padding: "8px 20px",
            borderRadius: 8,
            border: "none",
            background: "#4caf50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
