import { getPage } from "../../data/site";
import HtmlPage from "../../components/HtmlPage";
import { notFound } from "next/navigation";
export default function Page(){const page=getPage("/terms-and-conditions");if(!page) notFound();return <HtmlPage page={page}/>;}
export function generateMetadata(){const page=getPage("/terms-and-conditions");return page?{title:page.title,description:page.description}:{};}
