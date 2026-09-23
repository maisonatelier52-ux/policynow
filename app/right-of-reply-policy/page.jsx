import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/right-of-reply-policy"]?.title || "PolicyNow", description: pages["/right-of-reply-policy"]?.description || "" };
export default function Page(){ const page=pages["/right-of-reply-policy"]; return <PageRenderer page={page} />; }
