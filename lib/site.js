export const SITE_NAME = "PolicyNow";
export const SITE_URL = "https://www.policynow.org";
export const SITE_TITLE = "PolicyNow | Policy, Context & Commentary";
export const SITE_DESCRIPTION =
  "An independent policy and current-affairs blog publishing analysis, explainers, commentary, and clearly labeled sourced posts.";
export const TWITTER_HANDLE = "@PolicynowO41566";

export const CATEGORY_LABELS = {
  us: "U.S. & Policy",
  "politics-and-policy": "Politics & Governance",
  "business-and-economy": "Business & Economy",
  "global-affairs": "Global Affairs",
  "technology-and-innovation": "Technology",
  "finance-and-markets": "Finance & Markets",
  "featured-pr": "Partner & Press Releases",
};

export const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS);

export function categoryLabel(category, fallback = "Current Affairs") {
  return CATEGORY_LABELS[category] || fallback;
}

export function contributorPath(name, authors = []) {
  const author = authors.find((person) => person.name === name);
  return author ? `/author/${author.id}` : "/author";
}

export function postTypeLabel(type) {
  if (type === "Feature") return "Feature essay";
  if (type === "News report") return "Current-affairs post";
  return type || "Blog post";
}
