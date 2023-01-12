import React from 'react';
import './BookCard.scss';

const BookCard = ({ data }) => {
	const { title, author, year, cover } = data;
	return (
		<div className='card'>
			<h2 className='title'> {title}</h2>
			<div className='desc'>
				<h3>{author}</h3>
				<h3>{year}</h3>
			</div>
			<img src={cover} alt={title} className='cover' />
		</div>
	);
};

export default BookCard;
