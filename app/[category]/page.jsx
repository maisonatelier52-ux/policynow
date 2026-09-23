import { notFound } from "next/navigation";
import PageRenderer from "../../components/PageRenderer";
import categoryPages from "../../public/data/category-pages.json";

export async function generateStaticParams(){
 return Object.keys(categoryPages).map(route=>({category:route.slice(1)}));
}
export async function generateMetadata({params}){
 const {category}=await params; const page=categoryPages[`/${category}`];
 return page ? {title:page.title,description:page.description} : {};
}
export default async function CategoryPage({params}){
 const {category}=await params; const page=categoryPages[`/${category}`];
 if(!page) notFound(); return <PageRenderer page={page}/>;
}
