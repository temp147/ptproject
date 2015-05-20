/**
 * Created by root on 2/20/15.
 */


var mysql = require('mysql');
var async = require('async');
var config = require('../lib/config');

//create mysql connection pool
var mysqlpool =  mysql.createPool({
    host:   config.mysqlhost,
    user:   config.mysqluser,
    password:   config.mysqlpassword,
    database:   config.mysqldbname,
    port:  config.mysqlport
});

function personinfo(){
}




personinfo.prototype.getauthinfo= function (mobile,cb) {
    var query1 ="select a.personid,a.lastname,a.firstname,a.password,b.role,b.empassignmentid from sys_personbasicinfo a " +
        "inner join pa_custemployee b " +
        "on a.personid=b.personid " +
        "where a.phonenum=?;";
    mysqlpool.getConnection(function(err,conn){
        if(err){
            //console.log(err);
            cb(err,null);
        }
        else{
            conn.query(query1,[mobile],function(err,rows){
                if(err){
                    //console.log(err);
                    cb(err,null);
                }
                conn.release();
                cb(null,rows);
            })
        }
    })
};

module.exports = new personinfo();