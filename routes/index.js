var express = require('express');
var router = express.Router();
var banners = require("../public/data/banners/index.get.json")
var prodCategories = require('../public/data/categories/index.get.json');
var prodData = require('../public/data/products/index.get.json');

prodCategories.sort(function(a, b){
  return a.order - b.order;
});


/* GET home page. */
router.get('/', function(req, res, next) {
  var CatId = req.params.id;
  ActiveBanners = banners.filter(banner => banner.isActive);
  ActiveCategories = prodCategories.filter(category => category.enabled);
  CategoryProducts = prodData.filter(product => product.category == CatId);
  res.render('index', {banners:ActiveBanners,categories:ActiveCategories,product:CategoryProducts});
});

router.get('/category/:id', function(req, res, next) {
  res.render('home', { title: 'Express' });
});






module.exports = router;
