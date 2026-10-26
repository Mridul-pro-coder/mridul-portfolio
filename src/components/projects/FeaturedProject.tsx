"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { projects } from "@/lib/data";

function GitHubMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.07.12.13.28.18.43.59-.09 1.2-.18 1.66-.18.45 0 .91.09 1.26.18.08-.12.15-.28.21-.43.15-.24.6-.82 1.23-.82.63.01.23.38-.01.53-.33.19-.73.9-.82 1.13-.16.45-.69 1.3-2.69.94 0 .67-.01 1.3-.01 1.49 0 .21.14.45.55.38C11.71 14.53 14 11.54 14 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M5 11 11 5m0 0H6.5M11 5v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeaturedProject() {
  const p = projects.find((x) => x.featured)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card hover={false} className="overflow-hidden">
        {/* thumbnail area */}
        <div
          className={`relative grid h-44 place-items-center bg-gradient-to-br ${p.gradient} md:h-56`}
        >
          <p className="px-6 text-center text-2xl font-black tracking-tight text-ink/70">
            {p.title}
          </p>
          <span className="absolute top-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur">
            Featured
          </span>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-ink">{p.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Live <ArrowUpRight />
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <GitHubMark /> Repo
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
