"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatReplies } from "@/lib/data";

export default function ChatBox() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "typing" | "replied">("idle");
  const [reply, setReply] = useState("");

  const submit = () => {
    if (!query.trim() || state === "typing") return;
    setState("typing");
    const canned = chatReplies[Math.floor(Math.random() * chatReplies.length)];
    setTimeout(() => {
      setReply(canned);
      setState("replied");
      setQuery("");
    }, 900);
  };

  return (
    <div className="w-full max-w-[420px]">
      <div className="flex items-center gap-2 rounded-full border border-line bg-white/85 p-2 pl-5 shadow-card backdrop-blur transition-colors focus-within:border-accent/40 focus-within:ring-4 focus-within:ring-accent-soft">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Ask me anything..."
          aria-label="Ask Mridul Gupta anything"
          className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        />
        <button
          onClick={submit}
          aria-label="Send"
          className="grid size-[38px] shrink-0 place-items-center rounded-full bg-accent text-white shadow-card transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {state !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="mt-3 flex justify-end"
          >
            {state === "typing" ? (
              <div className="rounded-2xl rounded-br-sm border border-line bg-white px-4 py-2 text-sm text-muted shadow-card">
                <span className="inline-flex items-center gap-1">
                  typing
                  <span className="inline-flex gap-0.5">
                    <Dot delay={0} />
                    <Dot delay={150} />
                    <Dot delay={300} />
                  </span>
                </span>
              </div>
            ) : (
              <div className="max-w-[340px] rounded-2xl rounded-br-sm bg-accent px-4 py-2.5 text-sm text-white shadow-card">
                {reply}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="size-1 animate-bounce rounded-full bg-current"
      style={{ animationDuration: "600ms", animationDelay: `${delay}ms` }}
    />
  );
}
