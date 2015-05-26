/**
 * Created by root on 5/21/15.


var User = app.get('models').user;


User.sync({force: true}).then(function () {
    // Table created
    return User.create({
        first_name: 'John',
        last_name: 'Hancock'
    });
});
 */

var express = require('express');
var app = express();
console.log()

var User = app.get('models').user;

var user = User.findAll({

});

res.json(user);