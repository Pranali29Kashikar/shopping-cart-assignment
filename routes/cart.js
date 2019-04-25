var express = require('express');
var router = express.Router();
var productList = require('../public/data/products/index.get.json');
var productInCart = [];
var itemCounter  = require('./constant');


router.get('/', function (req, res, next) {
  var productLists = productList.filter(category_list => category_list.category);
  console.log("productInCart: ", productInCart);

  res.render('cart', {
    title: 'cart',
    prod_List: productLists,
    productInCart: productInCart,
    item_counter: itemCounter.item_counter
  });

});

router.get('/addtocart/:id/:operation', function (req, res) {
  console.log(req.params.id, req.params.operation);
  if (req.params.operation == "add") {
    productList.forEach(element => {
      if (element.id === req.params.id) {
        if (element.count == undefined) {
          element.count = 1;
          productInCart.push(element);
          itemCounter.item_counter = itemCounter.item_counter + 1;
          element.total_price = element.price;
        } else {
          element.count = element.count + 1;
          itemCounter.item_counter = itemCounter.item_counter + 1;
          element.total_price = element.count * element.price;
        }
      }
    });
    res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
  } else if (req.params.operation == "remove") {
    productList.forEach(element => {
      if (element.id === req.params.id) {
        if (element.count == undefined) {
          element.count = 0;
          productInCart.push(element);
          itemCounter.item_counter = 0;
          element.total_price = 0;
        } else {
          element.count = element.count - 1;
          itemCounter.item_counter = itemCounter.item_counter - 1;
          element.total_price = element.count * element.price;
        }

      }
    });
    res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
  }
});

router.get('/remove-item/:id/:operation', function (req, res) {
  productInCart.forEach(element => {
    if (element.id === req.params.id) {
      delete element.count;      
      var removeIndex = productInCart.map(function (item) { return item.id; }).indexOf(req.params.id);
      productInCart.splice(removeIndex, 1);
      itemCounter.item_counter = itemCounter.item_counter -1;
    }
  });
  res.end(JSON.stringify({ 'cartItems': productInCart, 'item_counter': itemCounter.item_counter }));
});



module.exports = router;