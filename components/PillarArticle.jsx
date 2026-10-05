import Link from "next/link";
import {
  PILLAR_CATEGORIES,
  PILLAR_MAIN_PATH,
  getPillarsByCategory,
} from "../data/pillars";

const MAIN_TITLE =
  "Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace";
const MAIN_IMAGE = "/image/Pope.jpg";

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function PillarArticle({ article, related }) {
  const label = PILLAR_CATEGORIES[article.category];

  return (
    <main className="bg-white">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-6 pt-8 font-sans text-xs text-[#70757d]"
      >
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href={PILLAR_MAIN_PATH} className="hover:underline">Main article</Link> /{" "}
        <Link href={`/${article.category}`} className="hover:underline">{label}</Link>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pb-8 pt-6">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#8f211b]">
          {label} 
        </span>
        <h1 className="mt-3 max-w-6xl font-serif text-[34px] font-bold leading-[1.08] text-[#111318] sm:text-[52px]">
          {article.title}
        </h1>
        <p className="mt-5 max-w-3xl font-serif text-xl leading-[1.5] text-[#50555e]">
          {article.summary}
        </p>
        <p className="mt-5 font-sans text-xs text-[#5c616a]">
          By PolicyNow Editorial Team · Updated September 30, 2026 · {article.readTime}
        </p>
      </header>

      <figure className="mx-auto max-w-6xl px-4 sm:px-6">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="max-h-[550px] w-full bg-[#f1f0ed] object-cover"
        />
      </figure>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_250px]">
        {/* Body + sources */}
        <article className="min-w-0 max-w-4xl">
          {article.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 font-serif text-[18px] leading-[1.75] text-[#282b30]">
              {p}
            </p>
          ))}

          <section className="mt-12 border-t border-gray-200 pt-8" aria-labelledby="sources-heading">
            <h2
              id="sources-heading"
              className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#8f211b]"
            >
              Sources
            </h2>
            <ol className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {article.sources.map((s, i) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 py-4 font-sans"
                  >
                    <span className="w-5 shrink-0 pt-0.5 text-sm font-semibold text-[#8a8f98]">
                      {i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#8a8f98]">
                        {s.type}
                      </span>
                      <span className="mt-1 block text-[15px] font-semibold leading-snug text-[#17191d] group-hover:text-[#8f211b]">
                        {s.name}
                      </span>
                      <span className="mt-1 block truncate text-xs text-[#70757d]">
                        {domainOf(s.url)} ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-7 lg:sticky lg:top-6 lg:self-start">
          <div className="border-t-2 border-[#14181f] pt-5 font-sans">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#14181f]">
              Main article
            </h2>
            <img src={MAIN_IMAGE} alt="" className="mt-4 h-40 w-full object-cover" />
            <p className="mt-4 font-serif text-[19px] font-bold leading-snug text-[#111318]">
              {MAIN_TITLE}
            </p>
            <Link
              href={PILLAR_MAIN_PATH}
              className="mt-3 inline-block text-sm font-semibold text-[#8f211b] hover:underline"
            >
              Read the main article →
            </Link>
          </div>

          <div className="border-t border-gray-300 pt-5 font-sans text-sm">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#14181f]">
              Explore the background
            </h2>
            <ul className="mt-3 divide-y divide-gray-100">
              {Object.entries(PILLAR_CATEGORIES).map(([cat, name]) => (
                <li key={cat}>
                  <Link
                    href={`/${cat}`}
                    className={`flex items-center justify-between py-2 hover:text-[#8f211b] ${
                      cat === article.category ? "font-bold text-[#8f211b]" : "text-[#282b30]"
                    }`}
                  >
                    <span>{name}</span>
                    <span className="text-xs text-[#8a8f98]">
                      {getPillarsByCategory(cat).length}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

     
        </aside>
      </div>

      {/* Related background */}
      <section className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#14181f]">
              Related background
            </h2>
            <Link
              href={`/${article.category}`}
              className="font-sans text-xs font-semibold text-[#8f211b] hover:underline"
            >
              All {label} →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.id} href={r.path} className="group block">
                <img src={r.image} alt="" className="h-52 w-full object-cover" />
                <div className="mt-3 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#8f211b]">
                  {PILLAR_CATEGORIES[r.category]}
                </div>
                <h3 className="mt-1 font-serif text-[19px] font-bold leading-snug text-[#111318] group-hover:underline">
                  {r.title}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[#555b64]">
                  {r.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
