export const metadata = {
  title: "Where Policy Meets Public Perception",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/corrections-policy` },
};

export default function Page() {
  return (
    <>
      <div className="about-wrapper">
        <section className="corrections-policy-page">
          <div className="corrections-policy-container">
            <header className="corrections-policy-header">
              <h1 className="corrections-policy-title"> Corrections Policy </h1>
              <div className="corrections-policy-title-line"></div>
              <p className="corrections-policy-intro">
                 Accuracy is fundamental to Policy Now's journalism. While we take great care to verify information before publication, errors can occur. When they do, we correct them promptly, transparently, and in a manner that is clear to our readers. 
              </p>
            </header>
            <section className="corrections-policy-section">
              <h2 className="corrections-policy-section-title"> How We Handle Errors </h2>
              <div className="corrections-policy-divider-dark"></div>
              <p className="corrections-policy-text"> Different types of errors require different responses: </p>
              <div className="corrections-policy-items">
                <div className="corrections-policy-item">
                  <h3>
                    ✎ 
                    <span>Minor Errors</span>
                  </h3>
                  <p>
                     Spelling mistakes, grammatical errors, formatting issues, or typographical errors that do not affect the meaning of an article may be corrected without a formal correction note. 
                  </p>
                </div>
                <div className="corrections-policy-item">
                  <h3>
                    ⓘ 
                    <span>Factual Errors</span>
                  </h3>
                  <p>
                     Errors involving names, dates, figures, quotations, or other factual information are corrected as soon as they are identified. Significant factual corrections are accompanied by a clearly labeled editor's note explaining the nature of the correction. 
                  </p>
                </div>
                <div className="corrections-policy-item">
                  <h3>
                    ↻ 
                    <span>Developing Stories</span>
                  </h3>
                  <p>
                     News articles covering ongoing events may be updated as new information becomes available and is verified. Material updates are time-stamped to indicate when changes were made. 
                  </p>
                </div>
              </div>
            </section>
            <section className="corrections-policy-section">
              <h2 className="corrections-policy-section-title"> Where Corrections Appear </h2>
              <div className="corrections-policy-divider-dark"></div>
              <p className="corrections-policy-text">
                 Corrections are published directly within the affected article. We do not remove or conceal corrections by relocating them to separate pages. 
              </p>
              <p className="corrections-policy-text">
                 Depending on the circumstances, Policy Now may publish a correction, clarification, update, or editor's note to ensure readers understand the nature of the change. 
              </p>
            </section>
            <section className="corrections-policy-section">
              <h2 className="corrections-policy-section-title"> What to Include in a Correction Request </h2>
              <div className="corrections-policy-divider-dark"></div>
              <p className="corrections-policy-text">
                 To help us review a correction request efficiently, please provide the article headline or URL, the specific statement, passage, or claim you believe is inaccurate, the factual basis for your concern, and any supporting evidence or documentation relevant to the issue. 
              </p>
            </section>
            <section className="corrections-policy-section">
              <h2 className="corrections-policy-section-title"> Reader Submissions </h2>
              <div className="corrections-policy-divider-dark"></div>
              <p className="corrections-policy-text">
                 Readers play an important role in maintaining the accuracy of our reporting. If you believe an article contains an error, please contact us with the article headline, URL, and a brief explanation of the issue. 
              </p>
              <p className="corrections-policy-text"> Our editorial team reviews all correction requests promptly and carefully. </p>
              <a className="corrections-policy-email" href="mailto:corrections@policynow.org"> ✉ corrections@policynow.org </a>
            </section>
            <section className="corrections-policy-section">
              <h2 className="corrections-policy-section-title"> Our Commitment to Transparency </h2>
              <div className="corrections-policy-divider-dark"></div>
              <ul className="corrections-policy-list">
                <li className="corrections-policy-list-item"> We do not correct significant errors without acknowledging the change. </li>
                <li className="corrections-policy-list-item"> Substantive corrections and updates are disclosed clearly to readers. </li>
                <li className="corrections-policy-list-item"> All correction requests are reviewed fairly, respectfully, and in good faith. </li>
                <li className="corrections-policy-list-item">
                   Corrections and updates are intended to improve accuracy and clarity, not to substantially alter the original meaning of published content. 
                </li>
              </ul>
            </section>
            <section className="corrections-policy-highlight">
              <div className="corrections-policy-highlight-divider"></div>
              <h2 className="corrections-policy-highlight-title"> Why This Matters </h2>
              <p className="corrections-policy-highlight-text">
                 Trust is built through accountability. By acknowledging errors openly and correcting them transparently, we aim to provide journalism that readers can rely on and confidence in the integrity of our reporting. 
              </p>
              <div className="corrections-policy-highlight-divider"></div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
