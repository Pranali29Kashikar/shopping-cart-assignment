var express = require('express');
var router = express.Router();
var itemCounter = require('./constant');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
