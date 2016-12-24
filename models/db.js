var chalk = require('chalk');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var SALT_WORK_FACTOR = 10;
// var dbURI = "mongodb://root:manager@ds139288.mlab.com:39288/ecommerceapp";
var dbURI = 'mongodb://127.0.0.1/ecommerceapp';
var db = mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log(chalk.red('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error', function(err) {
    console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function() {
    console.log(chalk.red('Mongoose disconnected'));
});

var userSchema = new mongoose.Schema({
    user_id: { type: String, unique: true },
    email_id: { type: String, unique: true },
    password: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    gender: String,
    addressline1: String,
    addressline2: String,
    address_city: String,
    address_state: String,
    postal_code: String,
    date_of_birth: { type: Date },
    password_hint_question: String,
    password_hint_answer: String
}, { collection: 'bcryptusers' });