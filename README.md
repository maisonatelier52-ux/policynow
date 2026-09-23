# PolicyNow — Pure Next.js

Migrated to a clean Next.js App Router structure based on the supplied OS-Intel reference architecture.

- Content data: `public/data/*.json`
- Dynamic category: `/[category]`
- Dynamic article: `/[category]/[slug]`
- Shared page chrome: `components/Header.jsx`, `components/Footer.jsx`
- Shared renderer: `components/PageRenderer.jsx`
- Site/page CSS: `app/globals.css`
- Images: `public/images/`

No `app/[[...slug]]` catch-all route and no `public/site/*.html` pages are used.
