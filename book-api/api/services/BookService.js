const BookModel = require('../connection/BookConnection');

class Book {
	addBook = async (book) => {
		const newBook = new BookModel(book);
		console.log(book);
		try {
			await newBook.save();
			return {
				status: 200,
				message: 'Libro registrado',
			};
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				message: 'Libro no encontrado',
			};
		}
	};

	removeBook = async (title) => {
		try {
			await BookModel.deleteOne(title);
			console.log(title);
			return {
				status: 200,
				message: 'Libro eliminado',
			};
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				message: 'Libro no encontrado',
			};
		}
	};

	getAllBooks = async () => {
		try {
			const books = await BookModel.find().exec();
			return {
				status: 200,
				message: 'Libro encontrado',
				body: JSON.stringify(books),
			};
		} catch (error) {
			return {
				status: 500,
				message: 'Error en la busqueda',
			};
		}
	};

	getBook = async (filter) => {
		try {
			const book = await BookModel.findOne({ title: filter }).exec();
			return {
				status: 200,
				message: 'Libro encontrado',
				body: JSON.stringify([book]),
			};
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				message: 'Libro no encontrado',
			};
		}
	};
}

module.exports = Book;
