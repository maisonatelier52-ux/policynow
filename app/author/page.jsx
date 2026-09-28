import authors from "../../data/authors";

export const metadata = {
  title: "Contributors",
  description: "Meet the editors and contributors behind PolicyNow's policy and current-affairs blog.",
  alternates: { canonical: "/author" },
};

export default function AuthorPage() {
  return (
    <section className="mx-6 py-14 pb-20 lg:mx-12">
      <h1 className="mb-3 text-center font-serif text-3xl font-bold sm:text-4xl">Contributors</h1>
      <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-[#555b64]">
        The editors and contributors who review, contextualize, and publish PolicyNow posts.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((p) => (
          <div className="text-center" key={p.id}>
            <img alt={p.name} className="mx-auto mb-4 h-[110px] w-[110px] rounded-full object-cover" src={p.image} />
            <h2 className="mb-2 text-xl font-semibold">
              <a href={`/author/${p.id}`} title={p.name} className="hover:underline">{p.name}</a>
            </h2>
            <div>
              <p className="mx-auto max-w-[320px] text-[15px] leading-relaxed text-[#4a4f57]">{p.bio}</p>
              <a href={`/author/${p.id}`} className="mt-4 inline-block text-sm font-semibold text-[#8f211b] hover:underline">
                View profile and posts →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
