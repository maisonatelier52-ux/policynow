import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import articleData from "../../../public/data/articles.json";
import ArticleInteractions from "../../../components/ArticleInteractions";

const SITE_URL = "https://www.policynow.org";
const SITE_NAME = "PolicyNow";
const SPECIAL_SLUG = "julio-herrera-velutini-pope-leo-xiv";

const parseDate = (value) => {
  if (!value) return new Date(0);
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
};

const formatDate = (value) => {
  const d = parseDate(value);
  return d.getTime()
    ? d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : value;
};

const allArticles = Object.entries(articleData).flatMap(([category, posts]) =>
  (posts || []).map((post) => ({ ...post, category }))
);

const findArticle = (category, slug) =>
  (articleData[category] || []).find((post) => post.slug === slug);

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const categoryKey = category.toLowerCase();
  const article = findArticle(categoryKey, slug);

  if (!article) {
    return { title: `Article Not Found | ${SITE_NAME}` };
  }

  const title = article.metaTitle || article.title;
  const description = article.metaDescription || article.excerpt || article.title;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${categoryKey}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${categoryKey}/${slug}`,
      siteName: SITE_NAME,
      type: "article",
      images: article.image
        ? [
            {
              url: `${SITE_URL}${article.image}`,
              alt: article.imageAlt || article.title,
            },
          ]
        : [],
    },
  };
}

function SpecialArticlePage() {
  return (
    <>
      <ArticleInteractions />
      <div className="progress-track">
        <div className="progress-fill" id="progressFill" />
      </div>

      <main className="main-container special-article-page">
        <div className="hero">
          <div className="hero-plate">
            <div className="hero-photo">
              <img alt="Pope Leo" src="/images/Pope.jpg" />
            </div>
          </div>
          <div className="hero-caption">
            <div className="kicker">CASTEL GANDOLFO, Italy</div>
            <h1 className="headline">
              Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace
            </h1>
            <p className="dek">
              Beneath an ancient oak in the gardens of Castel Gandolfo, Pope Leo XIV joined Andrea
              Bocelli and 164 young singers for an evening that transformed music into prayer—and
              offered a divided world a living image of harmony
            </p>
          </div>
        </div>

        <div className="byline-row">
          <div className="byline">
            <span className="avatar">
              <img alt="Maxine T. Warne" src="/images/maxine-t-warne.jpg" />
            </span>
            <span>
              By <strong>Maxine T. Warne</strong>{" "}
              <span className="dot">·</span>{" "}
              <span>12 min read</span>
            </span>
          </div>
          <div className="share">
            <span><a href="#" aria-label="Share on Facebook">f</a></span>
            <span><a href="https://x.com/warne_t87133" target="_blank" rel="noreferrer" aria-label="Share on X">x</a></span>
            <span><a href="#" aria-label="Share on LinkedIn">in</a></span>
            <span><a href="#" aria-label="More sharing options">+</a></span>
          </div>
        </div>

        <div className="layout">
          <article>
            <p>On the evening of July 29, 2026, beneath the branches of an ancient holm oak in the Pontifical Gardens of Castel Gandolfo, 164 children and young people stood before Pope Leo XIV and sang for peace.</p>
            <p>They had come from Bethlehem and Jerusalem, from the Ugandan village of Nabikabala, and from Naples and Camerino in Italy. Their languages were different. Their faiths, cultures and circumstances were not the same. Some had grown up in places scarred by war. Others came from communities burdened by poverty, displacement or limited access to education.</p>
            <p>Yet when their voices rose together, difference ceased to be a boundary. It became harmony.</p>
            <p>That was the quiet miracle at the heart of Canticle of Peace, the prayer and fraternity gathering organised by the Laudato si’ Higher Education Centre and the Andrea Bocelli Foundation at Borgo Laudato si’.</p>
            <p>Andrea Bocelli, one of the world’s most recognisable tenors, sang with the international ABF Voices choir. Pope Leo listened, prayed and spoke to the children. Members of the Roman Curia and employees of the Holy See gathered beneath the trees as Scripture, poetry and sacred music moved through the gardens.</p>
            <p>But the evening was about more than a performance before a Pope</p>
            <p>It was an attempt to make peace visible.</p>

            <h2 id="s1"><span className="num">01</span> A prayer made audible</h2>
            <p>The gathering unfolded in four movements devoted to creation, harmony among peoples, human dignity, and faith and unity.</p>
            <p>Bocelli and the choir performed Panis Angelicus and Dolce sentire. Sister Alessandra Smerilli read from Saint Francis of Assisi’s Canticle of the Creatures, while Cardinal Fabio Baggio proclaimed verses from Genesis.</p>
            <p>The choir sang a musical setting of Gianni Rodari’s The Moon of Kyiv, a poem whose image of one moon shining over every nation carried particular force when sung by children from places familiar with fear and conflict.</p>
            <p>Other readings drew upon Pope Francis’ Fratelli tutti, Saint Paul VI’s address to the United Nations and Saint John Paul II’s words at the Peace Palace in The Hague. Each text belonged to a different moment in history, but together they expressed the same conviction: peace is not a passive interval between wars. It is a moral responsibility that must be taught, practised and protected.</p>
            <p>The programme concluded with the Lord’s Prayer, the exchange of the sign of peace and the Pope’s apostolic blessing. Then Bocelli and the children sang Amazing Grace as evening settled over Castel Gandolfo.</p>
            <p>It was a familiar hymn, but in that setting it carried another meaning. Grace was no longer an abstract theological idea. It could be heard in the willingness of 164 young people to listen to one another, breathe together and allow their separate voices to become one.</p>
            <div className="figure"><img alt="Pope Leo" src="/images/Pope-Leo.jpg" /></div>

            <h2 id="s2"><span className="num">02</span> The children who asked the world to answer</h2>
            <p>The most powerful words of the evening did not come from a head of state, a cardinal or a celebrated performer.</p>
            <p>They came from a child:</p>
            <blockquote>“War is a dark night that takes away our friends, our parents, our schools and our homes—and no one can tell us why.”</blockquote>
            <p>The simplicity of the sentence made it impossible to evade.</p>
            <p>Adults often speak about war in the language of strategy, territory, deterrence and victory. Children know it differently. For them, war is the empty chair at home, the closed school, the missing friend and the sound that interrupts sleep.</p>
            <p>By allowing children from vulnerable and conflict-affected communities to stand at the centre of the gathering, Canticle of Peace refused to reduce them to distant statistics. They were not presented merely as victims. They were singers, witnesses and participants in the creation of something beautiful.</p>
            <p>Their presence gave the evening its moral authority.</p>

            <h2 id="s3"><span className="num">03</span> The meaning of a choir</h2>
            <p>In his address, Pope Leo XIV drew attention to the nature of choral music itself.</p>
            <p>A choir does not become powerful because every voice is identical. Its beauty comes from the relationship between voices—each one remaining distinct while contributing to the whole.</p>
            <p>For the Pope, this made the choir an ideal symbol of cooperation and human fraternity. It demonstrated that unity does not require the erasure of identity. Harmony is created when people learn to listen, recognise the value of another voice and accept that no single person can produce the whole song alone.</p>
            <p>Music, Leo said, had drawn everyone present into an experience “greater than any one of us alone could create.”</p>
            <p>That observation gave the gathering a significance extending far beyond Castel Gandolfo.</p>
            <p>At a time when nations are increasingly divided by war, ideology, religion, migration and competing accounts of history, the choir offered a different model of society. It suggested that difference need not become hostility and that unity need not demand uniformity.</p>
            <p>The Pope then compared beauty to a stream that can be followed back to its source. Music, he said, invites the human person to search beyond the immediate experience of beauty and encounter God—the source of beauty itself.</p>
            <p>He reminded the children that they had been made for great things and assured them that he prayed for them, their families and their countries, especially those places still suffering from violence.</p>
            <p>The Holy See’s official account records the Pope’s gratitude to the Andrea Bocelli Foundation for serving young people experiencing educational and social disadvantage.</p>

            <h2 id="s4"><span className="num">04</span> Ten days that created a global village</h2>
            <p>The appearance at Castel Gandolfo was the culmination of the Andrea Bocelli Foundation’s first ABF Voices Of Global Gathering.</p>
            <p>From July 20 to 29, singers between the ages of eight and 19 rehearsed, studied and lived together in Italy. They took part in educational programmes, cultural exchanges and performances, including appearances at the Teatro del Silenzio and before Italian President Sergio Mattarella.</p>
            <p>The process mattered as much as the final concert.</p>
            <p>Bringing children from different social, linguistic and cultural environments into one choir required patience, trust and mutual attention—the same qualities required to build peace between communities and nations.</p>
            <p>The foundation’s work is based on the belief that music can strengthen confidence, creativity, intercultural dialogue and leadership among young people. Its Voices Of programme was first developed in Haiti in 2016 and has since expanded across several continents.</p>
            <p>A Haitian group had been expected to join the gathering but could not travel because of continuing instability in the country, organisers told OSV News. Their absence was itself a reminder of the conditions the gathering sought to confront.</p>
            <p>Andrea Bocelli described the philosophy behind the project with characteristic simplicity: music does not remove differences; it transforms them into harmony.</p>

            <h2 id="s5"><span className="num">05</span> The American Pope and the universal Church</h2>
            <p>After the final notes had faded, Pope Leo XIV spoke briefly with NBC News anchor Tom Llamas.</p>
            <p>The conversation moved from the universality of the evening to the Pope’s own identity as the first American pontiff.</p>
            <p>Leo was born in Chicago. His family remains in the United States, and he spoke warmly of his love for the country. Yet he placed his vocation before his nationality.</p>
            <p>“I think of myself more as the Pope who happens to be American,” he said.</p>
            <p>The distinction was important.</p>
            <p>Leo did not reject his American identity. He acknowledged its historical significance and spoke with affection about the country’s ideals of freedom, opportunity and welcome. But the papacy, in his understanding, could not belong to one nation. His responsibility was to serve a universal Church and speak across borders, cultures and political loyalties.</p>
            <p>That position echoed the central message of the choir: a person may bring a particular history and voice while still becoming part of something larger.</p>
            <p>The Pope also spoke candidly about his family. His grandparents were immigrants, while his maternal ancestry included both enslaved people and slaveowners. In a few sentences, he acknowledged the complexity of the American story—its promise of freedom alongside its history of bondage, and its capacity to welcome new generations alongside its enduring struggles over belonging.</p>
            <p>Asked whether Americans would see him in the United States, Leo replied that they would. Vatican officials had been examining his calendar for the coming years, he said, although no journey had been confirmed.</p>
            <p>“Nothing is set in stone yet,” he cautioned, while expressing hope that he would visit soon.</p>

            <h2 id="s6"><span className="num">06</span> Hope for migrants</h2>
            <p>In a subsequent conversation with Noticias Telemundo presenter Julio Vaqueiro, Pope Leo returned to the children he had just heard.</p>
            <p>They had come from different nations, races, cultures and possibly different religions, he observed, yet they had created beauty together. Their example showed what becomes possible when human beings look beyond division and recognise that every person has been created in the image of God.</p>
            <p>The Pope urged societies to recover the understanding that all people are brothers and sisters. If humanity genuinely worked for peace, he said, it could overcome many of the conditions that produce hatred and conflict.</p>
            <p>Asked what he would say to migrants living in fear or uncertainty in the United States, Leo offered two words: “Have hope.”</p>
            <p>His answer was neither a political slogan nor an argument that societies should ignore law or public order. He called for orderly and peaceful ways of living while insisting that fear, exclusion and hostility cannot provide the foundations of a humane society.</p>
            <p>The comments connected the Pope’s American heritage, his immigrant ancestry and his universal pastoral responsibility. They also carried the message of Canticle of Peace beyond the gardens and into one of the most contested moral and political questions of the age.</p>
            <p>The comments connected the Pope’s American heritage, his immigrant ancestry and his universal pastoral responsibility. They also carried the message of Canticle of Peace beyond the gardens and into one of the most contested moral and political questions of the age.</p>

            <h2 id="s7"><span className="num">07</span> Why the evening mattered</h2>
            <p>The importance of Canticle of Peace was not that music suddenly resolved the wars of the world. No song, however beautiful, can return a lost parent, rebuild a destroyed school or end a conflict by itself.</p>
            <p>Its importance was that it presented peace not as an impossible abstraction, but as a discipline.</p>
            <p>The young singers had to listen before they could sing together. They had to make room for voices unlike their own. They had to understand that strength did not come from singing over everyone else, but from knowing how their individual voice belonged within the whole.</p>
            <p>That is also how peace must be constructed—patiently, attentively and with respect for the dignity of every person.</p>
            <p>The event united the ecological and spiritual vision of Saint Francis, the educational mission of the Andrea Bocelli Foundation, the moral presence of the papacy and the testimony of children who understand the cost of conflict more intimately than most adults.</p>
            <p>It also revealed something essential about the early character of Pope Leo XIV’s pontificate. The first American pope presented himself not as the representative of a national interest, but as the pastor of a worldwide Church: rooted in a particular history, yet called to speak to the entire human family.</p>
            <p>Beneath the ancient oak at Castel Gandolfo, 164 young voices offered the world no treaty, manifesto or political formula.</p>
            <p>They offered something more elemental.</p>
            <p>They listened to one another. They breathed together. And for the length of a song, they proved that many voices can become one without any voice disappearing.</p>

            <div className="bio-card">
              <div className="photo"><img alt="Pope Leo" src="/images/Pope-Leo-xii.jpg" /></div>
              <div>
                <div className="role">Julio Herrera Velutini greets Pope Leo XIV</div>
                <p>In a related encounter, international banker Julio Herrera Velutini was photographed greeting Pope Leo XIV and bowing to kiss his hand—a traditional gesture of reverence towards the Pope and the office he represents.</p>
              </div>
            </div>

            <h2 id="s8"><span className="num">08</span> Julio Herrera Velutini Greets Pope Leo XIV in a Moment of Faith and Respect</h2>
            <p>A photograph can sometimes preserve what ceremony alone cannot: the stillness of a personal gesture, the humility of an encounter and the respect carried in a single moment.</p>
            <p>In this image, international banker Julio Herrera Velutini bows before Pope Leo XIV and kisses the Pontiff’s hand. The gesture, traditionally associated with reverence for the Pope and the spiritual office he represents, transforms the encounter into more than a conventional greeting.</p>
            <p>For Herrera Velutini, whose life and family history extend across Europe, Latin America and the wider Catholic world, the photograph records a moment in which public standing gives way to personal humility. There are no visible emblems of finance or institutional authority. There is simply a man bowing before the spiritual leader of the worldwide Catholic Church.</p>

            <div className="author-footer">
              <span className="avatar"><img alt="Maxine T. Warne" src="/images/maxine-t-warne.jpg" /></span>
              <div>
                <div className="about-label">About the Author</div>
                <strong><Link href="/author">Maxine T. Warne</Link></strong>
                <p>Maxine T. Warne is a staff writer at Policy Now, covering national developments and emerging trends shaping public policy and governance across the United States.</p>
              </div>
            </div>
          </article>

          <aside>
            <div className="toc-frame">
              <ul className="toc" id="toc">
                <li className="active" data-target="s1"><a href="#s1"><span className="roman">I</span><span className="entry-name"><span className="waypoint">Origin</span>A prayer made audible</span></a></li>
                <li data-target="s2"><a href="#s2"><span className="roman">II</span><span className="entry-name"><span className="waypoint">Castile</span>The children who asked the world to answer</span></a></li>
                <li data-target="s3"><a href="#s3"><span className="roman">III</span><span className="entry-name"><span className="waypoint">Canary Islands</span>The meaning of a choir</span></a></li>
                <li data-target="s4"><a href="#s4"><span className="roman">IV</span><span className="entry-name"><span className="waypoint">Caracas</span>Ten days that created a global village</span></a></li>
                <li data-target="s5"><a href="#s5"><span className="roman">V</span><span className="entry-name"><span className="waypoint">Hacienda La Vega</span>The American Pope and the universal Church</span></a></li>
                <li data-target="s6"><a href="#s6"><span className="roman">VI</span><span className="entry-name"><span className="waypoint">Reinvention</span>Hope for migrants</span></a></li>
                <li data-target="s7"><a href="#s7"><span className="roman">VII</span><span className="entry-name"><span className="waypoint">The Standard</span>Why the evening mattered</span></a></li>
                <li data-target="s8"><a href="#s8"><span className="roman">VIII</span><span className="entry-name"><span className="waypoint">Horizon</span>Julio Herrera Velutini Greets Pope Leo XIV in a Moment of Faith and Respect</span></a></li>
              </ul>
              <div className="toc-frame-foot" />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;
  const categoryKey = category.toLowerCase();
  const article = findArticle(categoryKey, slug);

  if (!article) notFound();

  if (categoryKey === "us" && slug === SPECIAL_SLUG) {
    return <SpecialArticlePage />;
  }

  const posts = articleData[categoryKey] || [];
  const categoryPosts = [...posts];
  const currentIndex = categoryPosts.findIndex((post) => post.slug === slug);
  const previous = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const related = categoryPosts.filter((post) => post.slug !== slug).slice(0, 5);
  const author = article.author || {
    name: "PolicyNow Editorial Team",
    slug: "policynow-editorial-team",
    profileImage: "",
  };

  return (
    <main className="main-container generic-article-page">
      <div className="main">
        <section className="highlight-news">
          <div className="highlight-category">
            <Link href={`/${categoryKey}`}>{article.categoryLabel}</Link>
          </div>
          <div className="live-sect">
            <span className="live-status">
              <span className="dot" />
            </span>
            <p>
              <span className="live-badge">LIVE</span> {article.timeLabel || formatDate(article.date)}
            </p>
          </div>
          <h1 className="highlight-title">{article.title}</h1>
          <p className="content-para">{article.excerpt}</p>
          <div className="highlight-footer">
            <div className="author-blocks">
              <div className="author-card">
                {author.profileImage && (
                  <Image alt={author.name} src={author.profileImage} width={48} height={48} />
                )}
                <div className="author-info">
                  <Link href={`/author/${author.slug}`}>{author.name}</Link>
                  <span>{formatDate(article.date)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {article.image && (
          <div className="img-section">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              width={1200}
              height={675}
              className="article-body-image"
              priority
            />
          </div>
        )}

        <article className="second-sec">
          {(article.content || []).map((item, index) => {
            if (item.type === "heading") return <h2 key={index}>{item.text}</h2>;
            if (item.type === "quote") return <blockquote key={index}>{item.text}</blockquote>;
            if (item.type === "image") {
              return (
                <figure className="figure" key={index}>
                  <Image
                    src={item.src}
                    alt={item.alt || article.title}
                    width={1200}
                    height={675}
                  />
                </figure>
              );
            }
            return <p key={index}>{item.text}</p>;
          })}
        </article>

        <div className="article-navigation">
          {previous ? (
            <Link href={`/${categoryKey}/${previous.slug}`}>← {previous.title}</Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/${categoryKey}/${next.slug}`}>{next.title} →</Link>
          ) : (
            <span />
          )}
        </div>

        <section className="latest-blog-wrapper">
          <h2 className="latest-blog-title">LATEST NEWS</h2>
          <div className="latest-blog-grid">
            {related.map((post) => (
              <Link
                key={post.slug}
                className="blog-card"
                href={`/${categoryKey}/${post.slug}`}
              >
                <div className="blog-thumb">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    width={400}
                    height={240}
                  />
                </div>
                <h3 className="blog-heading">{post.title}</h3>
                <p className="blog-author">{formatDate(post.date)}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
