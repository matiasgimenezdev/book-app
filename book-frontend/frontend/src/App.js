import { useEffect, useState } from 'react';
import BookContainer from './components/BookContainer/BookContainer';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
	const [book, setBook] = useState(null);
	const [search, setSearch] = useState('');
	const [bookList, setBookList] = useState(
		fetchData('http://localhost:5000/searchAll')
	);

	const handleSubmit = (e, data) => {
		e.preventDefault();
		setBook(data);
	};

	const handleSearch = (e, filter) => {
		e.preventDefault();
		setSearch(filter);
	};

	async function fetchData(url) {
		const options = {
			headers: {
				Accept: 'application/json',
			},
		};

		const response = await fetch(url, options);
		const data = await response.json();
		return JSON.parse(data.body);
	}

	useEffect(() => {
		let url = '';
		if (search.length === 0) {
			url = `http://localhost:5000/searchAll`;
		} else {
			url = `http://localhost:5000/search/${search}`;
		}
		fetchData(url).then((data) => {
			setBookList(data);
			console.log(data);
		});
	}, [search]);

	useEffect(() => {}, [book]);

	return (
		<div>
			<Form handleSubmit={handleSubmit} />
			<SearchBar handleSearch={handleSearch} />
			<BookContainer bookList={bookList} />
		</div>
	);
}

export default App;
