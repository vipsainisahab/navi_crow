'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
	const pathname = usePathname()
	return (
		<>
			<div className="sidebar-dashboard">
				<div className="db-logo">
					<Link href="/">
						<img src="assets/images/favico.png" alt="Logo" />
						<span>Vitour</span>
					</Link>
				</div>
				<div className="db-menu">
					<ul>
						<li className={`${pathname === "/dashboard" ? "active" : ""}`}>
							<Link href="/dashboard">
								<i className="icon-Vector-9" />
								<span>Dashboard</span>
							</Link>
						</li>
						<li className={`${pathname === "/my-booking" ? "active" : ""}`}>
							<Link href="/my-booking">
								<i className="icon-Layer-2" />
								<span>My Booking</span>
							</Link>
						</li>
						<li className={`${pathname === "/my-listing" ? "active" : ""}`}>
							<Link href="/my-listing">
								<i className="icon-Group-81" />
								<span>My Listing</span>
							</Link>
						</li>
						<li className={`${pathname === "/add-tour" ? "active" : ""}`}>
							<Link href="/add-tour">
								<i className="icon-Group-91" />
								<span>Add Tour</span>
							</Link>
						</li>
						<li className={`${pathname === "/my-favorite" ? "active" : ""}`}>
							<Link href="/my-favorite">
								<i className="icon-Vector-10" />
								<span>My Favorites</span>
							</Link>
						</li>
						<li className={`${pathname === "/my-profile" ? "active" : ""}`}>
							<Link href="/my-profile">
								<i className="icon-profile-user-1" />
								<span>My Profile</span>
							</Link>
						</li>
						<li className={`${pathname === "/login" ? "active" : ""}`}>
							<Link href="/login">
								<i className="icon-turn-off-1" />
								<span>Logout</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

		</>
	)
}
