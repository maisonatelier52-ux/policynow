import { getPage } from "../data/site";
import HtmlPage from "../components/HtmlPage";
import { notFound } from "next/navigation";
export default function Home(){const page=getPage("/");if(!page) notFound();return <HtmlPage page={page}/>;}
