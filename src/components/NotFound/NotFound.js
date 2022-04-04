import React from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className="w-75 mx-auto">
			<h1 className="fs-1 text-danger ">Oops!!</h1>
			<h3>404 - page not found</h3>
			<button onClick={() => navigate("/")} className="btn btn-info">
				Go to home
			</button>
		</div>
	)
}

export default NotFound
