import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PolicyNow",
  description: "Where Policy Meets Public Perception",
  verification: { google: "google590f22f1e6cb3e44" },
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
