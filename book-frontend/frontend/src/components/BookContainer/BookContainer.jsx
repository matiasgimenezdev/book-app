import React from 'react';
import './BookContainer.scss';

const BookContainer = ({ bookList }) => {
	return (
		<ul>
			{bookList.length > 0 ? (
				bookList.map((value, index) => {
					return <li key={index}>{value.title}</li>;
				})
			) : (
				<li>No hay Libros</li>
			)}
		</ul>
	);
};

export default BookContainer;
