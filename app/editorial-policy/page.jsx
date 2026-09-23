export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/editorial-policy` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <section className="editorial-policy-page">
          <div className="editorial-policy-container">
            <header className="editorial-policy-header">
              <h1 className="editorial-policy-title"> Editorial Policy </h1>
              <p className="editorial-policy-intro">
                 Policy Now is an independent digital newsroom committed to accurate, fair, transparent, and accountable journalism. Our editorial standards are designed to ensure readers understand how our reporting is researched, reviewed, and published, and can trust the integrity of our journalism. 
              </p>
            </header>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Editorial Independence </h2>
              <div className="editorial-policy-divider"></div>
              <p className="editorial-policy-text">
                 Editorial decisions are made independently by our journalists and editors. We do not accept payment, favors, or influence in exchange for coverage. Advertising, sponsorship, business relationships, and external interests do not determine or control our reporting, editorial priorities, or news judgments. 
              </p>
            </section>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Accuracy and Verification </h2>
              <div className="editorial-policy-divider"></div>
              <p className="editorial-policy-text">
                 Accuracy is a core newsroom principle. Our journalists seek to verify information through credible sources, documentary evidence, official records, and direct attribution whenever possible. When information cannot be independently verified, that limitation is disclosed clearly to readers. 
              </p>
              <p className="editorial-policy-text">
                 Errors are corrected promptly and transparently in accordance with our Corrections Policy. Coverage involving legal, financial, public policy, or public safety matters may undergo additional editorial review prior to publication. 
              </p>
            </section>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Fairness and Balance </h2>
              <div className="editorial-policy-divider"></div>
              <p className="editorial-policy-text">
                 We strive to present relevant perspectives on complex issues while providing appropriate context and evidence. Our reporting is guided by facts and verification, not by political, ideological, or commercial interests. We seek fairness without creating false equivalence between supported and unsupported claims. 
              </p>
            </section>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Transparency </h2>
              <div className="editorial-policy-divider"></div>
              <p className="editorial-policy-text"> Readers deserve transparency regarding how reporting decisions are made. We are committed to the following practices: </p>
              <ul className="editorial-policy-list">
                <li className="editorial-policy-list-item"> Clearly distinguish between news reporting, opinion, analysis, and sponsored content. </li>
                <li className="editorial-policy-list-item"> Publish articles under an individual journalist's byline whenever practical. </li>
                <li className="editorial-policy-list-item"> Use a "Policy Now Staff" byline for collaborative newsroom reporting. </li>
                <li className="editorial-policy-list-item"> Clearly identify sponsored, paid, affiliate, or partner-funded content so it is not mistaken for independent editorial reporting. </li>
              </ul>
            </section>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Disclosure and Labeling </h2>
              <div className="editorial-policy-divider"></div>
              <p className="editorial-policy-text">
                 We disclose material relationships that a reasonable reader would consider relevant to understanding a story or piece of content. Sponsored content, affiliate relationships, paid placements, and partner-funded material are clearly labeled and maintained separately from independent newsroom reporting. 
              </p>
            </section>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Ethical Standards </h2>
              <div className="editorial-policy-divider"></div>
              <div className="editorial-policy-principles">
                <div className="editorial-policy-principle">
                  <h3>No Undisclosed Conflicts of Interest</h3>
                  <p>
                     Journalists and contributors are expected to disclose personal, professional, or financial relationships that could reasonably create a conflict of interest. 
                  </p>
                </div>
                <div className="editorial-policy-principle">
                  <h3>No Hidden Sponsored Content</h3>
                  <p> Sponsored, branded, or paid content is clearly identified and kept separate from independent editorial reporting. </p>
                </div>
                <div className="editorial-policy-principle">
                  <h3>Respect for Privacy</h3>
                  <p>
                     We balance the public's right to know with individual privacy interests and seek to report responsibly, accurately, and with respect for personal dignity. 
                  </p>
                </div>
              </div>
            </section>
            <section className="editorial-policy-section">
              <h2 className="editorial-policy-section-title"> Reader Feedback and Accountability </h2>
              <div className="editorial-policy-divider editorial-policy-divider-dark"></div>
              <p className="editorial-policy-text">
                 Accountability is essential to trustworthy journalism. We welcome feedback, corrections, questions, and concerns from readers and review submissions carefully as part of our commitment to accuracy and transparency. 
              </p>
              <a className="editorial-policy-email" href="mailto:editorial@policynow.org"> ✉ editorial@policynow.org </a>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
