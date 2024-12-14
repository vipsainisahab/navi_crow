import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      <section
        className="breadcumb-section"
        style={{
          backgroundImage: `url("https://cdn.prod.website-files.com/673db2dcc379e23c771b9685/673db2ddc379e23c771b97b7_cristina-gottardi-wndpWTiDuT0-unsplash%20(1)%20(1)%20(1)%20(1)%20(1).jpg")`,
        }}
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12 center z-index1">
              {/* <h1 className="title">{breadcrumbTitle}</h1> */}
              <p
                style={{
                  fontFamily: `var(--font-Yesteryear);`,
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                News from the world of tourism
              </p>
              <h1
                className="title"
                style={{
                  fontSize: "6rem",
                  marginTop: "10px",
                }}
              >
                Our Blog
              </h1>
              <ul className="breadcumb-list flex-five">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>{breadcrumbTitle}</span>
                </li>
              </ul>
              <img
                className="bcrumb-ab"
                src="/assets/images/page/mask-bcrumb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
