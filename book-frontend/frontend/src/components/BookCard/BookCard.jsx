import React from 'react';
import './Book.scss';

const Book = () => {
	return (
		<div>
			<h2>Book Title</h2>
			<div>
				<h3>Book Author</h3>
				<h3>Book Year</h3>
			</div>
			{/* <img src='${book.cover}' alt='${book.title}' class='image' /> */}
		</div>
	);
};

export default Book;
