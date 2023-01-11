function routes(app) {
	const BookService = require('./services/BookService');
	const BookController = require('./controllers/BookController');

	const BookServiceInstance = new BookService();
	const BookControllerInstance = new BookController(BookServiceInstance);

	app.get('/search/:title', BookControllerInstance.get);
	app.get('/searchAll', BookControllerInstance.getAll);
	app.post('/add', BookControllerInstance.add);
	app.post('/remove', BookControllerInstance.remove);
}

module.exports = routes;
