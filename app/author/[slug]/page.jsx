import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import authors from "../../../public/data/authors.json";
import articleData from "../../../public/data/articles.json";

const SITE_URL = "https://www.policynow.org";
const SITE_NAME = "PolicyNow";
const allArticles = Object.entries(articleData).flatMap(([category, posts]) => posts.map((post) => ({ ...post, category })));
const findAuthor = (slug) => authors.find((author) => author.slug === slug);

export async function generateStaticParams() { return authors.map((author) => ({ slug: author.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = findAuthor(slug);
  if (!author) return { title: `Author Not Found | ${SITE_NAME}` };
  return { title: `${author.name} | ${SITE_NAME}`, description: `Articles and reporting by ${author.name} at ${SITE_NAME}.`, alternates: { canonical: `${SITE_URL}/author/${slug}` } };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = findAuthor(slug);
  if (!author) notFound();
  const articles = allArticles.filter((article) => article.author?.slug === author.slug).slice(0, 20);

  return (
    <main className="author-page">
      <div className="main-container">
        <nav aria-label="Breadcrumb" className="article-breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/author">Authors</Link><span>›</span><span>{author.name}</span>
        </nav>
        <section className="author-profile-page">
          <div className="author-profile-card">
            <div className="author-profile-image"><Image src={author.profileImage} alt={author.name} width={180} height={180} priority /></div>
            <div className="author-profile-content">
              <p className="author-profile-kicker">PolicyNow Author</p>
              <h1 className="author-profile-title">{author.name}</h1>
              <p className="author-profile-count">{articles.length} published articles</p>
            </div>
          </div>
          <section className="author-articles">
            <h2>Latest Articles by {author.name}</h2>
            <div className="author-article-grid">
              {articles.map((article) => (
                <Link key={article.slug} href={`/${article.category}/${article.slug}`} className="author-article-card">
                  <div className="author-article-image"><Image src={article.image} alt={article.imageAlt || article.title} width={500} height={300} /></div>
                  <div className="author-article-copy">
                    <span>{article.categoryLabel}</span><h3>{article.title}</h3><p>{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
