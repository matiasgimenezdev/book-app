const Book = require('../models/Book');

class BookService {
	add = async (book) => {
		console.log(book);
		try {
			const newBook = new Book(book);
			await newBook.save();
			return {
				status: 200,
				message: 'Libro registrado',
			};
		} catch (error) {
			return error;
		}
	};

	remove = async (title) => {
		try {
			await Book.deleteOne(title);
			console.log(title);
			return {
				status: 200,
				message: 'Libro eliminado',
			};
		} catch (error) {
			return error;
		}
	};

	getAll = async () => {
		try {
			const books = await Book.find().exec();
			if (books) {
				return {
					status: 200,
					message: 'Libro encontrado',
					body: JSON.stringify(books),
				};
			} else {
				throw new Error('Libro no encontrado');
			}
		} catch (error) {
			return error;
		}
	};

	get = async (filter) => {
		try {
			const book = await Book.findOne({ title: filter }).exec();
			if (book) {
				return {
					status: 200,
					message: 'Libro encontrado',
					body: JSON.stringify([book]),
				};
			} else {
				throw new Error('Libro no encontrado');
			}
		} catch (error) {
			return error.message;
		}
	};
}

module.exports = BookService;
