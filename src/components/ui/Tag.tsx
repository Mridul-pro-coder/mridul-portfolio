import { cn } from "@/lib/cn";

export default function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
