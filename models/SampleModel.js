var mongoose = require('mongoose')
var mongo = require('mongodb');
var assert = require('assert');
var settings = require('../settings');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbUser:hahaha123@cluster0-rc4di.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

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