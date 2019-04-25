var express = require('express');
var router = express.Router();
var itemCounter = require('./constant');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register',{item_counter: itemCounter.item_counter});
});

module.exports = router;
