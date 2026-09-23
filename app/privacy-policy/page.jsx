import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/privacy-policy"]?.title || "PolicyNow", description: pages["/privacy-policy"]?.description || "" };
export default function Page(){ const page=pages["/privacy-policy"]; return <PageRenderer page={page} />; }
