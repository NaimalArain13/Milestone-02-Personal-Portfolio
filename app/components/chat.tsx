"use client";
import { useState } from "react";

interface Message {
  role: string;
  content: string;
}

export default function Chat({ backendUrl }: { backendUrl: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sessionId = "user-session-1";

  const send = async () => {
    const trimmed = text.trim();
    if (!trimmed || isSending) return;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsSending(true);
    setText("");
    try {
      const res = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: trimmed }),
      });
      const j = await res.json();
      const reply = j?.reply ?? "Sorry, I couldn't generate a response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-[#00aae3] text-white shadow-xl flex items-center justify-center animate-bounce hover:animate-none focus:outline-none focus:ring-4 focus:ring-[#00aae3]/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M12 3c-4.97 0-9 3.582-9 8 0 1.96.748 3.763 2.02 5.18-.19.935-.69 2.3-1.86 3.69a.75.75 0 0 0 .66 1.23c2.37-.27 3.99-.99 5.02-1.67A11.9 11.9 0 0 0 12 19c4.97 0 9-3.582 9-8s-4.03-8-9-8Z" />
          </svg>
        </button>
      ) : (
        <div className="w-80 sm:w-96 h-[28rem] bg-bg rounded-xl shadow-2xl border border-border flex flex-col overflow-hidden">
          <div className="px-4 py-3 bg-[#00aae3] text-white flex items-center justify-between">
            <div className="font-semibold text-sm sm:text-base">Ask me anything about Naimal!</div>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="ml-3 rounded-md p-1 hover:bg-[#0099cc] focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-surface">
            {messages.length === 0 && (
              <div className="text-muted text-sm text-center mt-6">Say hello and ask anything.</div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    (m.role === "user"
                      ? "bg-[#00aae3] text-white rounded-t-2xl rounded-l-2xl"
                      : "bg-bg text-primary border border-border rounded-t-2xl rounded-r-2xl") +
                    " px-3 py-2 shadow-sm max-w-[80%] whitespace-pre-wrap text-sm"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border bg-bg">
            <div className="flex items-end gap-2">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Type your message..."
                rows={2}
                className="flex-1 resize-none rounded-lg border border-border bg-surface p-2 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-[#00aae3] max-h-32 min-h-[44px]"
              />
              <button
                type="button"
                onClick={send}
                disabled={isSending || !text.trim()}
                className="h-10 w-10 rounded-lg bg-[#00aae3] text-white flex items-center justify-center shadow disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
