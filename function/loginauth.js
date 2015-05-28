/**
 * Created by root on 5/21/15.
});
 */

var models  = require('../models');

var User = models.User;



exports.getuser = function(req,res,next) {
    User.findAll({
    }).then(function(user){
        console.log(user);
        res.json(user);
    })
};
