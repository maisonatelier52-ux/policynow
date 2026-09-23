import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/corrections-policy"]?.title || "PolicyNow", description: pages["/corrections-policy"]?.description || "" };
export default function Page(){ const page=pages["/corrections-policy"]; return <PageRenderer page={page} />; }
