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

## Editorial quality layer

Every article now includes structured editorial metadata in `data/articles.json`:

- a distinct, article-specific summary;
- three extractive key points and an estimated reading time;
- a visible story type (`Syndicated report`, `News report`, `Press release`, or `Feature`);
- source name, source record, and original publication date where one could be verified;
- an archive warning when the source and PolicyNow publication dates differ; and
- a prominent disclosure for press releases and other issuer-supplied material.

Article pages identify PolicyNow staff as editors rather than original reporters, expose source records, link to the corrections policy, and use the source publication date in structured metadata.

## Re-running the source audit

```bash
npm run editorial:audit
```

The audit searches public news records, refreshes source metadata, repairs known migration artifacts, and regenerates summaries and key points. It requires network access. Manual overrides for confirmed primary-source URLs and headline corrections live at the top of `scripts/enrich-articles.mjs`.

The audit intentionally labels unresolved provenance as `Source not identified` rather than implying that PolicyNow performed original reporting. Those records should receive manual editorial review before publication.
