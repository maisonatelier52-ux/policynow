import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_TITLE = "Where Policy Meets Public Perception";
const SITE_DESCRIPTION =
  "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.";

export const metadata = {
  metadataBase: new URL("https://www.policynow.org"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: "Policy analysis,policynow",
  authors: [{ name: "Policy Now Editorial Team" }],
  verification: {
    google: "google590f22f1e6cb3e44",
    other: { "msvalidate.01": "69B551AE8971C52822F86B668AFAEA67" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: { publisher: "Policy Now" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://www.policynow.org/",
    siteName: "policynow",
    images: [{ url: "/image/twitter-card.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/image/twitter-card.png"],
    site: "@policynow",
    creator: "@policynow",
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
