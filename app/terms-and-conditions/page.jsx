import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/terms-and-conditions"]?.title || "PolicyNow", description: pages["/terms-and-conditions"]?.description || "" };
export default function Page(){ const page=pages["/terms-and-conditions"]; return <PageRenderer page={page} />; }
