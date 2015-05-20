/**
 * Created by root on 1/8/15.
 * config file for application
 */

var mysqlhost = '127.0.0.1', //mysqldb server host
    mysqluser = 'root',     //mysqlldb server user account
    mysqlpassword = 'zaq1xsw@', //mysqldb server user password
    mysqldbname ='test',        //mysqldb dbname
    mysqlport = '3306',         //mysqldb port
    jwtsecret = 'this is the secret secret secret 12356',  //secret string use for JSON WEB Token
    crossdomain = '*',      //Restful api CrossDomain setting, show not set '*'
    env = 'development', // set the runtime environment(development,runtime)
    dialect='mariadb'; //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'

var config ={
    mysqlhost:  mysqlhost,
    mysqluser:  mysqluser,
    mysqlpassword:  mysqlpassword,
    mysqldbname:    mysqldbname,
    mysqlport:  mysqlport,
    jwtsecret:  jwtsecret,
    crossdomain: crossdomain,
    env :   env,
    dialect:    dialect
};

module.exports =config;



