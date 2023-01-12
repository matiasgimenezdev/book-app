import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ handleSearch }) => {
	const [filter, setFilter] = useState('');
	const handleChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<form className='bar' onSubmit={(e) => handleSearch(e, filter)}>
			<input
				className='filter'
				name='filter'
				id='filter'
				type='text'
				onChange={handleChange}
			/>
			<input type='submit' className='search' value='Search' />
		</form>
	);
};

export default SearchBar;
