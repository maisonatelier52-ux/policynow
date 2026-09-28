import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const articlesPath = path.join(projectRoot, "data", "articles.json");

const categoryLabels = {
  us: "U.S. & Policy",
  "politics-and-policy": "Politics & Governance",
  "business-and-economy": "Business & Economy",
  "global-affairs": "Global Affairs",
  "technology-and-innovation": "Technology",
  "finance-and-markets": "Finance & Markets",
  "featured-pr": "Partner & Press Releases",
};

const titleOverrides = new Map([
  [8, "China’s passenger-car exports rise 80% in June as EV demand grows and domestic sales fall"],
  [13, "SpaceX files initial paperwork for public share sale"],
  [17, "Global shares rise as Asian markets close for Lunar New Year holidays"],
  [23, "Fed official says weak jobs data support three rate cuts"],
  [35, "NASA targets March for first Artemis crewed moon mission after successful fueling test"],
  [39, "Trump Media reports $238 million quarterly loss and outlines turnaround"],
  [42, "Marguerite Casey Foundation increases annual giving to $50 million"],
  [44, "Most U.S. stocks rise after another volatile session"],
  [46, "Twelve states challenge Paramount’s $81 billion Warner takeover"],
  [56, "Berkshire Hathaway triples Alphabet stake and adds Delta and Macy’s under new CEO"],
  [66, "Treasury recommends further study of a digital dollar"],
  [75, "IBM commits to net-zero greenhouse-gas emissions by 2030"],
  [82, "U.S. consumers rethink spending as higher fuel prices squeeze budgets"],
  [95, "Ocasio-Cortez says she’s freezing her eggs as she weighs her political future"],
  [113, "Rep. Kevin Hern wins Oklahoma GOP nomination for U.S. Senate; governor’s race heads to runoff"],
  [116, "Pentagon and Scouting America preserve ties after anti-DEI agreement"],
  [117, "No clear path to end partial government shutdown over DHS funding"],
]);

const descriptionOverrides = new Map([
  [2, "Congress is weighing age limits, privacy protections, antitrust measures and AI oversight as lawmakers revisit the rules governing major technology platforms."],
  [6, "OpenAI CEO Sam Altman told senators that advanced AI systems may require licensing and oversight by a U.S. or international regulator."],
  [9, "The U.S. military said it struck missile launch sites and mine-laying vessels in southern Iran, describing the attacks as self-defense during an ongoing ceasefire."],
  [13, "SpaceX submitted confidential paperwork for an initial public offering, according to people familiar with the filing, opening a potential route to a major technology listing."],
  [14, "Senate Republicans are seeking details about a $1.776 billion settlement fund after the Justice Department agreed to pause payments under a court order."],
  [17, "European and Asian markets advanced in holiday-thinned trading after Japan reported a roughly 17% year-over-year increase in January exports."],
  [18, "The Trump administration opened a new trade investigation intended to establish a replacement legal basis for tariffs invalidated by the Supreme Court."],
  [24, "PayPal’s core branded-checkout business is growing slowly as digital wallets and rival payment providers compete for merchants and consumers."],
  [25, "Secretary of State Marco Rubio denied Volodymyr Zelenskyy’s claim that Washington asked Ukraine to cede the Donbas in exchange for U.S. security guarantees."],
  [27, "Federal Reserve officials faced conflicting signals on hiring, inflation and political pressure as they considered whether to reduce interest rates."],
  [37, "Even if a tentative agreement reopens the Strait of Hormuz, shipping, storage and production constraints could delay a full oil-market recovery for weeks or months."],
  [39, "Trump Media reported a $238 million quarterly loss and said it would refocus its strategy as it evaluates businesses beyond its Truth Social platform."],
  [42, "The Marguerite Casey Foundation plans to raise annual giving to $50 million and distribute at least $500 million over the next decade."],
  [43, "The United States, Canada and Mexico opened a contentious review of their trade agreement, with Washington signaling it was not prepared to renew the pact unchanged."],
  [46, "Twelve states sued to block Paramount’s $81 billion acquisition of Warner Bros., arguing the merger would reduce competition in film, television and streaming."],
  [49, "Tourism-dependent small businesses reported a strong summer as more Americans chose domestic road trips and shorter regional vacations over overseas travel."],
  [52, "Anthropic and OpenAI used competing Super Bowl ads to court users as pressure mounts to turn their costly AI services into sustainable businesses."],
  [56, "Berkshire Hathaway more than tripled its Alphabet stake and added investments in Delta Air Lines and Macy’s during Greg Abel’s first months as chief executive."],
  [58, "Global shares advanced and oil prices eased as investors grew more hopeful that negotiations could bring the Iran war closer to an end."],
  [66, "The Treasury recommended further study of a U.S. central bank digital currency while emphasizing a continuing role for commercial banks."],
  [69, "The Senate passed cryptocurrency legislation 68–30 and sent it to the House without adding restrictions related to President Trump’s digital-asset holdings."],
  [75, "IBM said it would reach net-zero greenhouse-gas emissions by 2030 through operational reductions, energy efficiency and increased use of clean energy."],
  [76, "Governors and federal officials launched an initiative to quadruple installations of high-efficiency heat pumps by 2030."],
  [79, "The European Union approved retaliatory tariffs on $23 billion of U.S. goods, with phased implementation beginning in April."],
  [82, "Higher fuel prices have not stopped U.S. consumer spending, but retailers say shoppers are buying fewer discretionary items and changing where they shop."],
  [85, "President Trump contrasted his confidence in managing the Iran war with the difficulty of setting national rules for college-athlete compensation."],
  [86, "House Republicans inserted a 10-year moratorium on state AI regulation into a sweeping bill, advancing an industry goal of uniform national rules."],
  [87, "The United States marked its 250th anniversary with nationwide celebrations shaped by extreme heat, security concerns and political division."],
  [90, "Vice President JD Vance announced a temporary pause in some Medicaid payments to Minnesota while the administration reviews alleged fraud."],
  [92, "Billionaire Leon Black was set to testify before the House Oversight Committee about $158 million in payments to Jeffrey Epstein between 2012 and 2017."],
  [93, "Several Gulf allies say the United States gave them too little warning or defensive support before Iranian missile and drone attacks."],
  [94, "The Supreme Court allowed Alabama to use a Republican-favoring congressional map for this year’s elections while litigation over the plan continues."],
  [96, "The White House said China agreed to increase purchases of U.S. beef, poultry and other agricultural products after the Trump–Xi summit."],
  [99, "Democratic leaders rejected a White House proposal on immigration-enforcement oversight as Congress approached another Homeland Security funding deadline."],
  [104, "AIPAC’s spending in an Illinois Democratic primary is testing the group’s electoral influence amid growing party divisions over U.S. support for Israel."],
  [108, "White House border czar Tom Homan said more than 1,000 federal immigration agents had left the Twin Cities and that a smaller force would remain."],
  [112, "High-level U.S.–Iran negotiations in Switzerland ended with technical talks scheduled to continue despite renewed threats from President Trump."],
  [113, "Rep. Kevin Hern won Oklahoma’s Republican U.S. Senate nomination outright, while the party’s gubernatorial contest advanced to a runoff."],
  [114, "A federal judge ruled that adding President Trump’s name to the Kennedy Center was unlawful and blocked the administration’s planned closure for renovations."],
  [116, "The Pentagon and Scouting America reached an agreement preserving their longstanding relationship while changing the group’s diversity and gender policies."],
  [118, "Competing conservative groups are using America’s 250th anniversary to promote different visions of history, with President Trump as the party’s central figure."],
  [120, "President Trump plans to take themes from his State of the Union address to campaign events as Republicans sharpen their midterm message."],
]);

const keyPointOverrides = new Map([
  [19, [
    "Amazon Web Services said drone strikes directly hit two data centers in the United Arab Emirates and affected another site in Bahrain.",
    "AWS reported structural damage, interrupted power and water damage from fire-suppression systems at the affected facilities.",
    "The company said recovery work was progressing by Tuesday; cloud-infrastructure specialists noted that AWS designs its network to withstand the loss of a single data center.",
  ]],
  [28, [
    "A federal trade court ruled that companies that paid tariffs later invalidated by the Supreme Court are entitled to refunds.",
    "The Penn Wharton Budget Model estimates that the government collected nearly $130 billion under the invalidated tariffs and could owe about $175 billion in refunds.",
    "The Supreme Court did not establish a refund process, leaving the trade court to handle claims while the administration considers its next steps.",
  ]],
  [29, [
    "U.S. employers added 57,000 jobs in June, less than half the previous month’s increase.",
    "The unemployment rate fell to 4.2%, largely because some people stopped looking for work and were no longer counted as unemployed.",
    "Restaurants, bars and hotels lost 61,000 jobs despite expectations that the World Cup would provide a temporary hiring boost.",
  ]],
  [46, [
    "Twelve states sued to stop Paramount’s $81 billion acquisition of Warner Bros. Discovery on competition grounds.",
    "The complaint argues that combining two major studios would harm consumers, movie theaters and cable distributors.",
    "Paramount disputes the states’ antitrust case and says it will vigorously defend the transaction.",
  ]],
  [82, [
    "Retailers report that consumers are still spending but are making fewer discretionary purchases as fuel costs rise.",
    "Walmart finance chief John David Rainey said Sam’s Club members and Walmart customers were buying fewer than 10 gallons per fuel stop on average for the first time since 2022.",
    "A trade-group analysis found pump transactions at 130 convenience-store operators fell about 10% in March and April from a year earlier.",
  ]],
  [85, [
    "President Trump convened college-sports leaders to discuss athlete compensation, transfer rules and the financial pressure on lower-profile programs.",
    "Trump described the Iran conflict as easier to manage than college-sports policy before acknowledging the comparison was unusual.",
    "Trump argued that high-revenue programs such as football are squeezing women’s sports and other lower-profile teams.",
  ]],
  [88, [
    "Section 702 was set to expire after Congress failed to agree on a temporary extension before its recess.",
    "A March court ruling allowed existing surveillance authorizations to remain in effect for another year, limiting the immediate operational impact.",
    "The program lets U.S. intelligence agencies collect communications from foreign targets outside the country without obtaining an individual warrant first.",
  ]],
  [115, [
    "Democratic candidates are being pressed to explain positions they took during the 2020 debate over defunding police departments.",
    "Party officials worry that past rhetoric on policing could weaken the Democrats’ public-safety message in competitive midterm races.",
    "Democratic strategist Antjuan Seawright said the 2020 debate cost the party seats and distracted from its broader policy case.",
  ]],
  [116, [
    "The Pentagon and Scouting America reached an agreement that preserves their century-old institutional relationship.",
    "Scouting America said transgender young people remain welcome and that the agreement does not change its current membership policy.",
    "The negotiated changes include revisions to merit badges, registration-fee support for military families and rules for shared facilities.",
  ]],
]);

function cleanText(value) {
  if (typeof value !== "string") return value;
  return value
    .replace(/\bJunly\b/g, "July")
    .replace(/\bAug\.\./g, "Aug.")
    .replace(/gamesSaturday/g, "games Saturday")
    .replace(/\bU\.S\.\.(?=\s|$)/g, "U.S.")
    .replace(/—-/g, "—")
    .replace(/—(?=\S)/g, "— ")
    .replace(/\s--\s/g, " — ")
    .replace(/([.!?])(?=[“\"][A-Z])/g, "$1 ")
    .replace(/([a-z”’])([.!?])(?=[A-Z][a-z])/g, "$1$2 ")
    .replace(/([.!?])(?=(?:The|This|That|These|Those|He|She|They|It|According|Meanwhile)\b)/g, "$1 ")
    .replace(/less choices/g, "fewer choices")
    .replace(
      "workers themselves to do any moves. She pointed",
      "workers themselves to make any moves.” She pointed",
    )
    .replace(
      /will “vigorously defend” the transaction\.(?!”)/g,
      "will “vigorously defend” the transaction.”",
    )
    .replace("overseas communications It’s part", "overseas communications. It’s part")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function cleanTitle(value) {
  return cleanText(value)
    .replace(/\bUS\b/g, "U.S.")
    .replace(/\bU\.S\.\./g, "U.S.");
}

function stripDateline(value) {
  return value
    .replace(
      /^(?:[A-Z]{2,}(?:\s+[A-Z]{2,})*,[^—–\n]{1,55}|[A-Z]{2,}(?:\s+[A-Z]{2,})?\s+\(AP\))\s*[—–]\s*/,
      "",
    )
    .trim();
}

function blockText(block) {
  if (typeof block?.text === "string") return block.text;
  return (block?.runs || []).map((run) => run.text || "").join("");
}

function cleanContent(content = []) {
  const revised = content
    .map((block) => ({
      ...block,
      ...(typeof block.text === "string" ? { text: cleanText(block.text) } : {}),
      runs: (block.runs || []).map((run) => ({ ...run, text: cleanText(run.text) })),
    }))
    .filter((block) => !/^_+$/.test(blockText(block).trim()));

  const firstParagraph = revised.findIndex((block) => block.type === "p" && blockText(block).trim());
  if (firstParagraph >= 0) {
    const block = revised[firstParagraph];
    if (typeof block.text === "string") {
      block.text = stripDateline(block.text);
    } else if (block.runs?.length) {
      const fullText = blockText(block);
      const stripped = stripDateline(fullText);
      if (stripped !== fullText) block.runs = [{ text: stripped, bold: false }];
    }
  }
  return revised;
}

function sourceNote(article, source) {
  if (article.special) return "Original PolicyNow feature, written and edited for this publication.";
  if (article.editorial?.type === "Press release") {
    return "Source-issued announcement. PolicyNow has edited it for clarity and does not present its claims as independently verified analysis.";
  }
  if (source?.name === "Source not identified") {
    return "The primary source record for this post remains incomplete. The post is under editorial review and excluded from search indexing.";
  }
  return `Source reporting by ${source?.name || "the organization identified in this record"}. PolicyNow reviewed, contextualized and presented this sourced post.`;
}

function displayDate(date) {
  if (!date) return "";
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

const articles = JSON.parse(await readFile(articlesPath, "utf8"));

const revised = articles.map((article) => {
  const { liveTime: _liveTime, ...withoutLiveTime } = article;
  const title = titleOverrides.get(article.id) || cleanTitle(article.title);
  const description = cleanText(descriptionOverrides.get(article.id) || article.description);
  const source = article.editorial?.source || {};
  const archiveWarning = article.editorial?.archiveWarning
    ? article.editorial.archiveWarning
        .replace(/^Archive note:\s*/i, "Archive context: ")
        .replace("This story was republished from source reporting", "This post draws on source material")
        .replace("belong to the source story’s original time frame", "refer to the source material’s original time frame")
    : null;

  return {
    ...withoutLiveTime,
    title,
    description,
    heroCaption: cleanText(article.heroCaption),
    categoryLabel: categoryLabels[article.category] || article.categoryLabel,
    dateDisplay: displayDate(article.date),
    content: cleanContent(article.content),
    editorial: {
      ...article.editorial,
      keyPoints: (keyPointOverrides.get(article.id) || article.editorial?.keyPoints || []).map(cleanText),
      archiveWarning,
      source: { ...source, note: sourceNote(article, source) },
    },
  };
});

await writeFile(articlesPath, `${JSON.stringify(revised, null, 2)}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      revised: revised.length,
      manualDescriptions: descriptionOverrides.size,
      manualTitles: titleOverrides.size,
      manualKeyPointSets: keyPointOverrides.size,
      remainingTruncatedDescriptions: revised.filter((article) => /…$/.test(article.description || "")).length,
      remainingLiveFields: revised.filter((article) => "liveTime" in article).length,
      heldForSourceReview: revised.filter((article) => article.editorial?.source?.name === "Source not identified").length,
    },
    null,
    2,
  ),
);
