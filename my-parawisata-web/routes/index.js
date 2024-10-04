var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'Paket Wisata' });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
  const { paketWisata, harga, nama, email } = req.body;
  res.render('orderdetail', { 
    title: 'Detail Pemesanan Paket',
    orderDetails: { paketWisata, harga, nama, email }
  });
});

module.exports = router;
