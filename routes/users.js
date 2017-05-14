var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

/* User URL's */

router.get('/', userCtrl.getUsers)
	  .post('/register', userCtrl.setUser);

module.exports = router;
