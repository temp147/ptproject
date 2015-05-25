/**
 * Created by root on 2/19/15.
 * route file for the app
 */

var authenticate = require('./function/authenticate');
var loginauth = require('./function/loginauth');

var mustBe = require("mustbe").routeHelpers();

//handle the http options method,response 204
function option (req,res){
    res.status(204);
    res.send('end');
}

module.exports = function(app){

    // authenticate restful api,
    app.options('/login/',option);
    app.post('/login/',authenticate.auth);


    app.get('/app/restricted/:id',mustBe.authorized("admin.view",function (req,res){
            console.log('user ' + req.user.first_name+' '+req.user.last_name+'is calling /app/restricted');
            res.json({
                name:req.user.first_name+' ' +req.user.last_name
            });
        })
    );
    //todo test using sequelize to get info
    app.get('/user/:id',loginauth.getuser);
};