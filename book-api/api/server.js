require('dotenv').config();
const express = require('express');
const routes = require('./routes.js');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

app.listen(PORT, () => {
	console.log(`Servidor escuchando en ${HOST}:${PORT}`);
});
