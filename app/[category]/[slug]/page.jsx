import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "../../../data/articles";
import authors from "../../../data/authors";
import ClientNewsArticle from "../../../components/ClientNewsArticle";
import PillarArticle from "../../../components/PillarArticle";
import { getPillar, getRelatedPillars, pillarArticles } from "../../../data/pillars";
import {
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  categoryLabel,
  contributorPath,
  postTypeLabel,
} from "../../../lib/site";

const SPECIAL_SLUG = "julio-herrera-velutini-pope-leo-xiv-castelgandolfo";
const SITE_LOGO = `${SITE_URL}/image/policynow-logo.png`;

const absImage = (img) => (!img ? SITE_LOGO : img.startsWith("http") ? img : `${SITE_URL}${img}`);

function toIso(date) {
  if (!date) return undefined;
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

function formatDate(date) {
  if (!date) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function blockText(block) {
  if (block?.text) return block.text;
  return (block?.runs || []).map((run) => run.text || "").join("");
}

function comparableText(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function contentWithoutRepeatedDeck(article) {
  const blocks = article.content || [];
  const firstParagraphIndex = blocks.findIndex(
    (block) => block?.type === "p" && blockText(block).trim(),
  );

  if (firstParagraphIndex < 0) return blocks;

  const lead = comparableText(blockText(blocks[firstParagraphIndex]));
  const deck = comparableText(article.description);
  const repeatsDeck =
    Math.min(lead.length, deck.length) >= 80 &&
    (lead === deck || lead.startsWith(deck) || deck.startsWith(lead));

  return repeatsDeck
    ? blocks.filter((_, index) => index !== firstParagraphIndex)
    : blocks;
}

function isInlineHeading(block) {
  const visibleRuns = (block?.runs || []).filter((run) => (run.text || "").trim());
  const text = blockText(block).trim();
  return (
    block?.type === "p" &&
    visibleRuns.length > 0 &&
    visibleRuns.every((run) => run.bold) &&
    text.length > 0 &&
    text.length < 110
  );
}

function startsMidThought(article) {
  const first = blockText(article.content?.[0]).trim();
  return /^(and|but|however|still|yet|the result|this|these|those)\b/i.test(first);
}

export function generateStaticParams() {
  return [
    ...articles.map((article) => ({ category: article.category, slug: article.slug })),
    ...pillarArticles.map((a) => ({ category: a.category, slug: a.slug })),
  ];
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const pillar = getPillar(category, slug);
  if (pillar) {
    const url = `${SITE_URL}${pillar.path}`;
    const image = absImage(pillar.image);
    return {
      title: pillar.title,
      description: pillar.metaDescription,
      keywords: pillar.keywords.join(", "),
      alternates: { canonical: url },
      openGraph: { title: pillar.title, description: pillar.metaDescription, url, siteName: SITE_NAME, images: [{ url: image, width: 1200, height: 630, alt: pillar.title }], type: "article", locale: "en_US", publishedTime: pillar.publishedAt, modifiedTime: pillar.updatedAt },
      twitter: { card: "summary_large_image", title: pillar.title, description: pillar.metaDescription, images: [image], site: TWITTER_HANDLE },
      robots: { index: true, follow: true },
    };
  }
  const article = articles.find(
    (item) => item.slug === slug && (item.category === category || slug === SPECIAL_SLUG),
  );
  if (!article) return {};

  const url = `${SITE_URL}/${article.category}/${article.slug}`;
  const image = absImage(article.heroImage);
  const publishedIso = toIso(article.date);
  const modifiedIso = toIso(article.editorial?.reviewed || article.date);
  const contributorUrl = `${SITE_URL}${contributorPath(article.author, authors)}`;
  const label = categoryLabel(article.category, article.categoryLabel);
  const sourceIdentified = article.editorial?.source?.name !== "Source not identified";

  return {
    title: article.title,
    description: article.description,
    keywords: `${label}, policy blog, current affairs, ${SITE_NAME}`,
    authors: [{ name: article.author, url: contributorUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
      type: "article",
      locale: "en_US",
      publishedTime: publishedIso,
      modifiedTime: modifiedIso,
      authors: [article.author],
      section: label,
      tags: [label, postTypeLabel(article.editorial?.type)].filter(Boolean),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
    robots: {
      index: sourceIdentified,
      follow: true,
      googleBot: {
        index: sourceIdentified,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function Paragraph({ block }) {
  return (
    <p className="mb-6 font-serif text-[18px] leading-[1.75] text-[#282b30]">
      {block.runs.map((run, index) =>
        run.break ? (
          <br key={index} />
        ) : run.bold ? (
          <strong key={index}>{run.text}</strong>
        ) : (
          <span key={index}>{run.text}</span>
        ),
      )}
    </p>
  );
}

function StoryBlock({ block }) {
  if (block.type === "h2" || isInlineHeading(block)) {
    return (
      <h2 className="mb-4 mt-12 font-sans text-2xl font-bold leading-tight text-[#111318]">
        {block.text || blockText(block)}
      </h2>
    );
  }
  return <Paragraph block={block} />;
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  const pillar = getPillar(category, slug);
  if (pillar) {
    const url = `${SITE_URL}${pillar.path}`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Pope Leo XIV & Castel Gandolfo", item: `${SITE_URL}/us/${SPECIAL_SLUG}` },
          { "@type": "ListItem", position: 3, name: pillar.title, item: url } ] },
        { "@type": "Article", headline: pillar.title, description: pillar.metaDescription, image: [absImage(pillar.image)], datePublished: pillar.publishedAt, dateModified: pillar.updatedAt, mainEntityOfPage: url, url, keywords: pillar.keywords, isPartOf: { "@type": "WebPage", url: `${SITE_URL}/us/${SPECIAL_SLUG}` }, citation: pillar.sources.map((x) => x.url), author: { "@type": "Organization", name: "PolicyNow Editorial Team" }, publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: SITE_LOGO } } },
      ],
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PillarArticle article={pillar} related={getRelatedPillars(pillar, 3)} />
      </>
    );
  }

  if (slug === SPECIAL_SLUG) {
    const special = articles.find((article) => article.slug === SPECIAL_SLUG);
    if (!special) notFound();
    return <ClientNewsArticle article={special} />;
  }

  const article = articles.find(
    (item) => item.category === category && item.slug === slug && !item.special,
  );
  if (!article) notFound();

  const related = articles
    .filter((item) => item.category === category && item.slug !== slug && !item.special)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 4);

  const shareUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const authorInfo = authors.find((person) => person.name === article.author);
  const authorImage = authorInfo?.image || "/image/policynow-logo.png";
  const editorial = article.editorial || {};
  const source = editorial.source || {};
  const sourceDate = editorial.originalPublished || article.date;
  const publishedIso = toIso(article.date);
  const modifiedIso = toIso(editorial.reviewed || article.date);
  const isPressRelease = editorial.type === "Press release";
  const isSyndicated = editorial.type === "Syndicated report";
  const sourceIdentified = source.name !== "Source not identified";
  const categoryName = categoryLabel(article.category, article.categoryLabel);
  const authorPath = contributorPath(article.author, authors);
  const contentBlocks = contentWithoutRepeatedDeck(article);

  const schemaAuthor =
    editorial.type === "Feature"
      ? { "@type": "Person", name: article.author, url: `${SITE_URL}${authorPath}` }
      : {
          "@type": "Organization",
          name: source.name || "PolicyNow Editorial Team",
          ...(source.url ? { url: source.url } : {}),
        };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${shareUrl}#article`,
    headline: article.title,
    description: article.description,
    image: [absImage(article.heroImage)],
    ...(publishedIso ? { datePublished: publishedIso } : {}),
    ...(modifiedIso ? { dateModified: modifiedIso } : {}),
    author: schemaAuthor,
    editor: {
      "@type": "Person",
      name: article.author,
      image: absImage(authorImage),
      url: `${SITE_URL}${authorPath}`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": shareUrl },
    articleSection: categoryName,
    isAccessibleForFree: true,
    ...(source.url ? { citation: source.url } : {}),
    url: shareUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${shareUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${SITE_URL}/${article.category}`,
      },
      { "@type": "ListItem", position: 3, name: article.title, item: shareUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-white">
        <header className="mx-auto max-w-4xl px-6 pb-8 pt-10 sm:pt-14">
          <div className="mb-5 flex flex-wrap items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em]">
            <span className="rounded-full bg-[#14181f] px-3 py-1.5 text-white">
              {postTypeLabel(editorial.type)}
            </span>
            <Link
              href={`/${article.category}`}
              className="rounded-full border border-gray-300 px-3 py-1.5 text-[#4d535c] hover:border-black hover:text-black"
            >
              {categoryName}
            </Link>
          </div>

          <h1 className="max-w-[22ch] font-serif text-[38px] font-bold leading-[1.06] tracking-[-0.025em] text-[#111318] sm:text-[58px]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl font-serif text-xl leading-[1.55] text-[#50555e] sm:text-[23px]">
            {article.description}
          </p>

          <div className="mt-8 flex flex-col gap-5 border-y border-gray-200 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img alt="" className="h-11 w-11 rounded-full object-cover" src={authorImage} />
              <div className="font-sans text-xs leading-relaxed text-[#5c616a]">
                <div className="font-semibold text-[#15171b]">
                  Edited by <Link href={authorPath} className="hover:underline">{article.author}</Link>
                </div>
                <div>
                  {article.date ? `Published ${formatDate(article.date)} · ` : ""}
                  {editorial.readTimeMinutes || 1} min read
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-sans text-xs">
              <span className="mr-1 text-[#70757d]">Share</span>
              <a
                className="rounded-full border border-gray-300 px-3 py-2 hover:border-black"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="rounded-full border border-gray-300 px-3 py-2 hover:border-black"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
            </div>
          </div>
        </header>

        <figure className="mx-auto max-w-5xl px-4 sm:px-6">
          <img
            alt={article.title}
            className="max-h-[650px] w-full bg-[#f1f0ed] object-cover"
            src={article.heroImage}
          />
          {article.heroCaption && (
            <figcaption className="mt-3 border-l-2 border-[#b3261e] pl-3 font-sans text-xs leading-relaxed text-[#666b73]">
              {article.heroCaption}
            </figcaption>
          )}
        </figure>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_270px] lg:py-14">
          <article className="min-w-0 max-w-3xl">
            {!sourceIdentified && (
              <aside className="mb-8 border-l-4 border-[#9b1c1c] bg-[#fff2f2] px-5 py-4 font-sans text-sm leading-relaxed text-[#651313]">
                <strong className="mr-1">Editorial review.</strong>
                The original source record for this post is incomplete. It is excluded from search indexing until the source is verified.
              </aside>
            )}

            {editorial.archiveWarning && (
              <aside className="mb-8 border-l-4 border-[#b26a00] bg-[#fff8e8] px-5 py-4 font-sans text-sm leading-relaxed text-[#5f420e]">
                <strong className="mr-1">Archive context.</strong>
                {editorial.archiveWarning.replace(/^(Archive note|Archive context):\s*/i, "")}
              </aside>
            )}

            {isPressRelease && (
              <aside className="mb-8 border border-[#d9d4cc] bg-[#f7f5f1] px-5 py-4 font-sans text-sm leading-relaxed text-[#4c4a46]">
                <strong className="block text-[#15171b]">Reader disclosure</strong>
                This article is based on an organization or company announcement. Its claims have not been independently verified by PolicyNow.
              </aside>
            )}

            {isSyndicated && (
              <aside className="mb-8 border border-[#d9dde3] bg-[#f6f7f9] px-5 py-4 font-sans text-sm leading-relaxed text-[#4b515a]">
                <strong className="block text-[#15171b]">Sourced post</strong>
                This post is based on reporting from the organization identified in the source record. PolicyNow provides editorial review, context, and presentation; it does not claim to be the original reporting organization.
              </aside>
            )}

            {startsMidThought(article) && (
              <p className="mb-6 font-serif text-[19px] font-semibold leading-[1.7] text-[#22252a]">
                {article.description}
              </p>
            )}

            {(editorial.keyPoints || []).length > 0 && (
              <section className="mb-10 rounded-sm border border-[#d9dde3] bg-[#f5f7f9] p-6">
                <h2 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#22262c]">
                  Key points
                </h2>
                <ul className="mt-4 space-y-3 pl-5 font-sans text-[15px] leading-relaxed text-[#3f444c] marker:text-[#b3261e]">
                  {editorial.keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {contentBlocks.map((block, index) => (
              <StoryBlock block={block} key={index} />
            ))}
          </article>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="border-t-2 border-[#14181f] py-5 font-sans">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em]">Reporting &amp; sourcing</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555b64]">{source.note}</p>
              {source.url && (
                <a
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#8f211b] hover:underline"
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {sourceIdentified ? "View source record" : "Review source methodology"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {editorial.originalPublished && (
                <dl className="mt-5 border-t border-gray-200 pt-4 text-xs leading-relaxed text-[#666b73]">
                  <div>
                    <dt className="font-semibold text-[#292c31]">Source publication</dt>
                    <dd>{formatDate(editorial.originalPublished)}</dd>
                  </div>
                  {article.date && article.date !== editorial.originalPublished && (
                    <div className="mt-3">
                      <dt className="font-semibold text-[#292c31]">PolicyNow publication</dt>
                      <dd>{formatDate(article.date)}</dd>
                    </div>
                  )}
                </dl>
              )}
            </div>

            <div className="border-t border-gray-300 py-5 font-sans text-sm leading-relaxed text-[#555b64]">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#17191d]">
                Accountability
              </h2>
              <p className="mt-3">See an error or missing context?</p>
              <Link href="/corrections-policy" className="mt-2 inline-block font-semibold text-[#8f211b] hover:underline">
                Read our corrections policy
              </Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mx-auto max-w-6xl border-t border-gray-300 px-6 py-10">
            <h2 className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.14em]">More in {categoryName}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link href={`/${item.category}/${item.slug}`} key={item.id} className="group">
                  <img alt="" className="h-40 w-full object-cover" src={item.heroImage} />
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[#8f211b]">
                    {postTypeLabel(item.editorial?.type)}
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-bold leading-snug group-hover:underline">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
