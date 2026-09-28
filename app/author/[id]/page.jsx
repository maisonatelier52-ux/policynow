import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "../../../data/articles";
import authors from "../../../data/authors";
import { SITE_NAME, SITE_URL, categoryLabel, postTypeLabel } from "../../../lib/site";

export function generateStaticParams() {
  return authors.map((author) => ({ id: author.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const author = authors.find((person) => person.id === id);
  if (!author) return {};

  return {
    title: author.name,
    description: author.bio,
    alternates: { canonical: `${SITE_URL}/author/${author.id}` },
    openGraph: {
      title: author.name,
      description: author.bio,
      url: `${SITE_URL}/author/${author.id}`,
      siteName: SITE_NAME,
      type: "profile",
      images: [{ url: author.image, alt: author.name }],
    },
  };
}

export default async function ContributorPage({ params }) {
  const { id } = await params;
  const author = authors.find((person) => person.id === id);
  if (!author) notFound();

  const posts = articles
    .filter((article) => article.author === author.name)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/author/${author.id}#profile`,
    url: `${SITE_URL}/author/${author.id}`,
    mainEntity: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      image: `${SITE_URL}${author.image}`,
      worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      sameAs: Object.values(author.social || {}).filter((url) => url && url !== "#"),
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <header className="grid grid-cols-1 gap-8 border-b border-gray-200 pb-10 sm:grid-cols-[150px_1fr] sm:items-center">
        <img alt={author.name} className="h-36 w-36 rounded-full object-cover" src={author.image} />
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#8f211b]">Contributor</div>
          <h1 className="mt-2 font-serif text-4xl font-bold text-[#14181f]">{author.name}</h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#555b64]">{author.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#444a52]">{author.bio}</p>
          {Object.values(author.social || {}).some((url) => url && url !== "#") && (
            <div className="mt-5 flex flex-wrap gap-3">
              {Object.entries(author.social)
                .filter(([, url]) => url && url !== "#")
                .map(([network, url]) => (
                  <a key={network} href={url} target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 px-3 py-1.5 text-xs font-semibold capitalize hover:border-black">
                    {network}
                  </a>
                ))}
            </div>
          )}
        </div>
      </header>

      <section className="py-10">
        <h2 className="font-serif text-2xl font-bold">Edited and contributed posts</h2>
        <p className="mt-2 text-sm text-[#666b73]">{posts.length} post{posts.length === 1 ? "" : "s"}</p>
        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/${post.category}/${post.slug}`} className="group border-t border-gray-300 pt-4">
              <img alt="" className="h-44 w-full object-cover" src={post.heroImage} />
              <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8f211b]">
                {categoryLabel(post.category, post.categoryLabel)} · {postTypeLabel(post.editorial?.type)}
              </div>
              <h3 className="mt-2 font-serif text-xl font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm text-[#666b73]">{post.dateDisplay}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
