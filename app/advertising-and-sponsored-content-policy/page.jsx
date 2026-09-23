import PageRenderer from "../../components/PageRenderer";
import pages from "../../public/data/static-pages.json";

export const metadata = { title: pages["/advertising-and-sponsored-content-policy"]?.title || "PolicyNow", description: pages["/advertising-and-sponsored-content-policy"]?.description || "" };
export default function Page(){ const page=pages["/advertising-and-sponsored-content-policy"]; return <PageRenderer page={page} />; }
