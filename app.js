var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var snsRouter = require('./routes/sns');
var snsSubscriptionConfirmation = require('aws-sns-subscription-confirmation');
 

 
// Fix the wrong request content-type as required by the body-parser
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(snsSubscriptionConfirmation.overrideContentType());
app.use(bodyParser.json());
app.use(snsSubscriptionConfirmation.snsConfirmHandler());

app.use('/', indexRouter);
app.use('/sns', snsRouter);

module.exports = app;
