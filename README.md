# podgruszecki.dev

Portfolio and CV of Bartosz Podgruszecki. Live: https://podgruszecki.dev Static site built with [Astro](https://astro.build) and Tailwind CSS, deployed on Vercel.

## Commands

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
bun run check    # type-check
bun run cv:pdf   # rebuild site and regenerate the EN + PL CV PDFs in public/cv (needs local Chrome)
```

## Content

All content lives in `src/data/` and is shared by the website and the CV:

- `profile.ts` – name, contact, headline, highlights, skills, languages
- `experience.ts` – jobs (website timeline + CV bullets)
- `projects.ts` – projects; `featured: true` shows on the home page, `impact` is used in the CV

The site is available in English (`/`) and Polish (`/pl`):

- `src/i18n/ui.ts` – interface strings for both languages
- `src/i18n/pl.ts` – Polish translations of the content above (keyed by project slug / position); update it whenever the English content changes
- `src/components/pages/` – page components shared by both languages; `src/pages` only picks the language

After changing content run `bun run cv:pdf` (regenerates both the English and the Polish PDF) and commit the PDFs.

`/llms.txt` (summary for AI assistants) is generated from the same data in `src/pages/llms.txt.ts`.

The Open Graph image (`public/og.png`) is rendered from `scripts/og.html` – see the comment in that file.
