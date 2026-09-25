import Link from "next/link";
import articles from "../data/articles";
import authors from "../data/authors";

function byCategory(cat) {
  return articles.filter((a) => a.category === cat && !a.special);
}

function sortedByDate(list) {
  return [...list].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

function SectionLabel({ children }) {
  return (
    <div className="mt-8 mb-4 border-t border-black pt-4">
      {children && (
        <h2 className="inline-block font-sans text-sm font-bold uppercase tracking-wide">{children}</h2>
      )}
    </div>
  );
}

export default function Home() {
  const all = sortedByDate(articles.filter((a) => !a.special));
  const special = articles.find((a) => a.special);

  // Every section below pulls from these date-sorted pools through `pick`,
  // which tracks already-used article ids so nothing is ever shown twice
  // on the homepage, no matter which section grabs it first.
  const usedIds = new Set();
  function pick(list, n) {
    const out = [];
    for (const a of list) {
      if (out.length >= n) break;
      if (!usedIds.has(a.id)) {
        out.push(a);
        usedIds.add(a.id);
      }
    }
    return out;
  }

  const business = sortedByDate(byCategory("business-and-economy"));
  const politics = sortedByDate(byCategory("politics-and-policy"));
  const tech = sortedByDate(byCategory("technology-and-innovation"));
  const finance = sortedByDate(byCategory("finance-and-markets"));
  const global = sortedByDate(byCategory("global-affairs"));
  const featuredPr = sortedByDate(byCategory("featured-pr"));

  const newsRow = pick(all, 4);
  const [heroMain, heroSub] = pick(all, 2);
  const bizFeatured = pick(business, 2);
  const politicsTop = pick(politics, 2);
  const businessImage = pick(business, 1)[0];
  const techStories = pick(tech, 4);
  // julio-herrera-velutini-pope-leo-xiv-castelgandolfo is pinned here statically
  // as the first item, regardless of date sorting.
  const carouselItems = [special, ...pick(tech, 2)].filter(Boolean);
  const financeHero = pick(finance, 1)[0];

  const sideFaaLike = pick(business, 1)[0];
  const sideGrid = pick(business, 2);
  const globalTop5 = pick(global, 5);

  const gridContainerItems = pick(finance, 5);
  const prHero = pick(featuredPr, 1)[0];
  const prSecond = pick(featuredPr, 1)[0];
  const prRest = pick(featuredPr, 6);

  const SITE_URL = "https://www.policynow.org";
  const SITE_NAME = "PolicyNow";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/image/policynow-logo.png` },
    sameAs: ["https://x.com/PolicynowO41566", "https://www.instagram.com/poli.cynow/"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="mx-6 lg:mx-12">
      {/* Top quick-news strip */}
      <div className="grid grid-cols-1 gap-4 border-b border-black py-5 lg:grid-cols-4">
        {newsRow.map((a) => (
          <div className="flex gap-2.5" key={a.id}>
            <img alt={a.title} className="h-[70px] w-[70px] shrink-0 object-cover" src={a.heroImage} />
            <div className="min-w-0">
              <Link
                href={`/${a.category}/${a.slug}`}
                title={a.title}
                className="block text-xs font-semibold leading-snug text-[#181818] hover:underline"
              >
                {a.title}
              </Link>
              <div className="mt-2 text-[9px] font-semibold uppercase text-black">{a.dateDisplay}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 pt-6 lg:grid-cols-[3fr_1fr]">
        <div className="lg:pr-4">
          <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
              <div>
                <div className="flex items-center gap-1.5 text-[8px] font-semibold uppercase text-[#d0022c]">
                  <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#d0022c]" />
                  <span className="text-black">Live {heroMain?.dateDisplay}</span>
                </div>
                <h1 className="mt-3.5">
                  <Link
                    className="block font-sans text-[17px] font-semibold text-black hover:text-gray-500"
                    href={`/${heroMain.category}/${heroMain.slug}`}
                    title={heroMain.title}
                  >
                    {heroMain.title}
                  </Link>
                </h1>
                <p className="my-2.5 text-[13px] text-[#4c4c4c]">{heroMain.description}</p>
                {heroSub && (
                  <>
                    <Link
                      className="mb-1 block border-t border-gray-300 pt-2.5 font-sans text-[17px] font-semibold text-black hover:text-gray-500"
                      href={`/${heroSub.category}/${heroSub.slug}`}
                      title={heroSub.title}
                    >
                      {heroSub.title}
                    </Link>
                    <p className="my-2.5 text-[13px] text-[#4c4c4c]">{heroSub.description}</p>
                  </>
                )}
                <div className="mt-3 text-[9px] font-semibold uppercase text-black">{heroMain.dateDisplay}</div>
              </div>
              <div>
                <img alt="Main news image" className="h-[314px] w-full object-cover" src={heroMain.heroImage} />
              </div>
            </div>

            <SectionLabel>Business &amp; Economy</SectionLabel>
            <div className="mb-8 grid grid-cols-1 gap-5 font-sans sm:grid-cols-2">
              {bizFeatured.map((a, i) => (
                <div
                  className={`text-sm ${i === 0 ? "border-gray-300 pr-5 sm:border-r" : ""}`}
                  key={a.id}
                >
                  <Link
                    className="block pb-3 font-semibold text-black hover:underline"
                    href={`/${a.category}/${a.slug}`}
                    title={a.title}
                  >
                    {a.title}
                  </Link>
                  <p className="my-1 text-[15px] leading-[18px] text-[#5e5e5e]">{a.description}</p>
                  <div className="mt-2 text-[9px] font-semibold uppercase text-black">{a.dateDisplay}</div>
                </div>
              ))}
            </div>

            <SectionLabel />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
              <div>
                {politicsTop[0] && (
                  <>
                    <div className="mb-2.5 text-[11px] uppercase text-[#131313]">{politicsTop[0].dateDisplay}</div>
                    <Link
                      className="block font-sans text-[17px] font-semibold text-black hover:text-gray-500"
                      href={`/${politicsTop[0].category}/${politicsTop[0].slug}`}
                      title={politicsTop[0].title}
                    >
                      {politicsTop[0].title}
                    </Link>
                    <p className="my-2.5 text-[13px] text-[#4c4c4c]">{politicsTop[0].description}</p>
                  </>
                )}
                {politicsTop[1] && (
                  <>
                    <Link
                      className="mb-1 block border-t border-gray-300 pt-2.5 font-sans text-[17px] font-semibold text-black hover:text-gray-500"
                      href={`/${politicsTop[1].category}/${politicsTop[1].slug}`}
                      title={politicsTop[1].title}
                    >
                      {politicsTop[1].title}
                    </Link>
                    <p className="my-2.5 text-[13px] text-[#4c4c4c]">{politicsTop[1].description}</p>
                    <div className="text-[11px] uppercase text-[#131313]">{politicsTop[1].dateDisplay}</div>
                  </>
                )}
              </div>
              <div>
                {businessImage && (
                  <img alt={businessImage.title} className="h-[314px] w-full object-cover" src={businessImage.heroImage} />
                )}
              </div>
            </div>

            <SectionLabel>Technology &amp; Innovation</SectionLabel>
            <div className="mb-6 grid grid-cols-1 gap-x-8 md:grid-cols-2">
              <div>
                {techStories.slice(0, 2).map((a, i) => (
                  <div
                    className={`flex items-start gap-5 pt-4 first:pt-0 ${i === 1 ? "mt-4 border-t border-gray-300" : ""}`}
                    key={a.id}
                  >
                    <div className="flex-1">
                      <h3 className="mb-2 text-[15px] font-semibold leading-tight">
                        <Link href={`/${a.category}/${a.slug}`} title={a.title} className="hover:underline">
                          {a.title}
                        </Link>
                      </h3>
                      <div className="text-[10px] font-light uppercase tracking-wide text-[#747474]">
                        By <Link href="/author" title="Author" className="hover:underline">{a.author}</Link>
                        <span className="mx-1">·</span> {a.dateDisplay}
                      </div>
                    </div>
                    <div className="w-[30%] shrink-0">
                      <img alt={a.title} className="h-[85px] w-full object-cover" src={a.heroImage} />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {techStories.slice(2, 4).map((a, i) => (
                  <div
                    className={`flex items-start gap-5 pt-4 first:pt-0 ${i === 1 ? "mt-4 border-t border-gray-300" : ""}`}
                    key={a.id}
                  >
                    <div className="flex-1">
                      <h3 className="mb-2 text-[15px] font-semibold leading-tight">
                        <Link href={`/${a.category}/${a.slug}`} title={a.title} className="hover:underline">
                          {a.title}
                        </Link>
                      </h3>
                      <div className="text-[10px] font-light uppercase tracking-wide text-[#747474]">
                        By <Link href="/author" title="Author" className="hover:underline">{a.author}</Link>
                        <span className="mx-1">·</span> {a.dateDisplay}
                      </div>
                    </div>
                    <div className="w-[30%] shrink-0">
                      <img alt={a.title} className="h-[85px] w-full object-cover" src={a.heroImage} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SectionLabel />
            <div className="py-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {carouselItems.map((a) => (
                  <div key={a.id}>
                    <Link href={`/${a.category}/${a.slug}`} title={a.title}>
                      <div>
                        <img alt={a.title} className="h-[180px] w-full object-cover" src={a.heroImage} />
                      </div>
                      <div className="mt-2.5 text-base font-bold leading-snug">{a.title}</div>
                      <div className="mt-1 text-[11px] text-gray-600">{a.dateDisplay}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <SectionLabel>Finance &amp; Markets</SectionLabel>
            {financeHero && (
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
                <div>
                  <Link
                    className="block font-sans text-[17px] font-semibold text-black hover:text-gray-500"
                    href={`/${financeHero.category}/${financeHero.slug}`}
                    title={financeHero.title}
                  >
                    {financeHero.title}
                  </Link>
                  <p className="my-2.5 text-[13px] text-[#4c4c4c]">{financeHero.description}</p>
                </div>
                <div>
                  <img alt={financeHero.title} className="h-[314px] w-full object-cover" src={financeHero.heroImage} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="mb-6">
          {sideFaaLike && (
            <div className="mb-6">
              <img alt={sideFaaLike.title} className="h-[190px] w-full object-cover" src={sideFaaLike.heroImage} />
              <Link
                className="mt-3 block font-sans text-[17px] font-semibold text-black hover:text-gray-500"
                href={`/${sideFaaLike.category}/${sideFaaLike.slug}`}
                title={sideFaaLike.title}
              >
                {sideFaaLike.title}
              </Link>
              <p className="mt-2 text-[11px] uppercase text-[#131313]">{sideFaaLike.dateDisplay}</p>
            </div>
          )}

          <div className="mb-6 grid grid-cols-2 gap-2.5">
            {sideGrid.map((a) => (
              <div key={a.id}>
                <img alt={a.title} className="mb-2.5 h-auto w-full object-cover" src={a.heroImage} />
                <Link
                  className="my-2 block text-sm font-semibold leading-none text-[#5e5e5e] hover:underline"
                  href={`/${a.category}/${a.slug}`}
                  title={a.title}
                >
                  {a.title}
                </Link>
                <p className="mt-2.5 text-[10.5px] text-gray-500">{a.dateDisplay}</p>
              </div>
            ))}
          </div>

          <SectionLabel>Global Affairs</SectionLabel>
          {globalTop5.map((a, i) => (
            <div className="flex gap-5 border-b border-gray-200 py-2.5 font-sans" key={a.id}>
              <span className="text-2xl font-normal">{i + 1}</span>
              <div className="flex-1">
                <Link
                  className="text-base leading-snug hover:underline"
                  href={`/${a.category}/${a.slug}`}
                  title={a.title}
                >
                  {a.title}
                </Link>
              </div>
            </div>
          ))}

          <SectionLabel>Top Authors</SectionLabel>
          <div className="mx-auto max-w-[500px] font-sans">
            {authors.map((p) => (
              <div className="flex items-center border-b border-gray-200 py-3.5" key={p.id}>
                <div className="mr-4 shrink-0">
                  <Link href="/author" title={p.name}>
                    <img alt={p.name} className="h-[60px] w-[60px] rounded-full object-cover" src={p.image} />
                  </Link>
                </div>
                <div>
                  <div className="mb-1.5">
                    <Link href="/author" title={p.name} className="text-base font-semibold hover:underline">
                      {p.name}
                    </Link>
                  </div>
                  <Link href="/author" title={p.role} className="text-[15px] font-medium leading-snug text-[#575757]">
                    {p.role.split(" — ")[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a href="https://www.pressorahub.com/" rel="nofollow sponsored" title="link">
              <img alt="Sponsored" className="w-full" src="/image/quote.png" />
            </a>
          </div>
        </div>
      </div>

      {/* Finance & Markets grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {gridContainerItems.map((a, i) => (
          <div
            className={i === gridContainerItems.length - 1 ? "" : "lg:border-r lg:border-gray-300 lg:pr-2.5"}
            key={a.id}
          >
            <Link className="block w-full" href={`/${a.category}/${a.slug}`} title={a.title}>
              <div className="h-[160px] w-full overflow-hidden">
                <img alt={a.title} className="h-full w-full object-cover" src={a.heroImage} />
              </div>
              <div className="my-3 font-sans text-base font-semibold leading-tight">{a.title}</div>
              <p className="font-sans text-[11px] text-gray-500">{a.dateDisplay}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured PR spotlight */}
      {prHero && (
        <div className="py-10 text-center">
          <div className="mb-8">
            <Link
              href={`/${prHero.category}/${prHero.slug}`}
              title={prHero.title}
              className="block font-sans text-2xl font-normal uppercase leading-tight hover:underline"
            >
              {prHero.title}
            </Link>
          </div>
          <div className="mb-7 flex flex-col justify-center gap-5 text-left sm:flex-row">
            <div className="flex-1 basis-[0px] font-sans text-lg leading-snug">{prHero.description}</div>
            <div className="flex-1 basis-[0px] font-sans text-lg leading-snug">{prHero.heroCaption}</div>
          </div>
          <img alt={prHero.title} className="mb-5 block h-auto w-full" src={prHero.heroImage} />
        </div>
      )}

      <SectionLabel />

      {prSecond && (
        <div className="mb-12 grid grid-cols-1 items-center gap-10 md:grid-cols-[4fr_3fr]">
          <div>
            <Link href={`/${prSecond.category}/${prSecond.slug}`} title={prSecond.title}>
              <img alt={prSecond.title} className="w-full object-cover" src={prSecond.heroImage} />
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              className="block font-sans text-[28px] font-bold hover:underline"
              href={`/${prSecond.category}/${prSecond.slug}`}
              title={prSecond.title}
            >
              {prSecond.title}
            </Link>
            <p className="mb-6 mt-2 font-sans text-[17px] font-medium leading-snug text-[#5e5e5e]">
              {prSecond.description}
            </p>
          </div>
        </div>
      )}

      <div className="mb-12 grid grid-cols-2 gap-5 border-t border-black py-4 sm:grid-cols-3 lg:grid-cols-5">
        {prRest.map((a) => (
          <div className="flex flex-col" key={a.id}>
            <img alt={a.title} className="mb-2.5 block h-[150px] w-full object-cover" src={a.heroImage} />
            <div className="mb-2.5">
              <Link
                href={`/${a.category}/${a.slug}`}
                title={a.title}
                className="block text-[0.9rem] leading-snug hover:underline"
              >
                {a.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
