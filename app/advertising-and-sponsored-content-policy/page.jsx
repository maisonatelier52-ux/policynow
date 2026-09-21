import { getPage } from "../../data/site";
import HtmlPage from "../../components/HtmlPage";
import { notFound } from "next/navigation";
export default function Page(){const page=getPage("/advertising-and-sponsored-content-policy");if(!page) notFound();return <HtmlPage page={page}/>;}
export function generateMetadata(){const page=getPage("/advertising-and-sponsored-content-policy");return page?{title:page.title,description:page.description}:{};}
