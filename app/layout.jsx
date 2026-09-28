import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, TWITTER_HANDLE } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: "policy analysis, current affairs, commentary, explainers, PolicyNow",
  authors: [{ name: "Policy Now Editorial Team" }],
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE_URL}/rss.xml` },
  },
  verification: {
    google: "google590f22f1e6cb3e44",
    other: { "msvalidate.01": "69B551AE8971C52822F86B668AFAEA67" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: { publisher: SITE_NAME },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/image/twitter-card.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/image/twitter-card.png"],
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#14181f] font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
