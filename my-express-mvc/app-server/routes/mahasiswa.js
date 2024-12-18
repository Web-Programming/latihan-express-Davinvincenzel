    var express = require('express');
var router = express.Router();

const mahasiswaController = require('../controllers/mahasiswacontroller');

router.get("/mahasiswa", mahasiswaController.index); 
router.post("/insert", mahasiswaController.insert);
router.patch("/update/:id", mahasiswaController.update);
router.get("/show/:id", mahasiswaController.show);
router.delete("/delete/:id", mahasiswaController.destroy);

module.exports = router;


