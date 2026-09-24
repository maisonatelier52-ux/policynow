import authors from "../../data/authors";

export default function AuthorPage() {
  return (
    <section className="mx-6 py-14 pb-20 lg:mx-12">
      <h1 className="mb-8 text-center font-serif text-3xl font-bold sm:text-4xl">Authors</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((p) => (
          <div className="text-center" key={p.id}>
            <img alt={p.name} className="mx-auto mb-4 h-[110px] w-[110px] rounded-full object-cover" src={p.image} />
            <h2 className="mb-2 text-xl font-semibold">
              <a title={p.name}>{p.name}</a>
            </h2>
            <div>
              <p className="mx-auto max-w-[320px] text-[15px] leading-relaxed text-[#4a4f57]">{p.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
