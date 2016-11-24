var express = require('express');
var bodyParser = require('body-parser');
// mail Dependencies
var nodemailer = require('nodemailer');
var mandrillTransport = require('nodemailer-mandrill-transport');

// Start Server
var app = express();
// var router = express.Router();
var port = process.env.PORT ||  3000 ;
// Public path configuration
app.use(express.static(__dirname + '/App'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// Start App
console.log('Starting App... \nlistening on port ' + port);
app.listen(port);