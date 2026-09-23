import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/ownership-and-funding"]?.title || "PolicyNow", description: pages["/ownership-and-funding"]?.description || "" };
export default function Page(){ const page=pages["/ownership-and-funding"]; return <PageRenderer page={page} />; }
