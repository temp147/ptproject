/**
 * Created by root on 5/21/15.
 */
// in models/User.js
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING
    }, {
        instanceMethods: {
            countTasks: function() {
                // how to implement this method ?
            }
        }
    });
};