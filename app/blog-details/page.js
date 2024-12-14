
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
				<div>
					<section className="our-blog pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-8 col-12">
									<article className="side-blog side-blog-single">
										<div className="image">
											<img src="/assets/images/blog/blog-details.jpg" alt="" />
										</div>
										<div className="top-detail-info">
											<ul className="flex-three">
												<li>
													<i className="icon-4" />
													<span>02 Apr 2021</span>
												</li>
												<li>
													<i className="icon-25" />
													<span>Coments (03)</span>
												</li>
												<li>
													<i className="icon-24" />
													<span>3 min Read</span>
												</li>
											</ul>
										</div>
										<h2 className="entry-title">
											The whimsically named Egg Canvas brainchild
										</h2>
										<p className="des lh-32 mb-37">he whimsically named Egg Canvas is the brainchild of
											Erica Choi, a design director and photo Sit amet
											consect velit integer tincidunt scelerisque volutpat neque fermeny massa lacus.
											grapher based in York.
											Why the name “Egg Canvas Erica was inspired by her Korean childhood nickname,
											which means egg
											while “canvas” medium with wh art is created. “Egg Canvas therefore, is her
											life—creating beautiful
											things each day a blank canvas.
										</p>
										<p className="des lh-32 mb-32">We have covered many special events such as fireworks,
											fairs, parades, races, walks, awards ceremonies,
											fashion shows, sporting events, and even a memorial service.
										</p>
										<p className="des lh-32 mb-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Curabitur vulputate vestibulum rhon cus,
											dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
											eu lacus. Vestibulum non
											justo fun consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet
											turpis interd enim.
											Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum
										</p>
										<div className="blockquote-blog mb-40">
											<blockquote className="blockquote">
												<p>Your time is limited, so don’t waste it living someone else’s life.
													Don’t be trapped by dogma – which is living with the results</p>
												<h5 className="quote-title">John Mehedii</h5>
												<i className="icon-Group-21081" />
											</blockquote>
										</div>
									</article>
									<div className="side-blog-single-content">
										<div className="ux-content mb-70">
											<h3 className="title mb-32">Let our investment management team</h3>
											<div className="row">
												<div className="col-md-7">
													<ul className="icon-listing">
														<li>
															<i className="icon-Vector-5" />
															<span>Lorem Ipsum generators on the tend to repeat.</span>
														</li>
														<li>
															<i className="icon-Vector-5" />
															<span> If you are going to use a passage.</span>
														</li>
														<li>
															<i className="icon-Vector-5" />
															<span> Lorem Ipsum generators on the tend to repeat.</span>
														</li>
														<li>
															<i className="icon-Vector-5" />
															<span> Lorem Ipsum generators on the tend to repeat.</span>
														</li>
														<li>
															<i className="icon-Vector-5" />
															<span> If you are going to use a passage.</span>
														</li>
													</ul>
												</div>
												<div className="col-md-5 text-end">
													<img src="/assets/images/blog/blog-details-list.jpg" alt="" />
												</div>
											</div>
										</div>
										<div className="row mb-40">
											<div className="col-6">
												<img src="/assets/images/blog/blog-img1.jpg" alt="" />
											</div>
											<div className="col-6">
												<img src="/assets/images/blog/blog-img-2.jpg" alt="" />
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<p className="des">We have covered many special events such as fireworks, fairs,
													parades, races, walks, awards
													ceremonies, fashion shows, sporting events, and even a memorial
													service.Lorem ipsum dolor
													sit amet, consectetur adipiscing elit. vestibulum rhoncus, dolor eget
													viverra pretium, dolor
													ellus aliquet nunc,
												</p>
											</div>
										</div>
										<div className="flex-two share-blog">
											<div className="tag-blog flex-three">
												<span>Tag:</span>
												<ul className="tag">
													<li>
														<Link href="#">Business</Link>
													</li>
													<li>
														<Link href="#">Design</Link>
													</li>
													<li>
														<Link href="#">Apps</Link>
													</li>
													<li>
														<Link href="#">Data</Link>
													</li>
												</ul>
											</div>
											<div className="social-blog flex-three">
												<span>Share:</span>
												<ul className="social">
													<li>
														<Link href="#">
															<i className="icon-icon" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="icon-icon-2" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="icon-instagram-1" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="icon-x" />
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="comment-single">
										<h3 className="title mb-32">(04) Comment</h3>
										<div className="row">
											<div className="col-lg-12">
												<div className="comment-blog flex mb-40">
													<div className="avata">
														<img src="/assets/images/avata/avt-coment.jpg" alt="" />
													</div>
													<div className="content">
														<div className="flex-one">
															<div className="info">
																<h6 className="name">Rohan De Spond</h6>
																<p className="date">25 january 2021</p>
															</div>
															<div className="repply">
																<i className="icon-reply-all" />
															</div>
														</div>
														<div className="des">There are many variations of passages of Lorem
															Ipsum available, but the leap into electronic
															type setting, remaining essentiallyuncha opularisedthe with the
															release of Letrasetsheets
															containingth leap electrtypesetting remainingmajority have.
															There are many variations
															of passages of Lorem Ipsum</div>
													</div>
												</div>
												<div className="comment-blog flex">
													<div className="avata">
														<img src="/assets/images/avata/avt-comment-2.jpg" alt="" />
													</div>
													<div className="content">
														<div className="flex-one">
															<div className="info">
																<h6 className="name">Johan Ritaxon</h6>
																<p className="date">25 january 2021</p>
															</div>
															<div className="repply">
																<i className="icon-reply-all" />
															</div>
														</div>
														<div className="des">There are many variations of passages of Lorem
															Ipsum available, but the
															majority have. There are many variations of passages</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="form-comment">
										<h3 className="title mb-32">Write your comment</h3>
										<form action="/" id="comment">
											<div className="group-gap">
												<input type="text" className="input-cmt" placeholder="Enter your name*" />
												<input type="email" className="input-cmt" placeholder="Enter your mail*" />
											</div>
											<div className="group-gap">
												<input type="tel" className="input-cmt" placeholder="Enter your number*" />
												<input type="url" className="input-cmt" placeholder="Website*" />
											</div>
											<textarea cols={30} className="input-cmt" rows={15} placeholder="Enter your Massage*" defaultValue={"                                        "} />
											<div className="checkbox">
												<input id="check" type="checkbox" name="check" defaultValue="check" />
												<label htmlFor="check">Save my name, email, and website in this browser for the
													next time I comment.</label>
											</div>
											<input type="submit" defaultValue="Send Messege" />
										</form>
									</div>
								</div>
								<div className="col-lg-4 col-12">
									<div className="side-bar-right">
										<div className="sidebar-widget">
											<div className="profile-widget center">
												<img src="/assets/images/avata/avt-blog.jpg" alt="Image Blog" className="avata" />
												<div className="name">Rosalina D. Willaim</div>
												<span className="job">Blogger/Photographer</span>
												<p className="des">he whimsically named Egg Canvas is the
													design director and photographer
													in New York. Why the nam
												</p>
												<ul className="social">
													<li>
														<Link href="#">
															<i className="icon-icon-2" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="icon-x" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="icon-icon_03" />
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="icon-2" />
														</Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="sidebar-widget">
											<h4 className="block-heading">search here</h4>
											<form action="/" id="search-bar-widget">
												<input type="text" placeholder="Search here..." />
												<button type="button"><i className="icon-search-2" /></button>
											</form>
										</div>
										<div className="sidebar-widget">
											<h4 className="block-heading">Recent News</h4>
											<div className="recent-post-list">
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog1.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="date">
															<i className="icon-4" />
															<span>Jan 23,2022</span>
														</div>
														<h4 className="title">
															<Link href="/blog-details">Budget Issues Force The Our To
																Become</Link>
														</h4>
													</div>
												</div>
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog2.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="date">
															<i className="icon-4" />
															<span>Jan 23,2022</span>
														</div>
														<h4 className="title">
															<Link href="/blog-details">The Best Products That Shape
																Fashion</Link>
														</h4>
													</div>
												</div>
												<div className="list-recent flex-three">
													<Link href="/blog-details" className="recent-image">
														<img src="/assets/images/blog/re-blog3.jpg" alt="Image" />
													</Link>
													<div className="recent-info">
														<div className="date">
															<i className="icon-4" />
															<span>Jan 23,2022</span>
														</div>
														<h4 className="title">
															<Link href="/blog-details">The Best Products That Shape
																Fashion</Link>
														</h4>
													</div>
												</div>
											</div>
										</div>
										<div className="sidebar-widget">
											<h4 className="block-heading">Categories</h4>
											<ul className="category-blog">
												<li>
													<Link href="#" className="flex-two">
														<span>Mobile Set</span>
														<span>03</span>
													</Link>
												</li>
												<li>
													<Link href="#" className="flex-two">
														<span>Mobile Set</span>
														<span>03</span>
													</Link>
												</li>
												<li>
													<Link href="#" className="flex-two">
														<span>Mobile Set</span>
														<span>03</span>
													</Link>
												</li>
												<li>
													<Link href="#" className="flex-two">
														<span>Mobile Set</span>
														<span>03</span>
													</Link>
												</li>
											</ul>
										</div>
										<div className="sidebar-widget">
											<h4 className="block-heading">Tags</h4>
											<ul className="tag">
												<li>
													<Link href="#">Tourist</Link>
												</li>
												<li>
													<Link href="#">Traveling</Link>
												</li>
												<li>
													<Link href="#">Cave</Link>
												</li>
												<li>
													<Link href="#">Sky Dive</Link>
												</li>
												<li>
													<Link href="#">Hill Climb</Link>
												</li>
												<li>
													<Link href="#">Oppos</Link>
												</li>
												<li>
													<Link href="#" className="active">Landing</Link>
												</li>
												<li>
													<Link href="#">Oppos</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="mb--93">
						<div className="tf-container">
							<div className="callt-to-action flex-two">
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