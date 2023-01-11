const mongoose = require('mongoose');

const BookSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		author: { type: String },
		year: { type: Number },
		cover: { type: String },
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.BookSchema || mongoose.model('Book', BookSchema, 'Books');
