var express = require('express');
var router = express.Router();
var prodData = require('../public/data/products/index.get.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  CategoryProducts = prodData.filter(product => product.enabled);
  res.render('cart', {product:prodData})
});

module.exports = router;
