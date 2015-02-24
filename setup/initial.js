/**
 * Created by root on 2/17/15.
 * initail DB file for the project
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


//create table script

var createTablesys_personbasicinfo = "Create table if not exists sys_personbasicinfo("+
    "personid INT(10) not NULL AUTO_INCREMENT,"+
    "lastname varchar(16),"+
    "firstname varchar(16),"+
    "pername varchar(64),"+
    "phonenum varchar(16)," +
    "password varchar(128)," +
    "createtime datetime," +
    "creator varchar(40)," +
    "modifytime datetime," +
    "modifier varchar(40),"+
    "PRIMARY KEY(personid))";

var createTablepa_custemployee = "Create table if not exists pa_custemployee("+
    "empassignmentid INT(10) not NULL AUTO_INCREMENT," +
    "startdate date," +
    "enddate date," +
    "lastname varchar(16)," +
    "firstname varchar(16)," +
    "empname varchar(64)," +
    "personid int," +
    "role smallint," +
    "createtime datetime," +
    "creator varchar(40)," +
    "modifytime  datetime," +
    "modifier varchar(40)," +
    "primary key (empassignmentid))";


var sql1 ="insert into sys_personbasicinfo " +
    "(lastname,firstname,pername,phonenum,password,createtime,creator,modifytime,modifier)" +
    "values('John','Deo','Deo John','13512345678','foobar','2015-02-01','system','2015-02-01','system');" ;
var sql2 =  "insert into pa_custemployee" +
    "(startdate,enddate,lastname,firstname,personid,role,createtime,creator,modifytime,modifier)" +
    "values('2015-02-01','2099-12-31','John','Deo',1,1,'2015-02-01','system','2015-02-01','system');";

//execute the create table script
mysqlpool.getConnection(function(err,conn){
    // connect error
    if(err){
        //log error
        console.log("mysqlpool==>"+err);
        return;
    }
    //begin transaction
    conn.query('BEGIN',function(err,rows){
        if(err){
            //log error
            console.log(err);
            conn.release();
            return;
        }
        async.series([
                function(cb){
                    conn.query(createTablesys_personbasicinfo,cb)
                },
                function(cb){
                    conn.query(createTablepa_custemployee,cb)
                },
                function(cb){
                    conn.query(sql1,cb)
                },
                function(cb){
                    conn.query(sql2,cb)
                }
            ],
            function (err) {
                var sql;
                if(err){
                    sql ='ROLLBACK';
                    //log error
                    console.log(err);
                }
                else{
                    sql ='COMMIT';
                }
                conn.query(sql,conn.release());
            }
        );
    });
});
