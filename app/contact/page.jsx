const CARDS = [
  {
    icon: "✉",
    title: "Editorial & General Contact",
    desc: "Questions about our reporting, coverage ideas, or editorial matters.",
    email: "contact@policynow.org",
  },
  {
    icon: "➤",
    title: "Confidential News Tips",
    desc: "Share information that you believe should be investigated or reported.",
    email: "tips@policynow.org",
  },
  {
    icon: "ⓘ",
    title: "Corrections",
    desc: "If you believe we made an error, please notify us so we can correct it promptly.",
    email: "corrections@policynow.org",
  },
  {
    icon: "👤",
    title: "Media & Press Inquiries",
    desc: "Journalists, researchers, or organizations seeking collaboration.",
    email: "press@policynow.org",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[980px] px-6 py-16 pb-24 text-center font-sans">
      <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-[#14181f] sm:text-[42px]">
        Get in Touch
      </h1>
      <div className="mx-auto mb-5 h-[3px] w-16 rounded bg-[#b3261e]" />
      <p className="mx-auto max-w-[640px] text-[17px] leading-relaxed text-[#4a4f57]">
        PolicyNow is an independent newsroom. We welcome tips, corrections, and communication from readers,
        journalists, and organizations.
      </p>

      <div className="my-11 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
        {CARDS.map((c) => (
          <div
            className="rounded-xl border border-[#ece9e4] bg-[#f8f7f5] p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            key={c.email}
          >
            <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#14181f] text-lg text-white">
              {c.icon}
            </div>
            <h2 className="mb-2 font-serif text-[17px]">{c.title}</h2>
            <p className="mb-3.5 text-[14.5px] leading-relaxed text-[#4a4f57]">{c.desc}</p>
            <a className="inline-block rounded-full bg-[#14181f] px-4 py-2 text-[13.5px] font-semibold text-white" href={`mailto:${c.email}`}>
              {c.email}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <p className="mb-2 text-[14.5px] text-[#6b7078]">
          PolicyNow is an independent digital publication operated by a distributed editorial team based in the
          United States.
        </p>
        <div className="text-[13px] tracking-wide text-[#9a9fa6]">Last Updated: May 9, 2026</div>
      </div>
    </div>
  );
}
