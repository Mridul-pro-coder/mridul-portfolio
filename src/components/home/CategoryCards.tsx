import Link from "next/link";
import { CATEGORIES } from "@/components/ui/categoryIcons";

export default function CategoryCards() {
  return (
    <div className="grid w-full grid-cols-5 gap-2.5 max-[560px]:grid-cols-3 max-[400px]:grid-cols-2">
      {CATEGORIES.map((c) => (
        <Link
          key={c.key}
          href={c.href}
          className="group flex flex-col items-center gap-2 rounded-2xl border border-line bg-white/90 px-2 py-4 shadow-card backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lift hover:border-ink/15"
        >
          <span style={{ color: c.color }}>{c.icon}</span>
          <span className="text-sm font-semibold text-ink">{c.label}</span>
        </Link>
      ))}
    </div>
  );
}
