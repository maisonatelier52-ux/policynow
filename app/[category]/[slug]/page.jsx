import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import articleData from "../../../public/data/articles.json";

const SITE_URL = "https://www.policynow.org";
const SITE_NAME = "PolicyNow";
const SITE_LOGO = `${SITE_URL}/images/policynow-logo.png`;

const parseDate = (value) => {
  if (!value) return new Date(0);
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
};

const formatDate = (value) => {
  const d = parseDate(value);
  return d.getTime() ? d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : value;
};

const allArticles = Object.entries(articleData).flatMap(([category, posts]) =>
  posts.map((post) => ({ ...post, category }))
);

const findArticle = (category, slug) =>
  (articleData[category] || []).find((post) => post.slug === slug);

export async function generateStaticParams() {
  return allArticles.map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = findArticle(category.toLowerCase(), slug);
  if (!article) return { title: `Article Not Found | ${SITE_NAME}` };
  const title = article.metaTitle || article.title;
  const description = article.metaDescription || article.excerpt || article.title;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${category}/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${category}/${slug}`,
      siteName: SITE_NAME,
      type: "article",
      images: [{ url: `${SITE_URL}${article.image}`, alt: article.imageAlt || article.title }],
    },
  };
}

function renderContent(item, index) {
  switch (item.type) {
    case "paragraph":
      return <p key={index} className="content-para">{item.text}</p>;
    case "heading": {
      const Tag = `h${item.level}`;
      return <Tag key={index} className="content-heading">{item.text}</Tag>;
    }
    case "quote":
      return <blockquote key={index} className="content-quote">{item.text}</blockquote>;
    case "image":
      return (
        <div key={index} className="img-section">
          <Image src={item.src} alt={item.alt || "PolicyNow article image"} width={1200} height={675} className="article-body-image" />
        </div>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;
  const categoryKey = category.toLowerCase();
  const article = findArticle(categoryKey, slug);
  if (!article) notFound();

  const categoryPosts = [...(articleData[categoryKey] || [])];
  const currentIndex = categoryPosts.findIndex((post) => post.slug === slug);
  const previous = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const related = categoryPosts.filter((post) => post.slug !== slug).slice(0, 5);

  const author = article.author || { name: "PolicyNow Editorial Team", profileImage: "" };
  const encodedUrl = encodeURIComponent(`${SITE_URL}/${categoryKey}/${slug}`);
  const encodedTitle = encodeURIComponent(article.title);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [`${SITE_URL}${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: author.name, url: `${SITE_URL}/author/${author.slug}` },
    publisher: { "@type": "NewsMediaOrganization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: SITE_LOGO } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${categoryKey}/${slug}` },
    articleSection: article.categoryLabel,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="progress-track">
        <div className="progress-fill" id="progressFill" />
      </div>

      <div className="main-container">
        <nav aria-label="Breadcrumb" className="article-breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href={`/${categoryKey}`}>{article.categoryLabel}</Link><span>›</span>
          <span>{article.title}</span>
        </nav>

        <div className="main">
          <section className="highlight-news">
            <div className="highlight-category">
              <Link href={`/${categoryKey}`} title={article.categoryLabel}>{article.categoryLabel}</Link>
            </div>

            <div className="live-sect">
              <span className="live-status"><span className="dot" /></span>
              <p><span className="live-badge">LIVE</span> {article.timeLabel || formatDate(article.date)}</p>
            </div>

            <h1 className="highlight-title">{article.title}</h1>
            <p className="content-para">{article.excerpt}</p>

            <div className="highlight-footer">
              <div className="author-blocks">
                <div className="author-card">
                  {author.profileImage && <Image alt={author.name} src={author.profileImage} width={48} height={48} />}
                  <div className="author-info">
                    <Link href={`/author/${author.slug}`} title={author.name}>{author.name}</Link>
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </div>

              <div className="share-block">
                <div className="share-icons">
                  {author.social?.instagram && <a className="social-icon" href={author.social.instagram} title="instagram"><img alt="instagram" src="/images/instagram.webp" width="16" height="16" /></a>}
                  {author.social?.twitter && <a className="social-icon" href={author.social.twitter} title="twitter"><img alt="twitter" src="/images/twitter.png" width="16" height="16" /></a>}
                  {author.social?.substack && <a className="social-icon" href={author.social.substack} title="substack"><img alt="substack" src="/images/substack.webp" width="16" height="16" /></a>}
                  {author.social?.medium && <a className="social-icon" href={author.social.medium} title="medium"><img alt="medium" src="/images/medium.webp" width="16" height="16" /></a>}
                </div>
                <div className="share-single">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} title="Share on Facebook" aria-label={`Share ${article.title} on Facebook`}>Share</a>
                </div>
              </div>
            </div>
          </section>

          <div className="img-section">
            <Image src={article.image} alt={article.imageAlt || article.title} width={1200} height={675} className="article-body-image" priority />
          </div>

          <div className="second-sec">
            {article.content.map(renderContent)}
          </div>

          <div className="article-navigation">
            {previous ? <Link href={`/${categoryKey}/${previous.slug}`}>← {previous.title}</Link> : <span />}
            {next ? <Link href={`/${categoryKey}/${next.slug}`}>{next.title} →</Link> : <span />}
          </div>

          <section className="latest-blog-wrapper">
            <h2 className="latest-blog-title">LATEST NEWS</h2>
            <div className="latest-blog-grid">
              {related.map((post) => (
                <Link key={post.slug} className="blog-card" href={`/${categoryKey}/${post.slug}`} title={post.title}>
                  <div className="blog-thumb"><Image src={post.image} alt={post.imageAlt || post.title} width={400} height={240} /></div>
                  <h3 className="blog-heading">{post.title}</h3>
                  <p className="blog-author">{formatDate(post.date)}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

    </>
  );
}
