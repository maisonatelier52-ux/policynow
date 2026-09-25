import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "../../../data/articles";
import authors from "../../../data/authors";
import ClientNewsArticle from "../../../components/ClientNewsArticle";

const SPECIAL_SLUG = "julio-herrera-velutini-pope-leo-xiv-castelgandolfo";
const SITE_URL = "https://www.policynow.org";
const SITE_NAME = "PolicyNow";
const SITE_LOGO = `${SITE_URL}/image/policynow-logo.png`;
const TWITTER_HANDLE = "@policynow";

const absImage = (img) => (!img ? SITE_LOGO : img.startsWith("http") ? img : `${SITE_URL}${img}`);

export function generateStaticParams() {
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = articles.find((a) => a.slug === slug && (a.category === category || slug === SPECIAL_SLUG));
  if (!article) return {};

  const url = `${SITE_URL}/${article.category}/${article.slug}`;
  const image = absImage(article.heroImage);
  const publishedIso = new Date(article.date).toISOString();
  const authorInfo = authors.find((p) => p.name === article.author);

  return {
    title: article.title,
    description: article.description,
    keywords: `${article.categoryLabel} news, ${SITE_NAME}`,
    authors: [{ name: article.author }],
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
      modifiedTime: publishedIso,
      authors: [article.author],
      section: article.categoryLabel,
      tags: [article.categoryLabel],
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
      index: true,
      follow: true,
      googleBot: {
        index: true,
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
    <p className="mb-6 text-base leading-[30px]">
      {block.runs.map((run, i) =>
        run.break ? (
          <br key={i} />
        ) : run.bold ? (
          <strong key={i}>{run.text}</strong>
        ) : (
          <span key={i}>{run.text}</span>
        )
      )}
    </p>
  );
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  if (slug === SPECIAL_SLUG) {
    const article = articles.find((a) => a.slug === SPECIAL_SLUG);
    if (!article) notFound();
    return <ClientNewsArticle article={article} />;
  }

  const article = articles.find((a) => a.category === category && a.slug === slug && !a.special);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.category === category && a.slug !== slug && !a.special)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
    .slice(0, 5);

  const shareUrl = `https://www.policynow.org/${article.category}/${article.slug}`;
  const authorInfo = authors.find((p) => p.name === article.author);
  const authorImage = authorInfo ? authorInfo.image : "/image/policynow-logo.png";
  const publishedIso = new Date(article.date).toISOString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${shareUrl}#article`,
    headline: article.title,
    description: article.description,
    image: [absImage(article.heroImage)],
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${SITE_URL}/author`,
      image: absImage(authorImage),
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": shareUrl },
    articleSection: article.categoryLabel,
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
        name: article.categoryLabel,
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
      <div>
      <section className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-3 text-xs font-semibold">
          <Link href={`/${article.category}`} title={article.categoryLabel} className="text-black hover:underline">
            {article.categoryLabel}
          </Link>
        </div>
        <div className="flex items-center text-sm font-bold text-[#d00]">
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#d00]" />
          <p className="m-0">
            <span className="mx-1.5 rounded bg-[#d00] px-1.5 py-0.5 font-sans text-[10px] font-bold text-white">
              LIVE
            </span>
            {article.liveTime || "Just now"}
          </p>
        </div>
        <h1 className="my-4 font-sans text-3xl font-semibold leading-tight sm:text-[39px]">{article.title}</h1>
        {article.heroCaption && <p className="mb-6 text-base leading-[30px]">{article.heroCaption}</p>}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img alt={article.author} className="h-[45px] w-[45px] rounded-full object-cover" src={authorImage} />
            <div className="font-sans text-[11px] leading-snug text-[#505050]">
              <Link href="/author" title={article.author} className="block text-black">
                {article.author}
              </Link>
              <span>{article.dateDisplay}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black transition hover:bg-gray-100"
                href={`https://www.facebook.com/sharer/sharer?u=${shareUrl}`}
                target="_blank"
                rel="noreferrer"
                title="facebook"
              >
                <img alt="facebook" className="h-4 w-4" src="/image/facebook.png" />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black transition hover:bg-gray-100"
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noreferrer"
                title="twitter"
              >
                <img alt="twitter" className="h-4 w-4" src="/image/twitter.png" />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black transition hover:bg-gray-100"
                href="https://substack.com/@policynow01"
                title="substack"
              >
                <img alt="substack" className="h-4 w-4" src="/image/reddit.png" />
              </a>
              <a
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-black transition hover:bg-gray-100"
                href={`https://medium.com/new-story?source=${shareUrl}&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noreferrer"
                title="medium"
              >
                <img alt="medium" className="h-4 w-4" src="/image/medium.webp" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <img alt={article.title} className="h-[340px] w-full object-cover sm:h-[550px]" src={article.heroImage} />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        {article.content.map((block, i) =>
          block.type === "h2" ? (
            <h2 key={i} className="mb-4 mt-10 font-sans text-2xl font-semibold">
              {block.text}
            </h2>
          ) : (
            <Paragraph key={i} block={block} />
          )
        )}
      </div>

      {related.length > 0 && (
        <section className="mx-6 py-8 lg:mx-12">
          <h2 className="mb-5 border-t border-black pt-3 font-sans text-sm font-semibold uppercase">Related News</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {related.map((a) => (
              <Link
                className="block border-gray-300 pr-2 text-black last:border-r-0 lg:border-r"
                href={`/${a.category}/${a.slug}`}
                title="more"
                key={a.id}
              >
                <div>
                  <img alt={a.title} className="h-[150px] w-full object-cover" src={a.heroImage} />
                </div>
                <h3 className="my-2.5 font-sans text-sm font-semibold leading-tight text-[#161616]">{a.title}</h3>
                <p className="font-sans text-[10px] text-gray-500">{a.dateDisplay}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
    </>
  );
}
