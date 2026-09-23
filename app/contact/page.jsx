export const metadata = {
  title: "contact",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/contact` },
};

export default function Page() {
  return (
    <>
      <div className="main-container"></div>
      <div className="contact-page">
        <h1 className="contact-title">Get in Touch</h1>
        <span className="contact-title-underline"></span>
        <p className="contact-intro">
           Policy Now is an independent newsroom. We welcome tips, corrections, and
          <br />
           communication from readers, journalists, and organizations. 
        </p>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-header">
              <svg className="contact-card-icon" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <rect height="10" rx="1.2" stroke="currentColor" strokeWidth="1.3" width="15" x="1.5" y="4" />
                <path d="M1.5 5 L9 10.5 L16.5 5" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
              <h2 className="contact-card-title">Editorial & General Contact</h2>
            </div>
            <p className="contact-card-desc">Questions about our reporting, coverage ideas, or editorial matters.</p>
            <a className="contact-pill" href="mailto:contact@policynow.org">contact@policynow.org</a>
          </div>
          <div className="contact-card">
            <div className="contact-card-header">
              <svg className="contact-card-icon" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2 L16 9 L2 16 L5 9 Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.3" />
                <path d="M5 9 L16 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <h2 className="contact-card-title">Confidential News Tips</h2>
            </div>
            <p className="contact-card-desc">Share information that you believe should be investigated or reported.</p>
            <a className="contact-pill" href="mailto:tips@policynow.org">tips@policynow.org</a>
          </div>
          <div className="contact-card">
            <div className="contact-card-header">
              <svg className="contact-card-icon" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M9 8 L9 13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
                <circle cx="9" cy="5.5" fill="currentColor" r="0.9" />
              </svg>
              <h2 className="contact-card-title">Corrections</h2>
            </div>
            <p className="contact-card-desc">If you believe we made an error, please notify us so we can correct it promptly.</p>
            <a className="contact-pill" href="mailto:corrections@policynow.org">corrections@policynow.org</a>
          </div>
          <div className="contact-card">
            <div className="contact-card-header">
              <svg className="contact-card-icon" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="6" r="3.2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M2.5 16c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
              </svg>
              <h2 className="contact-card-title">Media & Press Inquiries</h2>
            </div>
            <p className="contact-card-desc">Journalists, researchers, or organizations seeking collaboration.</p>
            <a className="contact-pill" href="mailto:press@policynow.org">press@policynow.org</a>
          </div>
        </div>
        <div className="contact-footer">
          <p className="contact-footer-text">
             Policy Now is an independent digital publication operated by a distributed editorial team
            <br />
             based in the United States. 
          </p>
          <hr className="contact-footer-divider" />
          <p className="contact-last-updated">Last Updated: May 9, 2026</p>
        </div>
      </div>
    </>
  );
}
