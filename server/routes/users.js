var express = require('express');
var router = express.Router();
var controllerUser = require('../controllers/controller.user.js');

router.post('/register', controllerUser.addOneUser);
router.post('/login', controllerUser.login);

module.exports = router;
