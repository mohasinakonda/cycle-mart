import React from "react"
import { useReviews } from "../../hooks/useReviews"
import Review from "../Review/Review"

const Reviews = () => {
	const [reviews] = useReviews()
	return (
		<div className="row">
			{reviews.map((review) => (
				<Review key={review.id} review={review} />
			))}
		</div>
	)
}

export default Reviews
;<h2>this is reviews page</h2>
