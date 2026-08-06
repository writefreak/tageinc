# Tageinc

The home for books and poems by Tage. Built with Next.js (App Router), TypeScript, and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding your images

The homepage uses CSS background image placements so it never shows a broken image icon while you are still adding real photos. Drop files into `public/images/` with these exact names and they will pick up automatically:

- `hero.jpg` — full bleed background behind the top headline
- `portrait.jpg` — the photo in the About section
- `book-1.jpg`, `book-2.jpg`, `book-3.jpg` — the three featured book covers

Until those files exist, each spot falls back to a plain warm color so the layout still looks intentional.

## Where things live

- `app/page.tsx` — the homepage, assembled from the section components
- `components/` — one file per section (Header, Hero, FeaturedBooks, PoemsFeed, About, Newsletter, Footer)
- `app/globals.css` — color, font, and spacing tokens live in the `@theme` block at the top
- `components/PageDivider.tsx` — the torn page edge used between sections

## Content

The book and poem entries in `FeaturedBooks.tsx` and `PoemsFeed.tsx` are placeholders. Swap in your real titles, dates, and links, or wire them up to a CMS or a markdown folder later.
