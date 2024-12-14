'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function MobileMenu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""

	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
				<ul className="navigation clearfix">
					<li className={`dropdown2 ${isAccordion == 1 ? "open" : ""} ${checkParentActive([
						"/home-2",
						"/home-3",
						"/home-4",
						"/home-5",
					])}`}>
						<Link href="#">Home</Link>
						<ul style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/")}`}>
								<Link href="/">Home Page 01</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home2")}`}>
								<Link href="/home2">Home Page 02</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home3")}`}>
								<Link href="/home3">Home Page 03</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home4")}`}>
								<Link href="/home4">Home Page 04</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/home5")}`}>
								<Link href="/home5">Home Page 05</Link>
							</li>
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(1)} />
					</li>
					<li className={`dropdown2 ${isAccordion == 2 ? "open" : ""} ${checkParentActive([
						"/archieve-tour",
						"/tour-package-v2",
						"/tour-package-v4",
						"/tour-single",
					])}`}>
						<Link href="/#">Tour</Link>
						<ul style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/archieve-tour")}`}>
								<Link href="/archieve-tour">Archieve tour</
								Link>
							</li>
							<li className={`${checkCurrentMenuItem("/tour-package-v2")}`}>
								<Link href="/tour-package-v2">Tour left sidebar</
								Link>
							</li>
							<li className={`${checkCurrentMenuItem("/tour-package-v4")}`}>
								<Link href="/tour-package-v4">Tour package </
								Link>
							</li>
							<li className={`${checkCurrentMenuItem("/tour-single")}`}>
								<Link href="/tour-single">Tour Single </
								Link>
							</li>
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(2)} /></li>
					<li className={`dropdown2 ${isAccordion == 3 ? "open" : ""} ${checkParentActive([
						"/tour-destination-v1",
						"/tour-destination-v2",
						"/tour-destination-v3",
						"/single-destination",
					])}`}><Link href="/#">Destination</Link>
						<ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/tour-destination-v1")}`}>
								<Link href="/tour-destination-v1">Destin
									ation
									V1</Link></li>
							<li className={`${checkCurrentMenuItem("/tour-destination-v2")}`}>
								<Link href="/tour-destination-v2">Destin
									ation
									V2</Link></li>
							<li className={`${checkCurrentMenuItem("/tour-destination-v3")}`}>
								<Link href="/tour-destination-v3">Destin
									ation
									V3</Link></li>
							<li className={`${checkCurrentMenuItem("/single-destination")}`}>
								<Link href="/single-destination">Destin
									ation
									Single</Link></li>
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(3)} /></li>
					<li className={`dropdown2 ${isAccordion == 4 ? "open" : ""} ${checkParentActive([
						"/blog",
						"/blog-details"
					])}`}><Link href="/#">Blog</Link>
						<ul style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/blog")}`}>
								<Link href="/blog">Blog</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/blog-details")}`}>
								<Link href="/blog-details">Blog Detail</Link>
							</li>
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(4)} /></li>
					<li className={`dropdown2 ${isAccordion == 5 ? "open" : ""} ${checkParentActive([
						"/about-us",
						"/team",
						"/gallery",
						"/terms-condition",
						"/help-center"
					])}`}><Link href="/#">Pages</Link>
						<ul style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/about-us")}`}>
								<Link href="/about-us">About Us</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/team")}`}>
								<Link href="/team">Team member</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/gallery")}`}>
								<Link href="/gallery">Gallery</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/terms-condition")}`}>
								<Link href="/terms-condition">Terms &amp; Condition</
								Link>
							</li>
							<li className={`${checkCurrentMenuItem("/help-center")}`}>
								<Link href="/help-center">Help center</Link>
							</li>
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(5)} /></li>
					<li className={`dropdown2 ${isAccordion == 6 ? "open" : ""} ${checkParentActive([
						"/dashboard",
						"/my-booking",
						"/my-listing",
						"/add-tour",
						"/my-favorite",
						"/my-profile"
					])}`}><Link href="/#">Dashboard</Link>
						<ul style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
							<li className={`${checkCurrentMenuItem("/dashboard")}`}>
								<Link href="/dashboard">Dashboard</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/my-booking")}`}>
								<Link href="/my-booking">My booking</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/my-listing")}`}>
								<Link href="/my-listing">My Listing</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/add-tour")}`}>
								<Link href="/add-tour">Add Tour</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/my-favorite")}`}>
								<Link href="/my-favorite">My Favorites</Link>
							</li>
							<li className={`${checkCurrentMenuItem("/my-profile")}`}>
								<Link href="/my-profile">My profile</Link>
							</li>
						</ul>
						<div className="dropdown2-btn" onClick={() => handleAccordion(6)} /></li>
					<li className={`${checkCurrentMenuItem("/contact-us")}`}>
						<Link href="/contact-us">Contact</Link>
					</li>
				</ul>
			</div>

		</>
	)
}
