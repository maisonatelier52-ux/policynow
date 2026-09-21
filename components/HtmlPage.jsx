export default function HtmlPage({ page }) {
  return <main className="next-page-content" dangerouslySetInnerHTML={{ __html: page.body }} />;
}
