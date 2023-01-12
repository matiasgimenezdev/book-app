const database = require('./connection/database');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
const app = express();

database();
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(PORT, () => {
	console.log(`Servidor escuchando en ${HOST}:${PORT}`);
});
