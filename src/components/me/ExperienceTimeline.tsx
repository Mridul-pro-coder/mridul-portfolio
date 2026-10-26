"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section className="mt-12">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative mt-6">
        {/* 2px vertical line */}
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-[2px] rounded bg-line"
          style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
        />
        <ol className="space-y-7 pl-7">
          {experience.map((e, i) => (
            <motion.li
              key={e.period}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="relative"
            >
              <span
                aria-hidden
                className={`absolute top-1 -left-7 size-3.5 rounded-full border-2 border-white ${
                  e.current ? "bg-accent shadow-[0_0_0_4px_rgba(47,128,237,0.25)]" : "bg-ink/70"
                }`}
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{e.period}</p>
              <p className="mt-1 text-[0.95rem] font-bold text-ink">
                {e.role} <span className="font-medium text-muted">@ {e.company}</span>
                {e.current && (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                    current
                  </span>
                )}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{e.highlight}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
