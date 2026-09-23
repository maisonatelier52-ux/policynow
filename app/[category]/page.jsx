import { notFound } from "next/navigation";

const CATEGORY_KEYS = ["technology-and-innovation", "business-and-economy", "finance-and-markets", "featured-pr", "global-affairs", "us", "politics-and-policy"];

export async function generateStaticParams() {
  return CATEGORY_KEYS.map((category) => ({ category }));
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  switch (category.toLowerCase()) {
    case "technology-and-innovation":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>Technology & Innovation</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="ChatGPT chief says artificial intelligence" height="385" src="/images/chatgpt-chief-says-artificial-intelligence.webp" width="579" />
              <h2>
                <a href="/technology-and-innovation/chatgpt-chief-says-artificial-intelligence-should-be-regulated-by-a-us-or-global-agency" title="ChatGPT chief says artificial intelligence should be regulated by a US or global agency">ChatGPT chief says artificial intelligence should be regulated by a US or global agency</a>
              </h2>
              <p className="bus-p">The head of the artificial intelligence company that makes ChatGPT told Congress on Tuesday that government intervention...</p>
              <div className="article-meta">February 06, 2026 · JOEL J. ZARATE</div>
            </div>
            <div className="mid-story">
              <img alt="First major attempts to regulate AI face" height="119" src="/images/first-major-attempts-to-regulate-ai-face.webp" width="179" />
              <h4>
                <a href="/technology-and-innovation/first-major-attempts-to-regulate-ai-face-headwinds-from-all-sides" title="First major attempts to regulate AI face headwinds from all sides">First major attempts to regulate AI face headwinds from all sides</a>
              </h4>
              <p className="bus-p">Artificial intelligence is helping decide which Americans get the job interview, the apartment, even medical care...</p>
              <div className="article-meta">February 06, 2026 · JOEL J. ZARATE</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="US and global economic outlook" height="113" src="/images/massachusetts-official-warns-ai-systems.webp" width="200" />
                <h5>
                  <a href="/technology-and-innovation/massachusetts-official-warns-ai-systems-subject-to-consumer-protection-anti-bias-laws" title="Massachusetts official warns AI systems subject to consumer protection, anti-bias laws">Massachusetts official warns AI systems subject to consumer protection, anti-bias laws</a>
                </h5>
                <p className="bus-p">Developers, suppliers, and users of artificial intelligence must comply with existing state consumer protection...</p>
                <div className="article-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-wrapper">
          <div className="article-feed">
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/technology-and-innovation/tech-industry-tried-reducing-ais-pervasive-bias-now-trump-wants-to-end-its-woke-ai-efforts" title="Tech industry tried reducing AI’s pervasive bias. Now Trump wants to end its ‘woke AI’ efforts">Tech industry tried reducing AI’s pervasive bias. Now Trump wants to end its ‘woke AI’ efforts</a>
                </h3>
                <p className="bus-p">After retreating from their workplace diversity, equity and inclusion programs, tech companies could...</p>
                <div className="feed-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
              <div className="feed-image">
                <img alt="Tech industry tried reducing AI’s pervasive bias" height="162" src="/images/tech-industry-tried-reducing-ais-pervasive-bias.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/technology-and-innovation/u-s-civil-rights-enforcers-warn-employers-against-biased-ai" title="U.S. civil rights enforcers warn employers against biased AI">U.S. civil rights enforcers warn employers against biased AI</a>
                </h3>
                <p className="bus-p">The federal government said Thursday that artificial intelligence technology to screen new job candidates...</p>
                <div className="feed-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
              <div className="feed-image">
                <img alt="U.S. civil rights enforcers warn employers" height="162" src="/images/u-s-civil-rights-enforcers-warn-employers.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/technology-and-innovation/congress-eyes-new-rules-for-tech-whats-under-consideration" title="Congress eyes new rules for tech: What’s under consideration">Congress eyes new rules for tech: What’s under consideration</a>
                </h3>
                <p className="bus-p">Most Democrats and Republicans agree that the federal government should better regulate the...</p>
                <div className="feed-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
              <div className="feed-image">
                <img alt="Congress eyes new rules" height="162" src="/images/congress-eyes-new-rules.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/technology-and-innovation/us-government-allowed-and-even-helped-us-firms-sell-tech-used-for-surveillance-in-china" title="US government allowed and even helped US firms sell tech used for surveillance in China, AP finds">US government allowed and even helped US firms sell tech used for surveillance in China, AP finds</a>
                </h3>
                <p className="bus-p">U.S. lawmakers have tried four times since September last year to close what they called a glaring...</p>
                <div className="feed-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
              <div className="feed-image">
                <img alt="US government allowed and even helped" height="162" src="/images/us-government-allowed-and-even-helped.webp" width="244" />
              </div>
            </div>
          </div>
          <aside className="side-panel">
            <div className="side-box">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/politics-and-policy" title="Politics & Policy">Politics & Policy</a>
                </li>
                <li>
                  <a href="/business-and-economy" title="Business & Economy">Business & Economy</a>
                </li>
                <li>
                  <a href="/global-affairs" title="Global Affairs">Global Affairsure</a>
                </li>
                <li>
                  <a href="/finance-and-markets" title="Finance & Markets">Finance & Markets</a>
                </li>
                <li>
                  <a href="/featured-pr" title="Featured PR">Featured PR</a>
                </li>
              </ul>
            </div>
            <div className="side-box">
              <h4>FOLLOW</h4>
              <div className="social-links">
                <a className="social-icon" href="#" title="instagram">
                  <i className="fa-brands fa-instagram-f"></i>
                </a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="twitter">
                  <i className="fa-brands fa-x-twitter fa-sm"></i>
                </a>
                <a className="social-icon" href="#" title="substack">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="social-icon" href="#" title="envelope">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="side-box newsletter1">
              <h4>NEWSLETTER</h4>
              <form>
                <input placeholder="Your name" type="text" />
                <input placeholder="Your email address" type="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
        </>
      );
    case "business-and-economy":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>Business & Economy</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="Federal Reserve likely to cut key rate" height="385" src="/images/federal-reserve-likely-to-cut-key-rate.webp" width="579" />
              <h2>
                <a href="/business-and-economy/federal-reserve-likely-to-cut-key-rate-wednesday-and-may-signal-another-cut-to-follow" title="Federal Reserve likely to cut key rate Wednesday and may signal another cut to follow">Federal Reserve likely to cut key rate Wednesday and may signal another cut to follow</a>
              </h2>
              <p className="bus-p">The Federal Reserve will almost certainly cut its key interest rate on Wednesday and could signal it expects another...</p>
              <div className="article-meta">February 06, 2026 · MAXINE T. WARNE</div>
            </div>
            <div className="mid-story">
              <img alt="A top Federal Reserve official says dour jobs data" height="119" src="/images/a-top-federal-reserve-official-says.webp" width="179" />
              <h4>
                <a href="/business-and-economy/a-top-federal-reserve-official-says-dour-jobs-data-backs-the-case-for-three-rate-cuts" title="A top Federal Reserve official says dour jobs data backs the case for 3 rate cuts">A top Federal Reserve official says dour jobs data backs the case for 3 rate cuts</a>
              </h4>
              <p className="bus-p">Federal Reserve Chair Jerome Powell on Tuesday signaled a cautious approach to future interest rate cuts...</p>
              <div className="article-meta">February 06, 2026 · MAXINE T. WARNE</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="US and global economic outlook" height="113" src="/images/us-and-global-economic-outlook.jpg" width="200" />
                <h5>
                  <a href="/business-and-economy/us-and-global-economic-outlook-deteriorates-in-trump-trade-war-imf-says" title="US and global economic outlook deteriorates in Trump trade war, IMF says">US and global economic outlook deteriorates in Trump trade war, IMF says</a>
                </h5>
                <p className="bus-p">The U.S. and global economies will likely slow significantly in the wake of President...</p>
                <div className="article-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-wrapper">
          <div className="article-feed">
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/business-and-economy/powell-signals-federal-reserve-to-move-slowly-on-interest-rate-cuts" title="Powell signals Federal Reserve to move slowly on interest rate cuts">Powell signals Federal Reserve to move slowly on interest rate cuts</a>
                </h3>
                <p className="bus-p">Federal Reserve Chair Jerome Powell on Tuesday signaled a cautious approach to future interest rate cuts, in sharp...</p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="Powell signals Federal Reserve" height="162" src="/images/powell-signals-federal-reserve.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/business-and-economy/the-fed-faces-economic-uncertainty-and-political-pressure-as-it-decides-whether-to-cut-rates" title="The Fed faces economic uncertainty and political pressure as it decides whether to cut rates">The Fed faces economic uncertainty and political pressure as it decides whether to cut rates</a>
                </h3>
                <p className="bus-p">In a sign of how unusual this week’s Federal Reserve meeting is, the decision it will make on interest rates...</p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="The Fed faces economic uncertainty and political pressure" height="162" src="/images/the-fed-faces-economic-uncertainty-and-political-pressure.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/business-and-economy/imf-more-upbeat-about-us-growth-than-just-months-ago-but-outlook-is-dimmer-than-last-year" title="IMF more upbeat about US growth than just months ago, but outlook is dimmer than last year">IMF more upbeat about US growth than just months ago, but outlook is dimmer than last year</a>
                </h3>
                <p className="bus-p">The U.S. and global economies will grow a bit more this year than previously forecast as the...</p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="IMF more upbeat about US growth" height="162" src="/images/imf-more-upbeat-about-us-growth.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/business-and-economy/most-us-stocks-rise-after-swinging-through-another-erratic-day" title="Most US stocks rise after swinging through another erratic day">Most US stocks rise after swinging through another erratic day</a>
                </h3>
                <p className="bus-p">The S&P 500 added 0.4%, but only after jumping toward one of its biggest gains since the summer...</p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="Most US stocks rise" height="162" src="/images/most-us-stocks-rise.webp" width="244" />
              </div>
            </div>
          </div>
          <aside className="side-panel">
            <div className="side-box">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/politics-and-policy" title="Politics & Policy">Politics & Policy</a>
                </li>
                <li>
                  <a href="/global-affairs" title="Global Affairs">Global Affairsure</a>
                </li>
                <li>
                  <a href="/technology-and-innovation" title="Technology & Innovation">Technology & Innovation</a>
                </li>
                <li>
                  <a href="/finance-and-markets" title="Finance & Markets">Finance & Markets</a>
                </li>
                <li>
                  <a href="/featured-pr" title="Featured PR">Featured PR</a>
                </li>
              </ul>
            </div>
            <div className="side-box">
              <h4>FOLLOW</h4>
              <div className="social-links">
                <a className="social-icon" href="#" title="instagram">
                  <i className="fa-brands fa-instagram-f"></i>
                </a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="twitter">
                  <i className="fa-brands fa-x-twitter fa-sm"></i>
                </a>
                <a className="social-icon" href="#" title="substack">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="social-icon" href="#" title="envelope">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="side-box newsletter1">
              <h4>NEWSLETTER</h4>
              <form>
                <input placeholder="Your name" type="text" />
                <input placeholder="Your email address" type="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
        </>
      );
    case "finance-and-markets":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>Finance & Markets</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="House sends bill regulating stablecoins" height="385" src="/images/house-sends-bill-regulating-stablecoins.webp" width="579" />
              <h2>
                <a href="/finance-and-markets/house-sends-bill-regulating-stablecoins-a-type-of-cryptocurrency-to-trump" title="House sends bill regulating stablecoins, a type of cryptocurrency, to Trump">House sends bill regulating stablecoins, a type of cryptocurrency, to Trump</a>
              </h2>
              <p className="bus-p">The House has passed three bills intended to boost the legitimacy of the cryptocurrency industry...</p>
              <div className="article-meta">February 06, 2026 · LISA G. HART</div>
            </div>
            <div className="mid-story">
              <img alt="Tether unveils USAT stablecoin" height="119" src="/images/tether-unveils-usat-stablecoin.avif" width="179" />
              <h4>
                <a href="/finance-and-markets/tether-unveils-usat-stablecoin-to-boost-us-market-presence" title="Tether unveils USAT stablecoin to boost US market presence">Tether unveils USAT stablecoin to boost US market presence</a>
              </h4>
              <p className="bus-p">The House has passed three bills intended to boost the legitimacy of the cryptocurrency industry with new regulations as...</p>
              <div className="article-meta">February 06, 2026 · LISA G. HART</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="Fed study on digital currency" height="113" src="/images/fed-study-on-digital-currency.webp" width="200" />
                <h5>
                  <a href="/finance-and-markets/fed-study-on-digital-currency-leans-toward-role-for-banks" title="Fed study on digital currency leans toward role for banks">Fed study on digital currency leans toward role for banks</a>
                </h5>
                <p className="bus-p">The Federal Reserve on Thursday released a highly anticipated report on central bank digital...</p>
                <div className="article-meta">February 06, 2026 · LISA G. HART</div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-wrapper">
          <div className="article-feed">
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/finance-and-markets/senate-passes-crypto-regulations-sends-to-house-without-addressing-trumps-investments" title="Senate passes crypto regulations, sends to House without addressing Trump’s investments">Senate passes crypto regulations, sends to House without addressing Trump’s investments</a>
                </h3>
                <p className="bus-p">The Senate passed legislation Tuesday that would regulate a form of cryptocurrency known as stablecoins...</p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="Senate passes crypto regulations" height="162" src="/images/senate-passes-crypto-regulations.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/finance-and-markets/treasury-recommends-exploring-creation-of-a-digital-dollar" title="Treasury recommends exploring creation of a digital dollar">Treasury recommends exploring creation of a digital dollar</a>
                </h3>
                <p className="bus-p">The Biden administration is moving one step closer to developing a central bank digital currency...</p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="Treasury recommends exploring creation" height="162" src="/images/treasury-recommends-exploring-creation.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/finance-and-markets/the-crypto-industry-saw-trump-as-a-champion-some-now-fear-hes-putting-personal-profits-first" title="The crypto industry saw Trump as a champion. Some now fear he’s putting personal profits first">The crypto industry saw Trump as a champion. Some now fear he’s putting personal profits first</a>
                </h3>
                <p className="bus-p">It seems like a triumph for a cryptocurrency industry that has long sought mainstream acceptance...</p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="The crypto industry saw" height="162" src="/images/the-crypto-industry-saw.webp" width="244" />
              </div>
            </div>
          </div>
          <aside className="side-panel">
            <div className="side-box">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/politics-and-policy" title="Politics & Policy">Politics & Policy</a>
                </li>
                <li>
                  <a href="/business-and-economy" title="Business & Economy">Business & Economy</a>
                </li>
                <li>
                  <a href="/global-affairs" title="Global Affairs">Global Affairsure</a>
                </li>
                <li>
                  <a href="/technology-and-innovation" title="Technology & Innovation">Technology & Innovation</a>
                </li>
                <li>
                  <a href="/featured-pr" title="Featured PR">Featured PR</a>
                </li>
              </ul>
            </div>
            <div className="side-box">
              <h4>FOLLOW</h4>
              <div className="social-links">
                <a className="social-icon" href="#" title="instagram">
                  <i className="fa-brands fa-instagram-f"></i>
                </a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="twitter">
                  <i className="fa-brands fa-x-twitter fa-sm"></i>
                </a>
                <a className="social-icon" href="#" title="substack">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="social-icon" href="#" title="envelope">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="side-box newsletter1">
              <h4>NEWSLETTER</h4>
              <form>
                <input placeholder="Your name" type="text" />
                <input placeholder="Your email address" type="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
        </>
      );
    case "featured-pr":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>Featured PR</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="IBM Commits To Net Zero Greenhouse Gas" height="385" src="/images/ibm-commits-to-net-zero-greenhouse-gas.webp" width="579" />
              <h2>
                <a href="/featured-pr/ibm-commits-to-net-zero-greenhouse-gas-emissions-by-2030" title="IBM Commits To Net Zero Greenhouse Gas Emissions By 2030">IBM Commits To Net Zero Greenhouse Gas Emissions By 2030</a>
              </h2>
              <p className="bus-p">
                IBM (NYSE: IBM) announced that it will achieve net zero greenhouse gas emissions by 2030 to further its decades-long work to address the global climate...
              </p>
              <div className="article-meta">February 06, 2026 · LISA G. HART</div>
            </div>
            <div className="mid-story">
              <img alt="Microsoft pledges to become" height="119" src="/images/microsoft-pledges-to-become.webp" width="179" />
              <h4>
                <a href="/featured-pr/microsoft-carbon-negative-by-2030-even-for-supply-chain" title="Microsoft: ‘carbon-negative’ by 2030 even for supply chain">Microsoft: ‘carbon-negative’ by 2030 even for supply chain</a>
              </h4>
              <p className="bus-p">Microsoft is pledging to become 100% “carbon-negative” by 2030 by removing more carbon from the environment than it emits...</p>
              <div className="article-meta">February 06, 2026 · LISA G. HART</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="Amazon, Google make dueling nuclear investments" height="113" src="/images/amazon-google-make-dueling-nuclear-investments.webp" width="200" />
                <h5>
                  <a href="/featured-pr/amazon-google-make-dueling-nuclear-investments-to-power-data-centers-with-clean-energy" title="Amazon, Google make dueling nuclear investments to power data centers with clean energy">Amazon, Google make dueling nuclear investments to power data centers with clean energy</a>
                </h5>
                <p className="bus-p">Amazon on Wednesday said that it was investing in small nuclear reactors, coming just two days after a similar...</p>
                <div className="article-meta">February 06, 2026 · LISA G. HART</div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-wrapper">
          <div className="article-feed">
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/featured-pr/tentree-pledges-to-plant-one-billion-trees-by-2030-in-support-of-1t-org" title="tentree Pledges to Plant One Billion Trees by 2030 in Support of 1t.org">tentree Pledges to Plant One Billion Trees by 2030 in Support of 1t.org</a>
                </h3>
                <p className="bus-p">
                  tentree, an earth-first sustainable apparel brand, has committed to planting one billion trees by 2030 to support 1t.org and the global movement to conserve...
                </p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="tentree Pledges to Plant One Billion Trees" height="162" src="/images/tentree-pledges-to-plant-one-billion-trees.jpg" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/featured-pr/general-mills-to-reduce-absolute-greenhouse-gas-emissions-by-30-percent-across-its-full-value-chain-over-next-decade" title="General Mills to Reduce Absolute Greenhouse Gas Emissions by 30% Across its Full Value Chain Over Next Decade">General Mills to Reduce Absolute Greenhouse Gas Emissions by 30% Across its Full Value Chain Over Next Decade</a>
                </h3>
                <p className="bus-p">
                  General Mills announced a pledge to reduce absolute greenhouse gas emissions by 30 percent across its full value chain – from farm to fork to landfill...
                </p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="General Mills to Reduce Absolute Greenhouse Gas" height="162" src="/images/general-mills-to-reduce-absolute-greenhouse-gas-emissions.avif" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/featured-pr/mechanical-sails-batteries-shippers-forming-green-corridors-to-fast-track-cleaner-technologies" title="Mechanical sails? Batteries? Shippers forming ‘green corridors’ to fast-track cleaner technologies">Mechanical sails? Batteries? Shippers forming ‘green corridors’ to fast-track cleaner technologies</a>
                </h3>
                <p className="bus-p">It’s among the world’s busiest container shipping routes — a stream of vessels packed with furniture, automobiles...</p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="Mechanical sails? Batteries? Shippers" height="162" src="/images/mechanical-sails-batteries-shippers.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/featured-pr/governors-biden-administration-push-to-quadruple-efficient-heating-ac-units-by-2030" title="Governors, Biden administration push to quadruple efficient heating, AC units by 2030">Governors, Biden administration push to quadruple efficient heating, AC units by 2030</a>
                </h3>
                <p className="bus-p">A group of 25 state governors that make up the U.S. Climate Alliance and the Biden administration announced a pledge...</p>
                <div className="feed-meta">February 06, 2026 · LISA G. HART</div>
              </div>
              <div className="feed-image">
                <img alt="Governors, Biden administration push" height="162" src="/images/governors-biden-administration-push.webp" width="244" />
              </div>
            </div>
          </div>
          <aside className="side-panel">
            <div className="side-box">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/politics-and-policy" title="Politics & Policy">Politics & Policy</a>
                </li>
                <li>
                  <a href="/business-and-economy" title="Business & Economy">Business & Economy</a>
                </li>
                <li>
                  <a href="/global-affairs" title="Global Affairs">Global Affairsure</a>
                </li>
                <li>
                  <a href="/technology-and-innovation" title="Technology & Innovation">Technology & Innovation</a>
                </li>
                <li>
                  <a href="/finance-and-markets" title="Finance & Markets">Finance & Markets</a>
                </li>
                <li>
                  <a href="/featured-pr" title="Featured PR">Featured PR</a>
                </li>
              </ul>
            </div>
            <div className="side-box">
              <h4>FOLLOW</h4>
              <div className="social-links">
                <a className="social-icon" href="#" title="instagram">
                  <i className="fa-brands fa-instagram-f"></i>
                </a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="twitter">
                  <i className="fa-brands fa-x-twitter fa-sm"></i>
                </a>
                <a className="social-icon" href="#" title="substack">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="social-icon" href="#" title="envelope">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="side-box newsletter1">
              <h4>NEWSLETTER</h4>
              <form>
                <input placeholder="Your name" type="text" />
                <input placeholder="Your email address" type="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
        </>
      );
    case "global-affairs":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>Global Affairs</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="How the US-EU trade deal" height="385" src="/images/how-the-us-eu-trade-deal.webp" width="579" />
              <h2>
                <a href="/global-affairs/how-the-us-eu-trade-deal-wards-off-more-escalation-but-will-raise-prices-and-slow-growth" title="How the US-EU trade deal wards off more escalation but will raise prices and slow growth">How the US-EU trade deal wards off more escalation but will raise prices and slow growth</a>
              </h2>
              <p className="bus-p">U.S. President Donald Trump and European Commission President Ursula von der Leyen have announced a sweeping trade...</p>
              <div className="article-meta">February 06, 2026 · JOEL J. ZARATE</div>
            </div>
            <div className="mid-story">
              <img alt="EU imposes new tariffs" height="119" src="/images/eu-imposes-new-tariffs.webp" width="179" />
              <h4>
                <a href="/global-affairs/eu-imposes-new-tariffs-on-23-billion-in-us-goods-in-retaliation-for-trumps-steel-aluminum-tariffs" title="EU imposes new tariffs on $23 billion in US goods in retaliation for Trump’s steel, aluminum tariffs">EU imposes new tariffs on $23 billion in US goods in retaliation for Trump’s steel, aluminum tariffs</a>
              </h4>
              <p className="bus-p">European Union member states voted Wednesday to approve retaliatory tariffs on $23 billion in goods...</p>
              <div className="article-meta">February 06, 2026 · JOEL J. ZARATE</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="EU considers pooling demand" height="113" src="/images/eu-considers-pooling-demand.avif" width="200" />
                <h5>
                  <a href="/global-affairs/eu-considers-pooling-demand-from-companies-to-buy-more-us-gas" title="EU considers pooling demand from companies to buy more US gas">EU considers pooling demand from companies to buy more US gas</a>
                </h5>
                <p className="bus-p">The European Commission could pool demand from European companies to buy more U.S. liquefied...</p>
                <div className="article-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-wrapper">
          <div className="article-feed">
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/global-affairs/eu-and-japan-agree-to-work-together-to-promote-free-trade-and-economic-security" title="EU and Japan agree to work together to promote free trade and economic security">EU and Japan agree to work together to promote free trade and economic security</a>
                </h3>
                <p className="bus-p">Leaders of the European Union and Japan launched an alliance Wednesday aimed at boosting economic...</p>
                <div className="feed-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
              <div className="feed-image">
                <img alt="EU and Japan agree to work together" height="162" src="/images/eu-and-japan-agree-to-work-together.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/global-affairs/rubio-says-us-and-mexico-will-strengthen-security-collaboration" title="Rubio says US and Mexico will strengthen security collaboration">Rubio says US and Mexico will strengthen security collaboration</a>
                </h3>
                <p className="bus-p">Mexico and the United States on Wednesday agreed during U.S. Secretary of State Marco Rubio’s visit to keep...</p>
                <div className="feed-meta">February 06, 2026 · JOEL J. ZARATE</div>
              </div>
              <div className="feed-image">
                <img alt="Rubio says US and Mexico will strengthen" height="162" src="/images/rubio-says-us-and-mexico-will-strengthen.webp" width="244" />
              </div>
            </div>
          </div>
          <aside className="side-panel">
            <div className="side-box">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/politics-and-policy" title="Politics & Policy">Politics & Policy</a>
                </li>
                <li>
                  <a href="/business-and-economy" title="Business & Economy">Business & Economy</a>
                </li>
                <li>
                  <a href="/technology-and-innovation" title="Technology & Innovation">Technology & Innovation</a>
                </li>
                <li>
                  <a href="/finance-and-markets" title="Finance & Markets">Finance & Markets</a>
                </li>
                <li>
                  <a href="/featured-pr" title="Featured PR">Featured PR</a>
                </li>
              </ul>
            </div>
            <div className="side-box">
              <h4>FOLLOW</h4>
              <div className="social-links">
                <a className="social-icon" href="#" title="instagram">
                  <i className="fa-brands fa-instagram-f"></i>
                </a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="twitter">
                  <i className="fa-brands fa-x-twitter fa-sm"></i>
                </a>
                <a className="social-icon" href="#" title="substack">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="social-icon" href="#" title="envelope">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="side-box newsletter1">
              <h4>NEWSLETTER</h4>
              <form>
                <input placeholder="Your name" type="text" />
                <input placeholder="Your email address" type="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
        </>
      );
    case "us":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>US</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="How the US-EU trade deal" height="385" src="/images/us-and-global-economic-outlook.jpg" width="579" />
              <h2>
                <a href="/us/us-and-global-economic-outlook-deteriorates-in-trump-trade-war-imf-says" title="How the US-EU trade deal wards off more escalation but will raise prices and slow growth">US and global economic outlook deteriorates in Trump trade war, IMF says</a>
              </h2>
              <p className="bus-p">
                The U.S. and global economies will likely slow significantly in the wake of President Donald Trump’s tariffs and the uncertainty they have created, the International Monetary Fund said Tuesday.
              </p>
              <div className="article-meta">August 14, 2026 </div>
            </div>
            <div className="mid-story">
              <img alt="EU imposes new tariffs" height="119" src="/images/Pope-Leo.jpg" width="179" />
              <h4>
                <a href="/us/julio-herrera-velutini-pope-leo-xiv" title="EU imposes new tariffs on $23 billion in US goods in retaliation for Trump’s steel, aluminum tariffs">Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace</a>
              </h4>
              <p className="bus-p">
                Beneath an ancient oak in the gardens of Castel Gandolfo, Pope Leo XIV joined Andrea Bocelli and 164 young singers for an evening that transformed music into prayer—and offered a divided world a living image of harmony
              </p>
              <div className="article-meta">August 14, 2026</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="EU considers pooling demand" height="113" src="/images/consumers.webp" width="200" />
                <h5>
                  <a href="/us/us-consumers-rethink-spending-as-retailers-see-fewer-frills" title="From unfilled gas tanks to fewer frills, retailers see US consumers rethink their spending">From unfilled gas tanks to fewer frills, retailers see US consumers rethink their spending</a>
                </h5>
                <p className="bus-p">
                  Gas prices move up and down in response to disruptions in supply and spikes in demand. Many global events such as conflicts, sanctions or decisions by major oil producing countries can limit or create uncertainty about the supply of oil.
                </p>
                <div className="article-meta">August 14, 2026</div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </>
      );
    case "politics-and-policy":
      return (
        <>
      <div className="main-container">
        <section className="section-business">
          <div className="business-header">
            <h1>Politics & Policy</h1>
            <div className="business-divider"></div>
          </div>
          <div className="business-grid">
            <div className="lead-article">
              <img alt="Trump signs new stablecoin" height="385" src="/images/trump-signs-new-stablecoin.webp" width="579" />
              <h2>
                <a href="/politics-and-policy/trump-signs-new-stablecoin-regulations-into-law-a-major-milestone-for-crypto-industry" title="Trump signs new stablecoin regulations into law, a major milestone for crypto industry">Trump signs new stablecoin regulations into law, a major milestone for crypto industry</a>
              </h2>
              <p className="bus-p">President Donald Trump on Friday signed into law new regulations for a type of cryptocurrency, a major milestone for an industry that...</p>
              <div className="article-meta">February 06, 2026 · MAXINE T. WARNE</div>
            </div>
            <div className="mid-story">
              <img alt="House Republicans include a 10-year ban" height="119" src="/images/house-republicans-include-ten-year-ban.webp" width="179" />
              <h4>
                <a href="/politics-and-policy/house-republicans-include-ten-year-ban-on-us-states-regulating-ai-in-big-beautiful-bill" title="House Republicans surprised tech industry watchers and outraged state governments when they added a clause to Republicans’">House Republicans include a 10-year ban on US states regulating AI in big, beautiful bill</a>
              </h4>
              <p className="bus-p">House Republicans surprised tech industry watchers and outraged state governments...</p>
              <div className="article-meta">February 06, 2026 · MAXINE T. WARNE</div>
            </div>
            <div className="side-stories">
              <div className="side-item">
                <img alt="Senate Republicans Revise Ban" height="113" src="/images/senate-republicans-revise-ban.webp" width="200" />
                <h5>
                  <a href="/politics-and-policy/senate-republicans-revise-ban-on-state-ai-regulations-in-bid-to-preserve-controversial-provision" title="Senate Republicans have made changes to their party’s sweeping tax bill in hopes of preserving a new policy that would">Senate Republicans revise ban on state AI regulations in bid to preserve controversial provision</a>
                </h5>
                <p className="bus-p">Senate Republicans have made changes to their party’s sweeping tax bill in hopes of preserving...</p>
                <div className="article-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-wrapper">
          <div className="article-feed">
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/politics-and-policy/california-gov-gavin-newsom-signs-landmark-bill-creating-ai-safety-measures" title="California Gov. Gavin Newsom signs landmark bill creating AI safety measures">California Gov. Gavin Newsom signs landmark bill creating AI safety measures</a>
                </h3>
                <p className="bus-p">
                  California Gov. Gavin Newsom on Monday signed a law that aims to prevent people from using powerful artificial intelligence models for potentially...
                </p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="California Gov. Gavin Newsom signs" height="162" src="/images/california-gov-gavin-newsom-signs.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/politics-and-policy/regulators-struggle-to-keep-up-with-the-fast-moving-and-complicated-landscape-of-ai-therapy-apps" title="Regulators struggle to keep up with the fast-moving and complicated landscape of AI therapy apps">Regulators struggle to keep up with the fast-moving and complicated landscape of AI therapy apps</a>
                </h3>
                <p className="bus-p">Some states have started to regulate apps that offer AI "therapy" as more and more people turn to AI for mental health...</p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="Regulators struggle to keep up" height="162" src="/images/regulators-struggle-to-keep-up.webp" width="244" />
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-text">
                <h3>
                  <a href="/politics-and-policy/from-tech-podcasts-to-policy-trumps-new-ai-plan-leans-heavily-on-silicon-valley-industry-ideas" title="From tech podcasts to policy: Trump’s new AI plan leans heavily on Silicon Valley industry ideas">From tech podcasts to policy: Trump’s new AI plan leans heavily on Silicon Valley industry ideas</a>
                </h3>
                <p className="bus-p">President Donald Trump on Wednesday unveiled a sweeping new plan for America’s “global dominance”...</p>
                <div className="feed-meta">February 06, 2026 · MAXINE T. WARNE</div>
              </div>
              <div className="feed-image">
                <img alt="From tech podcasts to policy" height="162" src="/images/from-tech-podcasts-to-policy.webp" width="244" />
              </div>
            </div>
          </div>
          <aside className="side-panel">
            <div className="side-box">
              <h4>CATEGORIES</h4>
              <ul>
                <li>
                  <a href="/business-and-economy" title="Business & Economy">Business & Economy</a>
                </li>
                <li>
                  <a href="/global-affairs" title="Global Affairs">Global Affairsure</a>
                </li>
                <li>
                  <a href="/technology-and-innovation" title="Technology & Innovation">Technology & Innovation</a>
                </li>
                <li>
                  <a href="/finance-and-markets" title="Finance & Markets">Finance & Markets</a>
                </li>
                <li>
                  <a href="/featured-pr" title="Featured PR">Featured PR</a>
                </li>
              </ul>
            </div>
            <div className="side-box">
              <h4>FOLLOW</h4>
              <div className="social-links">
                <a className="social-icon" href="#" title="instagram">
                  <i className="fa-brands fa-instagram-f"></i>
                </a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="twitter">
                  <i className="fa-brands fa-x-twitter fa-sm"></i>
                </a>
                <a className="social-icon" href="#" title="substack">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="social-icon" href="#" title="envelope">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="side-box newsletter1">
              <h4>NEWSLETTER</h4>
              <form>
                <input placeholder="Your name" type="text" />
                <input placeholder="Your email address" type="email" />
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </aside>
        </section>
      </div>
        </>
      );
    default:
      notFound();
  }
}
