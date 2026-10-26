"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { CATEGORIES } from "@/components/ui/categoryIcons";

function NavIcons({ active }: { active: (href: string) => boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      {CATEGORIES.map((c) => (
        <Link
          key={c.key}
          href={c.href}
          aria-label={c.label}
          title={c.label}
          className={cn(
            "relative grid size-9 place-items-center rounded-xl border bg-white/85 shadow-card backdrop-blur transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lift",
            active(c.href)
              ? "border-ink/15"
              : "border-line hover:border-ink/15"
          )}
          style={{ color: c.color }}
        >
          {c.icon}
          {active(c.href) && (
            <span
              aria-hidden
              className="absolute -bottom-1 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-accent"
            />
          )}
        </Link>
      ))}
    </div>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const onSubRoute = pathname !== "/";

  return (
    <nav className="relative z-[3] w-full">
      <div className="mx-auto flex w-full max-w-[720px] items-center justify-between px-6 py-4">
        {/* back arrow: only on sub-routes, returns to the hero */}
        {onSubRoute ? (
          <Link
            href="/"
            aria-label="Back to home"
            title="Back to home"
            className="grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-white/85 shadow-card backdrop-blur transition-all duration-150 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-lift"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M13 8H3m0 0 4-4M3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : (
          <span className="w-9 shrink-0" aria-hidden />
        )}

        {/* section icons */}
        <NavIcons active={active} />
      </div>
    </nav>
  );
}
