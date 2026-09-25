"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import articles from "../data/articles";

function getTodayDisplay() {
  const d = new Date();
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function getNavCategories() {
  const seen = new Map();
  for (const a of articles) {
    if (!seen.has(a.category)) seen.set(a.category, a.categoryLabel);
  }
  const order = [
    "us",
    "politics-and-policy",
    "business-and-economy",
    "global-affairs",
    "technology-and-innovation",
    "finance-and-markets",
    "featured-pr",
  ];
  const ordered = order.filter((slug) => seen.has(slug)).map((slug) => ({ slug, label: seen.get(slug) }));
  for (const [slug, label] of seen) {
    if (!order.includes(slug)) ordered.push({ slug, label });
  }
  return ordered;
}

function getTickerItems() {
  return [...articles].filter((a) => a.date).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
}

export default function Header() {
  const [categories] = useState(getNavCategories);
  const [ticker] = useState(getTickerItems);
  const [today, setToday] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setToday(getTodayDisplay());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const tickerLoop = [...ticker, ...ticker];

  return (
    <>
      {/* Breaking-news ticker */}
      <div className="w-full overflow-hidden border-y border-gray-200 bg-white font-sans text-black">
        <div className="flex items-center">
          <div className="z-10 flex shrink-0 items-center gap-1.5 whitespace-nowrap bg-black px-4 py-2.5 text-[11px] font-semibold text-white">
            <span className="text-xs">⚡</span>
            <span>LATEST</span>
          </div>
          <div className="flex min-w-0 flex-1 overflow-hidden">
            <div className="flex animate-[marquee_32s_linear_infinite] gap-4 whitespace-nowrap py-1.5 text-[13px] font-semibold">
              {tickerLoop.map((item, i) => (
                <span
                  className="inline-block border-r border-black pr-4 text-black last:border-r-0"
                  key={`${item.slug}-${i}`}
                >
                  <Link href={`/${item.category}/${item.slug}`} className="hover:underline">
                    {item.title}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="flex flex-col gap-2 border-y border-black px-5 py-3 lg:hidden">
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-7 w-7 flex-col items-center justify-center gap-[3px]"
          >
            <span className="block h-[2px] w-5 bg-black" />
            <span className="block h-[2px] w-5 bg-black" />
            <span className="block h-[2px] w-5 bg-black" />
          </button>

          <Link href="/" title="Logo">
            <img alt="Logo" className="h-11 w-auto" src="/image/policynow-logo.png" />
          </Link>

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="flex h-7 w-7 items-center justify-center"
          >
            <img alt="theme" className="h-[0px] w-[0px]" src={dark ? "/image/dark-mode.svg" : "/image/light-mode.svg"} />
          </button>
        </div>
        <div className="text-center text-sm text-[#8a5a2a]">{today}</div>
      </div>

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <img alt="Logo" className="h-6 w-auto" src="/image/policynow-logo.png" />
          <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-2xl leading-none text-black">
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-5 py-4">
          <Link
            className="border-b border-gray-100 py-2.5 text-sm font-semibold uppercase tracking-wide text-black"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {categories.map((c) => (
            <Link
              className="border-b border-gray-100 py-2.5 text-sm font-semibold uppercase tracking-wide text-black"
              href={`/${c.slug}`}
              onClick={() => setMenuOpen(false)}
              key={c.slug}
            >
              {c.label}
            </Link>
          ))}
          <Link
            className="py-2.5 text-sm font-semibold uppercase tracking-wide text-black"
            href="/author"
            onClick={() => setMenuOpen(false)}
          >
            Authors
          </Link>
        </nav>
        <div className="flex gap-4 border-t border-gray-100 px-5 py-4">
          <a className="flex h-8 w-8 items-center justify-center rounded-full bg-black" href="https://www.instagram.com/poli.cynow/" title="instagram">
            <img alt="instagram" className="h-3.5 w-3.5 invert" src="/image/instagram.webp" />
          </a>
          <a className="flex h-8 w-8 items-center justify-center rounded-full bg-black" href="https://x.com/PolicynowO41566" title="twitter">
            <img alt="twitter" className="h-3.5 w-3.5 invert" src="/image/twitter.png" />
          </a>
          <a className="flex h-8 w-8 items-center justify-center rounded-full bg-black" href="https://substack.com/@policynow01" title="substack">
            <img alt="substack" className="h-3.5 w-3.5 invert" src="/image/substack.webp" />
          </a>
          <a className="flex h-8 w-8 items-center justify-center rounded-full bg-black" href="https://medium.com/@policy_now" title="medium">
            <img alt="medium" className="h-3.5 w-3.5 invert" src="/image/medium.webp" />
          </a>
        </div>
      </aside>

      {/* Desktop header */}
      <div className="mx-6 lg:mx-12">
        <div className="hidden items-center justify-between py-6 lg:flex">
          <div className="text-[13px] font-bold">{today}</div>
          <Link href="/" title="link">
            <img alt="Logo" className="h-12 w-auto" src="/image/policynow-logo.png" />
          </Link>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/poli.cynow/" title="link">
              <img alt="instagram" className="h-[14px] w-[14px]" src="/image/instagram.webp" />
            </a>
            <a href="https://x.com/PolicynowO41566" title="link">
              <img alt="twitter" className="h-[14px] w-[14px]" src="/image/twitter.png" />
            </a>
            <a href="https://substack.com/@policynow01" title="link">
              <img alt="substack" className="h-[14px] w-[14px]" src="/image/substack.webp" />
            </a>
            <a href="https://medium.com/@policy_now" title="link">
              <img alt="medium" className="h-[14px] w-[14px]" src="/image/medium.webp" />
            </a>
          </div>
        </div>

        <nav className="sticky top-0 z-30 hidden justify-center gap-10 border-y border-black bg-black py-3.5 lg:flex">
          <Link className="text-sm font-medium text-white hover:text-gray-300" href="/" title="home">
            Home
          </Link>
          {categories.map((c) => (
            <Link className="text-sm font-medium text-white hover:text-gray-300" href={`/${c.slug}`} title={c.label} key={c.slug}>
              {c.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
