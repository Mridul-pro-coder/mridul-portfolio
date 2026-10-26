# Aaaby — AI Engineer Portfolio

Minimal, Apple-style portfolio built with Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — routes: `/` (hero), `/me`, `/projects`, `/skills`, `/fun`, `/contact`
- `src/components/` — route components, layout components, shared UI
- `src/lib/data.ts` — all content (profile, experience, projects, skills, fun facts, socials)
- `public/` — `avatar.svg` fallback face, `logo.svg` "W" mark

### Signature effects (root layout)

- **CursorAurora** — full-screen WebGL iridescent blob that eases toward the mouse
  (0.06 lerp); after ~3s idle it drifts on a Lissajous path. Rendered once in
  `app/layout.tsx`, `position: fixed`, composites over white with premultiplied
  alpha. `prefers-reduced-motion` users get a static upper-center blob.
- **Watermark** — giant faint "Toukoun" fixed at the bottom of the viewport.

## Notes

- `tsconfig.check.json` + `types/next-shim.d.ts` are offline type-checking
  scaffolding (used when dependencies aren't installed). They are excluded from
  the real build via `tsconfig.json`'s `exclude`.
