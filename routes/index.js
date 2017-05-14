var express = require('express');
var router = express.Router();

/* Renders */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'ShopIt' });
});

router.route('/login')
	.get(function(req, res, next) {
		res.render('login', { title: 'ShopIt Iniciar Sesión' });
	});

router.route('/registro')
	.get(function(req, res, next) {
		res.render('registro', { title: 'ShopIt Registro' });
	});

router.get('/cuenta', function(req, res, next) {
	res.render('cuenta', { title: 'ShopIt Cuenta' });
});

router.get('/historial', function(req, res, next) {
	res.render('historial', { title: 'ShopIt Historial de Compras' });
});

router.get('/carrito', function(req, res, next) {
	res.render('carrito', { title: 'ShopIt Carrito de Compras' });
});

router.get('/producto/:idProducto', function(req, res, next) {
	res.render('producto', { title: 'ShopIt' + req.params.idProducto });
});

module.exports = router;
