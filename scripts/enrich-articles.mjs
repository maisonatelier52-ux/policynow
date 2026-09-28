import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const articlesPath = path.join(projectRoot, "data", "articles.json");
const reviewDate = "2026-09-25";
const googleNewsUrl = "https://news.google.com/rss/search?q=";
const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/125.0 Safari/537.36";

const manualOverrides = new Map([
  [
    1,
    {
      summary:
        "An Associated Press investigation found that U.S. administrations repeatedly allowed—and sometimes helped—American firms sell technology later used in China’s surveillance system.",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/21c5f961b1fd22f9a9e563ebe64e5582",
        published: "2025-10-29",
      },
    },
  ],
  [
    3,
    {
      summary:
        "State lawmakers’ first broad efforts to curb AI discrimination face competing pressure from industry groups and civil-rights advocates.",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/58eab95d279648e759f9099ca4249f00",
        published: "2024-04-18",
      },
    },
  ],
  [
    4,
    {
      summary:
        "Federal civil-rights agencies warned that AI tools used to screen applicants or monitor workers can violate disability-discrimination laws.",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/technology-discrimination-artificial-intelligence-e1bcf4a2e7f1b671cbf3a44bc99b3656",
        published: "2022-05-12",
      },
    },
  ],
  [
    10,
    {
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/aefac7cc9eb26d5cbf57c386a8f65839",
        published: "2025-10-27",
      },
    },
  ],
  [
    22,
    {
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/889dcaa219bf47db6daf8f0eb964b336",
        published: "2026-06-28",
      },
    },
  ],
  [
    30,
    {
      title: "White House adviser urges ‘discipline’ for Fed economists over tariff study",
      summary:
        "White House economic adviser Kevin Hassett called for discipline of New York Fed economists after a study found U.S. businesses and consumers bore most tariff costs.",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/2329928f9e19b73472fbdc8d961db8d4",
        published: "2026-02-18",
      },
    },
  ],
  [
    32,
    {
      title: "Higher gas prices hit lower-income Americans hardest, New York Fed study finds",
      summary:
        "A New York Fed study found lower-income households cut fuel use more sharply after prices rose, yet still spent more at the pump—widening economic disparities.",
    },
  ],
  [
    33,
    {
      title: "TED’s Audacious Project secures $1.03 billion for ambitious nonprofit initiatives",
      summary:
        "Thirty-five donor families pledged $1.03 billion through TED’s Audacious Project to fund more than a dozen long-term nonprofit initiatives.",
    },
  ],
  [
    57,
    {
      title: "Average U.S. long-term mortgage rate dips to 6.01%, lowest in more than three years",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/449e32375dcfa96e6d94ff0cb10df572",
        published: "2026-02-19",
      },
    },
  ],
  [
    81,
    {
      summary:
        "The European Union and Japan agreed to deepen cooperation on trade, economic security, innovation and defense amid pressure from the United States and China.",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/a3cc705bb4d088ebc3d6e1bc17bb42a7",
        published: "2025-07-23",
      },
    },
  ],
  [
    106,
    {
      summary:
        "States are beginning to regulate AI therapy apps, but a patchwork of new laws leaves significant gaps in user safety, oversight and accountability.",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/dfc5906b36fdd1fe8e8dbdb4970a45a7",
        published: "2025-09-29",
      },
    },
  ],
  [
    119,
    {
      title: "U.S. military strikes another alleged drug boat in Caribbean, killing 3",
      source: {
        name: "The Associated Press",
        url: "https://apnews.com/article/cadab97919b92939ad069a05b567c00c",
        published: "2026-02-14",
      },
    },
  ],
]);

const htmlEntities = new Map([
  ["amp", "&"],
  ["apos", "'"],
  ["#39", "'"],
  ["quot", '"'],
  ["ldquo", "“"],
  ["rdquo", "”"],
  ["lsquo", "‘"],
  ["rsquo", "’"],
  ["nbsp", " "],
  ["hellip", "…"],
]);

function decodeHtml(value = "") {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&([a-z]+|#\d+);/gi, (match, entity) => {
      if (htmlEntities.has(entity)) return htmlEntities.get(entity);
      if (entity.startsWith("#")) return String.fromCodePoint(Number(entity.slice(1)));
      return match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function blockText(block) {
  if (!block) return "";
  if (typeof block.text === "string") return block.text;
  return (block.runs || []).map((run) => run.text || "").join("");
}

function bodyText(article) {
  return (article.content || []).map(blockText).filter(Boolean).join(" ");
}

function normalizeCopy(article) {
  const repair = (value) =>
    typeof value === "string"
      ? value
          .replace(/Newyork-NORC/g, "AP-NORC")
          .replace(/anNewyork/g, "an Associated Press")
          .replace(/TheNewyork/g, "The Associated Press")
          .replace(/byNewyork/g, "by Associated Press")
          .replace(/Newyork/g, "Associated Press")
      : value;

  return {
    ...article,
    title: repair(article.title),
    description: repair(article.description),
    heroCaption: repair(article.heroCaption),
    content: (article.content || []).map((block) => ({
      ...block,
      text: repair(block.text),
      runs: (block.runs || []).map((run) => ({ ...run, text: repair(run.text) })),
    })),
  };
}

function stripDateline(value) {
  return value
    .replace(/^[A-Z][A-Z\s.,'’()-]{2,45}\s(?:\(AP\)\s*)?[—–-]\s*/, "")
    .replace(/^[A-Z][A-Za-z\s.,'’()-]{2,35}\s(?:\(AP\)\s*)?[—–-]\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sentences(value) {
  return stripDateline(value)
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z“"'])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function cleanSentence(value) {
  const cleaned = stripDateline(value)
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return "";
  return /[.!?…”]$/.test(cleaned) ? cleaned : `${cleaned}.`;
}

function truncateSentence(value, max = 220) {
  const cleaned = cleanSentence(value);
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, Math.max(lastSpace, 80)).replace(/[,:;\s]+$/, "")}…`;
}

function isWeakOpening(value) {
  return /^(and|but|however|still|yet|the result|he|she|they|it|this|that|these|those)\b/i.test(
    value.trim(),
  );
}

function isImageCaption(value) {
  return /^(file\b|photo\b)|\b(is shown|pictured|walks past|works on the floor|speaks at|poses for|stands outside)\b/i.test(
    value.trim(),
  );
}

function articleSentences(article) {
  return (article.content || [])
    .filter((block) => block.type !== "h2")
    .flatMap((block) => sentences(blockText(block)))
    .map(cleanSentence)
    .filter((sentence) => sentence.length >= 45 && sentence.length <= 320)
    .filter((sentence) => !/^[A-Z\s/&-]{8,}[.!?]?$/.test(sentence));
}

function summaryFor(article) {
  const content = articleSentences(article);
  const first = content[0] || "";
  const caption = cleanSentence(article.heroCaption || "");
  const oldDescription = cleanSentence(article.description || "");
  const titleKey = article.title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const descriptionKey = oldDescription.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const descriptionRepeatsTitle = titleKey === descriptionKey;

  if (first && !isWeakOpening(first) && !isImageCaption(first)) return truncateSentence(first);
  if (caption && !isWeakOpening(caption) && !isImageCaption(caption)) return truncateSentence(caption);
  const nextStrong = content.find(
    (sentence) => !isWeakOpening(sentence) && !isImageCaption(sentence),
  );
  if (nextStrong) return truncateSentence(nextStrong);
  if (oldDescription && !descriptionRepeatsTitle && !isWeakOpening(oldDescription)) {
    return truncateSentence(oldDescription);
  }
  return truncateSentence(first || oldDescription || article.title);
}

function keyPointsFor(article, summary) {
  const summaryKey = summary.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const candidates = articleSentences(article)
    .map((sentence, index) => {
      let score = Math.max(0, 5 - index * 0.15);
      if (/\b\d[\d,.]*%?|\$\d|\b(million|billion|trillion)\b/i.test(sentence)) score += 3;
      if (/\b(according to|said|officials?|court|report|study|data|statement)\b/i.test(sentence)) score += 2;
      if (/\b(will|would|could|may|expected|investigation|law|rule|vote)\b/i.test(sentence)) score += 1;
      if (/^[“"']/.test(sentence)) score -= 2;
      return { sentence: truncateSentence(sentence, 320), index, score };
    })
    .filter(({ sentence }) => {
      const key = sentence.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      return key !== summaryKey && !isWeakOpening(sentence);
    })
    .sort((a, b) => b.score - a.score || a.index - b.index);

  const selected = [];
  for (const candidate of candidates) {
    const key = candidate.sentence.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (
      selected.some((item) => {
        const existing = item.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        return existing.includes(key.slice(0, 60)) || key.includes(existing.slice(0, 60));
      })
    ) {
      continue;
    }
    selected.push(candidate.sentence);
    if (selected.length === 3) break;
  }

  return selected;
}

function xmlValue(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeHtml(match?.[1] || "");
}

function normalizedTitle(value) {
  return value
    .toLowerCase()
    .replace(/\b(u\.s\.|us)\b/g, "us")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function displaySourceName(value) {
  if (/^(ap news|ap\.org|associated press)$/i.test(value)) return "The Associated Press";
  return value;
}

async function findOriginalSource(title) {
  const query = encodeURIComponent(`"${title}"`);
  const suffix = "&hl=en-US&gl=US&ceid=US:en";
  const response = await fetch(`${googleNewsUrl}${query}${suffix}`, {
    headers: { "user-agent": userAgent },
  });
  if (!response.ok) throw new Error(`Search failed with ${response.status}`);
  const xml = await response.text();
  const wanted = normalizedTitle(title);
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => {
    const item = match[1];
    const sourceMatch = item.match(/<source(?:\s+url="([^"]+)")?>([\s\S]*?)<\/source>/i);
    const resultTitle = xmlValue(item, "title");
    const sourceName = displaySourceName(decodeHtml(sourceMatch?.[2] || ""));
    return {
      title: resultTitle,
      titleKey: normalizedTitle(
        sourceName && resultTitle.endsWith(` - ${sourceMatch?.[2]}`)
          ? resultTitle.slice(0, -(` - ${sourceMatch[2]}`.length))
          : resultTitle,
      ),
      link: xmlValue(item, "link"),
      sourceName,
      sourceHomepage: decodeHtml(sourceMatch?.[1] || ""),
      published: xmlValue(item, "pubDate"),
    };
  });

  const exact = items.filter(
    (item) => item.titleKey === wanted || item.titleKey.includes(wanted) || wanted.includes(item.titleKey),
  );
  const preferred = exact.find((item) => item.sourceName === "The Associated Press") || exact[0] || null;
  if (!preferred) return null;

  const parsedDate = new Date(preferred.published);
  return {
    name: preferred.sourceName || "Original source",
    url: preferred.link || preferred.sourceHomepage || null,
    homepage: preferred.sourceHomepage || null,
    published:
      Number.isNaN(parsedDate.getTime()) ? null : parsedDate.toISOString().slice(0, 10),
  };
}

async function mapWithConcurrency(items, limit, callback) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await callback(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function editorialType(article, source) {
  if (article.special) return "Feature";
  if (article.category === "featured-pr") return "Press release";
  if (source) return "Syndicated report";
  return "News report";
}

function sourceDetails(article, originalSource) {
  if (article.special) {
    return {
      name: "PolicyNow",
      url: "https://www.policynow.org/",
      note: "Reported and edited by PolicyNow.",
    };
  }

  if (article.category === "featured-pr") {
    return {
      name: originalSource?.name || "Issuer announcement",
      url: originalSource?.url || originalSource?.homepage || null,
      note: "This article is based on an organization or company announcement. Its claims are not presented as independently verified reporting.",
    };
  }

  if (originalSource) {
    return {
      name: originalSource.name,
      url: originalSource.url || originalSource.homepage,
      note:
        originalSource.name === "The Associated Press" || originalSource.name === "Reuters"
          ? `Original reporting by ${originalSource.name}. PolicyNow edited and presented this report for its readers.`
          : `Source record: ${originalSource.name}. PolicyNow edited and presented this report for its readers.`,
    };
  }

  return {
    name: "Source not identified",
    url: "https://www.policynow.org/source-methodology",
    note: "PolicyNow could not verify a primary source record for this version. Check important claims against the named officials, documents and public statements in the text.",
  };
}

const articles = JSON.parse(await readFile(articlesPath, "utf8"));
const searchable = articles.filter((article) => !article.special);

const sourceResults = await mapWithConcurrency(searchable, 4, async (article, index) => {
  try {
    const source = await findOriginalSource(article.title);
    process.stdout.write(
      `[${index + 1}/${searchable.length}] ${source?.name || "--"} ${article.title}\n`,
    );
    return [article.id, source];
  } catch (error) {
    process.stdout.write(`[${index + 1}/${searchable.length}] error ${article.title}\n`);
    return [article.id, null];
  }
});

const sourceById = new Map(sourceResults);
const enriched = articles.map((article) => {
  const override = manualOverrides.get(article.id) || {};
  const revisedArticle = normalizeCopy({
    ...article,
    categoryLabel: article.category === "featured-pr" ? "Press Releases" : article.categoryLabel,
    ...(override.title ? { title: override.title } : {}),
  });
  const originalSource = override.source || sourceById.get(article.id) || null;
  const summary = override.summary || summaryFor(revisedArticle);
  const wordCount = bodyText(revisedArticle).match(/\b[\w’'-]+\b/g)?.length || 0;
  const originalPublished = originalSource?.published || null;
  const publicationDateMismatch =
    originalPublished && article.date && originalPublished !== article.date;
  const archiveWarning =
    !article.date || publicationDateMismatch
      ? `Archive note: This story was republished from source reporting originally dated ${
          originalPublished || "earlier"
        }. Relative references such as “today” or “this year” belong to the source story’s original time frame.`
      : null;

  return {
    ...revisedArticle,
    description: summary,
    editorial: {
      type: editorialType(revisedArticle, originalSource),
      reviewed: reviewDate,
      originalPublished,
      readTimeMinutes: Math.max(1, Math.ceil(wordCount / 220)),
      keyPoints: keyPointsFor(revisedArticle, summary),
      archiveWarning,
      source: sourceDetails(revisedArticle, originalSource),
    },
  };
});

await writeFile(articlesPath, `${JSON.stringify(enriched, null, 2)}\n`, "utf8");

const found = enriched.filter((article) => article.editorial.type === "Syndicated report").length;
const pressReleases = enriched.filter((article) => article.editorial.type === "Press release").length;
console.log(`Updated ${enriched.length} articles: ${found} sourced reports, ${pressReleases} press releases.`);
