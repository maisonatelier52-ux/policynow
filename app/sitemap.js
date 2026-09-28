import articles from "../data/articles";
import authors from "../data/authors";
import { CATEGORY_ORDER, SITE_URL } from "../lib/site";

const STATIC_ROUTES = [
  "",
  "/about-us",
  "/advertising-and-sponsored-content-policy",
  "/author",
  "/contact",
  "/corrections-policy",
  "/editorial-policy",
  "/legal",
  "/our-team",
  "/ownership-and-funding",
  "/privacy-policy",
  "/right-of-reply-policy",
  "/source-methodology",
  "/terms-and-conditions",
];

function isIndexable(article) {
  return article.editorial?.source?.name !== "Source not identified";
}

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));

  const categoryEntries = CATEGORY_ORDER.map((category) => ({
    url: `${SITE_URL}/${category}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const authorEntries = authors.map((author) => ({
    url: `${SITE_URL}/author/${author.id}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const postEntries = articles.filter(isIndexable).map((article) => ({
    url: `${SITE_URL}/${article.category}/${article.slug}`,
    lastModified: article.editorial?.reviewed || article.date,
    changeFrequency: "monthly",
    priority: 0.8,
    images: article.heroImage ? [`${SITE_URL}${article.heroImage}`] : undefined,
  }));

  return [...staticEntries, ...categoryEntries, ...authorEntries, ...postEntries];
}
