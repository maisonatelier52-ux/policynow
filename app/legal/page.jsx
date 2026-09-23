export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/legal` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <div className="legal-page">
          <div className="legal-container">
            <header className="legal-header">
              <h1 className="legal-title">Legal</h1>
              <p className="legal-intro">
                 This page provides a plain language overview of legal and compliance topics relevant to Policy Now's publishing, reader use of site content, complaints, permissions, and formal requests. 
              </p>
            </header>
            <section className="legal-section">
              <h2 className="legal-section-title"> Informational use of Policy Now content </h2>
              <p>
                 Policy Now publishes journalism, analysis, and explanatory material for informational purposes. Articles are edited to newsroom standards, but they should not be treated as legal, financial, tax, medical, or other professional advice tailored to an individual reader's situation. 
              </p>
              <p>
                 Where a story touches legal, regulatory, or financial matters, Policy Now aims to use precise sourcing and bounded language rather than sweeping implication. Readers remain responsible for seeking professional advice when they need it. 
              </p>
            </section>
            <section className="legal-section">
              <h2 className="legal-section-title"> Copyright, quotation, and reuse </h2>
              <p>
                 Readers may link to Policy Now reporting and may quote brief excerpts with clear attribution where applicable by law or permissions. Republishing full articles, bulk reproduction, commercial reuse, scraping for republication, or systematic copying requires permission unless a separate license or legal exception applies. 
              </p>
              <p>
                 If you wish to syndicate, reproduce, translate, archive commercially, or otherwise reuse substantial Policy Now content, contact the newsroom before doing so. 
              </p>
            </section>
            <section className="legal-section">
              <h2 className="legal-section-title"> Complaints about accuracy, rights, or fairness </h2>
              <p>
                 If you believe a Policy Now article contains a material factual error, omits critical context, infringes rights, or raises a serious legal concern, contact the newsroom promptly with the specific URL, the exact material at issue, the basis for your concern, and supporting documentation where available. 
              </p>
              <p>
                 Different complaints may be handled under different newsroom processes. A factual dispute may be reviewed under the corrections or right of reply process, while a copyright, privacy, or other rights complaint may require separate review. 
              </p>
            </section>
            <section className="legal-section">
              <h2 className="legal-section-title"> What to include in a formal request </h2>
              <ul className="legal-list">
                <li>The URL or headline of the content at issue.</li>
                <li> A clear description of the statement, image, video, or other material you are challenging. </li>
                <li> The legal or factual basis for the request, including supporting documents where relevant. </li>
                <li> Your name, organization if applicable, and a reliable contact method for follow-up. </li>
                <li> If you are acting on behalf of someone else, a brief statement of your authority to do so. </li>
              </ul>
            </section>
            <section className="legal-section">
              <h2 className="legal-section-title"> Removal, restriction, and update requests </h2>
              <p>
                 Policy Now reviews serious requests for correction, clarification, update, removal, or restricted display. Submission of a request does not by itself guarantee removal of accurate reporting or immediate depublication. 
              </p>
              <p>
                 The newsroom's standard is to evaluate the request against the public record, editorial standards, applicable law, and the public interest. In some cases the appropriate response may be a correction, clarification, update note, or follow-up article rather than removal. 
              </p>
            </section>
            <section className="legal-section">
              <h2 className="legal-section-title"> Links to third-party material </h2>
              <p>
                 Policy Now may link to third-party sites, official records, social platforms, public databases, and outside documents for sourcing and reader context. Those third-party properties are governed by their own terms, policies, and accuracy practices. 
              </p>
              <p> A link to a third-party source does not necessarily mean Policy Now endorses every statement or policy on that external site. </p>
            </section>
            <section className="legal-section">
              <h2 className="legal-section-title"> Formal notices and requests </h2>
              <p>
                 For legal notices, permissions questions, rights complaints, or formal requests related to published content, contact the newsroom directly so the request can be routed to the appropriate reviewer. 
              </p>
              <p>
                 At the time of this update, Policy Now handles public-facing legal and policy correspondence through the published newsroom email addresses on this site. 
              </p>
            </section>
            <div className="legal-contact-box">
              <h3 className="legal-contact-title"> Contact </h3>
              <div className="legal-contact-item">
                <span className="legal-contact-label"> GENERAL LEGAL CONTACT </span>
                <a href="mailto:editorial@policynow.org"> editorial@policynow.org </a>
              </div>
              <div className="legal-contact-item">
                <span className="legal-contact-label"> CORRECTIONS AND FACTUAL CONCERNS </span>
                <a href="mailto:corrections@policynow.org"> corrections@policynow.org </a>
              </div>
            </div>
            <div className="legal-footer"> Last updated: July 22, 2026 </div>
          </div>
        </div>
      </div>
    </>
  );
}
