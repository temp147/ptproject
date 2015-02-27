/**
 * Created by root on 2/27/15.
 */

var mysql = require('mysql');
var async = require('async');
var config = require('../lib/config');
var fs= require('fs');
var path =require('path');

var sqlfile= path.join(process.cwd(),'/data.sql');

//create mysql connection pool
var mysqlpool =  mysql.createPool({
    host:   config.mysqlhost,
    user:   config.mysqluser,
    password:   config.mysqlpassword,
    database:   config.mysqldbname,
    port:  config.mysqlport
});

function loadsqlfile(file,cb){
    fs.exists(file,function(exits){
        var sqlquery=[];
        if(exits){
            fs.readFile(file,'utf8',function(err,data){
                if(err) cb(err,null);
                sqlquery=data.toString().split(";");
                cb(null,sqlquery)
            })
        }else{
            cb('sqlfile not exits',null);
        }
    })
}

loadsqlfile(sqlfile,function(err,sqlquery){
    if(err){
        console.log(err);
        return;
    }
    //console.log(sqlquery[0]);

    mysqlpool.getConnection(function(err,conn){
        if(err){
            console.log(err);
            //cb(err,null);
        }
        else{
            sqlquery.forEach(function(query){if(query)
                conn.query(query,function(err,rows){
                    if(err){
                        console.log(err);
                    }
                    conn.release();
                })
            })
        }
    })
});
