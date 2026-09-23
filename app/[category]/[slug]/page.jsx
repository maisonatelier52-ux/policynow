import { notFound } from "next/navigation";
import PageRenderer from "../../../components/PageRenderer";
import ArticleEnhancements from "../../../components/ArticleEnhancements";
import articles from "../../../public/data/articles.json";

const allArticles = Object.entries(articles).flatMap(([category,items]) => (items||[]).map(item=>({category,...item})));
export async function generateStaticParams(){ return allArticles.map(a=>({category:a.category,slug:a.slug})); }
export async function generateMetadata({params}){ const {category,slug}=await params; const a=(articles[category]||[]).find(x=>x.slug===slug); return a?{title:a.metaTitle||a.title,description:a.metaDescription}:{}; }
export default async function ArticlePage({params}){ const {category,slug}=await params; const a=(articles[category]||[]).find(x=>x.slug===slug); if(!a) notFound(); return <><PageRenderer page={a} article/><ArticleEnhancements/></>; }
