import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
	return (
		<div className=" row nav-items justify-content-center align-items-center ">
			<p className="col-md-4">
				<span className="nav-logo">Cycle Mart</span>{" "}
			</p>
			<div className="col-md-8 d-flex justify-content-end align-items-center">
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : "nav-item")}
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : "nav-item")}
					to="/reviews"
				>
					Reviews
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : "nav-item")}
					to="dashboard"
				>
					Dashboard
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : "nav-item")}
					to="blogs"
				>
					Blogs
				</NavLink>
			</div>
		</div>
	)
}

export default Header
