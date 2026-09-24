"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["US", "/us"],
  ["Politics & Policy", "/politics-and-policy"],
  ["Business & Economy", "/business-and-economy"],
  ["Global Affairs", "/global-affairs"],
  ["Technology & Innovation", "/technology-and-innovation"],
  ["Finance & Markets", "/finance-and-markets"],
  ["Featured PR", "/featured-pr"],
  ["Authors", "/author"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="site-header site-header-standard">
      <div className="header-ticker-wrapper">
        <div className="header-ticker-container">
          <div className="header-ticker-label">
            <span className="header-ticker-icon">⚡</span><span>LATEST</span>
          </div>
          <div className="header-ticker-content">
            <span className="header-ticker-item"><Link href="/us/julio-herrera-velutini-pope-leo-xiv">Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace</Link></span>
            <span className="header-ticker-item"><Link href="/us/us-consumers-rethink-spending-as-retailers-see-fewer-frills">From unfilled gas tanks to fewer frills, retailers see US consumers rethink their spending</Link></span>
            <span className="header-ticker-item"><Link href="/us/julio-herrera-velutini-pope-leo-xiv">Where Many Voices Became One: Pope Leo XIV, Andrea Bocelli and the Canticle of Peace</Link></span>
            <span className="header-ticker-item"><Link href="/us/us-consumers-rethink-spending-as-retailers-see-fewer-frills">From unfilled gas tanks to fewer frills, retailers see US consumers rethink their spending</Link></span>
          </div>
        </div>
      </div>

      <div className="top-bar">
        <div className="top-left">
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <img alt="Menu" className="menu-togg menu-toggle" src="/images/menu.png" width="22" height="22" />
          </button>
          <Link href="/" title="PolicyNow home">
            <img alt="PolicyNow" className="main-logo" src="/images/policynow-logo.png" />
          </Link>
          <button type="button" className="dark-mode-button" aria-label="Toggle dark mode" onClick={() => document.body.classList.toggle("dark-mode")}>
            <img alt="Toggle dark mode" id="darkModeToggle" src="/images/light-mode.svg" width="20" height="20" />
          </button>
        </div>
        <div className="mobile-date-row">Friday, 11 September, 2026</div>
      </div>

      <div className={`sidebar-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside className={`sidebar ${menuOpen ? "active" : ""}`} aria-label="Site navigation">
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-grid">
              {navItems.map(([label, href]) => (
                <Link key={href} className="nav-item" href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
              ))}
            </div>
          </div>
          <div className="social-section">
            <div className="social-icons">
              <a className="social-icon" href="https://www.instagram.com/poli.cynow/" target="_blank" rel="noreferrer" title="Instagram"><img alt="Instagram" src="/images/instagram.webp" /></a>
              <a className="social-icon" href="https://x.com/PolicynowO41566" target="_blank" rel="noreferrer" title="X"><img alt="X" src="/images/twitter.png" /></a>
              <a className="social-icon" href="https://substack.com/@policynow01" target="_blank" rel="noreferrer" title="Substack"><img alt="Substack" src="/images/substack.webp" /></a>
              <a className="social-icon" href="https://medium.com/@policy_now" target="_blank" rel="noreferrer" title="Medium"><img alt="Medium" src="/images/medium.webp" /></a>
            </div>
          </div>
        </nav>
      </aside>

      <div className="date-row">
        <div className="day"><strong>Saturday, August 20, 2026</strong></div>
        <div className="top-center">
          <Link href="/" title="PolicyNow home"><img alt="PolicyNow" src="/images/policynow-logo.png" /></Link>
        </div>
        <div className="top-right">
          <a href="https://www.instagram.com/poli.cynow/" target="_blank" rel="noreferrer" title="Instagram"><img alt="Instagram" src="/images/instagram.webp" /></a>
          <a href="https://x.com/PolicynowO41566" target="_blank" rel="noreferrer" title="X"><img alt="X" src="/images/twitter.png" /></a>
          <a href="https://substack.com/@policynow01" target="_blank" rel="noreferrer" title="Substack"><img alt="Substack" src="/images/substack.webp" /></a>
          <a href="https://medium.com/@policy_now" target="_blank" rel="noreferrer" title="Medium"><img alt="Medium" src="/images/medium.webp" /></a>
        </div>
      </div>

      <nav className="main-nav main-nav1">
        {navItems.slice(0, 8).map(([label, href]) => <Link key={href} className="nav-l" href={href}>{label}</Link>)}
      </nav>
    </header>
  );
}
