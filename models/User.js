var mongoose = require('mongoose');

var User = mongoose.Schema({

	privilegio: { type: Number },
	nombre: { type: String, required: [true, 'El nombre del usuario es requerido'] },
	apellidop: { type: String, required: [true, 'El apellidop del usuario es requerido'] },
	apellidom: { type: String, required: [true, 'El apellidom del usuario es requerido'] },
	mail: { type: String, required: [true, 'El mail del usuario es requerido'] },
	telefono: { type: Number, required: [true, 'El telefono del usuario es requerido'] },
	direccion: { 
		calle: 		{ type: String, required: [true, 'La calle del usuario es requerida'] },
		colonia: 	{ type: String, required: [true, 'La colonia del usuario es requerida'] },
		ciudad: 	{ type: String, required: [true, 'La ciudad del usuario es requerida'] },
		pais : 		{ type: String, required: [true, 'La pais del usuario es requerida'] }
	},
	fechaNacimiento: { type: Date, required: [true, 'La fecha de nacimiento del usuario es requerida'] },
	foto: { type: String, required: [true, 'La foto del usuario es requerida'] },
	tarjeta: [{ 
		numero: { type: String },
		cvv: 	{ type: String },
		saldo: 	{ type: String }
	}],
	compras: [{ 
		cantidadTotal: 	{ type:Number },
		producto: 	[{  
			nombre: { type: String },
			descripcion: { type: String },
			precio: { type: Number },
			cantidad: { type: Number }
		}],
		fechaCompra: { type: Date }
	}],
	psw: { type: String, required: [true, 'La contraseniaaa del usuario es requerida'] }

});

module.exports = mongoose.model('user', User);