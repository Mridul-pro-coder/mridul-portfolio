"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { moods } from "@/lib/data";

/** Seed from the visit so the mood re-rolls on each page load, not each render. */
export default function MoodCard() {
  const mood = useMemo(() => moods[Math.floor(Math.random() * moods.length)], []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Card hover={false} className="flex items-center gap-4 p-5">
        <div
          className="grid size-14 shrink-0 place-items-center rounded-2xl text-3xl"
          style={{ background: "var(--accent-soft)" }}
          aria-hidden
        >
          {mood.emoji}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted">Today's mood</p>
          <p className="mt-1 text-[0.95rem] font-semibold text-ink">{mood.line}</p>
        </div>
      </Card>
    </motion.div>
  );
}
