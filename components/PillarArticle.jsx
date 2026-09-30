import Link from "next/link";
import { PILLAR_CATEGORIES, PILLAR_MAIN_PATH } from "../data/pillars";

export default function PillarArticle({ article, related }) {
  const label = PILLAR_CATEGORIES[article.category];
  return (
    <main className="bg-white">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-6 pt-8 font-sans text-xs text-[#70757d]">
        <Link href="/" className="hover:underline">Home</Link> / <Link href={PILLAR_MAIN_PATH} className="hover:underline">Pope Leo XIV &amp; Castel Gandolfo</Link> /{" "}
        <Link href={`/${article.category}`} className="hover:underline">{label}</Link>
      </nav>
      <header className="mx-auto max-w-5xl px-6 pb-8 pt-6">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#8f211b]">{label} · Background</span>
        <h1 className="mt-3 max-w-4xl font-serif text-[34px] font-bold leading-[1.08] text-[#111318] sm:text-[52px]">{article.title}</h1>
        <p className="mt-5 max-w-3xl font-serif text-xl leading-[1.5] text-[#50555e]">{article.summary}</p>
        <p className="mt-5 font-sans text-xs text-[#5c616a]">By PolicyNow Editorial Team · Updated September 30, 2026 · {article.readTime}</p>
      </header>
      <figure className="mx-auto max-w-5xl px-4 sm:px-6">
        <img src={article.image} alt={article.imageAlt} className="max-h-[480px] w-full bg-[#f1f0ed] object-cover" />
      </figure>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_270px]">
        <article className="min-w-0 max-w-3xl">
          {article.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 font-serif text-[18px] leading-[1.75] text-[#282b30]">{p}</p>
          ))}
          <section className="mt-10 border-t border-gray-200 pt-6">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#8f211b]">Sources</h2>
            <ul className="mt-4 space-y-3 font-sans text-sm">
              {article.sources.map((s) => (
                <li key={s.url}>
                  <span className="block text-[10px] uppercase tracking-wider text-[#8a8272]">{s.type}</span>
                  <a href={s.url} target="_blank" rel="noreferrer" className="text-[#17191d] hover:text-[#8f211b] hover:underline">{s.name} ↗</a>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="border-t-2 border-[#14181f] py-5 font-sans">
            <h2 className="text-xs font-bold uppercase tracking-[0.14em]">Main article</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#555b64]">This page gives background on one person, event, place, organization or issue from our main report.</p>
            <Link href={PILLAR_MAIN_PATH} className="mt-3 inline-block text-sm font-semibold text-[#8f211b] hover:underline">Read the main article →</Link>
          </div>
          <div className="border-t border-gray-300 py-5 font-sans text-sm text-[#555b64]">
            See an error or missing context?{" "}
            <Link href="/corrections-policy" className="font-semibold text-[#8f211b] hover:underline">Corrections policy</Link>
          </div>
        </aside>
      </div>
      <section className="mx-auto max-w-6xl border-t border-gray-300 px-6 py-10">
        <h2 className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.14em]">Related background</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link key={r.id} href={r.path} className="group">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8f211b]">{PILLAR_CATEGORIES[r.category]}</div>
              <h3 className="mt-1 font-serif text-lg font-bold leading-snug group-hover:underline">{r.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
