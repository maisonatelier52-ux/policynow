import PageRenderer from "../components/PageRenderer";
import pages from "../public/data/static-pages.json";

export default function HomePage(){ return <PageRenderer page={pages["/"]} />; }
