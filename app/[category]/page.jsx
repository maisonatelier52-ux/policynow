import { getPage } from "../../data/site";
import HtmlPage from "../../components/HtmlPage";
import { notFound } from "next/navigation";
export default async function CategoryPage({params}){const {category}=await params;const page=getPage(`/${category}`);if(!page) notFound();return <HtmlPage page={page}/>;}
export async function generateMetadata({params}){const {category}=await params;const page=getPage(`/${category}`);return page?{title:page.title,description:page.description}:{};}
