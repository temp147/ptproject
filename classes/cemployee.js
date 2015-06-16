/**
 * Created by root on 6/10/15.
 */

var models = require('../models/index');
var Cuser = require('./cuser');
var pa_custemployee = models.pa_custemployee;
var pa_custemplink = models.pa_custemplink;


function Cemployee(){

};

//inherit from the Cuser
Cemployee.prototype= new Cuser();

Cemployee.prototypegetempinfobyid = function(personid,phonenum,cb){

};
Cemployee.prototype.setempinfobyid = function(personid,phonenum,info,cb){

};

Cemployee.prototype.getemplinkbyid = function(personid,phonenum,cb){

};
Cemployee.prototype.setemplinkbyid = function(personid,phonenum,info,cb){

};
Cemployee.prototype.useemplinkbyid = function(personid,phonenum,info,cb){

};


module.exports = Cemployee;
