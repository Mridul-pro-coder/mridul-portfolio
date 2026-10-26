"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative z-[2]">
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mx-auto w-full max-w-[720px] px-6 pt-16 pb-24"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
