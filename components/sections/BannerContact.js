'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from "next/link"

export default function BannerContact() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="widget-banner-contact relative">
				<div className="tf-container">
					<div className="row z-index3 relative">
						<div className="col-lg-7 content-banner-contact">
							<div className="mb-32">
								<span className="sub-title-heading text-main mb-15 font-yes fs-28-46 wow fadeInUp animated">They were more than just guides</span>
								<h2 className="title-heading text-white wow fadeInUp animated">Subscribe for travel tips.</h2>
							</div>
							<div className="flex-three">
								<div className="video-wrap wow fadeInUp animated">
									<a onClick={() => setOpen(true)} className="widget-icon-video flex-five widget-videos">
										<i className="icon-Polygon-4" />
									</a>
								</div>
								<address className="wow fadeInUp animated">
									Contact us at <Link href="mailto:info@navicrowholidays.com"> info@navicrowholidays.com</Link><br />
								</address>
							</div>
							<img src="/assets/images/page/vector2.png" alt="image" className="mask-icon-banner" />
						</div>
						<div className="col-lg-5">
							<div className="image-banner-contact">
								<img src="/assets/images/page/ewewe1.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
