import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/author"]?.title || "PolicyNow", description: pages["/author"]?.description || "" };
export default function Page(){ const page=pages["/author"]; return <PageRenderer page={page} />; }
