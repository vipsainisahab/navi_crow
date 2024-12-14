
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import FooterAdmin from "./footer/FooterAdmin"
import HeaderAdmin from "./header/HeaderAdmin"
import SearchModal from "./SearchModal"
import Sidebar from "./Sidebar"

export default function LayoutAdmin({ headerStyle, footerStyle, breadcrumbTitle, children }) {
	const [scroll, setScroll] = useState(0)
	// Moblile Menu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	return (
		<><div id="top" />
			<AddClassBody />
			<div id="wrapper">
				<div id="pagee" className="clearfix">

					<Sidebar />
					<div className="has-dashboard">

						<HeaderAdmin scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />


						<main className="main">
							{children}
						</main>

						< FooterAdmin />

					</div>
				</div>
			</div>
			<BackToTop target="#top" />
			<SearchModal />
		</>
	)
}
