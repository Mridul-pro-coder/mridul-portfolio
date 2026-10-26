"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/lib/data";

type Social = { label: string; href: string; icon: React.ReactNode };

const iconProps = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const, "aria-hidden": true };

const SOCIALS: Social[] = [
  {
    label: "GitHub",
    href: profile.socials.github,
    icon: (
      <svg {...iconProps}>
        <path
          d="M12 2C6.48 2 2 6.58 2 12.2c0 4.45 2.86 8.2 6.82 9.48.5.1.68-.23.68-.5v-3.1c-2.78.62-3.37-1.24-3.37-1.24-.46-1.2-1.1-1.52-1.1-1.52-.9-.65.07-.64.07-.64.99.07 1.51 1.03 1.51 1.03.88 1.52 2.3 1.09 2.87.83.09-.65.34-1.09.62-1.35-2.16-.25-4.45-1.13-4.45-5.04 0-1.11.38-2-.08-3.15 0 0-.85-.32.07-1.43 0 0 .7-.15 2.3.92a8.05 8.05 0 0 1 4.26 0c1.6-1.07 2.3-.92 2.3-.92.92 1.11.07 1.43.07 1.43-.46 1.15-.08 2-.08 3.15 0 3.91-2.3 4.78-4.47 5.02.35.31.66.92.66 1.86v2.74c0 .27.18.6.69.5A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.socials.linkedin,
    icon: (
      <svg {...iconProps}>
        <path
          d="M4.98 3.5C4.98 4.58 4.1 5.47 3 5.47S1.02 4.58 1.02 3.5 1.9 1.53 3 1.53s1.98.9 1.98 1.97ZM1.2 8.2h3.6V22.5H1.2V8.2Zm5.93 0h3.45v1.94h.05c.48-.9 1.65-1.94 3.4-1.94 3.64 0 4.31 2.4 4.31 5.5v8.8h-3.6v-7.78c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.13v7.9h-3.6V8.2h.24Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: profile.socials.x,
    icon: (
      <svg {...iconProps}>
        <path
          d="M17.9 3H21l-6.6 7.54L22.2 21h-6.13l-4.8-6.25L5.8 21H2.7l7.03-8.03L2 3h6.28l4.33 5.73L17.9 3Zm-1.08 16.16h1.71L7.29 4.74H5.55l11.27 14.42Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: profile.socials.youtube,
    icon: (
      <svg {...iconProps}>
        <path
          d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM9.85 15.3V8.7l5.76 3.3-5.76 3.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <section className="mt-10">
      <SectionTitle>Find me elsewhere</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-4 flex gap-3"
      >
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="grid size-12 place-items-center rounded-full border border-line bg-white text-ink shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift hover:border-ink/15"
          >
            {s.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
