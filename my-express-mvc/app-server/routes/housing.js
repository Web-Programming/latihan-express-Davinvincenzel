var express = require('express');
var router = express.Router();

const housingController = require('../controllers/controllerHousing');
router.get('/', housingController.Index);
router.get('/:id', housingController.show);
router.post('/', housingController.Insert);
module.exports = router;