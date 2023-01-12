class BookController {
	constructor(BookService) {
		this.BookService = BookService;
	}

	add = (request, response) => {
		const { body } = request;
		if (body) {
			const create = this.BookService.add(body);
			response.set({
				'Content-type': 'application/json',
			});
			if (create) {
				response.statusCode = 201;
				response.body = JSON.stringify({ message: 'OK' });
				response.end();
			} else {
				response.statusCode = 500;
				response.body = JSON.stringify({
					message: 'Internal server error',
				});
				response.end();
			}
		} else {
			response.statusCode = 400;
			response.end(JSON.stringify({ message: 'Bad request' }));
		}
	};

	remove = (request, response) => {
		const remove = this.BookService.remove(request.body);

		if (remove.status !== 200) {
			response.end(remove);
		} else {
			response.set({
				'Content-type': 'application/json',
			});
			response.end(JSON.stringify(remove));
		}
	};

	get = async (request, response) => {
		const title = request.params['title'].replace('+', '');
		const search = await this.BookService.get(title);
		response.set({
			'Content-type': 'application/json',
		});
		if (search) {
			response.statusCode = 200;
			console.log(search);
			response.send(JSON.stringify(search));
		} else {
			response.statusCode = 400;
			response.end(
				JSON.stringify({
					message: 'Bad request',
				})
			);
		}
	};

	getAll = async (request, response) => {
		const search = await this.BookService.getAll();
		response.set({
			'Content-type': 'application/json',
		});
		if (search) {
			response.statusCode = 200;
			response.send(JSON.stringify(search));
		} else {
			response.statusCode = 400;
			response.end(
				JSON.stringify({
					message: 'Bad request',
				})
			);
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
