import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "../../data/articles";
import { PILLAR_CATEGORIES, getPillarsByCategory } from "../../data/pillars";
import { CATEGORY_LABELS, SITE_NAME, SITE_URL, TWITTER_HANDLE } from "../../lib/site";

export function generateStaticParams() {
  return [...Object.keys(CATEGORY_LABELS), ...Object.keys(PILLAR_CATEGORIES)].map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category] || PILLAR_CATEGORIES[category];
  if (!label) return {};

  const url = `${SITE_URL}/${category}`;
  const isPillarHub = Boolean(PILLAR_CATEGORIES[category]);
  const description = isPillarHub
    ? `${label} background pages from ${SITE_NAME} supporting our report on Pope Leo XIV, Andrea Bocelli and the Canticle of Peace, each with a source list.`
    : `${label} posts from ${SITE_NAME}, with analysis, context, transparent sourcing, and visible content labels.`;
  const hubImage = isPillarHub ? getPillarsByCategory(category)[0]?.image : null;
  const hubImageUrl = hubImage ? `${SITE_URL}${hubImage}` : null;

  return {
    title: label,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: label,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      ...(hubImageUrl ? { images: [{ url: hubImageUrl, width: 1200, height: 630, alt: label }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      ...(hubImageUrl ? { images: [hubImageUrl] } : {}),
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

function excerpt(text, max = 130) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  if (PILLAR_CATEGORIES[category]) {
    const label = PILLAR_CATEGORIES[category];
    const items = getPillarsByCategory(category);
    const hubJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/${category}#collection`,
      url: `${SITE_URL}/${category}`,
      name: `${label}: background pages`,
      isPartOf: { "@id": `${SITE_URL}#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${a.path}`,
          name: a.title,
        })),
      },
    };

    return (
      <main className="bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }} />
        <div className="mx-auto max-w-6xl px-6 pb-4 pt-10">
          <nav aria-label="Breadcrumb" className="font-sans text-xs text-[#70757d]">
            <Link href="/" className="hover:underline">Home</Link> / <span>{label}</span>
          </nav>
          <p className="mt-6 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#8f211b]">Background</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-[#111318] sm:text-5xl">{label}</h1>
          <p className="mt-3 max-w-3xl font-serif text-lg leading-relaxed text-[#50555e]">
            Background pages supporting our report on Pope Leo XIV, Andrea Bocelli and the Canticle of Peace. Each page has its own source list.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-gray-200 font-sans text-sm">
            {Object.entries(PILLAR_CATEGORIES).map(([cat, name]) => (
              <Link
                key={cat}
                href={`/${cat}`}
                className={`-mb-px border-b-2 pb-3 ${
                  cat === category
                    ? "border-[#8f211b] font-bold text-[#8f211b]"
                    : "border-transparent text-[#555b64] hover:text-[#8f211b]"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 px-6 pb-16 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <Link key={a.id} href={a.path} className="group block">
              <div className="overflow-hidden bg-[#f1f0ed]">
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#8f211b]">
                {a.eyebrow}
              </div>
              <h2 className="mt-1 font-serif text-[22px] font-bold leading-snug text-[#111318] group-hover:underline">
                {a.title}
              </h2>
              <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-[#555b64]">{a.summary}</p>
              <span className="mt-3 inline-block font-sans text-xs font-semibold text-[#8f211b]">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </main>
    );
  }
  const label = CATEGORY_LABELS[category];
  if (!label) notFound();

  const list = articles
    .filter((a) => a.category === category)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  const lead = list[0];
  const mid = list[1];
  const side = list[2];
  const feed = list.slice(3);

  const categoryUrl = `${SITE_URL}/${category}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${categoryUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: label, item: categoryUrl },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${categoryUrl}#collection`,
    name: label,
    url: categoryUrl,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: list.slice(0, 10).map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/${a.category}/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="mx-6 border-b border-gray-300 pb-5 lg:mx-12">
      <div className="mb-5">
        <h1 className="mt-16 text-[20px] font-semibold uppercase">{label}</h1>
        <div className="mt-2.5 border-t border-black" />
      </div>

      {list.length === 0 ? (
        <p className="py-10 font-sans text-gray-500">
          No posts have been published in this section yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[3fr_1fr_1fr]">
          {lead && (
            <div>
              <img alt={lead.title} className="w-full object-cover" src={lead.heroImage} />
              <h2 className="my-2.5 text-[23px] font-semibold text-[#161616]">
                <Link href={`/${lead.category}/${lead.slug}`} title={lead.title} className="hover:underline">
                  {lead.title}
                </Link>
              </h2>
              <p className="text-base leading-snug text-black">{excerpt(lead.description, 160)}</p>
              <div className="mt-2 font-sans text-[10px] text-gray-500">
                {lead.dateDisplay} · {lead.author.toUpperCase()}
              </div>
            </div>
          )}

          {mid && (
            <div>
              <img alt={mid.title} className="mb-2 h-[220px] w-full object-cover" src={mid.heroImage} />
              <h4 className="my-1.5 text-lg font-semibold leading-snug text-[#161616]">
                <Link href={`/${mid.category}/${mid.slug}`} title={mid.title} className="hover:underline">
                  {mid.title}
                </Link>
              </h4>
              <p className="text-[17px] leading-snug text-black">{excerpt(mid.description)}</p>
              <div className="mt-2 font-sans text-[10px] text-gray-500">
                {mid.dateDisplay} · {mid.author.toUpperCase()}
              </div>
            </div>
          )}

          {side && (
            <div>
              <div>
                <img alt={side.title} className="mb-1.5 h-[140px] w-full object-cover" src={side.heroImage} />
                <h5 className="text-lg font-semibold leading-snug text-[#161616]">
                  <Link href={`/${side.category}/${side.slug}`} title={side.title} className="hover:underline">
                    {side.title}
                  </Link>
                </h5>
                <p className="mt-0 text-[17px] leading-snug text-black">{excerpt(side.description)}</p>
                <div className="mt-2 font-sans text-[10px] text-gray-500">
                  {side.dateDisplay} · {side.author.toUpperCase()}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[3.5fr_1fr]">
        <div className="mb-8 flex flex-col gap-8 border-gray-300 pr-0 lg:border-r lg:pr-4">
          {feed.map((a) => (
            <div className="grid grid-cols-1 items-start gap-5 border-b border-gray-200 pb-5 sm:grid-cols-[2fr_1fr]" key={a.id}>
              <div>
                <h3 className="mb-2 text-2xl font-semibold">
                  <Link href={`/${a.category}/${a.slug}`} title={a.title} className="hover:underline">
                    {a.title}
                  </Link>
                </h3>
                <p className="text-[17px] leading-snug text-black">{excerpt(a.description)}</p>
                <div className="mt-2 font-sans text-[10px] text-gray-500">
                  {a.dateDisplay} · {a.author.toUpperCase()}
                </div>
              </div>
              <div>
                <img alt={a.title} className="h-[162px] w-full object-cover" src={a.heroImage} />
              </div>
            </div>
          ))}
        </div>

        <aside className="flex flex-col text-sm lg:sticky lg:top-24 lg:self-start">
          <div className="border-t border-black py-5">
            <h4 className="mb-2.5 text-xs font-semibold">CATEGORIES</h4>
            <ul className="m-0 list-none space-y-1.5 p-0 leading-5">
              {Object.entries(CATEGORY_LABELS)
                .filter(([slug]) => slug !== category)
                .map(([slug, lbl]) => (
                  <li key={slug}>
                    <Link href={`/${slug}`} title={lbl} className="hover:underline">
                      {lbl}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="border-t border-black py-5">
            <h4 className="mb-2.5 text-xs font-semibold">FOLLOW</h4>
            <div className="mt-4 flex gap-5">
              <a className="text-lg" href="https://www.instagram.com/poli.cynow/" title="instagram">
                <i className="fa-brands fa-instagram-f" />
              </a>
              <a className="text-lg" href="https://x.com/PolicynowO41566" title="twitter">
                <i className="fa-brands fa-x-twitter fa-sm" />
              </a>
              <a className="text-lg" href="https://substack.com/@policynow01" title="substack">
                <i className="fa-brands fa-youtube" />
              </a>
              <a className="text-lg" href="mailto:hello@policynow.org" title="envelope">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
          <div className="border-t border-black py-5">
            <h4 className="mb-2.5 text-xs font-semibold">FOLLOW POLICY NOW</h4>
            <p className="mb-3 text-sm leading-relaxed text-gray-600">
              Read new analysis and explainers through our RSS feed, or contact the editorial team directly.
            </p>
            <div className="flex flex-col gap-2">
              <a className="border border-black px-4 py-3 text-center text-xs font-semibold hover:bg-black hover:text-white" href="/rss.xml">
                OPEN RSS FEED
              </a>
              <a className="bg-black px-4 py-3 text-center text-xs font-semibold text-white hover:opacity-85" href="mailto:hello@policynow.org?subject=PolicyNow%20reader%20updates">
                EMAIL POLICY NOW
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}