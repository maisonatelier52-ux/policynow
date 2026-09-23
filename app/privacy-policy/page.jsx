export const metadata = {
  title: "Privacy Policy",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/privacy-policy` },
};

export default function Page() {
  return (
    <>
      <div className="main-container">
        <main className="container">
          <h1>Privacy Policy</h1>
          <div className="content">
            <div className="intro">
              <p>
                Policy Now values reader trust. We collect only limited information necessary to operate our newsroom, communicate with readers, and improve our journalism. This policy explains what we collect, why we collect it, and how we protect it.
              </p>
            </div>
            <h2>Information We Collect</h2>
            <div className="intro">
              <p>
                When you visit our website, basic technical data such as pages viewed, device type, and browser information may be collected automatically. This information helps us understand readership patterns and improve site performance.
              </p>
              <p>
                If you contact us directly — for tips, corrections, or inquiries — we collect only the information you choose to provide, such as your name and email address.
              </p>
              <p>We do not collect unnecessary personal data, and we do not sell or trade user information.</p>
            </div>
            <div className="info-box">
              <h2>How Information Is Used</h2>
              <ul className="info-list">
                <li>
                  <span className="icon">✓</span>
                  <span>To keep the website operating smoothly and securely.</span>
                </li>
                <li>
                  <span className="icon">✓</span>
                  <span>To understand which stories resonate with readers.</span>
                </li>
                <li>
                  <span className="icon">✓</span>
                  <span>To respond to messages, tips, or correction requests.</span>
                </li>
                <li>
                  <span className="icon">✓</span>
                  <span>To provide updates when readers request them.</span>
                </li>
              </ul>
              <div className="footer-text"> We do not use personal data for advertising sales, profiling, or promotional targeting. </div>
            </div>
            <br />
            <h2>Cookies and Analytics</h2>
            <div className="intro">
              <p>
                We use cookies and analytics tools to understand how readers interact with our content. You may disable cookies in your browser without affecting access to our reporting.
              </p>
              <p>Third-party analytics services may process anonymized data under their own privacy policies.</p>
            </div>
            <h2>Your Rights and Choices</h2>
            <div className="intro">
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data. Requests can be submitted using the contact below.
              </p>
              <p>
                <i className="ri-mail-line email-icon"></i>
                 editorial@policynow.org 
                <i className="ri-shield-line email-shield"></i>
              </p>
            </div>
            <h2>Data Protection</h2>
            <div className="intro">
              <p>
                We take reasonable technical and organizational measures to protect information from unauthorized access. Because we limit the data we collect, we also limit exposure and risk.
              </p>
            </div>
            <div className="line"></div>
            <div className="intro centre">
              <p>Policy Now collects as little information as possible, uses it only to support journalism, and never sells personal data.</p>
            </div>
            <div className="intro centre date">
              <p>Last Updated: May 21, 2026</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
