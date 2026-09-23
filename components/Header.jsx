export default function Header() {
  return (
    <header className="site-header site-header-standard">
      <div className="header-ticker-wrapper">
        <div className="header-ticker-container">
          <div className="header-ticker-label">
            <span className="header-ticker-icon">⚡</span>
            <span>LATEST</span>
          </div>
          <div className="header-ticker-content">
            <span className="header-ticker-item">
              <a href="/us/julio-herrera-velutini-pope-leo-xiv">Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace</a>
            </span>
            <span className="header-ticker-item">
              <a href="/us/us-consumers-rethink-spending-as-retailers-see-fewer-frills">From unfilled gas tanks to fewer frills, retailers see US consumers rethink their spending</a>
            </span>
            <span className="header-ticker-item">
              <a href="/us/julio-herrera-velutini-pope-leo-xiv">Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace</a>
            </span>
            <span className="header-ticker-item">
              <a href="/us/us-consumers-rethink-spending-as-retailers-see-fewer-frills">From unfilled gas tanks to fewer frills, retailers see US consumers rethink their spending</a>
            </span>
          </div>
        </div>
      </div>

      <div className="top-bar">
        <div className="top-left">
          <img alt="menu" className="menu-togg menu-toggle" height="16" src="/images/menu.png" width="16" />
          <a href="https://www.policynow.org" title="PolicyNow home">
            <img alt="PolicyNow" className="main-logo" src="/images/policynow-logo.png" />
          </a>
          <img alt="Toggle dark mode" height="15" id="darkModeToggle" src="/images/light-mode.svg" width="15" />
        </div>

        <div className="mobile-date-row">Friday, 11 September, 2026</div>

        <div className="sidebar-overlay" id="sidebarOverlay" />
        <div className="sidebar" id="sidebar">
          <nav className="sidebar-nav">
            <div className="nav-section">
              <div className="nav-grid">
                <a className="nav-item" href="https://www.policynow.org">Home</a>
                <a className="nav-item" href="/us">US</a>
                <a className="nav-item" href="/politics-and-policy">Politics &amp; Policy</a>
                <a className="nav-item" href="/business-and-economy">Business &amp; Economy</a>
                <a className="nav-item" href="/global-affairs">Global Affairs</a>
                <a className="nav-item" href="/technology-and-innovation">Technology &amp; Innovation</a>
                <a className="nav-item" href="/finance-and-markets">Finance &amp; Markets</a>
                <a className="nav-item" href="/featured-pr">Featured PR</a>
                <a className="nav-item" href="/author">Authors</a>
              </div>
            </div>
            <div className="social-section">
              <div className="social-icons">
                <a className="social-icon" href="https://www.instagram.com/poli.cynow/" title="Instagram"><img alt="Instagram" src="/images/instagram.webp" /></a>
                <a className="social-icon" href="https://x.com/PolicynowO41566" title="X"><img alt="X" src="/images/twitter.png" /></a>
                <a className="social-icon" href="https://substack.com/@policynow01" title="Substack"><img alt="Substack" src="/images/substack.webp" /></a>
                <a className="social-icon" href="https://medium.com/@policy_now" title="Medium"><img alt="Medium" src="/images/medium.webp" /></a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="date-row">
        <div className="day"><strong>Wednesday, October 23, 2026</strong></div>
        <div className="top-center">
          <a href="https://www.policynow.org" title="PolicyNow home">
            <img alt="PolicyNow" src="/images/policynow-logo.png" />
          </a>
        </div>
        <div className="top-right">
          <a href="https://www.instagram.com/poli.cynow/" title="Instagram"><img alt="Instagram" src="/images/instagram.webp" /></a>
          <a href="https://x.com/PolicynowO41566" title="X"><img alt="X" src="/images/twitter.png" /></a>
          <a href="https://substack.com/@policynow01" title="Substack"><img alt="Substack" src="/images/substack.webp" /></a>
          <a href="https://medium.com/@policy_now" title="Medium"><img alt="Medium" src="/images/medium.webp" /></a>
        </div>
      </div>

      <nav className="main-nav main-nav1">
        <a className="nav-l" href="https://www.policynow.org">Home</a>
        <a className="nav-l" href="/us">US</a>
        <a className="nav-l" href="/politics-and-policy">Politics &amp; Policy</a>
        <a className="nav-l" href="/business-and-economy">Business &amp; Economy</a>
        <a className="nav-l" href="/global-affairs">Global Affairs</a>
        <a className="nav-l" href="/technology-and-innovation">Technology &amp; Innovation</a>
        <a className="nav-l" href="/finance-and-markets">Finance &amp; Markets</a>
        <a className="nav-l" href="/featured-pr">Featured PR</a>
      </nav>
    </header>
  );
}
