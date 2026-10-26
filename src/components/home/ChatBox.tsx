"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatReplies, chatTopics, type ChatTopic } from "@/lib/data";

function pickReply(query: string, lastTopic: number, lastGeneral: number): { line: string; topicIdx: number; generalIdx: number } {
  const q = query.toLowerCase();

  // first topic whose keyword appears as a whole word wins
  for (let i = 0; i < chatTopics.length; i++) {
    const topic = chatTopics[i] as ChatTopic;
    const hit = topic.match.some((k) => new RegExp(`\\b${k}\\b`, "i").test(q));
    if (hit) {
      const pool = topic.lines;
      let idx = Math.floor(Math.random() * pool.length);
      if (pool.length > 1 && idx === i && idx === lastTopic) idx = (idx + 1) % pool.length; // avoid repeating last topic line when same topic
      return { line: pool[idx], topicIdx: i, generalIdx: -1 };
    }
  }

  // general fallback
  let idx = Math.floor(Math.random() * chatReplies.length);
  if (idx === lastGeneral) idx = (idx + 1) % chatReplies.length; // avoid immediate repeat
  return { line: chatReplies[idx], topicIdx: -1, generalIdx: idx };
}

export default function ChatBox() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "typing" | "replied">("idle");
  const [reply, setReply] = useState("");
  const [lastTopic, setLastTopic] = useState(-1);
  const [lastGeneral, setLastGeneral] = useState(-1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const submit = () => {
    if (!query.trim() || state === "typing") return;
    const text = query;
    setQuery("");
    setState("typing");

    const { line, topicIdx, generalIdx } = pickReply(text, lastTopic, lastGeneral);
    setLastTopic(topicIdx);
    setLastGeneral(generalIdx);

    // human-ish typing delay
    const delay = 700 + Math.random() * 500;
    timers.current.push(
      setTimeout(() => {
        setReply(line);
        setState("replied");
        // auto-dismiss the reply bubble after ~6s so the demo stays light
        timers.current.push(setTimeout(() => setState("idle"), 6000));
      }, delay)
    );
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
          disabled={state === "typing"}
          aria-label="Send"
          className="grid size-[38px] shrink-0 place-items-center rounded-full bg-accent text-white shadow-card transition-transform duration-150 hover:scale-105 active:scale-95 disabled:cursor-wait disabled:opacity-60"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {state !== "idle" && (
          <motion.div
            key={state === "replied" ? reply : "typing"}
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
              <div className="max-w-[360px] rounded-2xl rounded-br-sm bg-accent px-4 py-2.5 text-left text-sm leading-relaxed text-white shadow-card">
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
