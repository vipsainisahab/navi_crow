
import Link from "next/link"

export default function Destination5() {
	return (
		<>

			<section className="top-destination2 pd-main">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="mb-50 center">
								<span className="sub-title-heading text-main font-yes fs-28-46 wow fadeInUp animated">Populer
									Activities</span>
								<h2 className="title-heading wow fadeInUp animated">Provide Top Destination</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated " data-wow-delay="0.1s">
							<div className="tf-image-box center">
								<Link href="/single-destination" className="image">
									<img src="/assets/images/tour/tour4-1.jpg" alt="Image" />
								</Link>
								<h6><Link href="/single-destination">North America</Link></h6>
								<span className="text-main">(3 Tour)</span>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated " data-wow-delay="0.2s">
							<div className="tf-image-box center pt-25">
								<Link href="/single-destination" className="image">
									<img src="/assets/images/tour/tour4-2.jpg" alt="Image" />
								</Link>
								<h6><Link href="/single-destination">Sweden</Link></h6>
								<span className="text-main">(3 Tour)</span>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated " data-wow-delay="0.3s">
							<div className="tf-image-box center">
								<Link href="/single-destination" className="image">
									<img src="/assets/images/tour/tour4-3.jpg" alt="Image" />
								</Link>
								<h6><Link href="/single-destination">North America</Link></h6>
								<span className="text-main">(3 Tour)</span>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated " data-wow-delay="0.4s">
							<div className="tf-image-box center pt-25">
								<Link href="/single-destination" className="image">
									<img src="/assets/images/tour/tour4-4.jpg" alt="Image" />
								</Link>
								<h6><Link href="/single-destination">Canada</Link></h6>
								<span className="text-main">(3 Tour)</span>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated " data-wow-delay="0.5s">
							<div className="tf-image-box center">
								<Link href="/single-destination" className="image">
									<img src="/assets/images/tour/tour4-5.jpg" alt="Image" />
								</Link>
								<h6><Link href="/single-destination">North America</Link></h6>
								<span className="text-main">(3 Tour)</span>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp animated " data-wow-delay="0.6s">
							<div className="tf-image-box center pt-25">
								<Link href="/single-destination" className="image">
									<img src="/assets/images/tour/tour4-6.jpg" alt="Image" />
								</Link>
								<h6><Link href="/single-destination">North America</Link></h6>
								<span className="text-main">(3 Tour)</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 center wow fadeInUp animated ">
							<p className="tour-des-top mt-53">Explore our top destinations voted by more than <span className="text-main">100,000+</span> customers around the world.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
