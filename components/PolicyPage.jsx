export default function PolicyPage({ data }) {
  const { title, intro, sections = [], email, updated } = data;

  return (
    <div className="mx-auto max-w-[860px] px-6 py-16 pb-24 font-sans text-[#1c1c1c]">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-[#14181f] sm:text-[42px]">
          {title}
        </h1>
        <div className="mx-auto mb-5 h-[3px] w-16 rounded bg-[#b3261e]" />
        {intro && (
          <p className="mx-auto max-w-[640px] text-[17px] leading-relaxed text-[#4a4f57]">{intro}</p>
        )}
      </div>

      {sections.map((s, i) => (
        <div className={`py-8 ${i === 0 ? "" : "border-t border-gray-200"}`} key={i}>
          {s.heading && (
            <h2 className="mb-3.5 flex items-center gap-2.5 font-serif text-xl font-bold text-[#14181f] sm:text-[23px]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#b3261e]" />
              {s.heading}
            </h2>
          )}
          {s.paragraphs?.map((p, j) => (
            <p className="mb-3.5 text-base leading-relaxed text-[#33373d] last:mb-0" key={j}>
              {p}
            </p>
          ))}
          {s.items?.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {s.items.map((it, j) => (
                <div className="rounded-[10px] border border-[#ece9e4] bg-[#f8f7f5] p-5" key={j}>
                  <h3 className="mb-2 flex items-center gap-2 text-[15px] font-bold text-[#14181f]">{it.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-[#4a4f57]">{it.text}</p>
                </div>
              ))}
            </div>
          )}
          {s.list?.length > 0 && (
            <ul className="mt-3 grid list-none gap-2.5 p-0">
              {s.list.map((li, j) => (
                <li className="relative pl-6 text-base leading-relaxed text-[#33373d]" key={j}>
                  <span className="absolute left-0 top-0 font-bold text-[#b3261e]">✓</span>
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-9 rounded-xl bg-[#14181f] p-6 text-white">
        <h3 className="mb-2 text-lg font-semibold">Questions about this policy?</h3>
        <p className="mb-3.5 text-[15px] text-[#cfd3da]">
          Reach our editorial team directly and we&rsquo;ll get back to you.
        </p>
        <a
          className="inline-block border-b border-white/40 font-semibold text-white no-underline"
          href={`mailto:${email || "editorial@policynow.org"}`}
        >
          {email || "editorial@policynow.org"}
        </a>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <p className="mb-2 text-[14.5px] text-[#6b7078]">
          PolicyNow is an independent digital news publication operated by a distributed editorial team based in
          the United States.
        </p>
        {updated && <div className="text-[13px] tracking-wide text-[#9a9fa6]">{updated}</div>}
      </div>
    </div>
  );
}
