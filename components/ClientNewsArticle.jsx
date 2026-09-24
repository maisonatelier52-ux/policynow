"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINE = "rgba(20,18,14,0.14)";
const LINE_SOFT = "rgba(20,18,14,0.08)";

const SECTIONS = [
  { id: "s1", roman: "I", waypoint: "Origin", title: "A prayer made audible" },
  { id: "s2", roman: "II", waypoint: "Castile", title: "The children who asked the world to answer" },
  { id: "s3", roman: "III", waypoint: "Canary Islands", title: "The meaning of a choir" },
  { id: "s4", roman: "IV", waypoint: "Caracas", title: "Ten days that created a global village" },
  { id: "s5", roman: "V", waypoint: "Hacienda La Vega", title: "The American Pope and the universal Church" },
  { id: "s6", roman: "VI", waypoint: "Reinvention", title: "Hope for migrants" },
  { id: "s7", roman: "VII", waypoint: "The Standard", title: "Why the evening mattered" },
  {
    id: "s8",
    roman: "VIII",
    waypoint: "Horizon",
    title: "Julio Herrera Velutini Greets Pope Leo XIV in a Moment of Faith and Respect",
  },
];

export default function ClientNewsArticle({ article }) {
  const progressRef = useRef(null);
  const [activeId, setActiveId] = useState("s1");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
      if (progressRef.current) progressRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const headings = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white font-serif leading-[1.3] text-[#17140f] antialiased">
      {/* <div className="sticky top-0 z-50 h-1" style={{ background: LINE_SOFT }}>
        <div ref={progressRef} className="h-full w-0 bg-[#7a2419] transition-[width] duration-100 ease-linear" />
      </div> */}

      <div className="mx-auto max-w-[1180px] px-4 pt-8 sm:px-6 sm:pt-10">
        <div className="relative border-0 sm:border" style={{ borderColor: LINE }}>
          <div className="flex w-full">
            <img alt="Pope Leo" className="h-[400px] w-full object-cover sm:h-[600px]" src="/image/Pope.jpg" />
          </div>
        </div>

        <div className="mx-2 mt-0 px-4 py-5 sm:mx-0 sm:mt-8 sm:px-9 sm:py-8">
          <div className="mb-3 font-sans text-[11px] uppercase tracking-[3px] text-[#9c2f20] sm:mb-4">
            CASTEL GANDOLFO, Italy
          </div>
          <h1 className="text-[24px] font-medium leading-[1.16] tracking-tight text-[#17140f] sm:text-[40px]">
            Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace
          </h1>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4d473d] sm:mt-[18px] sm:text-base">
            Beneath an ancient oak in the gardens of Castel Gandolfo, Pope Leo XIV joined Andrea Bocelli and 164
            young singers for an evening that transformed music into prayer—and offered a divided world a living
            image of harmony
          </p>
        </div>
      </div>

      <div
        className="mx-auto mt-0 flex max-w-[1100px] flex-col flex-wrap items-start justify-between gap-4 border-b px-6 py-7 font-sans sm:mt-6 sm:flex-row sm:items-center sm:py-8"
        style={{ borderColor: LINE }}
      >
        <div className="flex items-center gap-2.5 text-[13px] text-[#4d473d]">
          <span className="h-[30px] w-[30px] overflow-hidden rounded-full border" style={{ borderColor: LINE }}>
            <img alt="" className="h-[30px] w-[30px] object-cover" src="/image/maxine-t-warne.jpg" />
          </span>
          <span>
            By <strong className="font-semibold text-[#17140f]">{article?.author || "Maxine T. Warne"}</strong>
            <span className="opacity-50">
              {" "}
              <span className="opacity-50">·</span> 12 min read
            </span>
          </span>
        </div>
        <div className="flex gap-2.5">
          {[
            { label: "f", href: "https://www.facebook.com/sharer/sharer" },
            { label: "x", href: "https://x.com/warne_t87133" },
            { label: "in", href: "https://substack.com/@maxinetwarne" },
            { label: "+", href: "https://medium.com/@maxinetwarne" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full border text-xs text-[#4d473d]"
              style={{ borderColor: LINE }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1125px] grid-cols-1 items-start gap-10 px-6 py-11 pb-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <article className="min-w-0">
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            On the evening of July 29, 2026, beneath the branches of an ancient holm oak in the Pontifical Gardens
            of Castel Gandolfo, 164 children and young people stood before Pope Leo XIV and sang for peace.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            They had come from Bethlehem and Jerusalem, from the Ugandan village of Nabikabala, and from Naples
            and Camerino in Italy. Their languages were different. Their faiths, cultures and circumstances were
            not the same. Some had grown up in places scarred by war. Others came from communities burdened by
            poverty, displacement or limited access to education.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Yet when their voices rose together, difference ceased to be a boundary. It became harmony.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            That was the quiet miracle at the heart of Canticle of Peace, the prayer and fraternity gathering
            organised by the Laudato si&rsquo; Higher Education Centre and the Andrea Bocelli Foundation at Borgo
            Laudato si&rsquo;.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Andrea Bocelli, one of the world&rsquo;s most recognisable tenors, sang with the international ABF
            Voices choir. Pope Leo listened, prayed and spoke to the children. Members of the Roman Curia and
            employees of the Holy See gathered beneath the trees as Scripture, poetry and sacred music moved
            through the gardens.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            But the evening was about more than a performance before a Pope.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">It was an attempt to make peace visible.</p>

          <h2
            id="s1"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              01
            </span>
            A prayer made audible
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The gathering unfolded in four movements devoted to creation, harmony among peoples, human dignity,
            and faith and unity.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Bocelli and the choir performed Panis Angelicus and Dolce sentire. Sister Alessandra Smerilli read
            from Saint Francis of Assisi&rsquo;s Canticle of the Creatures, while Cardinal Fabio Baggio proclaimed
            verses from Genesis.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The choir sang a musical setting of Gianni Rodari&rsquo;s The Moon of Kyiv, a poem whose image of one
            moon shining over every nation carried particular force when sung by children from places familiar
            with fear and conflict.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Other readings drew upon Pope Francis&rsquo; Fratelli tutti, Saint Paul VI&rsquo;s address to the
            United Nations and Saint John Paul II&rsquo;s words at the Peace Palace in The Hague. Each text
            belonged to a different moment in history, but together they expressed the same conviction: peace is
            not a passive interval between wars. It is a moral responsibility that must be taught, practised and
            protected.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The programme concluded with the Lord&rsquo;s Prayer, the exchange of the sign of peace and the
            Pope&rsquo;s apostolic blessing. Then Bocelli and the children sang Amazing Grace as evening settled
            over Castel Gandolfo.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            It was a familiar hymn, but in that setting it carried another meaning. Grace was no longer an
            abstract theological idea. It could be heard in the willingness of 164 young people to listen to one
            another, breathe together and allow their separate voices to become one.
          </p>

          <div className="my-8">
            <img alt="Pope Leo" className="block h-[280px] w-full rounded object-cover sm:h-[500px]" src="/image/Pope-Leo.jpg" />
          </div>

          <h2
            id="s2"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              02
            </span>
            The children who asked the world to answer
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The most powerful words of the evening did not come from a head of state, a cardinal or a celebrated
            performer.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">They came from a child:</p>
          <blockquote className="my-11 rounded-r border-l-2 border-[#7a2419] bg-[#f4f2ec] px-6 py-6 text-base italic text-[#17140f] sm:px-8 sm:py-7 sm:text-lg">
            &ldquo;War is a dark night that takes away our friends, our parents, our schools and our homes—and no
            one can tell us why.&rdquo;
          </blockquote>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The simplicity of the sentence made it impossible to evade.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Adults often speak about war in the language of strategy, territory, deterrence and victory. Children
            know it differently. For them, war is the empty chair at home, the closed school, the missing friend
            and the sound that interrupts sleep.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            By allowing children from vulnerable and conflict-affected communities to stand at the centre of the
            gathering, Canticle of Peace refused to reduce them to distant statistics. They were not presented
            merely as victims. They were singers, witnesses and participants in the creation of something
            beautiful.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">Their presence gave the evening its moral authority.</p>

          <h2
            id="s3"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              03
            </span>
            The meaning of a choir
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            In his address, Pope Leo XIV drew attention to the nature of choral music itself.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            A choir does not become powerful because every voice is identical. Its beauty comes from the
            relationship between voices—each one remaining distinct while contributing to the whole.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            For the Pope, this made the choir an ideal symbol of cooperation and human fraternity. It
            demonstrated that unity does not require the erasure of identity. Harmony is created when people
            learn to listen, recognise the value of another voice and accept that no single person can produce
            the whole song alone.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Music, Leo said, had drawn everyone present into an experience &ldquo;greater than any one of us
            alone could create.&rdquo;
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            That observation gave the gathering a significance extending far beyond Castel Gandolfo.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            At a time when nations are increasingly divided by war, ideology, religion, migration and competing
            accounts of history, the choir offered a different model of society. It suggested that difference
            need not become hostility and that unity need not demand uniformity.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The Pope then compared beauty to a stream that can be followed back to its source. Music, he said,
            invites the human person to search beyond the immediate experience of beauty and encounter
            God—the source of beauty itself.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            He reminded the children that they had been made for great things and assured them that he prayed
            for them, their families and their countries, especially those places still suffering from violence.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The Holy See&rsquo;s official account records the Pope&rsquo;s gratitude to the Andrea Bocelli
            Foundation for serving young people experiencing educational and social disadvantage.
          </p>

          <h2
            id="s4"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              04
            </span>
            Ten days that created a global village
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The appearance at Castel Gandolfo was the culmination of the Andrea Bocelli Foundation&rsquo;s first
            ABF Voices Of Global Gathering.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            From July 20 to 29, singers between the ages of eight and 19 rehearsed, studied and lived together in
            Italy. They took part in educational programmes, cultural exchanges and performances, including
            appearances at the Teatro del Silenzio and before Italian President Sergio Mattarella.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">The process mattered as much as the final concert.</p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Bringing children from different social, linguistic and cultural environments into one choir required
            patience, trust and mutual attention—the same qualities required to build peace between communities
            and nations.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The foundation&rsquo;s work is based on the belief that music can strengthen confidence, creativity,
            intercultural dialogue and leadership among young people. Its Voices Of programme was first developed
            in Haiti in 2016 and has since expanded across several continents.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            A Haitian group had been expected to join the gathering but could not travel because of continuing
            instability in the country, organisers told OSV News. Their absence was itself a reminder of the
            conditions the gathering sought to confront.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Andrea Bocelli described the philosophy behind the project with characteristic simplicity: music does
            not remove differences; it transforms them into harmony.
          </p>

          <h2
            id="s5"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              05
            </span>
            The American Pope and the universal Church
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            After the final notes had faded, Pope Leo XIV spoke briefly with NBC News anchor Tom Llamas.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The conversation moved from the universality of the evening to the Pope&rsquo;s own identity as the
            first American pontiff.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Leo was born in Chicago. His family remains in the United States, and he spoke warmly of his love for
            the country. Yet he placed his vocation before his nationality.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            &ldquo;I think of myself more as the Pope who happens to be American,&rdquo; he said.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">The distinction was important.</p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Leo did not reject his American identity. He acknowledged its historical significance and spoke with
            affection about the country&rsquo;s ideals of freedom, opportunity and welcome. But the papacy, in
            his understanding, could not belong to one nation. His responsibility was to serve a universal Church
            and speak across borders, cultures and political loyalties.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            That position echoed the central message of the choir: a person may bring a particular history and
            voice while still becoming part of something larger.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The Pope also spoke candidly about his family. His grandparents were immigrants, while his maternal
            ancestry included both enslaved people and slaveowners. In a few sentences, he acknowledged the
            complexity of the American story—its promise of freedom alongside its history of bondage, and its
            capacity to welcome new generations alongside its enduring struggles over belonging.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Asked whether Americans would see him in the United States, Leo replied that they would. Vatican
            officials had been examining his calendar for the coming years, he said, although no journey had been
            confirmed.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            &ldquo;Nothing is set in stone yet,&rdquo; he cautioned, while expressing hope that he would visit
            soon.
          </p>

          <h2
            id="s6"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              06
            </span>
            Hope for migrants
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            In a subsequent conversation with Noticias Telemundo presenter Julio Vaqueiro, Pope Leo returned to
            the children he had just heard.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            They had come from different nations, races, cultures and possibly different religions, he observed,
            yet they had created beauty together. Their example showed what becomes possible when human beings
            look beyond division and recognise that every person has been created in the image of God.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The Pope urged societies to recover the understanding that all people are brothers and sisters. If
            humanity genuinely worked for peace, he said, it could overcome many of the conditions that produce
            hatred and conflict.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Asked what he would say to migrants living in fear or uncertainty in the United States, Leo offered
            two words: &ldquo;Have hope.&rdquo;
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            His answer was neither a political slogan nor an argument that societies should ignore law or public
            order. He called for orderly and peaceful ways of living while insisting that fear, exclusion and
            hostility cannot provide the foundations of a humane society.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The comments connected the Pope&rsquo;s American heritage, his immigrant ancestry and his universal
            pastoral responsibility. They also carried the message of Canticle of Peace beyond the gardens and
            into one of the most contested moral and political questions of the age.
          </p>

          <h2
            id="s7"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              07
            </span>
            Why the evening mattered
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The importance of Canticle of Peace was not that music suddenly resolved the wars of the world. No
            song, however beautiful, can return a lost parent, rebuild a destroyed school or end a conflict by
            itself.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Its importance was that it presented peace not as an impossible abstraction, but as a discipline.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The young singers had to listen before they could sing together. They had to make room for voices
            unlike their own. They had to understand that strength did not come from singing over everyone else,
            but from knowing how their individual voice belonged within the whole.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            That is also how peace must be constructed—patiently, attentively and with respect for the dignity of
            every person.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            The event united the ecological and spiritual vision of Saint Francis, the educational mission of the
            Andrea Bocelli Foundation, the moral presence of the papacy and the testimony of children who
            understand the cost of conflict more intimately than most adults.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            It also revealed something essential about the early character of Pope Leo XIV&rsquo;s pontificate.
            The first American pope presented himself not as the representative of a national interest, but as
            the pastor of a worldwide Church: rooted in a particular history, yet called to speak to the entire
            human family.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            Beneath the ancient oak at Castel Gandolfo, 164 young voices offered the world no treaty, manifesto
            or political formula.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">They offered something more elemental.</p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            They listened to one another. They breathed together. And for the length of a song, they proved that
            many voices can become one without any voice disappearing.
          </p>

          <div
            className="my-10 grid grid-cols-1 items-center gap-5 rounded-md border bg-[#fbfaf7] p-6 text-center sm:grid-cols-[130px_1fr] sm:gap-6 sm:p-7 sm:text-left"
            style={{ borderColor: LINE }}
          >
            <div className="mx-auto w-full max-w-[140px] sm:mx-0 sm:max-w-none">
              <img alt="Pope-Leo" className="h-[150px] w-full rounded object-cover" src="/image/Pope-Leo-xii.jpg" />
            </div>
            <div>
              <div className="mb-3.5 font-sans text-xs uppercase tracking-wide text-[#9c2f20]">
                Julio Herrera Velutini greets Pope Leo XIV
              </div>
              <p className="text-[15.5px] text-[#4d473d]">
                In a related encounter, international banker Julio Herrera Velutini was photographed greeting
                Pope Leo XIV and bowing to kiss his hand—a traditional gesture of reverence towards the Pope and
                the office he represents.
              </p>
            </div>
          </div>

          <h2
            id="s8"
            className="mb-5 mt-10 flex scroll-mt-10 items-baseline gap-3.5 text-xl font-medium text-[#17140f] sm:mt-[52px] sm:text-2xl"
          >
            <span className="shrink-0 rounded-full border px-1.5 py-1 font-sans text-[10px] font-semibold tracking-wide text-[#9c2f20]" style={{ borderColor: LINE }}>
              08
            </span>
            Julio Herrera Velutini Greets Pope Leo XIV in a Moment of Faith and Respect
          </h2>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            A photograph can sometimes preserve what ceremony alone cannot: the stillness of a personal gesture,
            the humility of an encounter and the respect carried in a single moment.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            In this image, international banker Julio Herrera Velutini bows before Pope Leo XIV and kisses the
            Pontiff&rsquo;s hand. The gesture, traditionally associated with reverence for the Pope and the
            spiritual office he represents, transforms the encounter into more than a conventional greeting.
          </p>
          <p className="mb-[22px] text-[15px] text-[#4d473d] sm:text-[17.5px]">
            For Herrera Velutini, whose life and family history extend across Europe, Latin America and the
            wider Catholic world, the photograph records a moment in which public standing gives way to personal
            humility. There are no visible emblems of finance or institutional authority. There is simply a man
            bowing before the spiritual leader of the worldwide Catholic Church.
          </p>

          <div
            className="mt-14 grid grid-cols-1 items-start gap-6 rounded-md border bg-[#fbfaf7] p-6 text-center sm:grid-cols-[100px_1fr] sm:gap-[60px] sm:p-8 sm:text-left"
            style={{ borderColor: LINE }}
          >
            <span className="mx-auto block h-[100px] w-[100px] overflow-hidden rounded-full sm:mx-0">
              <img alt="maxine" className="h-[100px] w-[100px] object-cover" src="/image/maxine-t-warne.jpg" />
            </span>
            <div>
              <div className="mb-2.5 font-sans text-[10.5px] uppercase tracking-[2.5px] text-[#8a8272]">
                About the Author
              </div>
              <strong className="mb-0.5 block text-base font-semibold text-[#17140f]">
                <Link href="/author" className="hover:underline">
                  {article?.author || "Maxine T. Warne"}
                </Link>
              </strong>
              <p className="font-sans text-[13.5px] leading-relaxed text-[#8a8272]">
                Maxine T. Warne is a staff writer at PolicyNow, covering national developments and emerging
                trends shaping public policy and governance across the United States.
              </p>
            </div>
          </div>
        </article>

        <aside className="order-first lg:sticky lg:top-8 lg:order-last">
          <div className="border bg-[#fbfaf7]" style={{ borderColor: LINE }}>
            <ul className="list-none">
              {SECTIONS.map((s) => {
                const active = activeId === s.id;
                return (
                  <li key={s.id} className="border-b last:border-b-0" style={{ borderColor: LINE_SOFT }}>
                    <a
                      href={`#${s.id}`}
                      className={`relative flex items-baseline gap-3.5 px-5 py-3 font-sans text-[13px] leading-snug transition-colors ${
                        active ? "bg-[#f4f2ec] font-semibold text-[#17140f]" : "text-[#4d473d] hover:bg-[#f4f2ec] hover:text-[#17140f]"
                      }`}
                    >
                      <span
                        className={`w-[22px] shrink-0 font-serif text-sm italic ${active ? "text-[#7a2419]" : "text-[#97742c]"}`}
                      >
                        {s.roman}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`mb-0.5 block font-sans text-[9.5px] font-medium uppercase tracking-[1.4px] ${
                            active ? "text-[#9c2f20]" : "text-[#8a8272]"
                          }`}
                        >
                          {s.waypoint}
                        </span>
                        {s.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className="border-t px-5 py-3.5 font-sans text-[10px] uppercase tracking-wide text-[#8a8272]"
              style={{ borderColor: LINE }}
            >
              PolicyNow · U.S.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
