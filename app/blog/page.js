
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Page">
				<div>
					<section className="our-blog pd-main">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-8 col-12">
									<article className="side-blog mb-56px">
										<div className="blog-image">
											<div className="list-categories">
												<Link href="#" className="new">24 Feb</Link>
											</div>
											<Link className="post-thumbnail" href="/blog-details">
												<img src="/assets/images/blog/blog.jpg" alt="Image blog" />
											</Link>
										</div>
										<div className="blog-content">
											<div className="top-detail-info">
												<ul className="flex-three">
													<li>
														<i className="icon-user" />
														<Link href="#">Mehedii .Ha</Link>
													</li>
													<li>
														<i className="icon-25" />
														<span className="date">Coments (03)</span>
													</li>
													<li>
														<i className="icon-24" />
														<span className="date">3 min Read</span>
													</li>
												</ul>
											</div>
											<h3 className="entry-title">
												<Link href="/blog-details">The whimsically named Egg Canvas brainch </Link>
											</h3>
											<p className="description">There are many variations of passages of Lorem Ipsum
												available, but majority have suffered
												teration in some form, by injected humour, or randomised words which don't
												look even slight
												believable. If you are going to use a passage of Lorem Ipsum.
											</p>
											<div className="button-main ">
												<Link href="/blog-details" className="button-link">Read More <i className="icon-Arrow-11" /></Link>
											</div>
										</div>
									</article>
									<article className="side-blog mb-56px">
										<div className="blog-image">
											<div className="list-categories">
												<Link href="#" className="new">24 Feb</Link>
											</div>
											<Link className="post-thumbnail" href="/blog-details">
												<img src="/assets/images/blog/blog1.jpg" alt="Image blog" />
											</Link>
										</div>
										<div className="blog-content">
											<div className="top-detail-info">
												<ul className="flex-three">
													<li>
														<i className="icon-user" />
														<Link href="#">Mehedii .Ha</Link>
													</li>
													<li>
														<i className="icon-25" />
														<span className="date">Coments (03)</span>
													</li>
													<li>
														<i className="icon-24" />
														<span className="date">3 min Read</span>
													</li>
												</ul>
											</div>
											<h3 className="entry-title">
												<Link href="/blog-details">The whimsically named Egg Canvas brainch </Link>
											</h3>
											<p className="description">There are many variations of passages of Lorem Ipsum
												available, but majority have suffered
												teration in some form, by injected humour, or randomised words which don't
												look even slight
												believable. If you are going to use a passage of Lorem Ipsum.
											</p>
											<div className="button-main">
												<Link href="/blog-details" className="button-link">Read More<i className="icon-Arrow-11" /></Link>
											</div>
										</div>
									</article>
									<article className="side-blog mb-56px">
										<div className="blog-image">
											<div className="list-categories">
												<Link href="#" className="new">24 Feb</Link>
											</div>
											<Link className="post-thumbnail" href="/blog-details">
												<img src="/assets/images/blog/blog2.jpg" alt="Image blog" />
											</Link>
										</div>
										<div className="blog-content">
											<div className="top-detail-info">
												<ul className="flex-three">
													<li>
														<i className="icon-user" />
														<Link href="#">Mehedii .Ha</Link>
													</li>
													<li>
														<i className="icon-25" />
														<span className="date">Coments (03)</span>
													</li>
													<li>
														<i className="icon-24" />
														<span className="date">3 min Read</span>
													</li>
												</ul>
											</div>
											<h3 className="entry-title">
												<Link href="/blog-details">The whimsically named Egg Canvas brainch </Link>
											</h3>
											<p className="description">There are many variations of passages of Lorem Ipsum
												available, but majority have suffered
												teration in some form, by injected humour, or randomised words which don't
												look even slight
												believable. If you are going to use a passage of Lorem Ipsum.
											</p>
											<div className="button-main">
												<Link href="/blog-details" className="button-link">Read More<i className="icon-Arrow-11" /></Link>
											</div>
										</div>
									</article>
									<div className="row">
										<div className="col-md-12 ">
											<ul className="tf-pagination flex-five mt-20">
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