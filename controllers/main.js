const path = require('path');
var Person = require('../models/SampleModel');
const okta = require('@okta/okta-sdk-nodejs');
require('dotenv').config({slient: true});

const client = new okta.Client({
    orgUrl: process.env.OKTA_ORG_URL,
    token: process.env.OKTA_TOKEN
});

const fields = [
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {name: 'email', label: 'Email', type: 'email'},
    {name: 'password', label: 'Password', type: 'password'}
];



module.exports.main = function (request, result) {
    result.render("index");
    // console.log("Inside homepage");
    // console.log(`What is request: ${request}`);
    // console.log(`What is request: ${request.userContext}`);
    // console.log(`What is request: ${request.userContext}`);
    //
    // if(request.userContext){
    //     console.log("Successfully logged in");
    //     result.send("WELCOME");
    //     next();
    //     // result.render('first_view', {
    //     //     user: {name: "Andy", age: "20"}
    //     // });
    // }
    // else{
    //     console.log("Go register");
    //     result.render('register', {fields});
    // }

    // result.sendFile(path.resolve(__dirname,'../../public', 'index.html'));
}

module.exports.hello = function (request, result){
    result.send("Logged in");
}
module.exports.get_form = function (request, result) {
    result.render('form');
}

module.exports.post_form = function (request, result) {
    result.send("Understood");
}

module.exports.person = function(request, result){
    console.log("Get person");
    result.render('person');
};

module.exports.insert_person = function(request, result){
    var personInfo = request.body;
    console.log(personInfo);

    var newPerson = new Person({
        name: personInfo.name,
        age: personInfo.age,
        nationality: personInfo.nationality
    });

    newPerson.save(function (err) {
        if(err) return handleError(err);
        console.log("Saved succesfully");

        result.send('SAVED!');
    });

};