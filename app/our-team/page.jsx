import Link from "next/link";
import authors from "../../data/authors";

const DEPARTMENTS = [
  { icon: "✎", title: "Editorial", text: "Guides newsroom standards and ensures quality, clarity, and editorial consistency." },
  { icon: "✓", title: "Fact-Checking", text: "Verifies information, sources, and claims before publication." },
  { icon: "📰", title: "Production", text: "Manages publishing workflows and maintains our digital news platform." },
  { icon: "👥", title: "Audience & Community", text: "Engages with readers and supports meaningful community participation." },
];

export default function OurTeamPage() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 pb-24 font-sans">
      <div className="mb-12 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="mb-3.5 font-serif text-4xl">Our Team</h1>
          <p className="text-base leading-relaxed text-[#4a4f57]">
            At PolicyNow, our journalists, editors, analysts, and researchers work together to produce accurate,
            independent, and public-interest journalism. We are committed to delivering reporting that is
            factual, transparent, and accountable to our readers.
          </p>
        </div>
        <div className="rounded-xl border border-[#ece9e4] bg-[#f8f7f5] p-5">
          <h4 className="mb-2.5 text-[13px] tracking-wide text-[#b3261e]">OUR MISSION</h4>
          <p className="text-base leading-relaxed text-[#4a4f57]">
            Our mission is to inform the public through reliable, evidence-based reporting. We seek to explain
            complex issues, hold institutions accountable, and provide readers with journalism they can trust.
          </p>
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-2 text-[13px] font-bold tracking-[0.1em] text-[#14181f]">REPORTING TEAM</div>
        <div className="mb-6 h-[3px] w-11 rounded bg-[#b3261e]" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((a) => (
            <div className="rounded-xl border border-[#ece9e4] bg-[#f8f7f5] p-6 text-center" key={a.id}>
              <img alt={a.name} className="mx-auto mb-3.5 h-[78px] w-[78px] rounded-full object-cover" src={a.image} />
              <h3 className="mb-1 text-[17px]">{a.name}</h3>
              <div className="mb-2.5 text-[12.5px] font-bold uppercase tracking-wide text-[#b3261e]">{a.role}</div>
              <p className="mb-3 text-sm leading-relaxed text-[#4a4f57]">{a.bio}</p>
              <Link href="/author" className="text-[13px] font-semibold text-[#14181f] hover:underline">
                View full bio →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-2 text-[13px] font-bold tracking-[0.1em] text-[#14181f]">POLICYNOW STAFF</div>
        <div className="mb-6 h-[3px] w-11 rounded bg-[#b3261e]" />
        <p className="mb-6 text-base leading-relaxed text-[#33373d]">
          Behind every story is a dedicated team working across multiple departments to uphold editorial
          standards, maintain accuracy, and support the delivery of independent journalism.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {DEPARTMENTS.map((d) => (
            <div className="text-center" key={d.title}>
              <div className="mb-2.5 text-2xl">{d.icon}</div>
              <h4 className="mb-1.5 text-[15px]">{d.title}</h4>
              <p className="text-[13.5px] text-[#6b7078]">{d.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 text-[13px] font-bold tracking-[0.1em] text-[#14181f]">ALL AUTHORS</div>
        <div className="mb-6 h-[3px] w-11 rounded bg-[#b3261e]" />
        <div className="flex flex-wrap gap-2.5">
          {authors.map((a) => (
            <span className="rounded-full bg-[#14181f] px-3.5 py-1.5 text-[13px] text-white" key={a.id}>
              {a.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <div className="text-[13px] tracking-wide text-[#9a9fa6]">Last Updated: May 21, 2026</div>
      </div>
    </div>
  );
}
