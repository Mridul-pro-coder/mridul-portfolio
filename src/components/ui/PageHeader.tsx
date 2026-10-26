"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function PageHeader({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("mb-10", className)}
    >
      <h1 className="text-4xl font-black tracking-tighter text-ink md:text-5xl">{title}</h1>
      {subtitle && <p className="mt-3 text-base text-muted">{subtitle}</p>}
      {children}
    </motion.header>
  );
}
