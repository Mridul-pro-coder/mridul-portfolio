"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import SkillBar from "@/components/skills/SkillBar";
import type { SkillGroup as Group } from "@/lib/data";

export default function SkillGroup({ group, index = 0 }: { group: Group; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <Card hover={false} className="p-5 md:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-ink">{group.domain}</h3>
          <p className="text-sm text-muted">{group.blurb}</p>
        </div>

        <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {group.bars.map((b, i) => (
            <SkillBar key={b.label} label={b.label} value={b.value} delay={i * 0.06} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {group.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
