var express = require('express');
var router = express.Router();
var snsMiddleware = require('express-sns-validator');
var snsSubscriptionConfirmation = require('aws-sns-subscription-confirmation');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', /*snsSubscriptionConfirmation.overrideContentType(),snsSubscriptionConfirmation.snsConfirmHandler(),*/ (req, res, next) => {
  // do stuff with req.body
  console.log(req.headers['x-amz-sns-message-type']);
// res.send('respond with a resource');
});
module.exports = router;
