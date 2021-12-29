const express = require('express');
let cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.userRoutePath = '/api/user';

		// Middlewares
		this.middlewares();
		// Routes of my app
		this.routes();
	}

	middlewares() {
		// Public directory
		this.app.use(express.static('public')); // El use() indica que es un middleware

		// Parse and body reader
		this.app.use(express.json());

		// CORS
		this.app.use(cors());
	}

	routes() {
		this.app.use(this.userRoutePath, require('../routes/user.routes'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Server in port,', this.port);
		});
	}
}
module.exports = Server;
