var express = require('express');
var router = express.Router();
var prodData = require('../public/data/products/index.get.json');
var prodCategories = require('../public/data/categories/index.get.json');


router.get('/', function(req, res, next) {
  ActiveCategories = prodCategories.filter(category => category.enabled);
  res.render('product', {product:prodData,categories:ActiveCategories});
  
  });

  /* GET product listing. */
router.get('/:id', function(req, res, next){
  var CatId = req.params.id;
  CategoryProducts = prodData.filter(product => product.category == CatId);
  ActiveCategories = prodCategories.filter(category => category.enabled);
  res.render('product', {product:CategoryProducts,categories:ActiveCategories});
})


   

module.exports = router;