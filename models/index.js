/**
 * Created by root on 5/20/15.
 */
var Sequelize = require("sequelize");
var config = require("./../lib/config.js");
var sequelize = new Sequelize(config.mysqldbname, config.mysqluser, config.mysqlpassword,
    { dialect: config.dialect, host: config.mysqlhost, port: config.mysqlport,
        omitNull: true, logging: false });

/*
var Brand =require("./cuser.js");

var brand =Brand(sequelize,Sequelize);

brand.sync({force: true}).then(function () {
    // Table created
    return brand.create({
        name: 'John',
        description: 'Hancock',
        status:1
    });
});
*/
// load models
var models = [
//    'PhoneNumber',
//    'Task',
    'user'
];
models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});


// describe relationships
/*
(function(m) {
    m.PhoneNumber.belongsTo(m.User);
    m.Task.belongsTo(m.User);
    m.User.hasMany(m.Task);
    m.User.hasMany(m.PhoneNumber);
})(module.exports);
*/

