import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/about-us"]?.title || "PolicyNow", description: pages["/about-us"]?.description || "" };
export default function Page(){ const page=pages["/about-us"]; return <PageRenderer page={page} />; }
