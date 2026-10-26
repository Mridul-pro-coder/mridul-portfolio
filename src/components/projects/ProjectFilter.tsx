"use client";

import { cn } from "@/lib/cn";

export const FILTERS = ["All", "LLM", "Data", "Web", "Tools"] as const;
export type Filter = (typeof FILTERS)[number];

export default function ProjectFilter({
  value,
  onChange,
}: {
  value: Filter;
  onChange: (f: Filter) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-150",
            value === f
              ? "border-accent bg-accent-soft text-accent shadow-card"
              : "border-line bg-white/80 text-muted hover:border-ink/15 hover:text-ink"
          )}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
