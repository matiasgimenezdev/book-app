const Book = require('../models/Book');

class BookService {
	add = async (book) => {
		console.log(book);
		try {
			const newBook = new Book(book);
			await newBook.save();
			return true;
		} catch (error) {
			console.log(error);
			return false;
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
				return books;
			} else {
				return null;
			}
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	get = async (filter) => {
		try {
			const book = await Book.findOne({ title: filter }).exec();
			if (book) {
				return [book];
			} else {
				return null;
			}
		} catch (error) {
			console.log(error);
			return null;
		}
	};
}

module.exports = BookService;
