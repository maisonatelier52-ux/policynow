export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-grid-layout">
        <div>
          <div className="footer-brand-title">
            <a href="https://www.policynow.org" title="PolicyNow home">
              <img alt="PolicyNow" height="48" src="/images/policynow-logo.png" width="230" />
            </a>
          </div>
          <div className="footer-desc-text">
            Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.
          </div>
          <div className="footer-links footer-social-links">
            <a href="https://www.instagram.com/poli.cynow/">Instagram</a>
            <a href="https://x.com/PolicynowO41566">X</a>
            <a href="https://substack.com/@policynow01">Substack</a>
            <a href="https://medium.com/@policy_now">Medium</a>
          </div>
        </div>

        <div>
          <div className="footer-column-title">CATEGORIES</div>
          <div className="footer-links">
            <a href="/us">US</a>
            <a href="/politics-and-policy">Politics &amp; Policy</a>
            <a href="/business-and-economy">Business &amp; Economy</a>
            <a href="/global-affairs">Global Affairs</a>
            <a href="/technology-and-innovation">Technology &amp; Innovation</a>
            <a href="/finance-and-markets">Finance &amp; Markets</a>
            <a href="/featured-pr">Featured PR</a>
            <a href="/author">Authors</a>
          </div>
        </div>

        <div>
          <div className="footer-column-title">POLICIES &amp; METHODOLOGY</div>
          <div className="footer-links">
            <a href="/about-us">About Us</a>
            <a href="/our-team">Our Team</a>
            <a href="/editorial-policy">Editorial Policy</a>
            <a href="/source-methodology">Source Methodology</a>
            <a href="/corrections-policy">Corrections Policy</a>
            <a href="/right-of-reply-policy">Right of Reply</a>
            <a href="/advertising-and-sponsored-content-policy">Advertising &amp; Sponsored Content</a>
          </div>
        </div>

        <div>
          <div className="footer-column-title">ABOUT &amp; LEGAL</div>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
            <a href="/ownership-and-funding">Ownership &amp; Funding</a>
            <a href="/legal">Legal</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">© 2026 PolicyNow. All rights reserved.</div>
    </footer>
  );
}
