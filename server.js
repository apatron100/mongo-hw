// Web Scraper Homework Solution Example
// (be sure to watch the video to see
// how to operate the site in the browser)
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require ('path')
var bodyParser = require("body-parser");
var logger = require ('morgan')

// Instantiate our Express App
var app = express();


app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;



// Database
require("./config/connection");

// Use morgan logging
app.use(logger("dev"));

// BodyParser Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Set up Handlebar for views
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Routes
var routes = require('./controllers/news.js');
app.use('/',routes);

//404 Error deploy
app.use(function(req, res) {
	res.render('404');
});

//listen to the Port
app.listen(port, function() {
    console.log("Listening on port #:" + port);
});

 
