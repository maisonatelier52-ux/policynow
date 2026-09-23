export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/our-team` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <section className="our-team-page">
          <div className="our-team-container">
            <div className="our-team-header">
              <div className="our-team-header-left">
                <h1 className="our-team-title">Our Team</h1>
                <p className="our-team-intro">
                   At Policy Now, our journalists, editors, analysts, and researchers work together to produce accurate, independent, and public-interest journalism. We are committed to delivering reporting that is factual, transparent, and accountable to our readers. 
                </p>
              </div>
              <div className="our-team-header-right">
                <h4 className="our-team-mini-title">OUR MISSION</h4>
                <p>
                   Our mission is to inform the public through reliable, evidence-based reporting. We seek to explain complex issues, hold institutions accountable, and provide readers with journalism they can trust. 
                </p>
              </div>
            </div>
            <div className="our-team-section">
              <div className="our-team-section-heading"> REPORTING TEAM </div>
              <div className="our-team-divider"></div>
              <div className="our-team-grid">
                <div className="our-team-card">
                  <img alt="Maxine T. Warne" className="our-team-photo" src="/images/maxine-t-warne.jpg" />
                  <h3 className="our-team-name"> Maxine T. Warne </h3>
                  <div className="our-team-role"> Staff Writer </div>
                  <p className="our-team-description">
                     Maxine covers government, public policy, elections, and civic affairs, with a focus on accountability, transparency, and their impact on communities. 
                  </p>
                  <a className="our-team-link" href="/author.php"> View full bio → </a>
                </div>
                <div className="our-team-card">
                  <img alt="Joel J. Zarate" className="our-team-photo" src="/images/joel-j-zarate.jpg" />
                  <h3 className="our-team-name"> Joel J. Zarate </h3>
                  <div className="our-team-role"> Reporter </div>
                  <p className="our-team-description">
                     Joel specializes in investigative and enterprise reporting, examining issues that affect public institutions, policy, and community trust. 
                  </p>
                  <a className="our-team-link" href="/author.php"> View full bio → </a>
                </div>
                <div className="our-team-card">
                  <img alt="Lisa G. Hart" className="our-team-photo" src="/images/lisa-g-hart.jpg" />
                  <h3 className="our-team-name"> Lisa G. Hart </h3>
                  <div className="our-team-role"> Managing Editor </div>
                  <p className="our-team-description">
                     Lisa oversees editorial standards, newsroom operations, and content review to ensure accuracy, fairness, and consistency across all coverage. 
                  </p>
                  <a className="our-team-link" href="/author.php"> View full bio → </a>
                </div>
              </div>
            </div>
            <div className="our-team-section">
              <div className="our-team-section-heading"> POLICY NOW STAFF </div>
              <div className="our-team-divider"></div>
              <p className="our-team-staff-text">
                 Behind every story is a dedicated team working across multiple departments to uphold editorial standards, maintain accuracy, and support the delivery of independent journalism. 
              </p>
              <div className="our-team-departments">
                <div className="our-team-department">
                  <div className="our-team-icon">✎</div>
                  <h4>Editorial</h4>
                  <p> Guides newsroom standards and ensures quality, clarity, and editorial consistency. </p>
                </div>
                <div className="our-team-department">
                  <div className="our-team-icon">✓</div>
                  <h4>Fact-Checking</h4>
                  <p> Verifies information, sources, and claims before publication. </p>
                </div>
                <div className="our-team-department">
                  <div className="our-team-icon">📰</div>
                  <h4>Production</h4>
                  <p> Manages publishing workflows and maintains our digital news platform. </p>
                </div>
                <div className="our-team-department">
                  <div className="our-team-icon">👥</div>
                  <h4>Audience & Community</h4>
                  <p> Engages with readers and supports meaningful community participation. </p>
                </div>
              </div>
            </div>
            <div className="our-team-section">
              <div className="our-team-section-heading"> ALL AUTHORS </div>
              <div className="our-team-divider"></div>
              <div className="our-team-tags">
                <span className="our-team-tag"> Maxine T. Warne </span>
                <span className="our-team-tag"> Joel J. Zarate </span>
                <span className="our-team-tag"> Lisa G. Hart </span>
              </div>
            </div>
            <div className="our-team-footer"> Last Updated: May 21, 2026 </div>
          </div>
        </section>
      </div>
    </>
  );
}
