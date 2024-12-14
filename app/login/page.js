
import Layout from "@/components/layout/Layout"
import BrandLogoSlider from "@/components/slider/BrandLogoSlider"
import Link from "next/link"
export default function Login() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="User Login">
				<div>
					<section className="login">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
									<div className="login-wrap flex">
										<div className="image">
											<img src="./assets/images/page/sign-up.jpg" alt="image" />
										</div>
										<div className="content">
											<div className="inner-header-login">
												<h3 className="title">Create an account to get started</h3>
												<div className="flex-three">
													<span className="sale">20% off</span>
													<p>get 20% off for web signup</p>
												</div>
											</div>
											<form action="/" id="login" className="login-user">
												<div className="row">
													<div className="col-md-6">
														<div className="input-wrap">
															<label>Name</label>
															<input type="text" placeholder="Enter your name*" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="input-wrap">
															<label>Email</label>
															<input type="email" placeholder="Enter your name*" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="input-wrap">
															<div className="flex-two">
																<label>Your password</label>
																<Link href="#" className="mb-15">Forgot Password?</Link>
															</div>
															<input type="password" placeholder="Enter your password*" />
														</div>
													</div>
													<div className="col-lg-12 mb-40">
														<div className="input-wrap-social ">
															<span className="or">or</span>
															<div className="flex-three">
																<Link href="#" className="login-social flex-three">
																	<img src="./assets/images/page/gg.png" alt="image" />
																	<span>Sign in with Google</span>
																</Link>
																<Link href="#" className="login-social flex-three">
																	<img src="./assets/images/page/fb.png" alt="image" />
																	<span>Sign in with facebook</span>
																</Link>
															</div>
														</div>
													</div>
													<div className="col-lg-12 mb-30">
														<button type="submit " className="btn-submit">Sign in</button>
													</div>
													<div className="col-lg-12 mb-30">
														<div className="checkbox">
															<input id="check-policy" type="checkbox" name="check" defaultValue="check" />
															<label htmlFor="check-policy">By signing up, you agree to
																Customers.ai’s Terms Of Service and Privacy Policy</label>
														</div>
													</div>
													<div className="col-md-12">
														<div className="flex-three">
															<span className="account">Don,t you have an account?</span>
															<Link href="/sign-up" className="link-login">Register</Link>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="brand-logo-widget bg-1">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-12">
								<BrandLogoSlider />
								</div>
							</div>
						</div>
					</section>
					<section className="mb--93 bg-1">
						<div className="tf-container">
							<div className="callt-to-action flex-two z-index3 relative">
								<div className="callt-to-action-content flex-three">
									<div className="image">
										<img src="./assets/images/page/ready.png" alt="Image" />
									</div>
									<div className="content">
										<h2 className="title-call">Ready to adventure and enjoy natural</h2>
										<p className="des">Lorem ipsum dolor sit amet, consectetur notted adipisicin</p>
									</div>
								</div>
								<img src="./assets/images/page/vector4.png" alt="" className="shape-ab" />
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