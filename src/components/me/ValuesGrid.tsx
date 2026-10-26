"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { values } from "@/lib/data";

export default function ValuesGrid() {
  return (
    <section className="mt-12">
      <SectionTitle>What I optimize for</SectionTitle>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
          >
            <Card className="h-full p-4">
              <p className="text-sm font-bold text-ink">{v.title}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{v.body}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
