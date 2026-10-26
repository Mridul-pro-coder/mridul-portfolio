"use client";

import { motion } from "framer-motion";
import { greeting } from "@/lib/data";
import { profile } from "@/lib/data";
import LogoCard from "@/components/home/LogoCard";
import Avatar from "@/components/home/Avatar";
import ChatBox from "@/components/home/ChatBox";
import CategoryCards from "@/components/home/CategoryCards";

const stagger = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.06 * i, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <div className="flex flex-col items-center pt-6 text-center">
      <motion.div variants={stagger} initial="hidden" animate="show" custom={0}>
        <LogoCard />
      </motion.div>

      <motion.p
        variants={stagger}
        initial="hidden"
        animate="show"
        custom={1}
        className="mt-7 text-xl font-bold text-ink"
      >
        {greeting}
      </motion.p>

      <motion.h1
        variants={stagger}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-1 text-[clamp(3.5rem,10vw,5.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-ink"
      >
        {profile.title}
      </motion.h1>

      <motion.div variants={stagger} initial="hidden" animate="show" custom={3} className="mt-9">
        <Avatar size={230} />
      </motion.div>

      <motion.div variants={stagger} initial="hidden" animate="show" custom={4} className="mt-10 flex w-full justify-center">
        <ChatBox />
      </motion.div>

      <motion.div variants={stagger} initial="hidden" animate="show" custom={5} className="mt-12 flex w-full justify-center">
        <CategoryCards />
      </motion.div>
    </div>
  );
}
