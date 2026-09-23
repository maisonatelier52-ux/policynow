export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/source-methodology` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <div className="source-methodology-page">
          <div className="source-methodology-container">
            <header className="source-methodology-header">
              <h1 className="source-methodology-title">Source Methodology</h1>
              <p className="source-methodology-intro">
                 Policy Now is committed to transparent, evidence-based journalism. This page explains how we gather, verify, evaluate, and attribute information, as well as how we communicate uncertainty and updates to readers. 
              </p>
            </header>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading">How Reporting Begins</h2>
              <p>
                 Our reporting begins with verifiable information whenever possible. Sources may include official records, court documents, regulatory filings, public statements, direct interviews, public datasets, original media, and other primary source materials. 
              </p>
              <p>
                 When information cannot be independently verified, we aim to describe it accurately and proportionately. Language should reflect the strength of the available evidence and avoid overstating what is known. 
              </p>
            </section>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading"> Source Hierarchy and Verification </h2>
              <p>
                 Whenever feasible, Policy Now prioritizes primary sources and firsthand reporting over summaries, commentary, or aggregated information. Official documents, direct statements, and original reporting generally carry greater evidentiary value than secondary accounts. 
              </p>
              <p>
                 The prominence of a source does not exempt a claim from scrutiny. Statements from public officials, corporations, advocacy groups, and other influential actors are subject to verification, contextualization, and independent review. 
              </p>
              <ul className="source-methodology-list">
                <li>Primary records and firsthand reporting are preferred whenever available.</li>
                <li>Secondary reporting may inform coverage but should not be presented as established fact when underlying claims remain unresolved.</li>
                <li>Key figures, dates, legal details, and timelines should be verified against original sources whenever practicable.</li>
              </ul>
            </section>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading"> Anonymous Sources and Background Information </h2>
              <p>
                 Anonymous or background sources may be used when information is in the public interest and cannot reasonably be obtained on the record. In such cases, editors seek to understand the source's identity, access to information, credibility, and potential motivations. 
              </p>
              <p>
                 When anonymity is granted, we aim to provide readers with as much relevant context as possible without compromising the source's safety, privacy, or confidentiality. 
              </p>
            </section>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading"> Documents, Media, and Data </h2>
              <p>
                 Documents, photographs, screenshots, audio recordings, videos, and datasets are reviewed carefully for authenticity, provenance, timing, and context. We seek to avoid presenting excerpts or isolated materials in ways that could mislead readers. 
              </p>
              <p>
                 The existence of a document does not necessarily prove the broadest interpretation of its contents. Our reporting aims to distinguish between what evidence directly shows and what requires analysis or interpretation. 
              </p>
            </section>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading"> Attribution, Source Notes, and Links </h2>
              <p>
                 Attribution should be clear enough for readers to understand the origin of significant facts and claims. When appropriate, we may provide links to primary sources, official records, public documents, or supporting materials to help readers review the evidence themselves. 
              </p>
              <p>
                 We seek to identify whether information comes from public records, official statements, direct reporting, or other sources whenever doing so improves transparency and reader understanding. 
              </p>
            </section>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading"> How We Handle Uncertainty and Updates </h2>
              <ul className="source-methodology-list">
                <li>We do not present uncertainty as certainty for the sake of emphasis or impact.</li>
                <li>We distinguish factual reporting from analysis, interpretation, and opinion.</li>
                <li>We update reporting when new evidence, verified information, or material developments become available.</li>
                <li>When facts remain disputed or unresolved, we aim to make that status clear to readers.</li>
              </ul>
            </section>
            <section className="source-methodology-section">
              <h2 className="source-methodology-heading"> What This Policy Does Not Mean </h2>
              <p>
                 Transparency does not require disclosure of confidential sources or reporting methods when doing so would compromise safety, privacy, legal obligations, or legitimate journalistic practices. 
              </p>
              <p>
                 It does mean providing readers with an honest explanation of the evidence supporting our reporting and communicating clearly about what is known, what is uncertain, and how conclusions were reached. 
              </p>
            </section>
            <div className="source-methodology-contact-box">
              <h3 className="source-methodology-contact-title">Contact</h3>
              <div className="source-methodology-contact-item">
                <span className="source-methodology-contact-label">EDITORIAL</span>
                <a href="mailto:editorial@policynow.org"> editorial@policynow.org </a>
              </div>
              <div className="source-methodology-contact-item">
                <span className="source-methodology-contact-label">CORRECTIONS</span>
                <a href="mailto:corrections@policynow.org"> corrections@policynow.org </a>
              </div>
            </div>
            <p className="source-methodology-footer"> Last Updated: May 05, 2026 </p>
          </div>
        </div>
      </div>
    </>
  );
}
