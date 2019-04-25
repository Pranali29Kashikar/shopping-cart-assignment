var express = require('express');
var router = express.Router();
var banners = require("../public/data/banners/index.get.json")
var prodCategories = require('../public/data/categories/index.get.json');
var prodData = require('../public/data/products/index.get.json');
var itemCounter = require('./constant');

prodCategories.sort(function (a, b) {
  return a.order - b.order;
});


/* GET home page. */
router.get('/', function (req, res, next) {
  var CatId = req.params.id;
  ActiveBanners = banners.filter(banner => banner.isActive);
  ActiveCategories = prodCategories.filter(category => category.enabled);
  CategoryProducts = prodData.filter(product => product.category == CatId);
  res.render('index', { banners: ActiveBanners, categories: ActiveCategories, product: CategoryProducts, item_counter: itemCounter.item_counter });
});

router.get('/category/:id', function (req, res, next) {
  res.render('home', { title: 'Express' });
});

router.post('/register_user', function (req, res) {
  console.log(req.body);
  res.end(JSON.stringify({ 'message': 'Register Sucessfully' }));
});


module.exports = router;
