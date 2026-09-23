import Header from "./Header";
import Footer from "./Footer";

export default function PageRenderer({ page, article = false }) {
  return (
    <>
      <Header />
      {article && (
        <div className="progress-track">
          <div className="progress-fill" id="progressFill" />
        </div>
      )}
      <main
        className={`next-page-content ${article ? "next-article-page" : ""}`}
        dangerouslySetInnerHTML={{ __html: page?.contentHtml || "" }}
      />
      <Footer />
    </>
  );
}
