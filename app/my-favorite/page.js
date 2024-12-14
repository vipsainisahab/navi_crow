
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link"
export default function MyFavorite() {

	return (
		<>

			<LayoutAdmin headerStyle={1} footerStyle={1}>
				<section className="profile-dashboard">
					<div className="inner-header mb-40">
						<h3 className="title">My Favorites</h3>
						<p className="des">There are many variations of passages of Lorem Ipsum</p>
					</div>
					<div className="favorite-wrap mb-60">
						<div className="favorite-grid">
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
							<div className="tour-listing box-sd">
								<Link href="/tour-single" className="tour-listing-image">
									<div className="badge-top flex-two">
										<span className="feature">Featured</span>
										<div className="badge-media flex-five">
											<span className="media"><i className="icon-Group-1000002909" />5</span>
											<span className="media"><i className="icon-Group-1000002910" />2</span>
										</div>
									</div>
									<img src="/assets/images/travel-list/1.jpg" alt="Image Listing" />
								</Link>
								<div className="tour-listing-content">
									<span className="map"><i className="icon-Vector4" />United States USA</span>
									<h3 className="title-tour-list"><Link href="/tour-single">6 nights From Moscow</Link>
									</h3>
									<div className="review">
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<i className="icon-Star" />
										<span>(1 Review)</span>
									</div>
									<div className="icon-box flex-three">
										<div className="icons flex-three">
											<i className="icon-time-left" />
											<span>5 days</span>
										</div>
										<div className="icons flex-three">
											<svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span>12 Person</span>
										</div>
									</div>
									<div className="flex-two">
										<div className="price-box flex-three">
											<p>From <span className="price-sale">$169.00</span></p>
											<span className="price">$199.00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 ">
							<ul className="tf-pagination flex-five">
								<li>
									<Link className="pages-link" href="#"> <i className="icon-29" /></Link>
								</li>
								<li>
									<Link className="pages-link" href="#">1</Link>
								</li>
								<li className="pages-item active" aria-current="page">
									<Link className="pages-link" href="#">2</Link>
								</li>
								<li><Link className="pages-link" href="#">3</Link></li>
								<li>
									<Link className="pages-link" href="#"><i className=" icon--1" /></Link>
								</li>
							</ul>
						</div>
					</div>
				</section>

			</LayoutAdmin>
		</>
	)
}