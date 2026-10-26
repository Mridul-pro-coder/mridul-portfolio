"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { funFacts } from "@/lib/data";

export default function QuoteShuffle() {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * funFacts.length));

  const shuffle = () => {
    let next = idx;
    while (next === idx) next = Math.floor(Math.random() * funFacts.length);
    setIdx(next);
  };

  return (
    <section className="mt-12">
      <SectionTitle>Random facts about Mridul</SectionTitle>

      <Card hover={false} className="mt-5 p-6">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, rotateX: 45 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -45 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-left text-lg font-medium italic leading-relaxed text-ink"
          >
            “{funFacts[idx]}”
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-5">
          <button
            onClick={shuffle}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            Shuffle
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2v3h-3"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Card>
    </section>
  );
}
