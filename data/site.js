import pages from "./pages.json";
export const getPage=(route)=>pages[route]||null;
export const getRoutes=()=>Object.keys(pages);
export default pages;
