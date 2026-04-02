# Portfolio — Anurag Das

Personal site for a backend / AI engineer: single-page layout with hero, stack, capabilities, projects, experience, and contact. Visual design follows a **tech-noir** palette (deep blacks, electric green accents) aligned with the Stitch reference in this repo’s design export.

## Stack

- **Next.js** 16 (App Router) with **static export** (`output: "export"`)
- **React** 19, **TypeScript**
- **Tailwind CSS** v4 (`@import "tailwindcss"` + `@theme` tokens in `app/globals.css`)
- **Supabase** (client-only) for the contact form
- **Google Fonts**: Space Grotesk, Inter, Space Mono (via `next/font`)

## Project layout

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Composes sections + global noise overlay |
| `app/layout.tsx` | Fonts, metadata |
| `app/globals.css` | Design tokens, animations, utilities (noise, scanlines, ghost-border) |
| `components/` | `Nav`, `Hero`, `Stack`, `Capabilities`, `Projects`, `Experience`, `Contact`, `Footer` |
| `lib/supabase.ts` | Supabase browser client |
| `public/` | Static assets (e.g. profile image, `resume-anurag-das.pdf`) |

## Environment variables

Contact submissions use Supabase. Create `.env.local` (not committed) with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The form expects a `contact_messages` table (or adjust the insert in `components/Contact.tsx`). A honeypot field reduces simple bot spam.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → out/
npm run lint
```

`next build` produces a static `out/` directory suitable for **GitHub Pages**, **Cloudflare Pages**, **Netlify**, S3, etc.

## Resume

The nav **RESUME** control downloads `public/resume-anurag-das.pdf`. Replace that file to update the CV without code changes.

## License

Private / personal use unless you choose otherwise.
