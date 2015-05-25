/**
 * Created by root on 5/21/15.

app = require('./../app.js');

var User = app.get('models').user;


User.sync({force: true}).then(function () {
    // Table created
    return User.create({
        first_name: 'John',
        last_name: 'Hancock'
    });
});
 */

var User = app.get('models').user;

User.findAll();