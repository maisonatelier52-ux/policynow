import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-300 px-6 lg:px-12">
      <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-6">
        <div>
          <img alt="PolicyNow" className="h-12 w-[230px] object-contain" src="/image/policynow-logo.png" />
          <p className="mt-1 mb-6 text-[0.95rem] leading-relaxed text-gray-700">
            Blending policy analysis, public perception, and strategic storytelling for
            policymakers, business leaders, and thought leaders.
          </p>
        </div>

        <div>
          <div className="mb-2.5 font-sans text-[0.8rem] font-semibold">CATEGORIES</div>
          <div className="flex flex-col">
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/politics-and-policy">
              Politics &amp; Policy
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/business-and-economy">
              Business &amp; Economy
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/global-affairs">
              Global Affairs
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/technology-and-innovation">
              Technology &amp; Innovation
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/corrections-policy">
              Corrections Policy
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/source-methodology">
              Source Methodology
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-2.5 h-0 font-sans text-[0.8rem] font-semibold">&nbsp;</div>
          <div className="flex flex-col">
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/finance-and-markets">
              Finance &amp; Markets
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/featured-pr">
              Featured PR
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/author">
              Authors
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/about-us">
              About Us
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/our-team">
              Our Team
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/editorial-policy">
              Editorial Policy
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-2.5 font-sans text-[0.8rem] font-semibold">ABOUT US</div>
          <div className="flex flex-col">
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/privacy-policy">
              Privacy policy
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/terms-and-conditions">
              Terms and Conditions
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/contact">
              Contact Us
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/ownership-and-funding">
              Ownership &amp; Funding
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/right-of-reply-policy">
              Right of Reply
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/legal">
              Legal
            </Link>
            <Link className="mb-2 block text-[0.85rem] text-black hover:underline" href="/advertising-and-sponsored-content-policy">
              Advertising Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 px-5 py-5 text-center font-sans text-[0.8rem] text-gray-500">
        © {new Date().getFullYear()} PolicyNow. All rights reserved.
      </div>
    </footer>
  );
}
