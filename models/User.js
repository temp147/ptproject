/**
 * Created by root on 5/28/15.
 */
/**
 * Created by root on 5/21/15.
 */
// in models/User.js
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        personinfo: DataTypes.STRING
    }, {
        instanceMethods: {
            countTasks: function() {
                // how to implement this method ?
            }
        },
        classMethods:{
            classTasks: function(){
            },
            associate: function(models) {
                User.hasMany(models.Task)
            }
        }
    });
    return User;
};