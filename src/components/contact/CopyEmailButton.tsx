"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // clipboard API unavailable (non-secure context) — fall back silently
      const el = document.createElement("textarea");
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <button
        onClick={copy}
        aria-label={`Copy email ${profile.email}`}
        className="group flex w-full items-center justify-between gap-4 rounded-full border border-line bg-white/85 px-6 py-4 shadow-card backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:border-ink/15"
      >
        <span className="truncate text-base font-bold tracking-tight text-ink">
          {copied ? "Copied!" : profile.email}
        </span>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold transition-colors duration-200 ${
            copied ? "bg-emerald-50 text-emerald-600" : "bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </span>
      </button>
    </motion.div>
  );
}
