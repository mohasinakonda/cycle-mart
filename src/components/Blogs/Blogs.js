import React from "react"

const Blogs = () => {
	return (
		<div className="pt-5">
			<article>
				<h2 className="p-3">1) what is context API ?</h2>
				<div className="d-flex justify-content-center">
					<img
						className="w-75 img-fluid p-3"
						src="https://imgs.developpaper.com/imgs/2271126660-5d35c5416b4ce_articlex.png"
						alt=""
					/>
				</div>

				<p>
					The React Context API is a way for a React app to effectively produce
					global variables that can be passed around. This is the alternative to
					"prop drilling" or moving props from grandparent to child to parent,
					and so on.This feature solve the major problem props drilling. Context
					is also touted as an easier, lighter approach to state management
					using Redux. Context API is a new feature added in version 16.3 of
					React that allows one to share state across the entire app (or part of
					it) lightly and with ease.
				</p>
			</article>
			<article>
				<h2 className="p-3">2) What is semantic tag in HTML?</h2>
				<div className="d-flex justify-content-center">
					<img
						className="w-75 img-fluid p-2 "
						src="https://www.thoughtco.com/thmb/lzj0HsBfSYcJkhIma-QaG7NH-v0=/1732x1231/filters:fill(auto,1)/GettyImages-663932038-6a057cdc923147bf99f1cee4654a1032.jpg"
						alt=""
					/>
				</div>

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
			<article>
				<h2 className="p-3">
					3)The differences between inline,block and inline-block elements
				</h2>
				<div className="d-flex justify-content-center">
					<img
						className="w-100 p-3"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj08S-BFTC5vU6M5Rk2TL-yj1siOhkKmqMGw&usqp=CAU"
						alt=""
					/>
				</div>

				<h3>Inline html elements</h3>
				<p>
					Inline elements are those which only occupy the space bounded by the
					tags defining the element, instead of breaking the flow of the
					content. An inline element does not start on a new line and only takes
					up as much width as necessary,example :<li>i</li>
					<li>a</li>
					<li>span</li>
				</p>
				<h3>Block element</h3>
				<p>
					A block-level element is an HTML element that begins a new line on a
					web page and extends the full width of the available horizontal space
					of its parent element. It creates large blocks of content like
					paragraphs or page divisions. example:
					<ul>
						<li>div</li>
						<li>p</li>
						<li>article</li>
						<li>h1-h6</li>
					</ul>
				</p>
				<h3>Inline block element</h3>
				<p>
					Inline block element behave like inline element but inline element has
					no height and weight but inline-block element has default inline block
					elements are img button input textarea .
				</p>
			</article>
		</div>
	)
}

export default Blogs
