const mongoose = require('mongoose');

function database(req, res, next) {
	mongoose
		.connect('mongodb://localhost/book-app')
		.then(() => {
			console.log('Conexion establecida con la base de datos: book-app');
		})
		.catch((error) => {
			console.log(error);
		});
	next();
}

module.exports = database;
