
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SingleDestination() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section>
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<img src="/assets/images/destination/beakcrumb.jpg" alt="" />
								</div>
							</div>
						</div>
					</section>
					<section className="pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-md-8">
									<div className="single-destinaion-content">
										<div className="inner-haeder mb-50">
											<div className="flex-three">
												<i className="icon-15" />
												<span>Mehedii .Ha /</span>
											</div>
											<h2 className="title">Explore Switzerland for more fun!</h2>
											<p className="des">Lorem Ipsum proin gravida nibh vel velit auctor aliqueenean
												sollicitudin.</p>
										</div>
										<div className="description-wrap mb-40">
											<span className="description">Description:</span>
											<p className="des">Description It is a long established fact that a reader will be
												distrac by any websites look for ways mornings
												of spring prevent AdBlock from blocking annoying ads. As a result, we've
												focused on improving our funct
												so that we can overcome these anti-ad blocking attempts. Of course, you can
												help us continue improve our
												ad blocking ability by reporting any time you run into a website that won't
												allow you to block the readable
												content of a page when looking at its layout. It is a long established fact
											</p>
										</div>
										<div className=" image-wrap flex-three mb-40">
											<img src="/assets/images/page/des-single1.jpg" alt="image" />
											<img src="/assets/images/page/des-single2.jpg" alt="image" />
										</div>
										<div className="description-wrap mb-40">
											<span className="description">Description:</span>
											<p className="des mb-18">Description It is a long established fact that a reader
												will be distrac by any websites look for ways mornings
												of spring prevent AdBlock from blocking annoying ads. As a result, we've
												focused on improving our funct
												so that we can overcome these anti-ad blocking attempts. Of course, you can
												help us continue improve our
												ad blocking ability by reporting any time you run into a website that won't
												allow you to block the readable
												content of a page when looking at its layout. It is a long established fact
											</p>
											<ul className="listing-des">
												<li>
													<p>View the City Walls</p>
												</li>
												<li>
													<p>Hiking in the forest</p>
												</li>
												<li>
													<p>Discover the famous view point “The Lark”</p>
												</li>
												<li>
													<p>Sunset on the cruise</p>
												</li>
											</ul>
										</div>
										<div className="row mb-40">
											<div className="col-4">
												<img src="/assets/images/destination/des1.jpg" alt="image" />
											</div>
											<div className="col-4">
												<img src="/assets/images/destination/des2.jpg" alt="image" />
											</div>
											<div className="col-4">
												<img src="/assets/images/destination/des3.jpg" alt="image" />
											</div>
										</div>
										<div className="description-wrap mb-30">
											<span className="description">Municipalities</span>
											<p className="des mb-25">Description It is a long established fact that a reader
												will be distrac by any websites look for ways mornings
												of spring prevent AdBlock from blocking annoying ads. As a result, we've
												focused on improving our funct
												so that we can overcome these anti-ad blocking attempts. Of course, you can
												help us continue improve our
												ad blocking ability by reporting any time you run into a website that won't
												allow you to block the readable
												content of a page when looking at its layout. It is a long established fact
											</p>
											<p className="des mb-30">Description It is a long established fact that a reader
												will be distrac by any websites look for ways mornings
												of spring prevent AdBlock from blocking annoying ads. As a result, we've
												focused on improving our funct
												so that we can overcome these anti-ad blocking attempts. Of course, you can
												help us continue
											</p>
											<ul className="listing-icon">
												<li className="flex-three">
													<i className="icon-10" />
													<p>Praesent vulputate at enim sit amet mattis lobortis ante pulvinar at
														diam</p>
												</li>
												<li className="flex-three">
													<i className="icon-10" />
													<p>Donec ut lobortis ante, non lobortis ante imperdiet est volutpat in
														diam erat</p>
												</li>
												<li className="flex-three">
													<i className="icon-10" />
													<p>Donec ut lobortis ante, non lobortis ante imperdiet est volutpat in
														diam erat</p>
												</li>
											</ul>
										</div>
										<div className="row">
											<div className="col-6">
												<img src="/assets/images/destination/des4.jpg" alt="image" />
											</div>
											<div className="col-6">
												<img src="/assets/images/destination/des5.jpg" alt="image" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="side-bar-right">
										<div className="sidebar-widget">
											<h4 className="block-heading">search here</h4>
											<form action="/" id="search-bar-widget">
												<input type="text" placeholder="Search here..." />
												<button type="button"><i className="icon-search-2" /></button>
											</form>
										</div>
										<div className="sidebar-widget">
											<h4 className="block-heading">Categories</h4>
											<ul className="category-blog">
												<li>
													<Link href="#" className="flex-two">
														<span>Graphic Design</span>
														<span>03</span>
													</Link>
												</li>
												<li>
													<Link href="#" className="flex-two">
														<span>Web Development</span>
														<span>03</span>
													</Link>
												</li>
												<li>
													<Link href="#" className="flex-two">
														<span>Digital Marketing</span>
														<span>03</span>
													</Link>
												</li>
												<li>
													<Link href="#" className="flex-two">
														<span>UI/UX Development</span>
														<span>03</span>
													</Link>
												</li>
											</ul>
										</div>
										<div className="sidebar-widget">
											<h4 className="block-heading">Recent News</h4>
											<div className="recent-post-list">
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog1.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="start">
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
														</div>
														<h4 className="title">
															<Link href="/blog-details">Walking the Amalfi Coast</Link>
														</h4>
														<p>From <span className="text-main">$129.00</span></p>
													</div>
												</div>
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog2.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="start">
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
														</div>
														<h4 className="title">
															<Link href="/blog-details">Walking the Amalfi Coast</Link>
														</h4>
														<p>From <span className="text-main">$129.00</span></p>
													</div>
												</div>
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog3.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="start">
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
															<i className="icon-Star" />
														</div>
														<h4 className="title">
															<Link href="/blog-details">Walking the Amalfi Coast</Link>
														</h4>
														<p>From <span className="text-main">$129.00</span></p>
													</div>
												</div>
											</div>
										</div>
										<div className="sidebar-widget-single">
											<div className="banner-part-item booking-style-1 relative bg-part-gray overflow-hidden">
												<span className="text-main sale-up mb-10">Save up to 25%</span>
												<div className="font-yes title"> Special Discount <br /> Offering</div>
												<Link href="#" className="tour1 btn-booking mt-27">Booking Now <i className="icon-arrow-right" /></Link>
												<img src="/assets/images/explore/ex-pl-1.png" alt="image" className="mask-banner-part" />
												<span className="price-banner-part flex-five center">From 99$</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="mb--93">
						<div className="tf-container">
							<div className="callt-to-action flex-two z-index3 relative">
								<div className="callt-to-action-content flex-three">
									<div className="image">
										<img src="/assets/images/page/ready.png" alt="Image" />
									</div>
									<div className="content">
										<h2 className="title-call">Ready to adventure and enjoy natural</h2>
										<p className="des">Lorem ipsum dolor sit amet, consectetur notted adipisicin</p>
									</div>
								</div>
								<img src="/assets/images/page/vector4.png" alt="" className="shape-ab" />
								<div className="callt-to-action-button">
									<Link href="#" className="get-call">Let,s get started</Link>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}