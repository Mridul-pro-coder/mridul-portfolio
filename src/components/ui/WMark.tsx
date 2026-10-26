import { cn } from "@/lib/cn";

/** Stylized black "W" emblem used by the nav logo and the home LogoCard. */
export function WMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={cn("text-ink", className)}
    >
      <path
        d="M6 10 L12.5 30 L17.5 18 L20 25 L22.5 18 L27.5 30 L34 10 L28.6 10 L25.5 20.4 L20 8 L14.5 20.4 L11.4 10 Z"
        fill="currentColor"
      />
      <rect x="4" y="31.5" width="32" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}
