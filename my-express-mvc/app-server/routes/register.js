var express = require('express');
var router = express.Router();

const registerController = require('../controllers/controllerRegister');

router.post('/register', registerController.Insert);
module.exports = router;