var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lectures', function(req, res, next) {
  res.render('index', { content: lecture, condition: true, anyArray: [1,2,3] });
});

module.exports = router;
