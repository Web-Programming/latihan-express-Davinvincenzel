var express = require('express');
var router = express.Router();

const housingController = require('../controllers/controllerHousing');
router.get('/', housingController.Index);
module.exports = router;