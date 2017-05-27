var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* Renders */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'ShopIt' });
});

router.route('/admin')
	.get(function(req, res, next) {
		res.render('admin', { title: 'ShopIt' });
	});

router.route('/login')
	.get(function(req, res, next) {
		if( !req.session.datos ){
			res.render('login', { title: 'ShopIt Iniciar Sesión' });
		}else{
			res.redirect('/');
		}
	});

router.route('/registro')
	.get(function(req, res, next) {
		if( !req.session.datos ){
			res.render('registro', { title: 'ShopIt Registro' });
		}else{
			res.redirect('/');
		}
	});

router.route('/cuenta')
	.get(function(req, res, next) {
		res.render('cuenta', { title: 'ShopIt Cuenta' });
	});

router.get('/historial', function(req, res, next) {
	res.render('historial', { title: 'ShopIt Historial de Compras' });
});

router.get('/carrito', function(req, res, next) {
	res.render('carrito', { title: 'ShopIt Carrito de Compras' });
});

router.get('/producto/:idProducto', function(req, res, next) {
	res.render('producto', { title: 'ShopIt Producto: ' + req.query.idProducto });
});


/*Funciones pa angular*/
router.post('/registrar', function(req, res, next) {

	console.log(req)

	var guardaUser = new User({
					privilegio: 0,
					nombre: req.query.nombre,
					apellido: req.query.apellidos,
					mail: req.query.mail,
					telefono: req.query.telefono,
					direccion: req.query.direccion,
					psw: req.query.contra
	});

	guardaUser.save(function(err, alumno) {
		if (err){
			console.log("err.message")
			res.status(500).send( err );
		}else{
			res.status(200).jsonp(alumno);
		}
	});
});

router.get('/login', function(req, res, next) {

	User.find({ mail: req.query.mail, psw: req.query.psw }, function(err, doc){
		if(err){
			res.status(500).send( err.message );
		}else{
			req.session.datos = doc;
			res.status(200).jsonp( doc );
		}
	});

});

router.get('/getCookieCompra', function(req, res, next) {

	res.status(200).jsonp( req.cookies.compra );

});

router.post('/pushCookieCompra', function(req, res, next) {

	var compra = {
		nombre: req.query.element.nombre,
		descripcion: req.query.element.descripcion,
		precio: req.query.element.precio,
		cantidad: req.query.element.cantidad
	}

	var galleta = req.cookies.compra;
	
	if ( galleta ) {
		galleta.push(compra);
		res.cookie("compra" , compra);
	}else{
		galleta = [];
		galleta.push(compra);
		res.cookie("compra" , compra);
	}
	
});

router.post('/comprar', function(req, res, next) {

	var guardaUser = new User();

	guardaUser.compras.push({ 
		cantidadTotal: req.query.cantidadTotal,
		producto: req.cookies.compra,
		fecha: new Date()
	});

	guardaUser.save(function(err, alumno) {
		if (err){
			res.status(500).send( err.message );
		}else{
			res.cookie("compra" , []);
			res.status(200).jsonp(alumno);
		}
	});
});


module.exports = router;
