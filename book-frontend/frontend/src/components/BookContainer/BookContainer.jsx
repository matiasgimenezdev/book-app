import React from 'react';
import './BookContainer.scss';
import BookCard from '../BookCard/BookCard';

const BookContainer = ({ bookList }) => {
	return (
		<ul className='main-container'>
			{bookList.length > 0 ? (
				bookList.map((value, index) => {
					return <BookCard data={value} key={index} />;
				})
			) : (
				<li>No hay Libros</li>
			)}
		</ul>
	);
};

export default BookContainer;
