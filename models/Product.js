var mongoose = require('mongoose');

var product = mongoose.Schema( {

	nombre: { type:String, required: [true, 'El nombre del producto es requerido'] },
	descripcion: { type:String, required: [true, 'La descripcion del producto es requerida'] },
	precio: { type: Number, required: [true, 'El precio del producto es requerido'] },
	foto: { type:String, required: [true, 'La foto del producto es requerida'] },
	stock: { type: Number, required: [true, 'El stock del producto es requerido'] },
	descuento: { type: Number }

});

module.exports = mongoose.model('Product', product);