var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/submit-contact', (req, res) => {
  const name = req.body.name;
  res.render('submit-contact', { title: 'Submit Contact', name: name });
});

module.exports = router;