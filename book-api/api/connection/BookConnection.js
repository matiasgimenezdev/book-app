const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/book-app')
	.then(() => {
		console.log('Conexion establecida con la base de datos: book-app');
	})
	.catch((error) => {
		console.log(error);
	});

const BookSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		year: { type: Number, required: true },
		cover: { type: String, required: true },
	},
	{ timestamps: true }
);

const BookModel = mongoose.model('Book', BookSchema, 'Books'); // A partir del modelo se puede interactuar con la BDD.

module.exports = BookModel;
