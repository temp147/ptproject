/**
 * Created by root on 6/3/15.
 */

var models = require('../models/index');

var cuser={

    getbasicinfobyid : function(personid,phonenum,cb){

    },
    setbasicinfobyid : function(personid,phonenum,info,cb){

    },

    getauthinfo : function(phonenum,password,cb){
        cb('success',null)
    },

    setpassword : function(phonenum,password,cb){

    },

    binddevice : function(personid,phonenum,cb){

    },

    setcontactinfobyid : function(personid,phonenum,cb){

    },

    getcontactinfobyid : function(personid,phonenum,info,cb){

    }
};

module.exports = cuser;


//
//function cuser() {
//}
//
//cuser.prototype = {
//
//    getbasicinfobyid : function(personid,phonenum,cb){
//
//    },
//    setbasicinfobyid : function(personid,phonenum,info,cb){
//
//    },
//
//    getauthinfo : function(phonenum,password,cb){
//        cb('success',null)
//    },
//
//    setpassword : function(phonenum,password,cb){
//
//    },
//
//    binddevice : function(personid,phonenum,cb){
//
//    },
//
//    setcontactinfobyid : function(personid,phonenum,cb){
//
//    },
//
//    getcontactinfobyid : function(personid,phonenum,info,cb){
//
//    }
//};
//
//
