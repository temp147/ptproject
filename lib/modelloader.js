/**
 * Created by root on 5/20/15.
 */
var Sequelize = require("sequelize");
var config = require("./config.js");
var sequelize = new Sequelize(config.mysqldbname, config.mysqluser, config.mysqlpassword,
    { dialect: config.dialect, host: config.mysqlhost, port: config.mysqlport,
        omitNull: true, logging: false });
var Brand = require("./../models/cuser.js").Brand;