

'use client'
import Link from "next/link"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import RangeSlider from "../elements/RangeSlider"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: 1,

	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
}

export default function Slider2() {
	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)
	return (
		<>

			<section className=" relative overflow-hidden">
				<div className="slider-home2-image">
					<div className="row">
						<div className="col-lg-12">
							<div className="slider-home2">
								<Swiper {...swiperOptions} className="swiper mySwiper">
									<div className="swiper-wrapper">
										<SwiperSlide className="swiper-slide">
											<img src="/assets/images/slide/slide2.jpg" className="image-slider-home2 relative" alt="Image slider" />
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<img src="/assets/images/slide/slide2.jpg" className="image-slider-home2 relative" alt="Image slider" />
										</SwiperSlide>
									</div>
									<div className="swiper-button-next next-slider2" />
									<div className="swiper-button-prev prev-slider2" />
								</Swiper>
							</div>
						</div>
						{/* /.main-banner-wrapper */}
					</div>
				</div>
				<div className="slider-home2-content">
					<img src="/assets/images/slide/mask-slide2.png" alt="Image" className="mask-slide2" />
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12 center relative z-index3">
								<img src="/assets/images/page/mask-bcrumb.png" alt="Image" className="mask-slide2-flan" />
								<span className="sub-title text-main font-yes fs-28-46 wow fadeInUp animated">Explore
									the world</span>
								<h1 className="banner-text title-slide text-white mb-45 wow fadeInUp animated">Tour
									<span className="animationtext clip text-main font-yes text-main">
										<span className="cd-words-wrapper">
											<TypeAnimation
												sequence={[
													' Camping',
													1000,
													' Explore',
													1000,
												]}
												wrapper="span"
												speed={50}
												style={{ display: 'inline-block', marginLeft: "15px" }}
												repeat={Infinity}
												className="item-text is-visible ms-3">
											</TypeAnimation>
										</span>
									</span>
									&amp; <br />adventure camping
								</h1>
								<div className="search-form-widget-slider relative wow fadeInUp animated">
									<form action="/" id="search-form-slider">
										<div className="flex wd-search">
											<div className="form-group flex">
												<i className="icon-18" />
												<div className="search-bar-group">
													<label>Destination</label>
													<select className="nice-select" tabIndex={0}>
														<option data-value className="option selected">Melborn ,Australia
														</option>
														<option data-value="hanoi" className="option">HaNoi ,Vietnam</option>
														<option data-value="tolyo" className="option">Tokyo , Janpan</option>
														<option data-value="korea" className="option">Seoul , Korea</option>

													</select>
												</div>
											</div>
											<div className="form-group flex">
												<i className="icon-hiking-1-1 " />
												<div className="search-bar-group">
													<label>Type</label>
													<select className="nice-select" tabIndex={0}>
														<option data-value className="option selected">Booking Type</option>
														<option data-value="booking" className="option">Booking Type</option>
														<option data-value="booking" className="option">Booking Type</option>
														<option data-value="booking" className="option">Booking Type</option>

													</select>
												</div>
											</div>
											<div className="form-group flex">
												<i className=" icon-time-left " />
												<div className="search-bar-group">
													<label>Duration</label>
													<select className="nice-select" tabIndex={0}>
														<option data-value className="option selected">2-4 days tour</option>
														<option data-value="booking" className="option">3-6 days tour</option>
														<option data-value="booking" className="option">4-8 days tour</option>
														<option data-value="booking" className="option">5-10 days tour</option>

													</select>
												</div>
											</div>
											<div className="form-group flex">
												<i className="icon-user" />
												<div className="search-bar-group">
													<label>Guests</label>
													<input type="text" defaultValue={0} />
												</div>
											</div>
											<div className="form-group flex-two">
												<div className="icon-icon-filter" onClick={handleToggle}>
													<i className="icon-14" />
												</div>
												<Link href="#" className="btn-search"><i className="icon-Vector5" />Search</Link>
											</div>
										</div>
										<div className={`wd-search-form ${isToggled ? 'show' : ''}`}>
											<div className="input-group-grid">
												<fieldset className="group-select relative ">
													<label>Filter By Price</label>
													<div className="widget widget-price ">
													<RangeSlider title="Filter By Price" />
												</div>
												</fieldset>
												<fieldset className="group-select relative input-npd ">
													<div className="search-bar-group relative">
														<label>0</label>
														<select className="nice-select" tabIndex={0}>
															<option data-value className="option selected focus">Language
															</option>
															<option data-value="language1" className="option">Japan</option>
															<option data-value="language2" className="option">Vietnames</option>
															<option data-value="language3" className="option">Korea</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative input-npd ">
													<div className="search-bar-group relative">
														<label>Any</label>
														<select className="nice-select" tabIndex={0}>
															<option data-value className="option selected focus">Month
															</option>
															<option data-value="month1" className="option">1 Month</option>
															<option data-value="month2" className="option">2 Month</option>
															<option data-value="month3" className="option">3 Month</option>

														</select>
													</div>
												</fieldset>
												<fieldset className="group-select relative input-npd">
													<div className="search-bar-group relative">
														<label>Any</label>
														<select className="nice-select" tabIndex={0}>
															<option data-value className="option selected focus">Duration
															</option>
															<option data-value="duration1" className="option">10-15 day</option>
															<option data-value="duration2" className="option">15-30 day</option>
															<option data-value="duration3" className="option">20-30 day</option>

														</select>
													</div>
												</fieldset>
												<div className="group-check-box-wrap">
													<div className="checkbox">
														<input id="check4" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check4">Accepts Credit Cards</label>
													</div>
													<div className="checkbox">
														<input id="check5" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check5">Car Parking</label>
													</div>
												</div>
												<div className="group-check-box-wrap">
													<div className="checkbox">
														<input id="check6" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check6">Free Coupons</label>
													</div>
													<div className="checkbox">
														<input id="check7" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check7">Laundry Service</label>
													</div>
												</div>
												<div className="group-check-box-wrap">
													<div className="checkbox">
														<input id="check8" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check8">Outdoor Seating</label>
													</div>
													<div className="checkbox">
														<input id="check9" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check9">Reservations</label>
													</div>
												</div>
												<div className="group-check-box-wrap">
													<div className="checkbox">
														<input id="check10" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check10">Restaurant</label>
													</div>
													<div className="checkbox">
														<input id="check11" type="checkbox" name="check" defaultValue="check" />
														<label htmlFor="check11">Smoking Allowed</label>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
								<div className="tour-list wow fadeInUp animated">
									<ul className="flex-five ">
										<li>
											<i className="icon-Vector-5" />
											<span>Easy &amp; Fast - Book a Car in 120 minutes</span>
										</li>
										<li>
											<i className="icon-Vector-5" />
											<span>Best Price with Quality Service </span>
										</li>
										<li>
											<i className="icon-Vector-5" />
											<span>Choose from a Wide Variety of Cars</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
