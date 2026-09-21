import { getPage } from "../../../data/site";
import HtmlPage from "../../../components/HtmlPage";
import { notFound } from "next/navigation";
export default async function ArticlePage({params}){const {category,slug}=await params;const page=getPage(`/${category}/${slug}`);if(!page) notFound();return <HtmlPage page={page}/>;}
export async function generateMetadata({params}){const {category,slug}=await params;const page=getPage(`/${category}/${slug}`);return page?{title:page.title,description:page.description}:{};}
