import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/our-team"]?.title || "PolicyNow", description: pages["/our-team"]?.description || "" };
export default function Page(){ const page=pages["/our-team"]; return <PageRenderer page={page} />; }
