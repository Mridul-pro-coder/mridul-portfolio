import { cn } from "@/lib/cn";

export default function SectionTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "font-extrabold tracking-tight text-ink",
        Tag === "h2" && "text-2xl md:text-[1.75rem]",
        Tag === "h3" && "text-lg",
        className
      )}
    >
      {children}
    </Tag>
  );
}
