'use client'
import { useState } from "react";
import Link from "next/link"

export default function Activities1() {
	const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
	return (
		<>

			<section className="relative tf-widget-activities pd-main overflow-hidden">
				<img src="/assets/images/page/mask-activiti.png" alt="image" className="mask-top" />
				<img src="/assets/images/page/mask-print-2.png" alt="image" className="mask-bottom" />
				<div className="tf-container">
					<div className="row z-index3 relative">
						<div className="col-lg-12 mb-60">
							<div className="clip-text">Activities</div>
						</div>
						<div className="col-lg-12">
							<ul className="nav nav-tabs-activities justify-content-center" id="myTablist" role="tablist">
								<li className="nav-item"  onClick={() => handleTab(1)}>
								<button  className={isTab == 1 ? "nav-link active" : "nav-link"}>
										<span className="icon flex-five">
											<i className="icon-Group-22" />
										</span>
										<span>Couple camping or cabin</span>
									</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(2)}>
								<button  className={isTab == 2 ? "nav-link active" : "nav-link"}>
										<span className="icon flex-five">
											<i className="icon-Group-31" />
										</span>
										<span>Adventure &amp; Climbing</span>
									</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(3)}>
								<button  className={isTab == 3 ? "nav-link active" : "nav-link"}>
										<span className="icon flex-five">
											<i className="icon-fishing-1" />
										</span>
										<span>Fishing &amp; Swimming</span>
									</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(4)}>
								<button  className={isTab == 4 ? "nav-link active" : "nav-link"}>
										<span className="icon flex-five">
											<i className="icon-Group-4" />
										</span>
										<span>Mountain &amp; Hill Hiking</span>
									</button>
								</li>
								<li className="nav-item"  onClick={() => handleTab(5)}>
								<button  className={isTab == 5 ? "nav-link active" : "nav-link"}>
										<span className="icon flex-five">
											<svg width={59} height={55} viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M34.7241 5.70648C36.0557 5.50162 37.3873 6.42349 37.5921 7.75509" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M37.5921 7.75502C37.3872 6.42342 38.3091 5.09182 39.6407 4.88696" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M21.3057 3.45306C22.6373 3.2482 23.9689 4.17007 24.1737 5.50167" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M24.1737 5.5016C23.9689 4.17 24.8907 2.83841 26.2223 2.63354" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M49.8838 41.0452V50.5712" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M47.1182 39.6111V35.1042C47.1182 33.6701 46.9133 32.2361 46.4011 30.9045C46.1963 30.3924 45.9914 29.8802 45.7866 29.3681C45.3768 28.5486 44.9671 27.8316 44.455 27.217C43.4307 25.783 42.0991 24.6563 40.5626 23.7344L44.6598 18.9201H39.5383L46.2987 9.90625L53.0591 18.9201H47.9376L56.3369 28.8559H48.9619L57.9758 40.6354H47.0157C47.1182 40.3281 47.1182 40.0208 47.1182 39.6111Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M15.4671 6.11624C15.4671 8.98429 13.1112 11.2378 10.3456 11.2378C7.47753 11.2378 5.22406 8.88186 5.22406 6.11624C5.22406 3.9652 6.55566 2.12145 8.39941 1.302C8.09212 1.91659 7.88725 2.6336 7.88725 3.35061C7.88725 5.60409 9.731 7.44784 11.9845 7.44784C13.5209 7.44784 14.8525 6.62839 15.5695 5.39922C15.3647 5.70652 15.4671 5.91138 15.4671 6.11624Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.3838 32.0311V34.1821C20.3838 35.5137 19.257 36.6405 17.9255 36.6405H8.60427C7.27267 36.6405 6.14594 35.5137 6.14594 34.1821V32.0311C6.14594 30.6995 7.27267 29.5728 8.60427 29.5728H17.9255C19.257 29.5728 20.3838 30.6995 20.3838 32.0311Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M37.6945 31.3142V41.4548C37.6945 42.4791 36.8751 43.2986 35.8508 43.2986H30.8317C29.8074 43.2986 28.9879 42.4791 28.9879 41.4548V31.3142C28.9879 30.2899 29.8074 29.4704 30.8317 29.4704H35.8508C36.7727 29.368 37.6945 30.2899 37.6945 31.3142Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M46.4011 30.9045C46.1963 30.3924 45.9914 29.8802 45.7865 29.3681C45.3768 28.5486 44.9671 27.8316 44.455 27.217C43.4306 25.783 42.0991 24.6563 40.5626 23.7344C38.6164 22.5052 36.2605 21.8906 33.8022 21.8906H5.63378C3.38031 21.8906 1.53656 23.7344 1.53656 25.9878V43.7083C1.53656 45.9618 3.38031 47.8056 5.63378 47.8056H8.29698V47.6007C8.39941 44.8351 10.7553 42.5816 13.5209 42.684C16.2866 42.7865 18.4376 45.0399 18.4376 47.8056H38.8213C43.0209 47.8056 46.5036 44.6302 47.0157 40.533C47.0157 40.2257 47.1181 39.9184 47.1181 39.6111V35.1042C47.1181 33.6701 46.9133 32.2361 46.4011 30.9045ZM20.3838 34.1823C20.3838 35.5139 19.257 36.6406 17.9254 36.6406H8.60427C7.27267 36.6406 6.14593 35.5139 6.14593 34.1823V32.0313C6.14593 30.6997 7.27267 29.5729 8.60427 29.5729H17.9254C19.257 29.5729 20.3838 30.6997 20.3838 32.0313V34.1823ZM37.6945 41.3524C37.6945 42.3767 36.8751 43.1962 35.8508 43.1962H30.8317C29.8074 43.1962 28.9879 42.3767 28.9879 41.3524V31.2118C28.9879 30.1875 29.8074 29.3681 30.8317 29.3681H35.8508C36.8751 29.3681 37.6945 30.1875 37.6945 31.2118V41.3524Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M35.2362 34.0798V38.5868" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M20.3838 32.0311V34.1821C20.3838 35.5137 19.257 36.6405 17.9255 36.6405H8.60427C7.27267 36.6405 6.14594 35.5137 6.14594 34.1821V32.0311C6.14594 30.6995 7.27267 29.5728 8.60427 29.5728H17.9255C19.257 29.5728 20.3838 30.6995 20.3838 32.0311Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M13.2137 29.5728V36.6405" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M18.54 47.9078V48.1127C18.4376 50.8783 16.0817 53.1318 13.3161 53.0294C10.5505 52.9269 8.39941 50.6735 8.39941 47.9078V47.703C8.50184 44.9374 10.8577 42.6839 13.6234 42.7863C16.389 42.8887 18.54 45.1422 18.54 47.9078Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
												<path d="M15.4671 47.908C15.4671 49.1371 14.4428 50.059 13.3161 49.9566C12.1893 49.9566 11.3699 49.0347 11.2675 47.908V47.8055C11.2675 46.6788 12.2918 45.7569 13.4185 45.8594C14.6477 45.8594 15.5695 46.7812 15.4671 47.908Z" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
										<span>Trailers &amp; RV Sports</span>
									</button>
								</li>
							</ul>
							<div className="tab-content mt-44" id="myTabContents">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
									<div className="tabs-activities-content flex">
										<div className="activities-image">
											<img src="/assets/images/page/1.jpg" alt="Image" />
										</div>
										<div className="activities-content relative">
											<span className="sub-title text-white">Welcome to our Print</span>
											<h3 className="title-activitis text-white mb-60">Real adventure &amp; enjoy your
												dream tours</h3>
											<div className="flex-three mb-30">
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-Page-1" />
													</div>
													<span className="icon-lists">Real adventure Feel</span>
												</div>
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-rubber-ring-1" />
													</div>
													<span className="icon-lists">Comfort &amp; Secure trip</span>
												</div>
											</div>
											<div className="flex-three btn-wrap-activitis">
												<Link href="#" className="icon-activitis flex-five">
													<i className="icon-Vector-21" />
												</Link>
												<Link href="#" className="text-white get-start">Get Started Today</Link>
											</div>
											<img src="/assets/images/page/mask-tap.png" alt="image" className="mask-tab" />
										</div>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
									<div className="tabs-activities-content flex">
										<div className="activities-image">
											<img src="/assets/images/page/1.jpg" alt="Image" />
										</div>
										<div className="activities-content relative">
											<span className="sub-title text-white">Welcome to our Print</span>
											<h3 className="title-activitis text-white mb-60">Real adventure &amp; enjoy your
												dream tours</h3>
											<div className="flex-three mb-30">
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-Page-1" />
													</div>
													<span className="icon-lists">Real adventure Feel</span>
												</div>
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-rubber-ring-1" />
													</div>
													<span className="icon-lists">Comfort &amp; Secure trip</span>
												</div>
											</div>
											<div className="flex-three btn-wrap-activitis">
												<Link href="#" className="icon-activitis flex-five">
													<i className="icon-Vector-21" />
												</Link>
												<Link href="#" className="text-white get-start">Get Started Today</Link>
											</div>
											<img src="/assets/images/page/mask-tap.png" alt="image" className="mask-tab" />
										</div>
									</div>
								</div>
								<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
									<div className="tabs-activities-content flex">
										<div className="activities-image">
											<img src="/assets/images/page/1.jpg" alt="Image" />
										</div>
										<div className="activities-content relative">
											<span className="sub-title text-white">Welcome to our Print</span>
											<h3 className="title-activitis text-white mb-60">Real adventure &amp; enjoy your
												dream tours</h3>
											<div className="flex-three mb-30">
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-Page-1" />
													</div>
													<span className="icon-lists">Real adventure Feel</span>
												</div>
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-rubber-ring-1" />
													</div>
													<span className="icon-lists">Comfort &amp; Secure trip</span>
												</div>
											</div>
											<div className="flex-three btn-wrap-activitis">
												<Link href="#" className="icon-activitis flex-five">
													<i className="icon-Vector-21" />
												</Link>
												<Link href="#" className="text-white get-start">Get Started Today</Link>
											</div>
											<img src="/assets/images/page/mask-tap.png" alt="image" className="mask-tab" />
										</div>
									</div>
								</div>
								<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="ab-tab-pane" role="tabpanel" aria-labelledby="ab-tab" tabIndex={0}>
									<div className="tabs-activities-content flex">
										<div className="activities-image">
											<img src="/assets/images/page/1.jpg" alt="Image" />
										</div>
										<div className="activities-content relative">
											<span className="sub-title text-white">Welcome to our Print</span>
											<h3 className="title-activitis text-white mb-60">Real adventure &amp; enjoy your
												dream tours</h3>
											<div className="flex-three mb-30">
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-Page-1" />
													</div>
													<span className="icon-lists">Real adventure Feel</span>
												</div>
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-rubber-ring-1" />
													</div>
													<span className="icon-lists">Comfort &amp; Secure trip</span>
												</div>
											</div>
											<div className="flex-three btn-wrap-activitis">
												<Link href="#" className="icon-activitis flex-five">
													<i className="icon-Vector-21" />
												</Link>
												<Link href="#" className="text-white get-start">Get Started Today</Link>
											</div>
											<img src="/assets/images/page/mask-tap.png" alt="image" className="mask-tab" />
										</div>
									</div>
								</div>
								<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="cd-tab-pane" role="tabpanel" aria-labelledby="cd-tab" tabIndex={0}>
									<div className="tabs-activities-content flex">
										<div className="activities-image">
											<img src="/assets/images/page/1.jpg" alt="Image" />
										</div>
										<div className="activities-content relative">
											<span className="sub-title text-white">Welcome to our Print</span>
											<h3 className="title-activitis text-white mb-60">Real adventure &amp; enjoy your
												dream tours</h3>
											<div className="flex-three mb-30">
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-Page-1" />
													</div>
													<span className="icon-lists">Real adventure Feel</span>
												</div>
												<div className="flex-three text-white icon-list-wrap">
													<div className="icon">
														<i className="icon-rubber-ring-1" />
													</div>
													<span className="icon-lists">Comfort &amp; Secure trip</span>
												</div>
											</div>
											<div className="flex-three btn-wrap-activitis">
												<Link href="#" className="icon-activitis flex-five">
													<i className="icon-Vector-21" />
												</Link>
												<Link href="#" className="text-white get-start">Get Started Today</Link>
											</div>
											<img src="/assets/images/page/mask-tap.png" alt="image" className="mask-tab" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
