const mongoose = require('mongoose');

function database() {
	mongoose
		.connect('mongodb://localhost/book-app')
		.then(() => {
			console.log('Conexion establecida con la base de datos: book-app');
		})
		.catch((error) => {
			console.log(error);
		});
}

module.exports = database;
