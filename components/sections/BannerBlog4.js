import Link from "next/link";

export default function BannerBlog4() {
  return (
    <>
      <section
        className="pd-main"
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center m0-auto w-text-heading">
                {/* <span className="sub-title-heading text-main mb-15 wow fadeInUp animated">
                  Explore the world
                </span> */}
                <h2 className="title-heading mb-40 wow fadeInUp animated">
                  <span
                    className="text-gray font-yes"
                    style={{
                      color: "red",
                      fontSize: "1.7rem",
                      fontWeight: "normal",
                    }}
                  >
                    Keep memories
                  </span>
                  <p
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    latest POSTS
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 wow fadeInUp animated "
              data-wow-delay="0.1s"
            >
              <div className="tf-widget-blog blog-style">
                <Link href="/" className="blog-image">
                  <img
                    src="https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b987b_view-red-cottages-by-coastline-hamn-y-lofoten-islands-norway%2520(1)%2520(1)%2520(1)-p-500.jpeg"
                    alt=""
                  />
                  {/* <div className="category-blog">
                    <i className="icon-Group-8" />
                    <span>Traveling</span>
                  </div> */}
                </Link>
                <div className="blog-content">
                  {/* <ul className="meta-list flex-three">
                    <li>
                      <i className="icon-4" />
                      <Link href="/blog-details">
                        <span>02 Apr 2021</span>
                      </Link>
                    </li>
                    <li>
                      <i className="icon-7" />
                      <Link href="/blog-details">
                        <span>Coments (03)</span>
                      </Link>
                    </li>
                  </ul> */}
                  <h3 className="entry-title">
                    <Link href="/">Exciting Discovers And Adventures</Link>
                  </h3>
                  <p className="des">
                    Everything was seamless. The private guides were interesting
                    and...
                  </p>
                  <Link href="/" className="btn-read-more">
                    Read More <i className="icon-Vector-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp animated "
              data-wow-delay="0.2s"
            >
              <div className="tf-widget-blog blog-style">
                <Link href="/" className="blog-image">
                  <img
                    src="https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b9863_paul-vincent-roll-c61jL_NpAn8-unsplash%2520(1)%2520(1)%2520(1)-p-500.jpeg"
                    alt=""
                  />
                  {/* <div className="category-blog">
                    <i className="icon-Group-8" />
                    <span>Business</span>
                  </div> */}
                </Link>
                <div className="blog-content">
                  {/* <ul className="meta-list flex-three">
                    <li>
                      <i className="icon-4" />
                      <Link href="/blog-details">
                        <span>02 Apr 2021</span>
                      </Link>
                    </li>
                    <li>
                      <i className="icon-7" />
                      <Link href="/blog-details">
                        <span>Coments (03)</span>
                      </Link>
                    </li>
                  </ul> */}
                  <h3 className="entry-title">
                    <Link href="/blog-details">
                      Unforgettable Trip To Wild Sri Lanka
                    </Link>
                  </h3>
                  <p className="des">
                    Everything was seamless. The private guides were interesting
                    and...
                  </p>
                  <Link href="/" className="btn-read-more">
                    Read More <i className="icon-Vector-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp animated "
              data-wow-delay="0.3s"
            >
              <div className="tf-widget-blog blog-style">
                <Link href="/" className="blog-image">
                  <img
                    src="https://cdn.prod.website-files.com/673db2dcc379e23c771b96fc/673db2ddc379e23c771b981a_veligandu-island-1044366_1920%2520(1)%2520(1)-p-500.jpeg"
                    alt=""
                  />
                  {/* <div className="category-blog">
                    <i className="icon-Group-8" />
                    <span>Cavesse</span>
                  </div> */}
                </Link>
                <div className="blog-content">
                  {/* <ul className="meta-list flex-three">
                    <li>
                      <i className="icon-4" />
                      <Link href="/blog-details">
                        <span>02 Apr 2021</span>
                      </Link>
                    </li>
                    <li>
                      <i className="icon-7" />
                      <Link href="/blog-details">
                        <span>Coments (03)</span>
                      </Link>
                    </li>
                  </ul> */}
                  <h3 className="entry-title">
                    <Link href="/">Maldives -Your Personal Paradise</Link>
                  </h3>
                  <p className="des">
                    Everything was seamless. The private guides were interesting
                    and...
                  </p>
                  <Link href="/" className="btn-read-more">
                    Read More <i className="icon-Vector-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
