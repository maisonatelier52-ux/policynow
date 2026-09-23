import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/editorial-policy"]?.title || "PolicyNow", description: pages["/editorial-policy"]?.description || "" };
export default function Page(){ const page=pages["/editorial-policy"]; return <PageRenderer page={page} />; }
