import { useEffect, useState } from 'react';
import BookContainer from './components/BookContainer/BookContainer';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
	const [book, setBook] = useState();
	const [search, setSearch] = useState('');
	const [bookList, setBookList] = useState(
		fetchData('http://localhost:5000/searchAll', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
	);

	const handleSubmit = (e, data) => {
		e.preventDefault();
		setBook(data);
	};

	const handleSearch = (e, filter) => {
		e.preventDefault();
		setSearch(filter);
	};

	async function fetchData(url, options) {
		const response = await fetch(url, options);
		if (options.method === 'POST') {
			return response;
		} else {
			return response.json();
		}
	}

	useEffect(() => {
		let url = '';
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		};
		if (search.length === 0) {
			url = `http://localhost:5000/searchAll`;
		} else {
			url = `http://localhost:5000/search/${search}`;
		}

		fetchData(url, options).then((data) => {
			if (data !== 'Bad request') {
				setBookList(data);
			} else {
				//TODO: ERROR MESSAGE DE QUE EL LIBRO NO SE HA ENCONTRADO
			}
		});
	}, [search]);

	useEffect(() => {
		if (!book) return;
		if (!book.title || !book.year || !book.cover || !book.author) {
			alert('Todos los campos son requeridos');
			return;
		}
		if (!parseInt(book.year)) {
			alert('El año debe ser un numero entero');
			return;
		}

		const url = 'http://localhost:5000/add';
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(book),
		};

		fetchData(url, options).then((response) => {
			//TODO: Both have to show a message to indicate the user if the operation was succesfull or a failure
			if (response.status !== 200) {
				console.log(response.statusText);
			} else {
				console.log(response.statusText);
			}
		});
	}, [book]);

	return (
		<div>
			<Form handleSubmit={handleSubmit} />
			<SearchBar handleSearch={handleSearch} />
			<BookContainer bookList={bookList} />
		</div>
	);
}

export default App;
