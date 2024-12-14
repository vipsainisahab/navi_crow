'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function TourSingle() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section>
						<div className="tf-container full">
							<div className="row">
								<div className="col-md-12">
									<img src="/assets/images/page/breakcrumb2.jpg" alt="image" />
								</div>
							</div>
						</div>
					</section>
					<section className="tour-single">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<ul className="nav justify-content-between tab-tour-single" id="pills-tab" role="tablist">
										<li className="nav-item"  onClick={() => handleTab(1)}>
											<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-information-tab" data-bs-toggle="pill" data-bs-target="#pills-information" type="button" role="tab" aria-controls="pills-information" aria-selected="true"><i className="icon-Vector-51" /> Information</button>
										</li>
										<li className="nav-item"  onClick={() => handleTab(2)}>
											<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="pills-tour-planing-tab" data-bs-toggle="pill" data-bs-target="#pills-tour-planing" type="button" role="tab" aria-controls="pills-tour-planing" aria-selected="false"><i className="icon-destination-2-1" /> Tour Planing</button>
										</li>
										<li className="nav-item"  onClick={() => handleTab(3)}>
											<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="pills-location-share-tab" data-bs-toggle="pill" data-bs-target="#pills-location-share" type="button" role="tab" aria-controls="pills-location-share" aria-selected="false"><i className="icon-map-1" /> Location share</button>
										</li>
										<li className="nav-item"  onClick={() => handleTab(4)}>
											<button className={isTab == 4 ? "nav-link active" : "nav-link"} id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false"><i className="icon-favourite-1" /> Reviews</button>
										</li>
										<li className="nav-item"  onClick={() => handleTab(5)}>
											<button className={isTab == 5 ? "nav-link active" : "nav-link"} id="pills-shot-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-shot-gallery" type="button" role="tab" aria-controls="pills-shot-gallery" aria-selected="false"><i className="icon-image-gallery-1" /> Shot Gallery</button>
										</li>
									</ul>
								</div>
							</div>
							<div className="row pd-main">
								<div className="col-lg-12">
									<div className="tab-content" id="pills-tabContent">
										<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-information" role="tabpanel" aria-labelledby="pills-information-tab" tabIndex={0}>
											<div className="row mb-50">
												<div className="col-lg-12">
													<div className="inner-heading-wrap flex-two">
														<div className="inner-heading">
															<span className="feature">Featured</span>
															<h2 className="title">Africa – Amazing African Safari</h2>
															<ul className="flex-three list-wrap-heading">
																<li className="flex-three">
																	<i className="icon-time-left" />
																	<span>5 Hours</span>
																</li>
																<li className="flex-three">
																	<i className="icon-user" />
																	<span>Max Guests: 12</span>
																</li>
																<li className="flex-three">
																	<i className="icon-18" />
																	<span>1421 San Pedro St, Los Angeles, CA</span>
																</li>
															</ul>
														</div>
														<div className="inner-price">
															<div className="flex-three">
																<div className="start">
																	<i className="icon-Star" />
																	<i className="icon-Star" />
																	<i className="icon-Star" />
																	<i className="icon-Star" />
																	<i className="icon-Star" />
																</div>
																<span className="review">(1 Review)</span>
															</div>
															<p className="price-sale text-main">$130.00 <span className="price">$16000</span></p>
														</div>
													</div>
												</div>
											</div>
											<div className="row mb-40 image-gallery-single">
												<div className="col-12 col-sm-6">
													<img src="/assets/images/destination/1.jpg" alt="image" />
												</div>
												<div className="col-6 col-sm-3">
													<img src="/assets/images/destination/2.jpg" alt="image" />
												</div>
												<div className="col-6 col-sm-3">
													<img src="/assets/images/destination/3.jpg" alt="image" />
												</div>
											</div>
											<div className="row">
												<div className="col-lg-8">
													<div className="information-content-tour">
														<div className="description-wrap mb-40">
															<span className="description">Description:</span>
															<p className="des">Description It is a long established fact that a
																reader will be distrac by any websites look for ways
																mornings
																of spring prevent AdBlock from blocking annoying ads. As a
																result, we've focused on improving our funct
																so that we can overcome these anti-ad blocking attempts. Of
																course, you can help us continue improve our
																ad blocking ability by reporting any time you run into a
																website that won't allow you to block the readable
																content of a page when looking at its layout. It is a long
																established fact</p>
														</div>
														<div className="description-wrap mb-40">
															<span className="description">Advance Facilities</span>
															<p className="des">Leave your guidebooks at home and dive into the
																local cultures that make each destination so special. We’ll
																connect you with our exclusive experiences. Each trip is
																carefully crafted to let enjoy your vacation.</p>
														</div>
														<div className="description-wrap mb-40">
															<span className="description">What to Expect</span>
															<p className="des mb-18">Leave your guidebooks at home and dive into
																the local cultures that make each destination so special.
																We’ll
																connect you with our exclusive experiences. Each trip is
																carefully crafted to let enjoy your vacation.
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
														<div className="expect-wrap mb-70">
															<h4 className="title mb-18">What to Expect</h4>
															<div className="expect flex-three">
																<span>Departure/Return Location</span>
																<p>2 Taijichang St, Dongcheng Qu, Beijing Shi, China</p>
															</div>
															<div className="expect flex-three">
																<span>Departure Time</span>
																<p>Please arrive by 9:15 AM for a departure at 9:30 AM</p>
															</div>
															<div className="expect flex-three">
																<span>Return Time</span>
																<p>Approximately 8:30 PM</p>
															</div>
															<div className="expect flex-three">
																<span>Return Time</span>
																<p>Approximately 8:30 PM</p>
															</div>
															<div className="expect flex-three">
																<span>Return Time</span>
																<p>Approximately 8:30 PM</p>
															</div>
														</div>
														<div className="expect-wrap mb-70">
															<h4 className="title mb-40">Included/Exclude</h4>
															<div className="row">
																<div className="col-md-6">
																	<ul className="listing-clude">
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>Pick and Drop Services</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>1 Meal Per Day</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>Cruise Dinner &amp; Music Event</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>Visit 7 Best Places in the City With Group
																			</p>
																		</li>
																	</ul>
																</div>
																<div className="col-md-6">
																	<ul className="listing-clude">
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>Pick and Drop Services</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>1 Meal Per Day</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>Cruise Dinner &amp; Music Event</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-Vector-7" />
																			<p>Visit 7 Best Places in the City With Group
																			</p>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="expect-wrap">
															<h4 className="title mb-40">Tour Amenities</h4>
															<div className="row">
																<div className="col-md-4">
																	<ul className="listing-icon">
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Air Conditioning</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Microwave</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Central Heating</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Central Heating</p>
																		</li>
																	</ul>
																</div>
																<div className="col-md-4">
																	<ul className="listing-icon">
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Laundry</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Outdoor Shower</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Swimming Pool</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Wifi</p>
																		</li>
																	</ul>
																</div>
																<div className="col-md-4">
																	<ul className="listing-icon">
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Window Covering</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Refrigerator</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Alarm System</p>
																		</li>
																		<li className="flex-three">
																			<i className="icon-10" />
																			<p>Window Coverings</p>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="side-bar-right">
														<div className="sidebar-widget">
															<h6 className="block-heading">Book This Tour</h6>
															<form action="/" id="form-book-tour">
																<div className="input-wrap mb-30">
																	<input type="date" />
																</div>
																<div className="flex-two mb-30">
																	<span className="label">Time:</span>
																	<div className="radio">
																		<input id="first" type="radio" name="numbers" defaultValue="first" defaultChecked />
																		<label htmlFor="first">14.00</label>
																		<input id="second" type="radio" name="numbers" defaultValue="second" />
																		<label htmlFor="second">16.00</label>
																	</div>
																</div>
																<div className="input-wrap-sellect mb-30">
																	<span className="label">Tickets:</span>
																	<div className="flex-two mb-15">
																		<p>Children (0-12 years)$129.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two mb-15">
																		<p>Youth (13-17 years)$169.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two">
																		<p>Adult (18+ years)$189.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																</div>
																<div className="input-wrap-checkbox mb-30">
																	<span className="label">Add Extra</span>
																	<div className="checkbox">
																		<input id="check" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check">Service per booking</label>
																	</div>
																	<div className="checkbox">
																		<input id="check1" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check1">Service per person</label>
																	</div>
																	<div className="extra">
																		<div className="flex-three">
																			<span className="name">Adult:</span>
																			<span className="price">$18.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Youth:</span>
																			<span className="price">$16.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Children:</span>
																			<span className="price">$16.00</span>
																		</div>
																	</div>
																</div>
																<div className="flex-two mb-40">
																	<span className="label">Total:</span>
																	<span className="total text-main">$130.00</span>
																</div>
																<button type="submit">Procced Booking</button>
															</form>
														</div>
														<div className="sidebar-widget">
															<h6 className="block-heading">Book With Confidence</h6>
															<ul className="category-confidence">
																<li className="flex-three">
																	<i className="icon-customer-service-1" />
																	<span>Customer care available 24/7</span>
																</li>
																<li className="flex-three">
																	<i className="icon-Vector-6" />
																	<span>Hand-picked Tours &amp; Activities</span>
																</li>
																<li className="flex-three">
																	<i className="icon-insurance-1" />
																	<span>Free Travel Insureance</span>
																</li>
																<li className="flex-three">
																	<i className="icon-price-tag-1-1" />
																	<span>No-hassle best price guarantee</span>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
																		</h4>
																		<p>From <span className="text-main">$129.00</span></p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-tour-planing" role="tabpanel" aria-labelledby="pills-tour-planing-tab" tabIndex={0}>
											<div className="row">
												<div className="col-lg-8">
													<div className="planing-content-tour">
														<h3 className="title-plan">Tour Plan :</h3>
														<div className="tour-planing-section flex">
															<div className="number-box flex-five">01</div>
															<div className="content-box">
																<h5 className="title">Day 1: Arrive in Zürich, Switzerland</h5>
																<p className="des">We’ll meet at 4 p.m. at our hotel in Luzern
																	(Lucerne) for a “Welcome to Switzerland”
																	meeting. Then we’ll take a meandering evening walk
																	through Switzerland’s most
																	charming lakeside town, and get acquainted with one
																	another over dinner we've
																	focused on improving our funct together. Sleep in Luzern
																	(2 nights). No bus. Walk</p>
															</div>
														</div>
														<div className="tour-planing-section flex">
															<div className="number-box flex-five">02</div>
															<div className="content-box">
																<h5 className="title">Day 2: Zürich–Biel/BienneNeuchâtel–Geneva
																</h5>
																<p className="des mb-10">We’ll meet at 4 p.m. at our hotel in
																	Luzern (Lucerne) for a “Welcome to Switzerland”
																	meeting. Then we’ll take a meandering evening walk
																	through Switzerland’s most
																	charming lakeside town, and get acquainted with one
																	another over </p>
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
														</div>
														<div className="tour-planing-section flex">
															<div className="number-box flex-five">03</div>
															<div className="content-box">
																<h5 className="title">Day 3: Enchanting Engelberg</h5>
																<p className="des mb-22">We’ll meet at 4 p.m. at our hotel in
																	Luzern (Lucerne) for a “Welcome to Switzerland”
																	meeting. Then we’ll take a meandering evening walk
																	through Switzerland’s most
																	charming lakeside town, and get acquainted with one
																	another over </p>
																<ul className="listing-icon">
																	<li className="flex-three">
																		<i className="icon-10" />
																		<p>Praesent vulputate at enim sit amet mattis
																			lobortis ante pulvinar at diam</p>
																	</li>
																	<li className="flex-three">
																		<i className="icon-10" />
																		<p>Donec ut lobortis ante, non lobortis ante
																			imperdiet est volutpat in diam erat</p>
																	</li>
																	<li className="flex-three">
																		<i className="icon-10" />
																		<p>Donec ut lobortis ante, non lobortis ante
																			imperdiet est volutpat in diam erat</p>
																	</li>
																</ul>
															</div>
														</div>
														<div className="tour-planing-section flex">
															<div className="number-box flex-five">04</div>
															<div className="content-box">
																<h5 className="title">Day 4: Arrive in Zürich, Switzerland</h5>
																<p className="des mb-25">We’ll meet at 4 p.m. at our hotel in
																	Luzern (Lucerne) for a “Welcome to Switzerland”
																	meeting. Then we’ll take a meandering evening walk
																	through Switzerland</p>
																<ul className="listing-clude">
																	<li className="flex-three">
																		<i className="icon-Vector-7" />
																		<p>Pick and Drop Services</p>
																	</li>
																	<li className="flex-three">
																		<i className="icon-Vector-7" />
																		<p>1 Meal Per Day</p>
																	</li>
																	<li className="flex-three">
																		<i className="icon-Vector-7" />
																		<p>Cruise Dinner &amp; Music Event</p>
																	</li>
																	<li className="flex-three">
																		<i className="icon-Vector-7" />
																		<p>Visit 7 Best Places in the City With Group</p>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="side-bar-right">
														<div className="sidebar-widget">
															<h6 className="block-heading">Book This Tour</h6>
															<form action="/" id="form-book-tour">
																<div className="input-wrap mb-30">
																	<input type="date" />
																</div>
																<div className="flex-two mb-30">
																	<span className="label">Time:</span>
																	<div className="radio">
																		<input id="first" type="radio" name="numbers" defaultValue="first" defaultChecked />
																		<label htmlFor="first">14.00</label>
																		<input id="second" type="radio" name="numbers" defaultValue="second" />
																		<label htmlFor="second">16.00</label>
																	</div>
																</div>
																<div className="input-wrap-sellect mb-30">
																	<span className="label">Tickets:</span>
																	<div className="flex-two mb-15">
																		<p>Children (0-12 years)$129.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two mb-15">
																		<p>Youth (13-17 years)$169.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two">
																		<p>Adult (18+ years)$189.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																</div>
																<div className="input-wrap-checkbox mb-30">
																	<span className="label">Add Extra</span>
																	<div className="checkbox">
																		<input id="check" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check">Service per booking</label>
																	</div>
																	<div className="checkbox">
																		<input id="check1" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check1">Service per person</label>
																	</div>
																	<div className="extra">
																		<div className="flex-three">
																			<span className="name">Adult:</span>
																			<span className="price">$18.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Youth:</span>
																			<span className="price">$16.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Children:</span>
																			<span className="price">$16.00</span>
																		</div>
																	</div>
																</div>
																<div className="flex-two mb-40">
																	<span className="label">Total:</span>
																	<span className="total text-main">$130.00</span>
																</div>
																<button type="submit">Procced Booking</button>
															</form>
														</div>
														<div className="sidebar-widget">
															<h6 className="block-heading">Book With Confidence</h6>
															<ul className="category-confidence">
																<li className="flex-three">
																	<i className="icon-customer-service-1" />
																	<span>Customer care available 24/7</span>
																</li>
																<li className="flex-three">
																	<i className="icon-Vector-6" />
																	<span>Hand-picked Tours &amp; Activities</span>
																</li>
																<li className="flex-three">
																	<i className="icon-insurance-1" />
																	<span>Free Travel Insureance</span>
																</li>
																<li className="flex-three">
																	<i className="icon-price-tag-1-1" />
																	<span>No-hassle best price guarantee</span>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
																		</h4>
																		<p>From <span className="text-main">$129.00</span></p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div >
										</div >
										<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-location-share" role="tabpanel" aria-labelledby="pills-location-share-tab" tabIndex={0}>
											<div className="row">
												<div className="col-lg-8">
													<div className="localtion-content-tour">
														<div className="map2 relative mb-32">
															<div id="map2" />
														</div>
														<div className="flex-three map-list mb-50">
															<i className="icon-18" />
															<p>1421 San Pedro St, Los Angeles, CA</p>
														</div>
														<h3 className="title-location">Description:</h3>
														<p className="des mb-22">Description It is a long established fact that
															a reader will be distrac by any websites look for ways mornings
															even
															of spring prevent AdBlock from blocking annoying ads. As a
															result, we've focused on improving our funct walk
															so that we can overcome these anti-ad blocking attempts. Of
															course, you can help us continue improve our
															ad blocking ability by reporting any time you run into a website
															that won't allow you to block the readable dine
															content of a page when looking at its layout. It is a long
															established fact
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
												</div>
												<div className="col-lg-4">
													<div className="side-bar-right">
														<div className="sidebar-widget">
															<h6 className="block-heading">Book This Tour</h6>
															<form action="/" id="form-book-tour">
																<div className="input-wrap mb-30">
																	<input type="date" />
																</div>
																<div className="flex-two mb-30">
																	<span className="label">Time:</span>
																	<div className="radio">
																		<input id="first" type="radio" name="numbers" defaultValue="first" defaultChecked />
																		<label htmlFor="first">14.00</label>
																		<input id="second" type="radio" name="numbers" defaultValue="second" />
																		<label htmlFor="second">16.00</label>
																	</div>
																</div>
																<div className="input-wrap-sellect mb-30">
																	<span className="label">Tickets:</span>
																	<div className="flex-two mb-15">
																		<p>Children (0-12 years)$129.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two mb-15">
																		<p>Youth (13-17 years)$169.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two">
																		<p>Adult (18+ years)$189.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																</div>
																<div className="input-wrap-checkbox mb-30">
																	<span className="label">Add Extra</span>
																	<div className="checkbox">
																		<input id="check" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check">Service per booking</label>
																	</div>
																	<div className="checkbox">
																		<input id="check1" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check1">Service per person</label>
																	</div>
																	<div className="extra">
																		<div className="flex-three">
																			<span className="name">Adult:</span>
																			<span className="price">$18.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Youth:</span>
																			<span className="price">$16.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Children:</span>
																			<span className="price">$16.00</span>
																		</div>
																	</div>
																</div>
																<div className="flex-two mb-40">
																	<span className="label">Total:</span>
																	<span className="total text-main">$130.00</span>
																</div>
																<button type="submit">Procced Booking</button>
															</form>
														</div>
														<div className="sidebar-widget">
															<h6 className="block-heading">Book With Confidence</h6>
															<ul className="category-confidence">
																<li className="flex-three">
																	<i className="icon-customer-service-1" />
																	<span>Customer care available 24/7</span>
																</li>
																<li className="flex-three">
																	<i className="icon-Vector-6" />
																	<span>Hand-picked Tours &amp; Activities</span>
																</li>
																<li className="flex-three">
																	<i className="icon-insurance-1" />
																	<span>Free Travel Insureance</span>
																</li>
																<li className="flex-three">
																	<i className="icon-price-tag-1-1" />
																	<span>No-hassle best price guarantee</span>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
																		</h4>
																		<p>From <span className="text-main">$129.00</span></p>
																	</div>
																</div>
															</div>
														</div>
													</div >
												</div >
											</div >
										</div >
										<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex={0}>
											<div className="row">
												<div className="col-lg-8">
													<div className="review-content-tour">
														<div className="custom-review mb-80">
															<h4 className="title-review mb-37">Customer Review</h4>
															<div className="flex card-list">
																<div className="card-review">
																	<div className="percent">
																		<svg>
																			<circle cx={105} cy={105} r={100} />
																			<circle cx={105} cy={105} r={100} />
																		</svg>
																		<div className="number center">
																			<span>overall Ratings</span>
																			<h5 className="number-reating">4.8</h5>
																			<span>Out of 5</span>
																		</div>
																	</div>
																</div>
																<div className="review-list">
																	<div className="review-list-item mb-40">
																		<span className="comfort">Comfort</span>
																		<div className="flex-two">
																			<span className="reating">Rating 4.8 </span>
																			<div className="start">
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<span>5.0</span>
																			</div>
																		</div>
																		<div className="progress" role="progressbar" aria-label="example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
																			<div className="progress-bar" style={{ width: '70%' }}>
																			</div>
																		</div>
																	</div>
																	<div className="review-list-item mb-40">
																		<span className="comfort">Comfort</span>
																		<div className="flex-two">
																			<span className="reating">Rating 4.8 </span>
																			<div className="start">
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<span>5.0</span>
																			</div>
																		</div>
																		<div className="progress" role="progressbar" aria-label="example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
																			<div className="progress-bar" style={{ width: '80%' }}>
																			</div>
																		</div>
																	</div>
																	<div className="review-list-item mb-40">
																		<span className="comfort">Comfort</span>
																		<div className="flex-two">
																			<span className="reating">Rating 4.8 </span>
																			<div className="start">
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<span>5.0</span>
																			</div>
																		</div>
																		<div className="progress" role="progressbar" aria-label="example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
																			<div className="progress-bar" style={{ width: '60%' }}>
																			</div>
																		</div>
																	</div>
																	<div className="review-list-item mb-40">
																		<span className="comfort">Comfort</span>
																		<div className="flex-two">
																			<span className="reating">Rating 4.8 </span>
																			<div className="start">
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<i className=" icon-Star" />
																				<span>5.0</span>
																			</div>
																		</div>
																		<div className="progress" role="progressbar" aria-label="example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
																			<div className="progress-bar" style={{ width: '90%' }}>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="client-review mb-80">
															<div className="flex-two mb-50 inner-header">
																<h4 className="title-review">Client’s Review</h4>
																<div className="client-review flex">
																	<span>6 Reviews</span>
																	<div className="start">
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																	</div>
																	<span>(5 out of 5)</span>
																</div>
															</div>
															<div className="client-review-list">
																<div className="client-review-item flex">
																	<div className="avata">
																		<img src="/assets/images/avata/avt-review.jpg" alt="image" />
																	</div>
																	<div className="content">
																		<span className="name">Rohan De Spond</span>
																		<p className="des">Lorem ipsum dolor sit amet,
																			consectetur adipiscing elit.Curabitur have is
																			covered many vulputate vestibulum Phasellus
																			rhoncus, dolor eget viverra
																			pretium dolor tellus aliquet nunc, vitae
																			ultricies erat elit eu lacus.
																		</p>
																		<div className="start">
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<span>5.0</span>
																		</div>
																		<span className="date">25 jan 2021</span>
																	</div>
																</div>
																<div className="client-review-item flex">
																	<div className="avata">
																		<img src="/assets/images/avata/avt-review.jpg" alt="image" />
																	</div>
																	<div className="content">
																		<span className="name">Rohan De Spond</span>
																		<p className="des">Lorem ipsum dolor sit amet,
																			consectetur adipiscing elit.Curabitur have is
																			covered many vulputate vestibulum Phasellus
																			rhoncus, dolor eget viverra
																			pretium dolor tellus aliquet nunc, vitae
																			ultricies erat elit eu lacus.
																		</p>
																		<div className="start">
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<span>5.0</span>
																		</div>
																		<span className="date">25 jan 2021</span>
																	</div>
																</div>
																<div className="client-review-item flex">
																	<div className="avata">
																		<img src="/assets/images/avata/avt-review.jpg" alt="image" />
																	</div>
																	<div className="content">
																		<span className="name">Rohan De Spond</span>
																		<p className="des">Lorem ipsum dolor sit amet,
																			consectetur adipiscing elit.Curabitur have is
																			covered many vulputate vestibulum Phasellus
																			rhoncus, dolor eget viverra
																			pretium dolor tellus aliquet nunc, vitae
																			ultricies erat elit eu lacus.
																		</p>
																		<div className="start">
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<i className=" icon-Star" />
																			<span>5.0</span>
																		</div>
																		<span className="date">25 jan 2021</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="form-review bg-1">
															<h4 className="title-review mb-60">leave a comment</h4>
															<div className="inner-review flex-one mb-50">
																<div className="inner-review-item">
																	<span className="text-review">Value for Money*</span>
																	<div className="start">
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																	</div>
																</div>
																<div className="inner-review-item">
																	<span className="text-review">Destination*</span>
																	<div className="start">
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																	</div>
																</div>
																<div className="inner-review-item">
																	<span className="text-review">Accommodation*</span>
																	<div className="start">
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																	</div>
																</div>
																<div className="inner-review-item">
																	<span className="text-review">Transport*</span>
																	<div className="start">
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																		<i className=" icon-Star" />
																	</div>
																</div>
															</div>
															<form action="/" id="form-review">
																<div className="row">
																	<div className="col-md-6">
																		<fieldset className="relative input-wrap mb-37">
																			<i className="icon-user-1-1" />
																			<input type="text" placeholder="First name" name="name" />
																		</fieldset>
																	</div>
																	<div className="col-md-6">
																		<fieldset className="relative input-wrap mb-37">
																			<i className="icon-Group-51" />
																			<input type="email" placeholder="Email Address" name="email" />
																		</fieldset>
																	</div>
																	<div className="col-lg-12">
																		<fieldset className="relative input-wrap mb-37">
																			<i className="icon-content" />
																			<textarea name="review" rows={10} cols={50} placeholder="Write Review" defaultValue={""} />
																		</fieldset>
																	</div>
																	<div className="col-lg-12">
																		<div className="checkbox mb-60">
																			<input id="check-review" type="checkbox" name="check" defaultValue="check" />
																			<label htmlFor="check-review">I agree to Terms &amp;
																				Conditions, Refund Policy and Privacy Policy
																				of Fabrilife.</label>
																		</div>
																	</div>
																	<div className="cok-lg-12">
																		<button type="submit" className="submit">Post
																			Comment</button>
																	</div>
																</div>
															</form>
														</div>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="side-bar-right">
														<div className="sidebar-widget">
															<h6 className="block-heading">Book This Tour</h6>
															<form action="/" id="form-book-tour">
																<div className="input-wrap mb-30">
																	<input type="date" />
																</div>
																<div className="flex-two mb-30">
																	<span className="label">Time:</span>
																	<div className="radio">
																		<input id="first" type="radio" name="numbers" defaultValue="first" defaultChecked />
																		<label htmlFor="first">14.00</label>
																		<input id="second" type="radio" name="numbers" defaultValue="second" />
																		<label htmlFor="second">16.00</label>
																	</div>
																</div>
																<div className="input-wrap-sellect mb-30">
																	<span className="label">Tickets:</span>
																	<div className="flex-two mb-15">
																		<p>Children (0-12 years)$129.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two mb-15">
																		<p>Youth (13-17 years)$169.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two">
																		<p>Adult (18+ years)$189.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																</div>
																<div className="input-wrap-checkbox mb-30">
																	<span className="label">Add Extra</span>
																	<div className="checkbox">
																		<input id="check" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check">Service per booking</label>
																	</div>
																	<div className="checkbox">
																		<input id="check1" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check1">Service per person</label>
																	</div>
																	<div className="extra">
																		<div className="flex-three">
																			<span className="name">Adult:</span>
																			<span className="price">$18.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Youth:</span>
																			<span className="price">$16.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Children:</span>
																			<span className="price">$16.00</span>
																		</div>
																	</div>
																</div>
																<div className="flex-two mb-40">
																	<span className="label">Total:</span>
																	<span className="total text-main">$130.00</span>
																</div>
																<button type="submit">Procced Booking</button>
															</form>
														</div>
														<div className="sidebar-widget">
															<h6 className="block-heading">Book With Confidence</h6>
															<ul className="category-confidence">
																<li className="flex-three">
																	<i className="icon-customer-service-1" />
																	<span>Customer care available 24/7</span>
																</li>
																<li className="flex-three">
																	<i className="icon-Vector-6" />
																	<span>Hand-picked Tours &amp; Activities</span>
																</li>
																<li className="flex-three">
																	<i className="icon-insurance-1" />
																	<span>Free Travel Insureance</span>
																</li>
																<li className="flex-three">
																	<i className="icon-price-tag-1-1" />
																	<span>No-hassle best price guarantee</span>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
																		</h4>
																		<p>From <span className="text-main">$129.00</span></p>
																	</div>
																</div>
															</div>
														</div>
													</div >
												</div >
											</div >
										</div >
										<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-shot-gallery" role="tabpanel" aria-labelledby="pills-shot-gallery-tab" tabIndex={0}>
											<div className="row">
												<div className="col-lg-8">
													<div className="gallery-content-tour">
														<div className="image-gallery1 image">
															<img src="/assets/images/gallery/gallery.jpg" alt="image" className="item1" />
														</div>
														<div className="image-gallery2 image">
															<img src="/assets/images/gallery/gallery2.jpg" alt="image" className="item2" />
														</div>
														<div className="image-gallery3 image">
															<img src="/assets/images/gallery/gallery3.jpg" alt="image" className="item1" />
														</div>
														<div className="image-gallery4 image">
															<img src="/assets/images/gallery/gallery4.jpg" alt="image" className="item2" />
														</div>
														<div className="image-gallery5 image">
															<img src="/assets/images/gallery/gallery5.jpg" alt="image" className="item1" />
														</div>
														<div className="image-gallery6 image">
															<img src="/assets/images/gallery/gallery6.jpg" alt="image" className="item2" />
														</div>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="side-bar-right">
														<div className="sidebar-widget">
															<h6 className="block-heading">Book This Tour</h6>
															<form action="/" id="form-book-tour">
																<div className="input-wrap mb-30">
																	<input type="date" />
																</div>
																<div className="flex-two mb-30">
																	<span className="label">Time:</span>
																	<div className="radio">
																		<input id="first" type="radio" name="numbers" defaultValue="first" defaultChecked />
																		<label htmlFor="first">14.00</label>
																		<input id="second" type="radio" name="numbers" defaultValue="second" />
																		<label htmlFor="second">16.00</label>
																	</div>
																</div>
																<div className="input-wrap-sellect mb-30">
																	<span className="label">Tickets:</span>
																	<div className="flex-two mb-15">
																		<p>Children (0-12 years)$129.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two mb-15">
																		<p>Youth (13-17 years)$169.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																	<div className="flex-two">
																		<p>Adult (18+ years)$189.00</p>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected focus">1</option>
																			<option data-value={2} className="option">2</option>
																			<option data-value={3} className="option">3</option>

																		</select>
																	</div>
																</div>
																<div className="input-wrap-checkbox mb-30">
																	<span className="label">Add Extra</span>
																	<div className="checkbox">
																		<input id="check" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check">Service per booking</label>
																	</div>
																	<div className="checkbox">
																		<input id="check1" type="checkbox" name="check" defaultValue="check" />
																		<label htmlFor="check1">Service per person</label>
																	</div>
																	<div className="extra">
																		<div className="flex-three">
																			<span className="name">Adult:</span>
																			<span className="price">$18.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Youth:</span>
																			<span className="price">$16.00</span>
																		</div>
																		<div className="flex-three">
																			<span className="name">Children:</span>
																			<span className="price">$16.00</span>
																		</div>
																	</div>
																</div>
																<div className="flex-two mb-40">
																	<span className="label">Total:</span>
																	<span className="total text-main">$130.00</span>
																</div>
																<button type="submit">Procced Booking</button>
															</form>
														</div>
														<div className="sidebar-widget">
															<h6 className="block-heading">Book With Confidence</h6>
															<ul className="category-confidence">
																<li className="flex-three">
																	<i className="icon-customer-service-1" />
																	<span>Customer care available 24/7</span>
																</li>
																<li className="flex-three">
																	<i className="icon-Vector-6" />
																	<span>Hand-picked Tours &amp; Activities</span>
																</li>
																<li className="flex-three">
																	<i className="icon-insurance-1" />
																	<span>Free Travel Insureance</span>
																</li>
																<li className="flex-three">
																	<i className="icon-price-tag-1-1" />
																	<span>No-hassle best price guarantee</span>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
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
																			<Link href="/blog-details">Walking the Amalfi
																				Coast</Link>
																		</h4>
																		<p>From <span className="text-main">$129.00</span></p>
																	</div>
																</div>
															</div>
														</div>
													</div >
												</div >
											</div >
										</div >
									</div >
								</div >
							</div >
						</div >
					</section >
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
				</div >

			</Layout >
		</>
	)
}