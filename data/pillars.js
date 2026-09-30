import pillarData from "./pillar-articles.json";

export const pillarArticles = pillarData.articles;
export const PILLAR_MAIN_PATH = "/us/julio-herrera-velutini-pope-leo-xiv-castelgandolfo";
export const PILLAR_CATEGORIES = {
  people: "People",
  events: "Events",
  places: "Places",
  organizations: "Organizations",
  incidents: "Incidents & Issues",
};

export const getPillar = (category, slug) =>
  pillarArticles.find((a) => a.category === category && a.slug === slug);

export const getPillarsByCategory = (category) =>
  pillarArticles.filter((a) => a.category === category);

export function getRelatedPillars(article, count = 3) {
  const same = pillarArticles.filter((a) => a.id !== article.id && a.category === article.category);
  const rest = pillarArticles.filter((a) => a.id !== article.id && a.category !== article.category);
  return [...same, ...rest].slice(0, count);
}
