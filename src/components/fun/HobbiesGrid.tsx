"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { hobbies } from "@/lib/data";

export default function HobbiesGrid() {
  return (
    <section className="mt-12">
      <SectionTitle>Hobbies</SectionTitle>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
          >
            <Card className="h-full p-4">
              <div className="text-2xl" aria-hidden>
                {h.emoji}
              </div>
              <p className="mt-2 text-sm font-bold text-ink">{h.title}</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{h.line}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
