var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var chalk = require('chalk');

var db = require('./models/db.js');
//var routes = require('./routes/routes.js');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(session({ secret: "secret", resave: true, saveUninitialized: false }));

app.use('/', routes.login);

app.listen(3000, (req, res) => {
    console.log('server started at port ' + port);
});