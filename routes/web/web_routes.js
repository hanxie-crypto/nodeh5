var express = require('express');
var router = express.Router();
var controllerPath = '../../controllers/',
	main = require(controllerPath + 'web/index');

router.get('/', main.index);








module.exports = router;