var express = require('express');
var router = express.Router();
var controllerPosting = require('../controllers/controller.posting');

router.post('/', controllerPosting);
router.post('/', controllerPosting);

module.exports = router;
