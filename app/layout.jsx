import "./globals.css";
import SiteEnhancements from "../components/SiteEnhancements";

export const metadata={
  title:"PolicyNow",
  description:"Where Policy Meets Public Perception",
  verification:{google:"google590f22f1e6cb3e44"},
};

export default function RootLayout({children}){
  return <html lang="en"><body className="light-mode">{children}<SiteEnhancements/></body></html>;
}
