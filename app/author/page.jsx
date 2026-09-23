export const metadata = {
  title: "Author",
  description: "Blending policy analysis, public perception, and strategic storytelling for policymakers, business leaders, and thought leaders.",
  alternates: { canonical: `https://www.policynow.org/author` },
};

export default function Page() {
  return (
    <>
      <div className="main-container">
        <section className="writers-wrapper">
          <h1 className="writers-title">Authors</h1>
          <div className="writers-grid">
            <div className="writer-card">
              <img alt="Mateo" className="writer-photo" src="/images/maxine-t-warne.jpg" />
              <h2 className="writer-name">
                <a title="Maxine T. Warne">Maxine T. Warne</a>
              </h2>
              <div className="writer-article">
                <p className="bus-p">
                  Maxine T. Warne is a staff writer at 
                  <strong>Policy Now</strong>
                  , covering national developments and emerging trends shaping public policy and governance across the United States.
                </p>
              </div>
            </div>
            <div className="writer-card">
              <img alt="Hazel" className="writer-photo" src="/images/joel-j-zarate.jpg" />
              <h2 className="writer-name">
                <a title="Joel J. Zarate">Joel J. Zarate</a>
              </h2>
              <div className="writer-article">
                <p className="bus-p">
                  Joel J. Zarate is a reporter at 
                  <strong>Policy Now</strong>
                  , delivering in-depth coverage of U.S. affairs, business, and key policy debates that influence national and local communities.
                </p>
              </div>
            </div>
          </div>
          <div className="writers-grid grid-top">
            <div className="writer-card">
              <img alt="Mateo" className="writer-photo" src="/images/lisa-g-hart.jpg" />
              <h2 className="writer-name">
                <a title="Lisa G. Hart">Lisa G. Hart</a>
              </h2>
              <div className="writer-article">
                <p className="bus-p">
                  Lisa G. Hart is the Managing Editor at 
                  <strong>Policy Now</strong>
                  , overseeing editorial strategy and ensuring the publication’s commitment to accuracy, clarity, and impactful journalism.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
