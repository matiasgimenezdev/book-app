module.exports = (app) => {
	const Book = require('./services/BookService');
	const BookController = require('./controllers/BookController');

	const BookInstance = new Book();
	const BookControllerInstance = new BookController(BookInstance);

	app.get('/search/:title', BookControllerInstance.getBook);
	app.get('/searchAll', BookControllerInstance.getAllBooks);
	app.post('/add', BookControllerInstance.addBook);
	app.post('/remove', BookControllerInstance.removeBook);
};
