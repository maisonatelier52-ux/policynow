import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/source-methodology"]?.title || "PolicyNow", description: pages["/source-methodology"]?.description || "" };
export default function Page(){ const page=pages["/source-methodology"]; return <PageRenderer page={page} />; }
