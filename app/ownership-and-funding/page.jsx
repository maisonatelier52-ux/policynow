export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/ownership-and-funding` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <div className="ownership-and-funding-page">
          <div className="ownership-and-funding-container">
            <header className="ownership-and-funding-header">
              <h1 className="ownership-and-funding-title"> Ownership and Funding </h1>
              <p className="ownership-and-funding-intro">
                 This page explains how Policy Now is owned, funded, and managed, and how we protect editorial independence from commercial, political, or external influence. We believe transparency helps readers understand who supports our work and how editorial decisions are made. 
              </p>
            </header>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> What This Page Covers </h2>
              <p>
                 Policy Now operates as an independent digital news publication. This page outlines our approach to ownership, funding, editorial independence, conflict disclosures, and transparency regarding material relationships that may be relevant to readers. 
              </p>
              <p>
                 The information provided here is intended to help readers understand how the organization is structured and how editorial decisions remain separate from commercial or financial interests. 
              </p>
            </section>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> Editorial Control and Decision-Making </h2>
              <p>
                 Editorial decisions are made independently by our editors and journalists. Coverage decisions, reporting priorities, headlines, source selection, and publication timing are determined solely according to editorial judgment and the public interest. 
              </p>
              <p>
                 Advertisers, sponsors, partners, political organizations, government entities, and other external parties do not control newsroom decisions and are not granted prior review or approval of editorial content. 
              </p>
            </section>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> How Policy Now Is Funded </h2>
              <p>
                 Policy Now may generate revenue through advertising, sponsorships, content licensing, distribution agreements, partnerships, affiliate programs, and other lawful publishing activities. These revenue sources are maintained separately from editorial operations. 
              </p>
              <p>
                 If Policy Now enters into a material funding arrangement, strategic partnership, or ownership structure that a reasonable reader would consider relevant to editorial independence, we will disclose that relationship on this page, within relevant coverage, or both. 
              </p>
            </section>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> Conflicts of Interest and Recusal </h2>
              <p>
                 Journalists, editors, and contributors are expected to disclose personal, financial, political, professional, or family relationships that could reasonably create a conflict of interest or affect public confidence in their reporting. 
              </p>
              <p>
                 When a conflict exists, appropriate steps may include disclosure, editorial oversight, reassignment, or recusal from coverage. Our goal is to protect the integrity and credibility of our journalism. 
              </p>
              <ul className="ownership-and-funding-list">
                <li>Relevant personal, professional, or financial relationships should be disclosed before publication when appropriate.</li>
                <li>Gifts, favors, or benefits that could compromise editorial independence should not be accepted.</li>
                <li>
                  Outside employment, advocacy activities, or consulting work that may create a conflict of interest must be disclosed and may require reassignment.
                </li>
              </ul>
            </section>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> Commercial Support and Editorial Independence </h2>
              <p>
                 Policy Now maintains a clear separation between revenue activities and editorial operations. Commercial support does not guarantee coverage, influence reporting, or affect the conclusions reached by our journalists. 
              </p>
              <p>
                 Sponsored content, affiliate material, advertising, and other commercial communications are clearly labeled so readers can distinguish them from independent editorial reporting. 
              </p>
            </section>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> Political, Governmental, and Advocacy Influence </h2>
              <p>
                 Policy Now does not present political, governmental, or advocacy messaging as independent journalism. Editorial decisions are guided by evidence, verification, and the public interest rather than by political or organizational influence. 
              </p>
              <p>
                 When coverage involves an organization, institution, or entity with which Policy Now has a material relationship, that relationship will be disclosed in clear language when appropriate. 
              </p>
            </section>
            <section className="ownership-and-funding-section">
              <h2 className="ownership-and-funding-heading"> Changes to Ownership or Material Support </h2>
              <p>
                 Ownership structures and funding arrangements may change over time. If Policy Now undergoes a significant ownership change, enters into a material funding relationship, or adopts a support structure that could reasonably be relevant to readers, this page will be updated accordingly. 
              </p>
              <p> Readers who believe a relevant ownership, funding, or disclosure matter has not been addressed may contact our newsroom for review. </p>
            </section>
            <div className="ownership-and-funding-contact-box">
              <h3 className="ownership-and-funding-contact-title"> Contact </h3>
              <div className="ownership-and-funding-contact-item">
                <span className="ownership-and-funding-contact-label"> EDITORIAL </span>
                <a href="mailto:editorial@policynow.org"> editorial@policynow.org </a>
              </div>
              <div className="ownership-and-funding-contact-item">
                <span className="ownership-and-funding-contact-label"> CORRECTIONS AND TRANSPARENCY </span>
                <a href="mailto:corrections@policynow.org"> corrections@policynow.org </a>
              </div>
            </div>
            <p className="ownership-and-funding-footer"> Last Updated: May 22, 2026 </p>
          </div>
        </div>
      </div>
    </>
  );
}
