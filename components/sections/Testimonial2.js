'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
}

export default function Testimonial2() {
	return (
		<>

			<section className="pd-main bg-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center m0-auto w-text-heading mb-40">
								<span className="sub-title-heading text-main fs-28-46 font-yes wow fadeInUp animated">Explore
									the world</span>
								<h2 className="title-heading wow fadeInUp animated">Amazing Featured Tour <span className="text-gray font-yes">Package</span> the world</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 relative">
							<Swiper {...swiperOptions} className="swiper testimonialSwiper overflow-hidden pb-60">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="widget-testimonial-style2 relative">
											<div className="flex-two mb-25">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/testimonial/avata.jpg" alt="Image Testimonial" />
													</div>
													<div className="profile">
														<h5 className="name">Cameron Williamson</h5>
														<span className="job">Ceo &amp; Founder</span>
													</div>
												</div>
												<div className="icon-tes flex-five">
													<i className="icon-Layer_x0020_1" />
												</div>
											</div>
											<p className="des">The most advanced revenue than this. Iwill refer everyone
												I like Level more and more each day because it makes my
												easier. It really saves me time and effort. Level is exactly
												business has been lacking.
											</p>
											<img src="/assets/images/testimonial/mask.png" className="mask-tes" alt="Mask" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="widget-testimonial-style2 relative">
											<div className="flex-two mb-25">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/testimonial/avata.jpg" alt="Image Testimonial" />
													</div>
													<div className="profile">
														<h5 className="name">Cameron Williamson</h5>
														<span className="job">Ceo &amp; Founder</span>
													</div>
												</div>
												<div className="icon-tes flex-five">
													<i className="icon-Layer_x0020_1" />
												</div>
											</div>
											<p className="des">The most advanced revenue than this. Iwill refer everyone
												I like Level more and more each day because it makes my
												easier. It really saves me time and effort. Level is exactly
												business has been lacking.
											</p>
											<img src="/assets/images/testimonial/mask.png" className="mask-tes" alt="Mask" />
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="widget-testimonial-style2 relative">
											<div className="flex-two mb-25">
												<div className="flex-three">
													<div className="image">
														<img src="/assets/images/testimonial/avata.jpg" alt="Image Testimonial" />
													</div>
													<div className="profile">
														<h5 className="name">Cameron Williamson</h5>
														<span className="job">Ceo &amp; Founder</span>
													</div>
												</div>
												<div className="icon-tes flex-five">
													<i className="icon-Layer_x0020_1" />
												</div>
											</div>
											<p className="des">The most advanced revenue than this. Iwill refer everyone
												I like Level more and more each day because it makes my
												easier. It really saves me time and effort. Level is exactly
												business has been lacking.
											</p>
											<img src="/assets/images/testimonial/mask.png" className="mask-tes" alt="Mask" />
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
