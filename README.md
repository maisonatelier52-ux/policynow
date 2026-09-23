# PolicyNow — Deep Next.js Structure

This version follows the attached OS-Intel project's page architecture more closely:

- `app/page.jsx` contains the complete home page JSX.
- `app/[category]/page.jsx` contains the complete category-page JSX structures.
- `app/[category]/[slug]/page.jsx` contains the complete article-page structure and reads structured article JSON, similar to the reference project.
- Static pages under `app/*/page.jsx` contain their complete JSX rather than calling a generic HTML renderer.
- `app/layout.jsx` owns the shared Header and Footer once for the whole site.
- `public/data/articles.json` contains article data and structured content blocks.
- Legacy `PageRenderer`, `static-pages.json`, and `category-pages.json` are removed.
- No `app/[[...slug]]` or `public/site/*.html` structure is used.
