class BookController {
	constructor(Book) {
		this.BookService = Book;
	}

	removeBook = (request, response) => {
		const remove = this.BookService.removeBook(request.body);
		console.log(request.body);
		if (remove.status >= 400) {
			response.status = remove.status;
			response.send(`<h1>Error: ${remove.message}</h1>`);
		} else {
			response.end(JSON.stringify(remove));
		}
	};

	addBook = (request, response) => {
		const create = this.BookService.addBook(request.body);
		console.log(request.body);
		if (create.status >= 400) {
			response.status = create.status;
			response.send(`<h1>Error: ${create.message}</h1>`);
		} else {
			response.end(JSON.stringify(create));
		}
	};

	getBook = async (request, response) => {
		const title = request.params['title'].replace('+', '');
		const search = await this.BookService.getBook(title);
		if (search.status >= 400) {
			response.status = search.status;
			response.send(`<h1>Error: ${search.message}</h1>`);
		} else {
			response.set({
				'Content-type': 'application/json',
			});
			response.end(JSON.stringify(search));
		}
	};

	getAllBooks = async (request, response) => {
		const search = await this.BookService.getAllBooks();
		if (search.status >= 400) {
			response.status = search.status;
			response.send(`<h1>Error: ${search.message}</h1>`);
		} else {
			response.set({
				'Content-type': 'application/json',
			});
			response.end(JSON.stringify(search));
		}
	};
}

module.exports = BookController;

/*

=============================== MONGODb =============================== 
- Coleccion == Tabla.
- Documento == Fila.
# En terminal:
	- mongod --> levanta el servidor de mongo
	- mongosh --> levanta el cliente de la terminal

# En cliente mongo:
	- show databases/dbs --> muestra todas las bases de datos.
	- use dbName --> para moverte a la BDD que queres utilizar

# Operaciones con colecciones MongoDB:
	collection.save --> guardar/actualizar un documento 		(db.myCollection.save({nombre:"nombre1Update"})
	collection.insert --> inserta un documento 					(db.myCollection.insert[{nombre:"nombre1"}, {nombre: "nombre2"}])
	collection.findOne --> recupera un documento
	collection.find --> recupera varios documentos
	collection.remove --> borra uno o varios documentos			(db.myCollection.remove({nombre: "nombre2"})
	collection.drop --> elimina la coleccion
	collection.rename --> cambia de nombre la coleccion
	collection.count --> cantidad de documentos

# Operadores de busqueda:
	$gt/$gte = mayor/mayor o igual
	$lt/$lte = menor/menor o igual
	$ne = diferente
	$in/$nin = en/no en array de valores ($in:[1, 5])

# Operadores logicos:
	$or
	$and
	$nor
	$not

# El find te devuelve un cursor que representa un conjunto de resultados:
    cursor. count(callback) --> cantidad de documentos del resultado
    cursor.limit(n) --> limiota a n documentos
    cursor.skip(n) --> saltarse los n primeros documentos
    cursor.nextObject(callback) --> siguiente documento
    cursor.each(callback) --> para cada documento...
    cursor.toArray(callback) --> conveirte el cursor en array

	El resultado del cursor puede ser ordenado con el metodo sort() de MongoDB
	El resultado del cursor puede ser formateado con el metodo pretty() de MongoDB


*/
