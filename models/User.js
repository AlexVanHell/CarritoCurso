var mongoose = require('mongoose');

var User = mongoose.Schema({

	privilegio: { type: Number },
	nombre: { type: String, required: [true, 'El nombre del usuario es requerido'] },
	apellidop: { type: String, required: [true, 'El apellidop del usuario es requerido'] },
	apellidom: { type: String, required: [true, 'El apellidom del usuario es requerido'] },
	mail: { type: String, required: [true, 'El mail del usuario es requerido'], unique: true },
	telefono: { type: Number, required: [true, 'El telefono del usuario es requerido'] },
	direccion: { 
		calle: 	 { type: String, required: [true, 'La calle del usuario es requerida'] },
		colonia: { type: String, required: [true, 'La colonia del usuario es requerida'] },
		ciudad:  { type: String, required: [true, 'La ciudad del usuario es requerida'] },
		pais: 	 { type: String, required: [true, 'La pais del usuario es requerida'] }
	},
	fechaNacimiento: { type: Date, required: [true, 'La fecha de nacimiento del usuario es requerida'] },
	foto: { type: String, default: '' },
	tarjeta: [{ 
		numero: { type: String, required: [true, 'El numero de tarjeta es requerido'] },
		cvv: 	{ type: String, required: [true, 'El cvv es requerido'] },
		saldo: 	{ type: Number }
	}],
	compras: [{ 
		cantidadTotal: { type: Number },
		producto: [{  
			nombre: 	 { type: String, required: [true, 'El nombre del producto es requerido'] },
			descripcion: { type: String },
			precio: 	 { type: Number, required: [true, 'El precio del producto es requerido'] },
			cantidad: 	 { type: Number, required: [true, 'La cantidad del producto es requerida'] }
		}],
		fechaCompra: { type: Date, required: [true, 'La fecha de compra es requerida'] }
	}],
	psw: { type: String, required: [true, 'La contrasenia del usuario es requerida'] }

});

module.exports = mongoose.model('user', User);