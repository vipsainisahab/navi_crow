import Link from "next/link"

export default function Footer2() {
	return (
		<>

			<footer className="footer footer-style2">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-3">
							<div className="footer-item-logo">
								<div className="logo">
									<img src="./assets/images/logo.png" alt="image" />
								</div>
								<p className="des-footer">A new way to make the payments easy,
									reliable and 100% secure. claritatem
									itamconse quat. Exerci tation ullamcorper.
								</p>
								<ul className="social flex-three ">
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
						<div className="col-md-3">
							<div className="footer-item-company">
								<h6 className="title mb-30">Our Company</h6>
								<ul className="footer-menu">
									<li>
										<Link href="about-us.html">Our About </Link>
									</li>
									<li>
										<Link href="terms-condition.html">Terms Condition</Link>
									</li>
									<li>
										<Link href="team.html">Team</Link>
									</li>
									<li>
										<Link href="help-center.html">Help Center</Link>
									</li>
									<li>
										<Link href="gallery.html">Gallery</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<div className="footer-item-quick-link">
								<h6 className="title mb-30">Quick Link</h6>
								<ul className="footer-menu">
									<li>
										<Link href="dashboard.html">Dashboard</Link>
									</li>
									<li>
										<Link href="my-booking.html">My Booking</Link>
									</li>
									<li>
										<Link href="my-favorite.html">My Favorite</Link>
									</li>
									<li>
										<Link href="my-listing.html">My Listing</Link>
									</li>
									<li>
										<Link href="my-profile.html">My Profile</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<div className="footer-item-newsletter">
								<h6 className="title mb-30">Our Newsletter</h6>
								<p className="des mb-22">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
									commodo </p>
								<form action="/" className="form-footer-st2 flex-three ">
									<input type="email" className="input-search" placeholder="Enter Mail" />
									<button type="submit"><i className="icon-paper-plane" /></button>
								</form>
							</div>
						</div>
					</div>
					<div className="row footer-bottom">
						<div className="col-md-6">
							<p className="copy-right">Copyright© 2024 by <Link href="#" className="text-main">Themesflat.</Link> All
								Rights Reserved</p>
						</div>
						<div className="col-md-6">
							<ul className="policy-tern flex-six">
								<li>
									<Link href="terms-condition.html">Terms and conditions</Link>
								</li>
								<li>
									<Link href="help-center.html"> Privacy policy</Link>
								</li>
								<li>
									<Link href="login.html">Login / Signup</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
