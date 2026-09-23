import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/legal"]?.title || "PolicyNow", description: pages["/legal"]?.description || "" };
export default function Page(){ const page=pages["/legal"]; return <PageRenderer page={page} />; }
