import React from "react"

const Review = ({ review }) => {
	const { name, img, body, rating } = review
	return (
		<div className="col-md-4 g-2 border border-lg">
			<div className="d-flex align-items-center">
				<img
					src={img}
					style={{ width: "40px", height: "40px", borderRadius: "50%" }}
					alt=""
				/>
				<p className="ms-2 fs-4">{name}</p>
			</div>
			<p className="p-2">{body}</p>
			<p>Ratings:{rating}</p>
		</div>
	)
}

export default Review
