import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "../../data/articles";

const SITE_URL = "https://www.policynow.org";
const SITE_NAME = "PolicyNow";

const CATEGORY_LABELS = {
  us: "U.S.",
  "politics-and-policy": "Politics & Policy",
  "business-and-economy": "Business & Economy",
  "global-affairs": "Global Affairs",
  "technology-and-innovation": "Technology & Innovation",
  "finance-and-markets": "Finance & Markets",
  "featured-pr": "Featured PR",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category];
  if (!label) return {};

  const url = `${SITE_URL}/${category}`;
  const description = `Latest ${label} news, analysis, and coverage from ${SITE_NAME} — where policy meets public perception.`;

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
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
      site: "@policynow",
      creator: "@policynow",
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
          No stories have been published in this section yet. Check back soon.
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
              <a className="text-lg" href="mailto:hello@policynow.com" title="envelope">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
          <div className="border-t border-black py-5">
            <h4 className="mb-2.5 text-xs font-semibold">NEWSLETTER</h4>
            <form className="border border-gray-300 p-4">
              <input className="mb-2.5 w-full border border-gray-300 p-4 text-base" placeholder="Your name" type="text" />
              <input className="mb-2.5 w-full border border-gray-300 p-4 text-base" placeholder="Your email address" type="email" />
              <button className="w-full bg-black p-4 text-xs text-white hover:opacity-85" type="submit">
                SIGN UP
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}
