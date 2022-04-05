import React from "react"

const Blogs = () => {
	return (
		<div className="pt-5">
			<article>
				<div className="d-flex justify-content-center">
					<img
						className="w-75 img-fluid p-2 "
						src="https://www.thoughtco.com/thmb/lzj0HsBfSYcJkhIma-QaG7NH-v0=/1732x1231/filters:fill(auto,1)/GettyImages-663932038-6a057cdc923147bf99f1cee4654a1032.jpg"
						alt=""
					/>
				</div>

				<h2 className="pt-3">What is semantic tag in HTML?</h2>
				<p>
					Semantic HTML or semantic markup is HTML that introduces meaning to
					the web page rather than just presentation.Sematic tag is useful for
					disable or blind people ,when they surfing internet with screen reader
					than semantic tag is very useful for them. For example,
					<code>p</code> tag indicates that the enclosed text is a paragraph.
					This is both semantic and presentational because people know what
					paragraphs are, and browsers know how to display them. On the flip
					side of this equation, tags such as <code> b</code> and <code>i</code>
					are not semantic. They define only how the text should look (bold or
					italic), and don't provide any additional meaning to the markup.
					Examples of semantic HTML tags include: Header tags h1 through h6
					blockquote code em
				</p>
			</article>
		</div>
	)
}

export default Blogs
