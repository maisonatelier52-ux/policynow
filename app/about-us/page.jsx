export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/about-us` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <section className="about-wrapper">
          <div className="about-container">
            <header className="about-header">
              <h1 className="about-title">About Policy Now</h1>
              <div className="about-title-line"></div>
            </header>
            <div className="about-intro">
              <p>
                 Policy Now is an independent digital news organization committed to accurate, transparent, and accountable journalism. We are not owned or controlled by any corporation, political party, advocacy group, or government institution. Our editorial decisions are made independently by journalists and editors dedicated to serving the public interest. 
              </p>
            </div>
            <section className="about-section">
              <h2 className="about-section-title">Our Mission</h2>
              <div className="about-divider"></div>
              <p className="about-text">
                 Our mission is to provide readers with reliable, fact-based reporting on the political, economic, technological, cultural, and social developments shaping the world. We strive to deliver journalism that prioritizes accuracy, context, and accountability while helping audiences better understand complex issues. 
              </p>
              <p className="about-subheading"> Our editorial work is guided by the following principles: </p>
              <div className="about-principles">
                <div className="about-principle">
                  <h3>Accuracy Before Speed</h3>
                  <p>
                     We prioritize verification and factual accuracy over being first to publish. Every story is carefully reviewed to ensure it meets our editorial standards. 
                  </p>
                </div>
                <div className="about-principle">
                  <h3>Transparency and Accountability</h3>
                  <p> We clearly identify sources whenever possible and provide corrections, clarifications, and updates when errors are discovered. </p>
                </div>
                <div className="about-principle">
                  <h3>Editorial Independence</h3>
                  <p>
                     Our reporting is free from corporate, political, or governmental influence. News judgments are made solely on the basis of public interest and journalistic merit. 
                  </p>
                </div>
              </div>
            </section>
            <section className="about-section">
              <h2 className="about-section-title">Who We Are</h2>
              <div className="about-divider"></div>
              <p className="about-text">
                 Policy Now is produced by a distributed team of journalists, editors, researchers, and analysts with experience across digital and traditional media platforms. 
              </p>
              <p className="about-text">
                 Our newsroom operates remotely while maintaining consistent editorial standards, oversight, and fact-checking processes. This structure allows us to cover important stories efficiently while preserving accuracy, fairness, and editorial integrity. 
              </p>
            </section>
            <section className="about-section">
              <h2 className="about-section-title">Editorial Standards</h2>
              <div className="about-divider"></div>
              <p className="about-text">
                 Every article published by Policy Now undergoes editorial review before publication. We verify information through credible sources and apply established journalistic standards to our reporting. 
              </p>
              <p className="about-text">
                 When inaccuracies are identified, we issue corrections or clarifications promptly and transparently. Significant updates to published stories are clearly noted for readers. 
              </p>
            </section>
            <section className="about-section">
              <h2 className="about-section-title">Our Commitment to Readers</h2>
              <div className="about-divider"></div>
              <ul className="about-list">
                <li>News reporting and opinion content are clearly distinguished and labeled.</li>
                <li>We do not accept payment in exchange for favorable coverage or the suppression of news stories.</li>
                <li>Corrections are published promptly and transparently when warranted.</li>
                <li>Editorial decisions are made independently and without conflicts of interest.</li>
                <li>Our reporting is guided by evidence, verification, and the public interest.</li>
              </ul>
            </section>
            <div className="about-footer">
              <p className="about-footer-text"> Policy Now is an independent digital news publication operated by a distributed editorial team based in the United States. </p>
              <a className="about-email" href="mailto:editorial@policynow.org"> ✉ editorial@policynow.org </a>
              <div className="about-footer-divider"></div>
              <p className="about-updated"> Last Updated: June 2026 </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
