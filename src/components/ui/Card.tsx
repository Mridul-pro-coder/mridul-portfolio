import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Card({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-line bg-white/90 shadow-card backdrop-blur-sm",
        hover &&
          "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift hover:border-ink/15",
        className
      )}
    >
      {children}
    </Tag>
  );
}
