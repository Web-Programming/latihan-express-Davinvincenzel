var express = require('express');
var router = express.Router();

const housingController = require('../controllers/controllerHousing');
router.get('/', housingController.Index);
router.get('/:id', housingController.show);

module.exports = router;