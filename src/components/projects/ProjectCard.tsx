import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/data";

function Icon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <span
      className="grid size-8 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-accent/40 hover:text-accent"
      title={label}
    >
      {children}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const p = project;

  return (
    <Card as="li" className="flex h-full flex-col overflow-hidden">
      {/* 16:9 gradient thumbnail */}
      <div className={`aspect-video w-full bg-gradient-to-br ${p.gradient}`}>
        <div className="grid h-full place-items-center p-4">
          <p className="text-center text-lg font-black tracking-tight text-ink/60">{p.title}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[0.95rem] font-bold text-ink">{p.title}</h3>
          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
            {p.category}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted">{p.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent transition-transform duration-150 hover:-translate-y-0.5"
          >
            Live
          </a>
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold text-ink transition-transform duration-150 hover:-translate-y-0.5"
          >
            Repo
          </a>
          <span className="ml-auto flex items-center gap-1.5 text-muted">
            <Icon label="Open live site">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M5 11 11 5M11 5H6.5M11 5v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Icon>
            <Icon label="Open repository">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.07.12.13.28.18.43.59-.09 1.2-.18 1.66-.18.45 0 .91.09 1.26.18.08-.12.15-.28.21-.43.15-.24.6-.82 1.23-.82.63.01.23.38-.01.53-.33.19-.73.9-.82 1.13-.16.45-.69 1.3-2.69.94 0 .67-.01 1.3-.01 1.49 0 .21.14.45.55.38C11.71 14.53 14 11.54 14 8c0-4.42-3.58-8-8-8Z" />
              </svg>
            </Icon>
          </span>
        </div>
      </div>
    </Card>
  );
}
