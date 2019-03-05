var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pelicula = new Schema
({
	NOMBRE: String,
	CLAVE: String,
	EMAIL:  String,
	IMAGEN: String,
	ESTADO: Number,
	SALT: String
});

module.exports = mongoose.model('Pelicula',pelicula);