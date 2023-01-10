const searchButton = document.getElementById('search');
const addButton = document.getElementById('add');
const titleInput = document.getElementById('filter');

const search = async (title) => {
	let result;
	if (title) {
		// eslint-disable-next-line no-undef
		result = await axios.get(`/search/${title.replace(' ', ' +')}`);
	} else {
		// eslint-disable-next-line no-undef
		result = await axios.get(`/searchAll`);
	}
	return JSON.parse(result.data.body);
};

const renderBooks = (books) => {
	const content = document.querySelector('.books');

	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}

	books.forEach(async (book) => {
		const newBook = document.createElement('div');
		newBook.innerHTML = `
				<h4>${book.title}</h4>
				<div class="book-info">
					<div>
						<div>${book.author}</div>
						<div>${book.year}</div>
					</div>
					<img src="${book.cover}" alt="${book.title}" class="image">
				</div>
				<button id="remove">Remove</button>
			`;
		newBook.classList.add('book');
		content.insertAdjacentElement('afterbegin', newBook);
	});
};

searchButton.addEventListener('click', async () => {
	const title = titleInput.value;
	const books = await search(title);
	renderBooks(books);
});

addButton.addEventListener('click', () => {
	const book = {
		title: document.getElementById('title').value,
		author: document.getElementById('author').value,
		year: document.getElementById('year').value,
		cover: document.getElementById('cover').value,
	};
	// eslint-disable-next-line no-undef
	axios
		.post(`/add`, book)
		.then(() => {
			setTimeout(() => {
				location.reload(); //Para que actualize los libros que muestra
			}, 10);
		})
		.catch((error) => {
			console.log(error);
		});
});

document.addEventListener('click', (e) => {
	const content = document.querySelector('.books');
	const removeButton = document.getElementById('remove');

	if (e.target === removeButton) {
		const child = content.firstChild;
		const book = {
			title: child.querySelector('h4').textContent,
		};
		// eslint-disable-next-line no-undef
		axios
			.post(`/remove`, book)
			.then(() => {
				setTimeout(() => {
					location.reload(); //Para que actualize los libros que muestra
				}, 10);
			})
			.catch((error) => {
				console.log(error);
			});
	}
});

document.addEventListener('DOMContentLoaded', async () => {
	const books = await search('');
	renderBooks(books);
});

titleInput.addEventListener('keyup', async () => {
	const title = titleInput.value;
	const books = await search(title);
	renderBooks(books);
});
