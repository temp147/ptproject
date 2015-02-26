/**
 * Created by root on 2/19/15.
 */

var jwt = require('jsonwebtoken');  //https://npmjs.org/package/node-jsonwebtoken
var config = require('../lib/config.js');
var secret = config.jwtsecret;
var personinfo= require('../model/personinfo.js');
var assert = require('assert');

//TODO: set the auth use redis
exports.auth = function(req,res,next){
    //check if the username is valid(empty or the length is  longer than 11) or the password is too long
    assert.ok(req.body.username.length<12&&req.body.password.length<129&&req.body.username.length>0,'username or password is invalid.');
    //assert.equal(typeof(req.body.username),'number','username should be a number');

    //get the user information
    personinfo.getauthinfo(req.body.username,function(err,rows){
        if(err)  {
            //res.status(501).send('{msg:some error have happened}');
            err.status=500;
            err.message="some error has happened.";
            next(err);
          //throw err;
        }

//rows   a.personid,a.lastname,a.firstname,a.password,b.role,b.empassignmentid

        //reture 401 if the username is wrong
        if(!rows[0]){
            res.status(401).send('{message:Wrong user or password!}');
            return;
        }

        //reture 401 if the password is wrong
        if(!(req.body.password==rows[0].password)){
            res.status(401).send('{message:Wrong user or password!}');
            return;
        }

        var profile ={
            first_name:rows[0].firstname,
            last_name: rows[0].lastname,
            userrole: rows[0].role,
            perid: rows[0].personid,
            eid: rows[0].empassignmentid
        };

        //sign token
        var token = jwt.sign(profile,secret,{expireInMinutes:60*5});
        res.json({token:token});
    })
};

