# PolicyNow — Pure Next.js Migration

This project uses the Next.js App Router. The old HTML files are not used at runtime and are not included.

## Routes
- `/` — home
- `/<category>` — category page
- `/<category>/<slug>` — article page
- `/author` — authors page
- Root policy pages such as `/privacy-policy`, `/editorial-policy`, etc.

## Structure
- `app/` — Next.js routes and global CSS
- `components/` — React components
- `data/pages.json` — migrated page content/data
- `public/image/` — images/assets

No `public/site`, no `.html` page files, and no catch-all `[[...slug]]` route are used.
