import { marqueeTech } from "@/lib/data";

export default function TechMarquee() {
  const row = (
    <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
      {marqueeTech.map((t, i) => (
        <span key={`${t}-${i}`} className="flex items-center gap-8 text-sm font-semibold whitespace-nowrap text-muted">
          {t}
          <span aria-hidden className="text-line" style={{ color: "rgba(0,0,0,0.2)" }}>
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee relative mt-12 overflow-hidden rounded-2xl border border-line bg-white/80 py-4 shadow-card"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}
      aria-label="Tools ticker"
    >
      <div className="flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
