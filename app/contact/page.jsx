import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/contact"]?.title || "PolicyNow", description: pages["/contact"]?.description || "" };
export default function Page(){ const page=pages["/contact"]; return <PageRenderer page={page} />; }
