var mongoose = require('mongoose')
var mongo = require('mongodb');
var assert = require('assert');
var settings = require('../settings');


mongoose.connect(settings.development.db.url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;