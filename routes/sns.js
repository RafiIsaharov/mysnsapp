var express = require('express');
var router = express.Router();
var snsMiddleware = require('express-sns-validator');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', snsMiddleware(), (req, res, next) => {
  // do stuff with req.body
 res.send('respond with a resource');
});
module.exports = router;
