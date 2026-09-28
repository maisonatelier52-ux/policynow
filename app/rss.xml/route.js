import articles from "../../data/articles";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, categoryLabel } from "../../lib/site";

export const dynamic = "force-static";

function escapeXml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function asRfc822(date) {
  const parsed = new Date(`${date || "1970-01-01"}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date(0).toUTCString() : parsed.toUTCString();
}

export function GET() {
  const posts = [...articles]
    .filter((article) => article.editorial?.source?.name !== "Source not identified")
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 50);

  const lastBuildDate = posts[0]?.editorial?.reviewed || posts[0]?.date;
  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/${post.category}/${post.slug}`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${asRfc822(post.date)}</pubDate>
      <category>${escapeXml(categoryLabel(post.category, post.categoryLabel))}</category>
      <dc:creator>${escapeXml(post.author || "PolicyNow Editorial Team")}</dc:creator>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${asRfc822(lastBuildDate)}</lastBuildDate>
    <copyright>Copyright ${new Date(lastBuildDate || "2026-01-01").getUTCFullYear()} ${SITE_NAME}</copyright>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
