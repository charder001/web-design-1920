// Require third-party modules
const express = require('express');
const request = require('request');
const fetch = require("node-fetch");

//config port for heroku and local use
const port = process.env.PORT || 3000

// Create new express app in 'app'
const app = express();
// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('public'));

// Create a home route
app.get('/', function(req, res) {
	  res.render("landing.ejs")
});

app.get('/home', function(req, res) {
	res.render("home.ejs")
});

app.get('/done', function(req, res) {
	res.render("done.ejs")
});

// Set up server
app.listen(port, function() {
	console.log(`Application started on port: ${port}`);
});