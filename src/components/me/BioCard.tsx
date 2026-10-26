"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Avatar from "@/components/home/Avatar";
import { profile } from "@/lib/data";

export default function BioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card hover={false} className="p-6">
        <div className="flex items-center gap-5">
          <div className="shrink-0">
            <Avatar size={80} />
          </div>
          <div className="text-left">
            <p className="text-base font-bold text-ink">
              {profile.name} · {profile.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{profile.bio}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
