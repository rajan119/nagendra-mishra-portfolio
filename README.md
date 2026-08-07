# Nagendra Mishra — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

```
app/
  layout.tsx      — fonts (Newsreader, Inter, IBM Plex Mono) + global shell
  page.tsx         — assembles all sections
  globals.css      — Tailwind directives + base tweaks
components/
  Nav.tsx          — sticky header with responsive hamburger menu
  StampBadge.tsx   — reusable rotating seal (SVG)
  Hero.tsx
  StatStrip.tsx
  About.tsx        — monogram avatar placeholder, swap for a real headshot
  Ventures.tsx      — venture cards (each with a placeholder image)
  Timeline.tsx      — career track record
  Mediation.tsx     — legal & mediation practice
  Community.tsx     — Helpful Hounds trustee section (placeholder image)
  Credentials.tsx   — education + languages
  Footer.tsx
```

## Images

All images currently point to `picsum.photos` as neutral placeholders
(desaturated via `grayscale` to match the palette). Swap these `src`
values for real photography — a headshot in `About.tsx`, venture/brand
imagery in `Ventures.tsx`, and a Helpful Hounds photo in `Community.tsx` —
then drop the files into `/public` and update the paths, or use
`next/image` for automatic optimization once `next.config.mjs`'s
`remotePatterns` is no longer needed.

## Design tokens

Defined in `tailwind.config.ts`:

- `ink` `#121820` / `ink2` `#1b232d` — dark base
- `paper` `#eae3d0` / `paper2` `#f2ecdd` — light sections
- `brass` `#c9a961` — accent
- `forest` `#4a6b52` — secondary accent
- fonts: `font-display` (Newsreader), `font-body` (Inter), `font-mono` (IBM Plex Mono)
