/**
 * Created by root on 6/3/15.
 */

var models = require('../models/index');


var cuser = function(){
    var Personid,
        Lastname,
        Firstname,
        Pername,
        Phonenum,
        QQnum,
        Emailaddress,
        Password;
};

cuser.prototype.getbasicinfobyid = function(personid,phonenum,cb){

};

cuser.prototype.setbasicinfobyid = function(personid,phonenumm,info,cb){

};

cuser.prototype.getauthinfo = function(phonenum,password,cb){

};

cuser.prototype.setpassword = function(personid,phonenum,cb){

};

cuser.prototype.binddevice = function(personid,phonenum,cb){

};

cuser.prototype.setcontactinfobyid = function(personid,phonenum,cb){

};

cuser.prototype.getcontactinfobyid = function(personid,phonenum,info,cb){

};


module.exports = cuser;