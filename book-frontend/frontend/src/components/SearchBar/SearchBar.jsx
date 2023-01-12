import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ handleSearch }) => {
	const [filter, setFilter] = useState('');
	const handleChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<form onSubmit={(e) => handleSearch(e, filter)}>
			<input
				name='filter'
				id='filter'
				type='text'
				placeholder='Filter...'
				onChange={handleChange}
			/>
			<input type='submit' value='Search' />
		</form>
	);
};

export default SearchBar;
