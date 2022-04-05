import React from "react"
import { useNavigate } from "react-router-dom"
import { useReviews } from "../../hooks/useReviews"
import Review from "../Review/Review"
import "./Home.css"

const Home = () => {
	const [reviews] = useReviews()
	const navigate = useNavigate()
	return (
		<div>
			<div className="row  justify-content-center align-items-center pt-5">
				<div className="col-md-7">
					<div>
						<h1>Road Racing Bicycle</h1>
					</div>
					<p>
						Engineered to climb, corner and descend with efficiency and speed, a
						Giant road bike gives you a competitive edge. Whether youre racing,
						training or going for the KOM, these mens road bikes do it all, and
						do it faster
					</p>
					<button className="buy-now-btn  w-50">Buy now</button>
				</div>
				<div className="col-md-4">
					<img
						className="img-fluid"
						src="https://cdn.britannica.com/86/6486-050-0F9C483A/features-road-bike.jpg"
						alt=""
					/>
				</div>
			</div>
			<section>
				<div className="pt-5">
					<div className="row">
						<h2 className="pt-3 text-center">Customer reviews (3)</h2>
						{reviews.slice(0, 3).map((review) => (
							<Review key={review.id} review={review} />
						))}
					</div>
				</div>
				<div className="d-flex justify-content-center p-4">
					<button
						onClick={() => navigate("/reviews")}
						className="review-btn w-25 mt-2 "
					>
						See all reviews
					</button>
				</div>
			</section>
		</div>
	)
}

export default Home
