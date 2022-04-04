import { useEffect, useState } from "react"

export const useReviews = () => {
	const [review, setReview] = useState([])
	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReview(data))
	}, [])
	return [review, setReview]
}
