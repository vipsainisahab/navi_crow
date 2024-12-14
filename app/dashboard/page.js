
import CounterNumber from "@/components/elements/CounterNumber"
import DashboardChart from "@/components/elements/DashboardChart"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function Dashboard() {

	return (
		<>

			<LayoutAdmin headerStyle={1} footerStyle={1}>
				<section className="profile-dashboard">
					<div className="inner-header mb-40">
						<h3 className="title">Dashboard</h3>
						<p className="des">There are many variations of passages of Lorem Ipsum</p>
					</div>
					<div className="counter-grid-dashboard mb-70">
						<div className="counter-dashboard flex-three tf-countto">
							<div className="icon flex-five">
								<i className="icon-earnings-1" />
							</div>
							<div className="content">
								<span>Total Earning</span>
								<div className="number-counter money" data-to={43216} data-speed={2000} data-waypoint-active="yes">
									<CounterNumber count={43216} /></div>
							</div>
						</div>
						<div className="counter-dashboard flex-three tf-countto">
							<div className="icon flex-five">
								<i className="icon-heart-1" />
							</div>
							<div className="content">
								<span>My Wishlist</span>
								<div className="number-counter plus" data-to={2351} data-speed={2000} data-waypoint-active="yes">
									<CounterNumber count={2351} /></div>
							</div>
						</div>
						<div className="counter-dashboard flex-three tf-countto">
							<div className="icon flex-five">
								<i className="icon-Group-1000003085" />
							</div>
							<div className="content">
								<span>Total Listing</span>
								<div className="number-counter" data-to={43216} data-speed={2000} data-waypoint-active="yes">
									<CounterNumber count={43216} /></div>
							</div>
						</div>
						<div className="counter-dashboard flex-three tf-countto">
							<div className="icon flex-five">
								<i className="icon-feedback" />
							</div>
							<div className="content">
								<span>Total Listing</span>
								<div className="number-counter plus" data-to={2351} data-speed={2000} data-waypoint-active="yes">
									<CounterNumber count={2351} /></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xxl-8 col-xl-12">
							<div className="page-insight">
								{/* chart */}
								<div className="wg-box">
									<div className="flex-two">
										<h5>Total page view</h5>
										<div className="group-select">
											<select className="nice-select" tabIndex={0}>
												<option data-value className="option selected">This Week</option>
												<option data-value="Last day" className="option">Last Day</option>
												<option data-value="Last Week" className="option">Last Week</option>

											</select>
										</div>
									</div>
									{/* <div id="line-chart-1" /> */}
									<DashboardChart />
								</div>
								{/* /chart */}
							</div>
						</div>
						<div className="col-xxl-4 col-xl-12">
							<div className="tfcl-card dashboard-message mb-25">
								<h4 className="title mb-30">What,s New?</h4>
								<ul className="message">
									<li className="flex-three">
										<div className="icon">
											<i className="icon-Group4" />
										</div>
										<p>Congratulation Your <span className="text-main">23</span> Listing has been
											approved Today</p>
									</li>
									<li className="flex-three">
										<div className="icon">
											<i className="icon-Vector-131" />
										</div>
										<p>Someone is saved your listing</p>
									</li>
									<li className="flex-three">
										<div className="icon">
											<div className="icon-Vector-141" />
										</div>
										<p>You have unread <span className="text-main">21</span> Message</p>
									</li>
									<li className="flex-three">
										<div className="icon">
											<i className="icon-Vector-131" />
										</div>
										<p>Congratulation Your <span className="text-main">22</span> Listing has
											been</p>
									</li>
									<li className="flex-three">
										<div className="icon">
											<i className="icon-Vector-131" />
										</div>
										<p>Mehedii Added Favorites Your listing “Mercedez Benz 2.3”</p>
									</li>
									<li className="flex-three">
										<div className="icon">
											<i className="icon-Vector-141" />
										</div>
										<p>You have unread <span className="text-main">21</span> Message</p>
									</li>
									<li className="flex-three">
										<div className="icon">
											<i className="icon-Vector-131" />
										</div>
										<p>Congratulation Your <span className="text-main">22</span> Listing has been
										</p>
									</li>
								</ul>
							</div>
							<div className="tfcl-card dashboard-reviews">
								<h4 className="title mb-30">Recent Reviews</h4>
								<ul>
									<li className="comment-by-user flex-three">
										<div className="group-author">
											<img src="/assets/images/avata/avt-review.jpg" alt="image" />
										</div>
										<div className="content">
											<div className="group-name flex-one">
												<div className="review-name">Rohan De Spond</div>
												<div className="rating-wrap">
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, con covered many vulputate ves
											</p>
										</div>
									</li>
									<li className="comment-by-user flex-three">
										<div className="group-author">
											<img src="/assets/images/avata/avt-review2.jpg" alt="image" />
										</div>
										<div className="content">
											<div className="group-name flex-one">
												<div className="review-name">Mehedii. Has</div>
												<div className="rating-wrap">
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, con covered many vulputate ves
											</p>
										</div>
									</li>
									<li className="comment-by-user flex-three">
										<div className="group-author">
											<img src="/assets/images/avata/avt-review.jpg" alt="image" />
										</div>
										<div className="content">
											<div className="group-name flex-one">
												<div className="review-name">Rohan De Spond</div>
												<div className="rating-wrap">
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, con covered many vulputate ves
											</p>
										</div>
									</li>
									<li className="comment-by-user flex-three">
										<div className="group-author">
											<img src="/assets/images/avata/avt-review3.jpg" alt="image" />
										</div>
										<div className="content">
											<div className="group-name flex-one">
												<div className="review-name">Mehedii. Has</div>
												<div className="rating-wrap">
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
													<i className="icon-Star" />
												</div>
											</div>
											<p>Lorem ipsum dolor sit amet, con covered many vulputate ves
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

			</LayoutAdmin >
		</>
	)
}